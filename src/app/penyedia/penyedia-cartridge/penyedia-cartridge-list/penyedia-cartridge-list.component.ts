import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoadingServiceService } from '../../../services/loading/loading-service.service';
import { ShowMessageService } from '../../../services/message/show-message.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ResponseTemplate } from '../../../model/response-template.model';
import { CartridgeServiceListService } from '../../../services/penyedia/cartridge/cartridge-service-list.service';

@Component({
  selector: 'app-penyedia-cartridge-list',
  templateUrl: './penyedia-cartridge-list.component.html',
  styleUrl: './penyedia-cartridge-list.component.css'
})
export class PenyediaCartridgeListComponent implements OnInit{

  currentItemsToShow: any = [];
  items: any = [];  
  cartridgeAddForm: any = [];
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
    private service: CartridgeServiceListService,
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
    this.getListCartridge(this.tableOptions.start, this.tableOptions.length, this.tableOptions.search);
    this.loadDataDistributor();

  }

  // Create New Distributor
  fromNewRecord(): void {
    this.cartridgeAddForm = this.formBuilder.group({
      npwpDistributorAdd: [null, Validators.required],
      typeAdd: [null, Validators.required],
    })
  }

  // get List Cartridge
  getListCartridge(start: number, length: number, search: string): void{
    this.service.getListCartridge(start, length, search).subscribe({
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

  // search Cartridge
  onChangeCartridge(event: Event){
    const data = (event.target as HTMLInputElement).value;
    if(data != null || data != undefined){
      this.tableOptions.search = data;
      this.getListCartridge(this.tableOptions.start, this.tableOptions.length, data);
    }else{
      this.getListCartridge(this.tableOptions.start, this.tableOptions.length, this.tableOptions.search);
    }      
  }

  // Open Modal 
  openModalCartridgeAdd(){
    const modalDiv = document.getElementById("modal_cartridge_add");
    if(modalDiv != null){
        modalDiv.style.display = "block";
    }
  }

  // Close Modal 
  closeModalCartridgeAdd(){
    const modalDiv = document.getElementById("modal_cartridge_add");
    if(modalDiv != null){
        this.cartridgeAddForm.reset();
        modalDiv.style.display = "none";
    }
  }

  // Submit new Cartridge
  submitCartridge(){
    //const request = JSON.stringify(this.printerAddForm.value);
    // console.log(request);

    let request = {
      "npwpDistributor": this.cartridgeAddForm.value.npwpDistributorAdd,
      "type": this.cartridgeAddForm.value.typeAdd
    }

    this.service.addCartridge(request).subscribe({
      next: (data) => {
        const response = <ResponseTemplate> data;
        if(response.status == 1){
          this.messageService.success(response.message);
        } else {
          this.messageService.error(response.message);
        }
        this.cartridgeAddForm.reset();
      },
      error: (err) => {
        this.cartridgeAddForm.reset();
        this.messageService.error(err.message);
      }
    });
  }

  // Update Status Printer
  updateStatus(item: any, status: any){
    this.service.updateStatusCartridge(item.idCartridge, status.value).subscribe({
      next: (data) => {
        const response = <ResponseTemplate> data;
        if(response.status == 1){
          this.messageService.success(response.message);
        } else {
          this.messageService.error(response.message);
        }
        this.getListCartridge(this.tableOptions.start, this.tableOptions.length, this.tableOptions.search);
        
      }, error: (err) => {
        this.messageService.error(err.message);
      }
    });
  }

  // Load Data NPWP Distributor
  loadDataDistributor(){
    this.service.getListDataDistributor().subscribe({      
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
    this.getListCartridge(this.tableOptions.start, this.tableOptions.length, this.tableOptions.search);
  }

}
