import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';


declare var KTToastrDemo: any;
@Component({
  selector: 'app-penyedia-printer',
  templateUrl: './penyedia-printer.component.html',
  styleUrl: './penyedia-printer.component.css'
})
export class PenyediaPrinterComponent implements OnInit {

  private toastr: any = {}

  ngOnInit(): void {
    let message = "test 123";
    KTToastrDemo.success(message);
    KTToastrDemo.error(message);
    

  }

  

}
