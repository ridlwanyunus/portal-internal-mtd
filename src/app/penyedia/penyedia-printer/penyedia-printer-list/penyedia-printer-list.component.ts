import { Component, OnInit } from '@angular/core';
import { PrinterServiceListService } from '../../../services/penyedia/printer/printer-service-list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoadingServiceService } from '../../../services/loading/loading-service.service';
import { ShowMessageService } from '../../../services/message/show-message.service';
import { ResponseTemplate } from '../../../model/response-template.model';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-penyedia-printer-list',
  templateUrl: './penyedia-printer-list.component.html',
  styleUrl: './penyedia-printer-list.component.css'
})
export class PenyediaPrinterListComponent implements OnInit{

  currentItemsToShow: any = [];
  items: any = [];  
  printerAddForm: any = [];
  dataDistributors: any = [];
  pageSize: number = 10;
  recordsTotal: number = 0;

  listStatus: any = [
    {value: 0, name: 'Belum Disetujui', icon:"fa fa-envelope"},
    {value: 1, name: 'Setujui', icon:"fa fa-check"},
    {value: 2, name: 'Tolak', icon:"fa fa-times"},
    {value: 3, name: 'Non Aktifkan', icon:"fa fa-trash-alt"},
  ];

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
    public messageService: ShowMessageService,
    private formBuilder: FormBuilder,

  ){
      console.log('penyedia printer constructor')

      this.fromNewRecord();
  }

  ngOnInit(): void {
    // KTToastrDemo.success(message);
    // KTToastrDemo.error(message);
    this.getListPrinter(this.tableOptions.start, this.tableOptions.length, this.tableOptions.search);
    this.loadDataDistributor();

  }

  // Create New Distributor
  fromNewRecord(): void {
    this.printerAddForm = this.formBuilder.group({
      npwpDistributorAdd: [null, Validators.required],
      brandAdd: [null, Validators.required],
      typeAdd: [null, Validators.required],
    })
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

  // Open Modal 
  openModalPrinterAdd(){
    const modalDiv = document.getElementById("modal_printer_add");
    if(modalDiv != null){
        modalDiv.style.display = "block";
    }
  }

  // Close Modal 
  closeModalPrinterAdd(){
    const modalDiv = document.getElementById("modal_printer_add");
    if(modalDiv != null){
        this.printerAddForm.reset();
        modalDiv.style.display = "none";
    }
  }

  // Submit new printer
  submitPrinter(){
    //const request = JSON.stringify(this.printerAddForm.value);
    // console.log(request);

    let request = {
      "brand": this.printerAddForm.value.brandAdd,
      "npwpDistributor": this.printerAddForm.value.npwpDistributorAdd,
      "type": this.printerAddForm.value.typeAdd
    }

    this.service.addPrinter(request).subscribe({
      next: (data) => {
        const response = <ResponseTemplate> data;
        if(response.status == 1){
          this.messageService.success(response.message);
        } else {
          this.messageService.error(response.message);
        }
        this.printerAddForm.reset();
      },
      error: (err) => {
        this.printerAddForm.reset();
        this.messageService.error(err.message);
      }
    });
  }

  // Update Status Printer
  updateStatus(item: any, status: any){
    this.service.updateStatusPrinter(item.idPrinter, status.value).subscribe({
      next: (data) => {
        const response = <ResponseTemplate> data;
        if(response.status == 1){
          this.messageService.success(response.message);
        } else {
          this.messageService.error(response.message);
        }
        this.getListPrinter(this.tableOptions.start, this.tableOptions.length, this.tableOptions.search);
        
      }, error: (err) => {
        this.messageService.error(err.message);
      }
    });
  }

  // Load Data NPWP Distributor
  loadDataDistributor(){
    this.service.getListDataDitributor().subscribe({      
      next: (data) => {
        const response = <ResponseTemplate> data;
        if(response.status == 1){
          for (let dt in response.data) { 

            const listDistributor: any ={
              id: String,
              name: String,
            }

            listDistributor.id = dt;
            listDistributor.name = response.data[dt];

            this.dataDistributors.push(listDistributor);
          }      
          
          console.log(this.dataDistributors)

        //this.dataDistributors = Object.entries(response.data).map(([k,v]) => (console.log(k,v)));
        } else {
          this.messageService.error(response.message);
        }
      },
      error: (err) => {
        this.messageService.error(err.message);
      }
    });
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
