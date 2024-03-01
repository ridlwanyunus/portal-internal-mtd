import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { MonitoringMeteraiService } from '../../services/meterai/monitoring-meterai.service';

@Component({
  selector: 'app-monitoring-meterai',
  templateUrl: './monitoring-meterai.component.html',
  styleUrl: './monitoring-meterai.component.css'
})

export class MonitoringMeteraiComponent implements OnInit, OnDestroy {
  allUsers: any = [];

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private service: MonitoringMeteraiService){

  }


  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    this.users()
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  users(): void{
    this.service.users().subscribe((response: any) => {
      this.allUsers = response;
      this.dtTrigger.next(null);
      console.log(response)
    });
  }

}
