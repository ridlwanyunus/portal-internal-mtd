import { Component } from '@angular/core';
import { MonitoringSerialNumberService } from '../../../../services/meterai/monitoring-meterai/monitoring-serial-number.service';
import { Router } from '@angular/router';
import { LoadingServiceService } from '../../../../services/loading/loading-service.service';
import { ShowMessageService } from '../../../../services/message/show-message.service';
import { ResponseTemplate } from '../../../../model/response-template.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-monitoring-serial-number-list',
  templateUrl: './monitoring-serial-number-list.component.html',
  styleUrl: './monitoring-serial-number-list.component.css'
})
export class MonitoringSerialNumberListComponent {
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
    private monitoringSerialNumberService: MonitoringSerialNumberService,
    private router: Router,
    public loadingService: LoadingServiceService,
    public messageService: ShowMessageService,
    public datepipe: DatePipe
  ){
    this.response = new ResponseTemplate({}, 0, '','');
  }

  ngOnInit(): void {

    // Inisialisasi bulan
    this.setMonth();

    // Inisialisasi tahun
    this.setYear();

    // Load list monitoring distributor
    this.tableOptions.search = this.selectedTahun + ('0'+this.selectedBulan).slice(-2);
    this.getSerialNumber(this.tableOptions.start, this.tableOptions.length, this.tableOptions.search);
  }
  ngOnDestroy(): void {
    
  }

  // Get Monitoring Serial Number List
  getSerialNumber(start: number, length: number, search: string){
    this.monitoringSerialNumberService.getSerialNumberMonitoring(start, length, search).subscribe({
      next: (data) => {
        this.response = <ResponseTemplate> data;

        if(this.response.status == 1){
          this.items = this.response.data.data;
          this.currentItemsToShow = this.items;
          this.recordsTotal = this.response.data.recordsTotal;
        } else {
          this.items = {};
          this.currentItemsToShow = this.items;
          this.recordsTotal = 0;
          this.messageService.error(this.response.message);
        }
        
      }, error: (err) => {
        console.log(err);
        this.messageService.error(err.message);
      }
    });
  }

  // Table Pagination
  onPageChange($event: any): void {
    this.tableOptions.start = $event.pageIndex * $event.pageSize;
    this.tableOptions.length = $event.pageSize;
    this.getSerialNumber(this.tableOptions.start, this.tableOptions.length, this.tableOptions.search);
  }

  // Initialize month
  setMonth(){
    let thisMonth = new Date().getMonth();

    const thisMonthDiv = (thisMonth + 1) / 12;
    const thisMonthMod = (thisMonth + 1) % 12;
    const monthDivided = Math.floor(thisMonthDiv);

    this.selectedBulan = (thisMonthMod + monthDivided*12) % 12;

  }

  // Initializing year
  setYear(){
    let thisYear = new Date().getFullYear();
    this.tahuns.push(thisYear);

    let difference = thisYear - this.initTahun;
    for(let i=1; i<=difference; i++){
      this.tahuns.push(thisYear - i);
    }

    this.selectedTahun = thisYear;
  }

  // Action button

  // search by month and year
  searchButton(){
    this.tableOptions.search = this.selectedTahun + ('0'+this.selectedBulan).slice(-2);
    this.getSerialNumber(this.tableOptions.start, this.tableOptions.length, this.tableOptions.search);
  }

  // load details page
  details(item: any){
    // const data = {
    //   filter: this.tableOptions.search,
    //   item: item
    // }
    // this.sharedService.setData(data);
    // this.router.navigate(['meterai/monitoring-meterai/distributor/details'], { state: { data: item } });
  }

  // Date format
  fomatDate(date: string){
    return this.datepipe.transform(date, 'hh:mm:ss dd-MM-YYYY');
  }

}
