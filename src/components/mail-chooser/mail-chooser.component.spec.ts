import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailChooserComponent } from './mail-chooser.component';

describe('MailChooserComponent', () => {
  let component: MailChooserComponent;
  let fixture: ComponentFixture<MailChooserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailChooserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
