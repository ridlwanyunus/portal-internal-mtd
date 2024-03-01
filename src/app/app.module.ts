import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { ModalComponent } from './modal/modal.component';
import { MonitoringMeteraiComponent } from './meterai/monitoring-meterai/monitoring-meterai.component';
import { PemungutMeteraiComponent } from './users/pemungut-meterai/pemungut-meterai.component';
import { RetailComponent } from './users/retail/retail.component';
import { PenyediaPrinterComponent } from './penyedia/penyedia-printer/penyedia-printer.component';
import { PenyediaCartridgeComponent } from './penyedia/penyedia-cartridge/penyedia-cartridge.component';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { PenyediaAplikasiComponent } from './penyedia/penyedia-aplikasi/penyedia-aplikasi.component';
import { PenyediaAplikasiDetailsComponent } from './penyedia/penyedia-aplikasi/penyedia-aplikasi-details/penyedia-aplikasi-details.component';
import { PenyediaAplikasiListComponent } from './penyedia/penyedia-aplikasi/penyedia-aplikasi-list/penyedia-aplikasi-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    ContentComponent,
    ModalComponent,
    MonitoringMeteraiComponent,
    PemungutMeteraiComponent,
    RetailComponent,
    PenyediaPrinterComponent,
    PenyediaCartridgeComponent,
    PenyediaAplikasiComponent,
    PenyediaAplikasiDetailsComponent,
    PenyediaAplikasiListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
