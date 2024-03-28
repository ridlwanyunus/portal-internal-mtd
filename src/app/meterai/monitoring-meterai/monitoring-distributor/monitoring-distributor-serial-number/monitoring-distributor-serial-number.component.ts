import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingServiceService } from '../../../../services/loading/loading-service.service';
import { ShowMessageService } from '../../../../services/message/show-message.service';
import { ResponseTemplate } from '../../../../model/response-template.model';
import { SharedService } from '../../../../services/shared/shared.service';
import { MonitoringDistributorService } from '../../../../services/meterai/monitoring-meterai/monitoring-distributor.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-monitoring-distributor-serial-number',
  templateUrl: './monitoring-distributor-serial-number.component.html',
  styleUrl: './monitoring-distributor-serial-number.component.css'
})
export class MonitoringDistributorSerialNumberComponent {
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
    search: {
      search1: this.search,
      search2: '',
      search3: '',
    }
  }

  tableHeader: any = {
    kodeDistributor: '',
    namaDistributor: '',
    npwpDistributor: ''
  }

  response: any;

  constructor(
    private monitoringDistributorService: MonitoringDistributorService,
    private router: Router,
    public loadingService: LoadingServiceService,
    private messageService: ShowMessageService,
    private sharedService: SharedService,
    private datepipe: DatePipe
  ) { 
    this.response = new ResponseTemplate({}, 0, '','');
    
   }

  ngOnInit(): void {
   this.sharedService.currentData.subscribe( data => {
      this.data = data;
    })
    if(this.data){
      console.log(this.data);

      this.tableHeader.namaPengguna = this.data.item.pemungut.namaPengguna;
      this.tableHeader.npwpPengguna = this.data.item.pemungut.npwpPengguna;
      this.tableHeader.kodeDistributor = this.data.item.pemungut.kodeDistributor;
      this.tableHeader.tahunMasa = this.data.filter;

      this.tableOptions.search.search1 = this.data.item.pemungut.npwpPengguna; // NPWP Pengguna ex: 010000115051000
      this.tableOptions.search.search2 = this.data.item.pemungut.kodeDistributor; // Kode Distributor: 000
      this.tableOptions.search.search3 = this.data.filter; // Tahun Masa ex: 202403
      this.getSerialNumberMonitoring(this.tableOptions.start, this.tableOptions.length, this.tableOptions.search);
    } else {
      this.router.navigate(['/meterai/monitoring-meterai/distributor/list']);
    }
    
  }

  ngOnDestroy(): void {
    
  }

  // Get Monitoring Pengguna
  getSerialNumberMonitoring(start: number, length: number, search: any){
    this.monitoringDistributorService.getSerialNumberMonitoring(start, length, search).subscribe({
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
          this.recordsTotal = 0;
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
    this.tableOptions.search.search1 = this.data.item.pemungut.npwpPengguna; // NPWP Pengguna ex: 010000115051000
    this.tableOptions.search.search2 = this.data.item.pemungut.kodeDistributor; // Kode Distributor: 000
    this.tableOptions.search.search3 = this.data.filter; // Tahun Masa ex: 202403
    
    this.getSerialNumberMonitoring(this.tableOptions.start, this.tableOptions.length, this.tableOptions.search);
  }

  // Date format
  formatDate(date: string){
    return this.datepipe.transform(date, 'YYYY-MM-dd hh:mm:ss');
  }
}
