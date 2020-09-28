import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionhealthComponent } from './sectionhealth.component';

describe('SectionhealthComponent', () => {
  let component: SectionhealthComponent;
  let fixture: ComponentFixture<SectionhealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionhealthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionhealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
