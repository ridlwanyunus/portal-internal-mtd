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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PenyediaAplikasiComponent } from './penyedia/penyedia-aplikasi/penyedia-aplikasi.component';
import { PenyediaAplikasiDetailsComponent } from './penyedia/penyedia-aplikasi/penyedia-aplikasi-details/penyedia-aplikasi-details.component';
import { PenyediaAplikasiListComponent } from './penyedia/penyedia-aplikasi/penyedia-aplikasi-list/penyedia-aplikasi-list.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { InterceptorService } from './services/interceptor/interceptor.service';
import { HeaderMobileComponent } from './header-mobile/header-mobile.component';

import { PenyediaPrinterListComponent } from './penyedia/penyedia-printer/penyedia-printer-list/penyedia-printer-list.component';
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { PenyediaAplikasiPdfPreviewComponent } from './penyedia/penyedia-aplikasi/penyedia-aplikasi-pdf-preview/penyedia-aplikasi-pdf-preview.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgSelectModule } from '@ng-select/ng-select';
import { PenyediaCartridgeListComponent } from './penyedia/penyedia-cartridge/penyedia-cartridge-list/penyedia-cartridge-list.component';
import { MonitoringDistributorComponent } from './meterai/monitoring-meterai/monitoring-distributor/monitoring-distributor.component';
import { MonitoringPenggunaComponent } from './meterai/monitoring-meterai/monitoring-pengguna/monitoring-pengguna.component';
import { MonitoringPenggunaListComponent } from './meterai/monitoring-meterai/monitoring-pengguna/monitoring-pengguna-list/monitoring-pengguna-list.component';
import { MonitoringPenggunaDetailsComponent } from './meterai/monitoring-meterai/monitoring-pengguna/monitoring-pengguna-details/monitoring-pengguna-details.component';
import { PenyediaPrinterCartridgeComponent } from './penyedia/penyedia-printer-cartridge/penyedia-printer-cartridge.component';
import { PenyediaPrinterCartridgeListComponent } from './penyedia/penyedia-printer-cartridge/penyedia-printer-cartridge-list/penyedia-printer-cartridge-list.component';
import { DatePipe, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { MonitoringSerialNumberComponent } from './meterai/monitoring-meterai/monitoring-serial-number/monitoring-serial-number.component';
import { MonitoringSerialNumberListComponent } from './meterai/monitoring-meterai/monitoring-serial-number/monitoring-serial-number-list/monitoring-serial-number-list.component';
import { MonitoringSerialNumberDetailsComponent } from './meterai/monitoring-meterai/monitoring-serial-number/monitoring-serial-number-details/monitoring-serial-number-details.component';
import { MonitoringDistributorListComponent } from './meterai/monitoring-meterai/monitoring-distributor/monitoring-distributor-list/monitoring-distributor-list.component';
import { MonitoringDistributorDetailsComponent } from './meterai/monitoring-meterai/monitoring-distributor/monitoring-distributor-details/monitoring-distributor-details.component';
import { MonitoringDistributorSerialNumberComponent } from './meterai/monitoring-meterai/monitoring-distributor/monitoring-distributor-serial-number/monitoring-distributor-serial-number.component';

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
    PenyediaAplikasiListComponent,
    HeaderMobileComponent,
    PenyediaPrinterListComponent,
    PenyediaAplikasiPdfPreviewComponent,
    PenyediaCartridgeListComponent,
    MonitoringDistributorComponent,
    MonitoringPenggunaComponent,
    MonitoringPenggunaListComponent,
    MonitoringPenggunaDetailsComponent,
    PenyediaPrinterCartridgeComponent,
    PenyediaPrinterCartridgeListComponent,
    MonitoringSerialNumberComponent,
    MonitoringSerialNumberListComponent,
    MonitoringSerialNumberDetailsComponent,
    MonitoringDistributorListComponent,
    MonitoringDistributorDetailsComponent,
    MonitoringDistributorSerialNumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    PdfViewerModule,
    NgSelectModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    DatePipe,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
