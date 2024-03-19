import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PenyediaAplikasiService } from '../../../services/penyedia/penyedia-aplikasi.service';
import { ResponseTemplate } from '../../../model/response-template.model';
import { Router } from '@angular/router';
import { ShowMessageService } from '../../../services/message/show-message.service';

@Component({
  selector: 'app-penyedia-aplikasi-details',
  templateUrl: './penyedia-aplikasi-details.component.html',
  styleUrl: './penyedia-aplikasi-details.component.css'
})
export class PenyediaAplikasiDetailsComponent implements OnInit {

  distributorForm: any;
  file: any;
  channels: any = [];
  data: any;
  
  constructor(
    private formBuilder: FormBuilder,
    private service: PenyediaAplikasiService,
    private router: Router,
    public messageService: ShowMessageService
  ){
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras && navigation.extras.state){
      this.data = navigation.extras.state['data'];
      this.fromEditRecord();
    } else {
      this.fromNewRecord();
    }
  }
  ngOnInit(): void {
    this.loadChannels();
  }

  // Create New Distributor
  fromNewRecord(): void {
      this.distributorForm = this.formBuilder.group({
        nameDistributor: ['', Validators.required],
        npwpDistributor: ['', Validators.required],
        password: ['', Validators.required],
        email: ['', Validators.required],
        telephone: ['', Validators.required],
        address: ['', Validators.required],
        recorderNip: ['', Validators.required],
        channel: ['', Validators.required],
      })
  }

  // Edit Distributor
  fromEditRecord(): void {
      this.distributorForm = this.formBuilder.group({
        nameDistributor: [this.data.namaDistributor, Validators.required],
        npwpDistributor: [this.data.npwpDistributor, Validators.required],
        password: ['', Validators.required],
        email: [this.data.email, Validators.required],
        telephone: [this.data.telepon, Validators.required],
        address: [this.data.alamat, Validators.required],
        recorderNip: [this.data.nipPerekam, Validators.required],
        channel: [this.data.channel, Validators.required],
      })
  }

  // Submit Distributor
  submitForm(): void {

    const jsondata = JSON.stringify(this.distributorForm.value);

    const formData = new FormData();
    formData.append('file', this.file);
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
  loadChannels(){
    this.service.getChannel().subscribe({
      
      next: (data) => {
        const response = <ResponseTemplate> data;
        if(response.status == 1){
          this.channels = response.data;
        } else {
          this.messageService.error(response.message);
        }
      },
      error: (err) => {
        this.messageService.error(err.message);
      }
    });
  }

  // Open File Distributor
  onChangeFile(event: any){
    this.file = event.target.files[0];
  }

}
