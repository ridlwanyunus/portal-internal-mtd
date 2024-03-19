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
    this.getDistributor();
  }

  ngOnDestroy(): void {
  }

  // Get Distributor
  getDistributor(): void{
    this.service.getDistributor().subscribe({
      next: (data) => {
        const response = <ResponseTemplate> data;
        
        this.items = response.data.data;
        this.currentItemsToShow = this.items;
      },
      error: (err) => {
        this.messageService.error(err.message);
      } 
    });
  }


  // Edit Distributor
  buttonEdit(item: any): void {
    console.log(item)
    this.router.navigate(['penyedia/penyedia-aplikasi/details'], { state: { data: item } })
  }

  // Update Status Distributor
  updateStatus(item: any, status: any){
    console.log(item);
    this.service.updateStatus(item.idDistributor, status.value).subscribe({
      next: (data) => {
        console.log(data);
        const response = <ResponseTemplate> data;
        if(response.status == 1){
          this.messageService.success(response.message);
        } else {
          this.messageService.error(response.message);
        }
        this.getDistributor();
        
      }, error: (err) => {
        this.messageService.error(err.message);
      }
    });
  }

  // Table Pagination
  onPageChange($event: any){
    this.currentItemsToShow = this.items.slice($event.pageIndex*$event.pageSize, $event.pageIndex*$event.pageSize + $event.pageSize);
  }
}
