import { Component, OnDestroy, OnInit } from '@angular/core';
import { PenyediaAplikasiService } from '../../services/penyedia/penyedia-aplikasi.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-penyedia-aplikasi',
  templateUrl: './penyedia-aplikasi.component.html',
  styleUrl: './penyedia-aplikasi.component.css'
})
export class PenyediaAplikasiComponent {

  master: string = "Halo ini dari parent";

  constructor(

    ){
    console.log('penyedia aplikasi constructor')
  }

 

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
  }

  getDistributor(): void{
    
  }


  

}
