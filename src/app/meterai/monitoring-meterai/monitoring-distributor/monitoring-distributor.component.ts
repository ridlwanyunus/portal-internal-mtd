import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { MonitoringDistributorService } from '../../../services/meterai/monitoring-meterai/monitoring-distributor.service';
import { LoadingServiceService } from '../../../services/loading/loading-service.service';
import { Router } from '@angular/router';
import { ShowMessageService } from '../../../services/message/show-message.service';
import { ResponseTemplate } from '../../../model/response-template.model';
import { SharedService } from '../../../services/shared/shared.service';

@Component({
  selector: 'app-monitoring-distributor',
  templateUrl: './monitoring-distributor.component.html',
  styleUrl: './monitoring-distributor.component.css'
})
export class MonitoringDistributorComponent {

}
