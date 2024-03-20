import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingServiceService } from '../../../services/loading/loading-service.service';
import { PDFDocumentProxy } from 'ng2-pdf-viewer';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'jquery';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-penyedia-aplikasi-pdf-preview',
  templateUrl: './penyedia-aplikasi-pdf-preview.component.html',
  styleUrl: './penyedia-aplikasi-pdf-preview.component.css'
})
export class PenyediaAplikasiPdfPreviewComponent implements OnInit {
  

  url: string = 'http://36.94.117.75:8080'
  pdfSrc: string = '';
  data: any;
  constructor(
    private router: Router,
    public loadingService: LoadingServiceService,
    private http: HttpClient
  ){
    const navigation = this.router.getCurrentNavigation();
    if(navigation && navigation.extras && navigation.extras.state){
      this.data = navigation.extras.state['data'];
      let path = '/register/pdf/download/';
      this.pdfSrc = this.url + path + this.data.idDistributor;
    }
  }

  ngOnInit(): void {
  }

  // Loading screen during load the pdf docs
  onProgress($event: any): void {
    this.loadingService.isLoading.next(true);
  }

  // Remove loading screen during load the pdf docs
  loadComplete(pdf: PDFDocumentProxy): void {
    this.loadingService.isLoading.next(false);
  }

  // Click the button print to download pdf
  downloadFile() {
    console.log("download file")
    const httpOptions: any = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      }),
      responseType: 'blob',
    }
    return this.download().subscribe(blob => {
      const a = document.createElement('a');
      const objectUrl = URL.createObjectURL(blob);
      a.href = objectUrl;
      a.download = this.data.namaDistributor + ".pdf";
      a.click();
      URL.revokeObjectURL(objectUrl);
    })
  }

  // download pdf by hitting API /register/pdf/download
  download(): Observable<Blob>{
    return this.http.get(this.pdfSrc, {
      responseType: 'blob'
    })
  }

}
