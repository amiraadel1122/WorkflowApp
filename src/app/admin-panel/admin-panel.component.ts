import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Location } from '@angular/common'

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {
  name = "Amira Adel Abdelghany" ;
  showSlider = true;
  showSubmenu = false;



  options: FormGroup;
  constructor(fb: FormBuilder , private location: Location) {
    this.options = fb.group({
      bottom: 0,
      fixed: false,
      top: 0
    });
  }
  backClicked() {
    this.location.back();
  }
  
  ngOnInit(): void {
  }

}
