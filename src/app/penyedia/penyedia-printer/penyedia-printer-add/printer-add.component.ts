import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PrinterServiceListService } from '../../../services/penyedia/printer/printer-service-list.service';
import { Router } from '@angular/router';
import { ShowMessageService } from '../../../services/message/show-message.service';
import { ResponseTemplate } from '../../../model/response-template.model';

@Component({
  selector: 'app-printer-add',
  templateUrl: './printer-add.component.html',
  styleUrl: './printer-add.component.css'
})
export class PrinterAddComponent implements OnInit{

  printerForm: any;
  npwpDistributor: any = [];
  data: any;

  constructor(
    private formBuilder: FormBuilder,
    private service: PrinterServiceListService,
    private router: Router,
    public messageService: ShowMessageService
  )
  
  {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras && navigation.extras.state){
      this.data = navigation.extras.state['data'];
      //this.fromEditRecord();
    } else {
      //this.fromNewRecord();
    }
  }

  ngOnInit(): void {
    
  }

  // Submit Printer
  submitForm(): void {
    const jsondata = JSON.stringify(this.printerForm.value);

    const formData = new FormData();
    formData.append('jsondata', jsondata);
    
    this.service.addDistributor(formData).subscribe({
      next: (data) => {
        const response = <ResponseTemplate> data;
        if(response.status == 1){
          this.messageService.success(response.message);
        } else {
          this.messageService.error(response.message);
        }
      },
      error: (err) => {
        this.messageService.error(err.message);
      }
    })
  }

  // Load Channel Field Distributor
  // loadChannels(){
  //   this.service.getChannel().subscribe({
      
  //     next: (data) => {
  //       const response = <ResponseTemplate> data;
  //       if(response.status == 1){
  //         this.channels = response.data;
  //       } else {
  //         this.messageService.error(response.message);
  //       }
  //     },
  //     error: (err) => {
  //       this.messageService.error(err.message);
  //     }
  //   });
  // }
}
