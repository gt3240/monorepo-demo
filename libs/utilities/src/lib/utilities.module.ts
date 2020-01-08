import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderServiceService } from './provider-service.service';

@NgModule({
  imports: [CommonModule],
  providers: [ProviderServiceService],

})
export class UtilitiesModule {}
