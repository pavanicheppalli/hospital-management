import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-doctor-register',
  templateUrl: './doctor-register.component.html',
  styleUrls: ['./doctor-register.component.scss']
})
export class DoctorRegisterComponent implements OnInit {

  @Input() fullName;
  @Input() contactNumber;
  
  genderOptionsList = [];
  selectedGender = [];
  genderDropDownSettings = {};

  languageOptionsList = [];
  selectedLanguages = [];
  languageDropDownSettings = {};

  stateOptionsList = [];
  selectedState = [];
  stateDropDownSettings = {};

  cityOptionsList = [];
  selectedCity = [];
  cityDropDownSettings = {};


  city_disabled = true;

  ngOnInit() {
    this.genderOptionsList = [
      { item_id: 0, item_text: 'Male' },
      { item_id: 1, item_text: 'Female' },
      { item_id: 2, item_text: 'TransGender' },
    ];
    this.genderDropDownSettings = {
      singleSelection: true,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 2,
      allowSearchFilter: false
    };
    this.languageOptionsList = [
      { item_id: 0, item_text: 'English' },
      { item_id: 1, item_text: 'Hindi' },
      { item_id: 2, item_text: 'Telugu' },
      { item_id: 3, item_text: 'Tamil' },
      { item_id: 4, item_text: 'Kannada' },
      { item_id: 5, item_text: 'Marati' },
      { item_id: 6, item_text: 'Malayalam' },
    ];
    this.languageDropDownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 5,
      allowSearchFilter: false
    };
    this.stateDropDownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 1,
      allowSearchFilter: true
    };
    this.cityDropDownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 1,
      allowSearchFilter: true
    };
  }
  
  onStateSelect(item: any){
    this.add_cities(item);
  }

  add_cities(item){
    this.city_disabled = false;
    this.cityOptionsList = [
      { item_id: 0, item_text: 'Karimnagar' },
      { item_id: 1, item_text: 'Jagitial' },
      { item_id: 2, item_text: 'Adilabad' },
      { item_id: 3, item_text: 'Nizamabad' },
      { item_id: 4, item_text: 'Warangal' },
      { item_id: 5, item_text: 'Medak' },
      { item_id: 6, item_text: 'MahabubNagar' },
    ];
  }

}
