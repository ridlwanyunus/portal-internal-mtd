import { Component } from '@angular/core';
import { MonitoringPenggunaService } from '../../../../services/meterai/monitoring-meterai/monitoring-pengguna.service';
import { Router } from '@angular/router';
import { LoadingServiceService } from '../../../../services/loading/loading-service.service';
import { ShowMessageService } from '../../../../services/message/show-message.service';
import { ResponseTemplate } from '../../../../model/response-template.model';
import { SharedService } from '../../../../services/shared/shared.service';

@Component({
  selector: 'app-monitoring-distributor-details',
  templateUrl: './monitoring-distributor-details.component.html',
  styleUrl: './monitoring-distributor-details.component.css'
})
export class MonitoringDistributorDetailsComponent {
  data: any;
  items: any = [];
  currentItemsToShow: any = [];
  pageSize: number = 10;
  recordsTotal: number = 0;

  bulans: any = [
    { id: 1, value: "Januari" },
    { id: 2, value: "Februari" },
    { id: 3, value: "Maret" },
    { id: 4, value: "April" },
    { id: 5, value: "Mei" },
    { id: 6, value: "Juni" },
    { id: 7, value: "Juli" },
    { id: 8, value: "Agustus" },
    { id: 9, value: "September" },
    { id: 10, value: "Oktober" },
    { id: 11, value: "November" },
    { id: 12, value: "Desember" },
  ];
  selectedBulan: number = 0;

  initTahun: number = 2024;
  tahuns: any = [];
  selectedTahun: number = 0;

  search: string = "";

  tableOptions: any = {
    start: 0,
    length: this.pageSize,
    search: this.search
  }

  response: any;

  constructor(
    private monitoringPenggunaService: MonitoringPenggunaService,
    private router: Router,
    public loadingService: LoadingServiceService,
    private messageService: ShowMessageService,
    private sharedService: SharedService
  ) { 
    this.response = new ResponseTemplate({}, 0, '','');
    
   }

  ngOnInit(): void {
   this.sharedService.currentData.subscribe( data => {
      this.data = data;
    })
    if(this.data){
      this.tableOptions.search = this.data.filter;
      console.log(this.data);
      this.getMonitoringPengguna(this.tableOptions.start, this.tableOptions.length, this.tableOptions.search, this.data.item.idDistributor);
    } else {
      this.router.navigate(['/meterai/monitoring-meterai/distributor']);
    }
    
  }

  ngOnDestroy(): void {
    
  }

  // Get Monitoring Pengguna
  getMonitoringPengguna(start: number, length: number, search: string, idDistributor: string){
    this.monitoringPenggunaService.getPenggunaMonitoring(start, length, search, idDistributor).subscribe({
      next: (data) => {
        this.response = <ResponseTemplate> data;
        console.log(this.response);
        if(this.response.status == 1){
          this.items = this.response.data.data;
          this.currentItemsToShow = this.items;
          this.recordsTotal = this.response.data.recordsTotal;

        } else {
          this.items = {};
          this.currentItemsToShow = this.items;
          this.recordsTotal = this.response.data.recordsTotal;
          this.messageService.error(this.response.message);
        }
      },
      error: (err) => {
        this.messageService.error(err.message);
      }
    })
  }

  // Table Pagination
  onPageChange($event: any): void {
    this.tableOptions.start = $event.pageIndex * $event.pageSize;
    this.tableOptions.length = $event.pageSize;
    this.tableOptions.search = this.selectedTahun + this.selectedBulan;
    this.getMonitoringPengguna(this.tableOptions.start, this.tableOptions.length, this.tableOptions.search, this.data.idDistributor);
  }

  // Action
  details(item: any){

  }

}
