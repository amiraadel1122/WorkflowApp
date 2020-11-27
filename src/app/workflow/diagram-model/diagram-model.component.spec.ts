import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagramModelComponent } from './diagram-model.component';

describe('DiagramModelComponent', () => {
  let component: DiagramModelComponent;
  let fixture: ComponentFixture<DiagramModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagramModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagramModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
