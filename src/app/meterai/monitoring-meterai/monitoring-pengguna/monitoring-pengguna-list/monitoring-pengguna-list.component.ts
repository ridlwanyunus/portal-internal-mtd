import { Component, OnDestroy, OnInit } from '@angular/core';
import { MonitoringPenggunaService } from '../../../../services/meterai/monitoring-meterai/monitoring-pengguna.service';
import { Router } from '@angular/router';
import { LoadingServiceService } from '../../../../services/loading/loading-service.service';
import { ShowMessageService } from '../../../../services/message/show-message.service';
import { ResponseTemplate } from '../../../../model/response-template.model';

@Component({
  selector: 'app-monitoring-pengguna-list',
  templateUrl: './monitoring-pengguna-list.component.html',
  styleUrl: './monitoring-pengguna-list.component.css'
})
export class MonitoringPenggunaListComponent implements OnInit, OnDestroy {

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
    private messageService: ShowMessageService
  ) { 
    this.response = new ResponseTemplate({}, 0, '','');
   }

  ngOnInit(): void {
    this.getMonitoringPengguna(this.tableOptions.start, this.tableOptions.length, this.tableOptions.search)
  }
  ngOnDestroy(): void {
    
  }

  // Get Monitoring Pengguna
  getMonitoringPengguna(start: number, length: number, search: string){
    this.monitoringPenggunaService.getPenggunaMonitoring(start, length, search).subscribe({
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
    this.getMonitoringPengguna(this.tableOptions.start, this.tableOptions.length, this.tableOptions.search);
  }

  // Action
  details(item: any){

  }

}
