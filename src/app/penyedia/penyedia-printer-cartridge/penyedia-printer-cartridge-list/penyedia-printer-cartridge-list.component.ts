import { Component, OnInit } from '@angular/core';
import { PrinterCartridgeVerifyServiceService } from '../../../services/penyedia/printer-cartridge-verify/printer-cartridge-verify-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingServiceService } from '../../../services/loading/loading-service.service';
import { ShowMessageService } from '../../../services/message/show-message.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ResponseTemplate } from '../../../model/response-template.model';

@Component({
  selector: 'app-penyedia-printer-cartridge-list',
  templateUrl: './penyedia-printer-cartridge-list.component.html',
  styleUrl: './penyedia-printer-cartridge-list.component.css'
})
export class PenyediaPrinterCartridgeListComponent implements OnInit{

  currentItemsToShow: any = [];
  items: any = [];  
  printerCartridgeAddForm: any = [];
  approvedForm: any = [];
  dataDistributors: any = [];
  dataPrinters: any = [];
  dataCartridges:any = [];
  pageSize: number = 10;
  recordsTotal: number = 0;
  isValid: any = true;
  idPrinterCartridge: string = "";

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
    private service: PrinterCartridgeVerifyServiceService,
    private router: Router,
    private route: ActivatedRoute,
    public loadingService: LoadingServiceService,
    public messageService: ShowMessageService,
    private formBuilder: FormBuilder,

  ){
      console.log('penyedia printer cartridge verify constructor')

      this.fromNewRecord();
      this.fromApprovedRecord();
  }

  ngOnInit(): void {
    // KTToastrDemo.success(message);
    // KTToastrDemo.error(message);
    this.getListPrinterCartridge(this.tableOptions.start, this.tableOptions.length, this.tableOptions.search);
    this.loadDataDistributor();

  }

  // Create New Printer Cartridge Verify
  fromNewRecord(): void {
    this.printerCartridgeAddForm = this.formBuilder.group({
      npwpDistributorAdd: [null, Validators.required],
      printerAdd: [null, Validators.required],
      cartrdigeAdd: [null, Validators.required],
    })
  }

  // Create Approve
  fromApprovedRecord(): void {
    this.approvedForm = this.formBuilder.group({
      idPrinterAdd: [, Validators.required],
      statusAdd: [, Validators.required],
      noSertifikasiAdd: [null, Validators.required],
      keteranganAdd: [null, Validators.required],
    })
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

  // Load Data Printer
  loadDataPrinter(npwp: string){
    this.service.getListDataPrinterActive(npwp).subscribe({      
      next: (data) => {
        const response = <ResponseTemplate> data;
        if(response.status == 1){
          for (let dt in response.data) { 

            const listPrinter: any ={
              id: String,
              name: String,
            }

            listPrinter.id = dt;
            listPrinter.name = response.data[dt];

            this.dataPrinters.push(listPrinter);
          }  
        } else {
          this.messageService.error(response.message);
        }
      },
      error: (err) => {
        this.messageService.error(err.message);
      }
    });
  }

  // Load Data Cartridge
  loadDataCartridge(npwp: string){
    this.service.getListDataCartridgeActive(npwp).subscribe({      
      next: (data) => {
        const response = <ResponseTemplate> data;
        if(response.status == 1){
          for (let dt in response.data) { 

            const listCartridge: any ={
              id: String,
              name: String,
            }

            listCartridge.id = dt;
            listCartridge.name = response.data[dt];

            this.dataCartridges.push(listCartridge);
          }  
        } else {
          this.messageService.error(response.message);
        }
      },
      error: (err) => {
        this.messageService.error(err.message);
      }
    });
  }

  // get List Printer 
  getListPrinterCartridge(start: number, length: number, search: string): void{
    this.service.getListPrinterCartridge(start, length, search).subscribe({
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

  // search printer cartridge
  onChangePrinterCatridge(event: Event){
    const data = (event.target as HTMLInputElement).value;
    if(data != null || data != undefined){
      this.tableOptions.search = data;
      this.getListPrinterCartridge(this.tableOptions.start, this.tableOptions.length, data);
    }else{
      this.getListPrinterCartridge(this.tableOptions.start, this.tableOptions.length, this.tableOptions.search);
    }      
  }

  // change status
  onChangeStatus(event: Event){
    const data = (event.target as HTMLInputElement).value;
    if(data != null || data != undefined){
      if(data === "1"){        
        // const p = document.getElementById('show-sertifikasi');
        // p?.removeAttribute("hidden");
        this.isValid = false;
      }else{
        this.isValid = true;
      }
    }else{
      this.isValid = true;
    }      
  }

  // change NPWP
  onChangeNpwp(){
    //const data = (event.target as HTMLInputElement).value;
    let data = this.printerCartridgeAddForm.value.npwpDistributorAdd;
    if(data != null || data != undefined){
      console.log("data "+data)
      this.loadDataPrinter(data);
      this.loadDataCartridge(data);
    }else{
      console.log("no data")
    }      
  }

  // Open Modal 
  openModalPrinterCatridgeAdd(){
    const modalDiv = document.getElementById("modal_printer_cartridge_add");
    if(modalDiv != null){
        modalDiv.style.display = "block";
    }
  }

  // Close Modal 
  closeModalPrinterCatridgeAdd(){
    const modalDiv = document.getElementById("modal_printer_cartridge_add");
    if(modalDiv != null){
        this.printerCartridgeAddForm.reset();
        modalDiv.style.display = "none";
    }
  }

  // Open Modal Approve
  openModalApproveAdd(item: any){
    const modalDiv = document.getElementById("modal_approval");
    if(modalDiv != null){
        modalDiv.style.display = "block";
        this.idPrinterCartridge = item.idPrinterCartridge;
    }
  }

  // Close Modal Approve
  closeModalApproveAdd(){
    const modalDiv = document.getElementById("modal_approval");
    if(modalDiv != null){
        this.isValid = true;
        this.approvedForm.reset();
        modalDiv.style.display = "none";
        this.idPrinterCartridge = "";
    }
  }  

  // Submit new printer Cartridge
  submitCartridge(){
    let request = {
      "idCartridge": this.printerCartridgeAddForm.value.cartrdigeAdd,
      "idPrinter": this.printerCartridgeAddForm.value.printerAdd,
    }

    this.service.addPrinterCartridge(request).subscribe({
      next: (data) => {
        const response = <ResponseTemplate> data;
        if(response.status == 1){
          this.messageService.success(response.message);
        } else {
          this.messageService.error(response.message);
        }
        this.printerCartridgeAddForm.reset();
        this.getListPrinterCartridge(this.tableOptions.start, this.tableOptions.length, this.tableOptions.search);
      },
      error: (err) => {
        this.printerCartridgeAddForm.reset();
        this.messageService.error(err.message);
      }
    });
  }

  // Submit Approved
  submitApproved(){
    const request = JSON.stringify(this.approvedForm.value);
    this.service.updateStatusPrinterCartridge(this.idPrinterCartridge, this.approvedForm.value.noSertifikasiAdd, this.approvedForm.value.statusAdd, this.approvedForm.value.keteranganAdd).subscribe({
      next: (data) => {
        const response = <ResponseTemplate> data;
        if(response.status == 1){
          this.messageService.success(response.message);
        } else {
          this.messageService.error(response.message);
        }
        this.isValid = true;
        this.approvedForm.reset();
        this.getListPrinterCartridge(this.tableOptions.start, this.tableOptions.length, this.tableOptions.search);
        
      }, error: (err) => {
        this.approvedForm.reset();
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
    this.getListPrinterCartridge(this.tableOptions.start, this.tableOptions.length, this.tableOptions.search);
  }

}
