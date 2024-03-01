import { Component, Input } from '@angular/core';
import { PenyediaAplikasiService } from '../../../services/penyedia/penyedia-aplikasi.service';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';

@Component({
  selector: 'app-penyedia-aplikasi-list',
  templateUrl: './penyedia-aplikasi-list.component.html',
  styleUrl: './penyedia-aplikasi-list.component.css'
})
export class PenyediaAplikasiListComponent {

  @Input('master') master = '';


  message: string = "";

  allPenyediaAplikasi: any = {};
  items: any = [];

  constructor(
    private service: PenyediaAplikasiService,
    private router: Router,
    private route: ActivatedRoute
    ){
    console.log('penyedia aplikasi constructor')
  }

 

  ngOnInit(): void {
    this.getDistributor();
  }

  ngOnDestroy(): void {
  }

  getDistributor(): void{
    this.service.getDistributor().subscribe({
      next: (data) => {
        this.allPenyediaAplikasi = data;
        this.items = this.allPenyediaAplikasi.data.data;
        console.log(this.allPenyediaAplikasi.data.data);

      },
      error: (err) => {
        this.message = err.message;
        console.log(err)
      } 
    });
  }

  buttonEdit(item: any): void {
    console.log(item)
    this.router.navigate(['penyedia/penyedia-aplikasi/details'], { state: { data: item } })
  }
}
