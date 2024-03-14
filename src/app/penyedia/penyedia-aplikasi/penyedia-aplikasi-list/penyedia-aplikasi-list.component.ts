import { Component, Input, ViewChild } from '@angular/core';
import { PenyediaAplikasiService } from '../../../services/penyedia/penyedia-aplikasi.service';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { ProgressSpinnerMode, MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoadingServiceService } from '../../../services/loading/loading-service.service';

@Component({
  selector: 'app-penyedia-aplikasi-list',
  templateUrl: './penyedia-aplikasi-list.component.html',
  styleUrl: './penyedia-aplikasi-list.component.css'
})
export class PenyediaAplikasiListComponent {

  @Input('master') master = '';


  message: string = "";

  allPenyediaAplikasi: any = {};
  items: any = [];
  displayedColumns: string[] = ['namaDistributor', 'npwpDistributor', 'kodeDistributor', 'alamat'];
  dataSource: any = [];

  currentItemsToShow: any = [];

  constructor(
    private service: PenyediaAplikasiService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    public loadingService: LoadingServiceService

    ){
      console.log('penyedia aplikasi constructor')
  }

 

  ngOnInit(): void {
    this.getDistributor();
  }

  ngOnDestroy(): void {
  }

  // Create
  getDistributor(): void{
    this.service.getDistributor().subscribe({
      next: (data) => {
        this.allPenyediaAplikasi = data;
        
        this.items = this.allPenyediaAplikasi.data.data;
        this.dataSource = new MatTableDataSource(this.items);
        this.currentItemsToShow = this.items;
      },
      error: (err) => {
        this.message = err.message;
        console.log(err)
      } 
    });
  }


  // Create
  buttonEdit(item: any): void {
    console.log(item)
    this.router.navigate(['penyedia/penyedia-aplikasi/details'], { state: { data: item } })
  }

  // Pagination
  onPageChange($event: any){
    this.currentItemsToShow = this.items.slice($event.pageIndex*$event.pageSize, $event.pageIndex*$event.pageSize + $event.pageSize);
  }

}
