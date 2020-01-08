import { Component } from '@angular/core';
import { ProviderServiceService } from '@monorepo-demo/utilities';

@Component({
  selector: 'monorepo-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private providerService: ProviderServiceService
  ) {
  }
  title = 'provider-portal';
  providerName = this.providerService.getProivderName();
}
