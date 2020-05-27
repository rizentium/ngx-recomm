import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxRecommComponent } from './ngx-recomm.component';

describe('NgxRecommComponent', () => {
  let component: NgxRecommComponent;
  let fixture: ComponentFixture<NgxRecommComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxRecommComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxRecommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
