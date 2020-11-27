import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { MediaMatcher } from '@angular/cdk/layout';
@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss'],
})
export class AdminPanelComponent implements OnInit {
  name = 'Amira Adel ';
  showSlider = false;
  showSubmenu = false;
  //For mobile view
  mobileQuery: MediaQueryList;
  fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);
  options: FormGroup;
  constructor(
    fb: FormBuilder,
    private location: Location,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
  ) { //options for slider
    this.options = fb.group({
      bottom: 0,
      fixed: false,
      top: 0,
    });

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  private _mobileQueryListener: () => void;

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some((h) =>
    h.test(window.location.host)
  );
  backClicked() {
    this.location.back();
  }

  ngOnInit(): void {}
}
