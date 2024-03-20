import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingServiceService } from '../../services/loading/loading-service.service';
import { PrinterServiceListService } from '../../services/penyedia/printer/printer-service-list.service';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { ResponseTemplate } from '../../model/response-template.model';
import { ShowMessageService } from '../../services/message/show-message.service';


declare var KTToastrDemo: any;
@Component({
  selector: 'app-penyedia-printer',
  //standalone: true,
  //imports: [ReactiveFormsModule, CommonModule ,FormsModule],
  templateUrl: './penyedia-printer.component.html',
  styleUrl: './penyedia-printer.component.css'
})
export class PenyediaPrinterComponent {

}
