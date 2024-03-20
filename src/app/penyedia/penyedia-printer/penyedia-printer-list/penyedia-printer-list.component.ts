import { Component, OnInit } from '@angular/core';
import { PrinterServiceListService } from '../../../services/penyedia/printer/printer-service-list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoadingServiceService } from '../../../services/loading/loading-service.service';
import { ShowMessageService } from '../../../services/message/show-message.service';
import { ResponseTemplate } from '../../../model/response-template.model';

@Component({
  selector: 'app-penyedia-printer-list',
  templateUrl: './penyedia-printer-list.component.html',
  styleUrl: './penyedia-printer-list.component.css'
})
export class PenyediaPrinterListComponent implements OnInit{

  currentItemsToShow: any = [];
  allListPrinter: any = {};
  items: any = [];  
  printerAddForm: any = [];
  pageSize: number = 10;
  recordsTotal: number = 0;

  tableOptions: any = {
    start: 0,
    length: this.pageSize,
    search: ""
  }
  

  constructor(
    private service: PrinterServiceListService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    public loadingService: LoadingServiceService,
    public messageService: ShowMessageService

    ){
      console.log('penyedia aplikasi constructor')
  }

  ngOnInit(): void {
    // KTToastrDemo.success(message);
    // KTToastrDemo.error(message);
    this.getListPrinter(this.tableOptions.start, this.tableOptions.length, this.tableOptions.search);

  }

  // get List Printer
  getListPrinter(start: number, length: number, search: string): void{
    this.service.getListPrinter(start, length, search).subscribe({
      next: (data) => {
        const response = <ResponseTemplate> data;
        if(response.status === 1){
          this.items = response.data.data;
          this.currentItemsToShow = this.items;
          this.recordsTotal = response.data.recordsTotal;
        }else{
          this.items = null;
          this.currentItemsToShow = null;
        }
      },
      error: (err) => {
        this.messageService.error(err.message);
      } 
    });
  }

  // search printer
  onChangePrinter(event: Event){
    const data = (event.target as HTMLInputElement).value;
    if(data != null || data != undefined){
      this.tableOptions.search = data;
      this.getListPrinter(this.tableOptions.start, this.tableOptions.length, data);
    }else{
      this.getListPrinter(this.tableOptions.start, this.tableOptions.length, this.tableOptions.search);
    }      
  }

  openModalPrinterAdd(){
    const modalDiv = document.getElementById("modal_printer_add");
    if(modalDiv != null){
        modalDiv.style.display = "block";
    }
  }

  closeModalPrinterAdd(){
    const modalDiv = document.getElementById("modal_printer_add");
    if(modalDiv != null){
        modalDiv.style.display = "none";
    }
  }

  submitPrinter(){
    console.log("masuk");
    const jsondata = JSON.stringify(this.printerAddForm.value);
    console.log(jsondata);
  }

  onClick(): void {
    console.log("masuk 1");
    const jsondata = JSON.stringify(this.printerAddForm.value);
    console.log($('#npwpDistributorAdd').val);
  }

  // Pagination
  onPageChange($event: any){
    this.tableOptions.start = $event.pageIndex*$event.pageSize;
    let sisa = this.recordsTotal - this.tableOptions.start;
    if(sisa > $event.pageSize){
      // Jika sisa record lebih dari pageSize maka ambil pageSize
      this.tableOptions.length = $event.pageSize;
    } else {
      // Jika sisa record kurang dari pageSize maka ambil sisa
      this.tableOptions.length = this.recordsTotal - this.tableOptions.start;
    }
    this.getListPrinter(this.tableOptions.start, this.tableOptions.length, this.tableOptions.search);
  }

}
