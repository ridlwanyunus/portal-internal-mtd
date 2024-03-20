import { Component } from '@angular/core';
import { PenyediaAplikasiService } from '../../../services/penyedia/penyedia-aplikasi.service';
import { Router } from '@angular/router';
import { LoadingServiceService } from '../../../services/loading/loading-service.service';
import { ShowMessageService } from '../../../services/message/show-message.service';
import { ResponseTemplate } from '../../../model/response-template.model';

@Component({
  selector: 'app-penyedia-aplikasi-list',
  templateUrl: './penyedia-aplikasi-list.component.html',
  styleUrl: './penyedia-aplikasi-list.component.css'
})
export class PenyediaAplikasiListComponent {

  items: any = [];
  currentItemsToShow: any = [];
  pageSize: number = 10;
  recordsTotal: number = 0;
  search: string = "";

  tableOptions: any = {
    start: 0,
    length: this.pageSize,
    search: this.search
  }

  listStatus: any = [
    {value: 0, name: 'Belum Disetujui', icon:"fa fa-envelope"},
    {value: 1, name: 'Setujui', icon:"fa fa-check"},
    {value: 2, name: 'Tolak', icon:"fa fa-times"},
    {value: 3, name: 'Non Aktifkan', icon:"fa fa-trash-alt"},
  ];

  constructor(
    private service: PenyediaAplikasiService,
    private router: Router,
    public loadingService: LoadingServiceService,
    public messageService: ShowMessageService

    ){

  }

  ngOnInit(): void {
    this.getDistributor(this.tableOptions.start, this.tableOptions.length, this.tableOptions.search);
  }

  ngOnDestroy(): void {
  }

  // Get Distributor
  getDistributor(start: number, length: number, search: string): void{
    this.service.getDistributor(start, length, search).subscribe({
      next: (data) => {
        const response = <ResponseTemplate> data;
        
        this.items = response.data.data;
        this.currentItemsToShow = this.items;
        this.recordsTotal = response.data.recordsTotal;
      },
      error: (err) => {
        this.messageService.error(err.message);
      } 
    });
  }

  // Update Status Distributor
  updateStatus(item: any, status: any){
    this.service.updateStatus(item.idDistributor, status.value).subscribe({
      next: (data) => {
        const response = <ResponseTemplate> data;
        if(response.status == 1){
          this.messageService.success(response.message);
        } else {
          this.messageService.error(response.message);
        }
        this.getDistributor(this.tableOptions.start, this.tableOptions.length, this.tableOptions.search);
        
      }, error: (err) => {
        this.messageService.error(err.message);
      }
    });
  }

  // Table Pagination
  onPageChange($event: any){
    this.tableOptions.start = $event.pageIndex*$event.pageSize;
    this.tableOptions.length = $event.pageSize;
    this.getDistributor(this.tableOptions.start, this.tableOptions.length, this.tableOptions.search);
  }

  // ACTION BUTTON

  // Edit Distributor
  buttonEdit(item: any): void {
    this.router.navigate(['penyedia/penyedia-aplikasi/details'], { state: { data: item } })
  }

  // Preview Pdf
  previewPdf(item: any): void {
    this.router.navigate(['penyedia/penyedia-aplikasi/pdf-preview'], {state: {data: item}})
  }

  // Search by Nama or NPWP by enter
  filterSearch(): void{
    this.getDistributor(this.tableOptions.start, this.tableOptions.length, this.search);
  }
}
