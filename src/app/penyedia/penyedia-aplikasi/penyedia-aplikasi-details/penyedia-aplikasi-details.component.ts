import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PenyediaAplikasiService } from '../../../services/penyedia/penyedia-aplikasi.service';
import { ResponseTemplate } from '../../../model/response-template.model';
import { Route, Router } from '@angular/router';
import { throwError } from 'rxjs';


declare var KTToastrDemo: any;
@Component({
  selector: 'app-penyedia-aplikasi-details',
  templateUrl: './penyedia-aplikasi-details.component.html',
  styleUrl: './penyedia-aplikasi-details.component.css'
})
export class PenyediaAplikasiDetailsComponent implements OnInit {

  distributorForm: any;
  file: any;
  status: number = -1;
  message: any;

  channels: any = [];

  data: any;
  
  constructor(
    private formBuilder: FormBuilder,
    private service: PenyediaAplikasiService,
    private router: Router
  ){
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras && navigation.extras.state){
      this.data = navigation.extras.state['data'];
      console.log(navigation.extras.state)
      console.log(this.data)

      this.fromEditRecord();
    } else {
      this.fromNewRecord();
    }
  }
  ngOnInit(): void {
    this.loadChannels();
  }

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

  submitForm(): void {

    const jsondata = JSON.stringify(this.distributorForm.value);

    const formData = new FormData();
    formData.append('file', this.file);
    formData.append('jsondata', jsondata);
    
    this.service.addDistributor(formData).subscribe({
      next: (data) => {
        const response = <ResponseTemplate> data;
        if(response.status == 1){
          this.status = 1;
          KTToastrDemo.success(response.message);
        } else {
          this.status = 0;
          KTToastrDemo.error(response.message);
        }
      },
      error: (err) => {
        console.log(err)
        this.status = 0;
        KTToastrDemo.error(err.message);
      }
    })
  }

  loadChannels(){
    this.service.getChannel().subscribe({
      
      next: (data) => {
        const response = <ResponseTemplate> data;
        if(response.status == 1){
          this.channels = response.data;
        } else {
          KTToastrDemo.error(response.message);
        }
      },
      error: (err) => {
        KTToastrDemo.error(err.message);
      }
    });
  }

  onChangeFile(event: any){
    this.file = event.target.files[0];
    console.log(JSON.stringify(this.distributorForm.value));
    console.log(this.file);
  }

}
