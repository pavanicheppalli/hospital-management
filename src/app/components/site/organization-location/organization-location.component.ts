import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';


@Component({
  selector: 'app-organization-location',
  templateUrl: './organization-location.component.html',
  styleUrls: ['./organization-location.component.scss']
})
export class OrganizationLocationComponent implements OnInit {

  lat: number = 12.853670;
  lng: number = 77.683851;
  constructor() { }

  ngOnInit() {
  }

}
