import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { ContentComponent } from './content/content.component';
import { MonitoringMeteraiComponent } from './meterai/monitoring-meterai/monitoring-meterai.component';
import { PemungutMeteraiComponent } from './users/pemungut-meterai/pemungut-meterai.component';
import { RetailComponent } from './users/retail/retail.component';
import { PenyediaPrinterComponent } from './penyedia/penyedia-printer/penyedia-printer.component';
import { PenyediaCartridgeComponent } from './penyedia/penyedia-cartridge/penyedia-cartridge.component';
import { PenyediaAplikasiComponent } from './penyedia/penyedia-aplikasi/penyedia-aplikasi.component';
import { PenyediaAplikasiDetailsComponent } from './penyedia/penyedia-aplikasi/penyedia-aplikasi-details/penyedia-aplikasi-details.component';
import { PenyediaAplikasiListComponent } from './penyedia/penyedia-aplikasi/penyedia-aplikasi-list/penyedia-aplikasi-list.component';
import { PenyediaPrinterListComponent } from './penyedia/penyedia-printer/penyedia-printer-list/penyedia-printer-list.component';
import { PenyediaAplikasiPdfPreviewComponent } from './penyedia/penyedia-aplikasi/penyedia-aplikasi-pdf-preview/penyedia-aplikasi-pdf-preview.component';
import { PenyediaCartridgeListComponent } from './penyedia/penyedia-cartridge/penyedia-cartridge-list/penyedia-cartridge-list.component';
import { MonitoringDistributorComponent } from './meterai/monitoring-meterai/monitoring-distributor/monitoring-distributor.component';
import { MonitoringPenggunaComponent } from './meterai/monitoring-meterai/monitoring-pengguna/monitoring-pengguna.component';
import { MonitoringPenggunaListComponent } from './meterai/monitoring-meterai/monitoring-pengguna/monitoring-pengguna-list/monitoring-pengguna-list.component';
import { MonitoringPenggunaDetailsComponent } from './meterai/monitoring-meterai/monitoring-pengguna/monitoring-pengguna-details/monitoring-pengguna-details.component';
import { PenyediaPrinterCartridgeComponent } from './penyedia/penyedia-printer-cartridge/penyedia-printer-cartridge.component';
import { PenyediaPrinterCartridgeListComponent } from './penyedia/penyedia-printer-cartridge/penyedia-printer-cartridge-list/penyedia-printer-cartridge-list.component';
import { MonitoringDistributorListComponent } from './meterai/monitoring-meterai/monitoring-distributor/monitoring-distributor-list/monitoring-distributor-list.component';
import { MonitoringDistributorDetailsComponent } from './meterai/monitoring-meterai/monitoring-distributor/monitoring-distributor-details/monitoring-distributor-details.component';
import { MonitoringSerialNumberComponent } from './meterai/monitoring-meterai/monitoring-serial-number/monitoring-serial-number.component';
import { MonitoringSerialNumberListComponent } from './meterai/monitoring-meterai/monitoring-serial-number/monitoring-serial-number-list/monitoring-serial-number-list.component';
import { MonitoringSerialNumberDetailsComponent } from './meterai/monitoring-meterai/monitoring-serial-number/monitoring-serial-number-details/monitoring-serial-number-details.component';
import { MonitoringDistributorSerialNumberComponent } from './meterai/monitoring-meterai/monitoring-distributor/monitoring-distributor-serial-number/monitoring-distributor-serial-number.component';
const routes: Routes = [
  { path: '', component: MonitoringSerialNumberListComponent },
  { path: 'modals', component: ModalComponent },
  { path: 'meterai/monitoring-meterai', 
    component: MonitoringMeteraiComponent,
    children: [
      { path: 'distributor', 
        component: MonitoringDistributorComponent,
        children: [
          { path: 'list', component: MonitoringDistributorListComponent },
          { path: 'details', component: MonitoringDistributorDetailsComponent },
          { path: 'serial-number', component: MonitoringDistributorSerialNumberComponent },
        ] 
      },
      { path: 'pengguna', 
        component: MonitoringPenggunaComponent,
        children: [
          { path: 'list', component: MonitoringPenggunaListComponent },
          { path: 'details', component: MonitoringPenggunaDetailsComponent }
        ] 
      },
      { path: 'serial-number', 
        component: MonitoringSerialNumberComponent,
        children: [
          { path: 'list', component: MonitoringSerialNumberListComponent },
          { path: 'details', component: MonitoringSerialNumberDetailsComponent },
        ] 
      }
    ] 
  },
  { path: 'users/pemungut-meterai', component: PemungutMeteraiComponent },
  { path: 'users/retail', component: RetailComponent },
  { 
    path: 'penyedia/penyedia-aplikasi', 
    component: PenyediaAplikasiComponent,
    children: [
      { path: 'list', component: PenyediaAplikasiListComponent },
      { path: 'details', component: PenyediaAplikasiDetailsComponent },
      { path: 'pdf-preview', component: PenyediaAplikasiPdfPreviewComponent }
    ]
  },
  { path: 'penyedia/penyedia-printer', component: PenyediaPrinterComponent,
    children: [
      { path: 'list', component: PenyediaPrinterListComponent },
      // { path: 'add', component: PrinterAddComponent }
    ]
  },
  { path: 'penyedia/penyedia-cartridge', component: PenyediaCartridgeComponent,
    children: [
      { path: 'list', component: PenyediaCartridgeListComponent },
      // { path: 'add', component: PrinterAddComponent }
    ]
  },
  { path: 'penyedia/penyedia-printer-cartridge-verify', component: PenyediaPrinterCartridgeComponent,
    children: [
      { path: 'list', component: PenyediaPrinterCartridgeListComponent },
      // { path: 'add', component: PrinterAddComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
