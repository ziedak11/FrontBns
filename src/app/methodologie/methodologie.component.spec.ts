import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodologieComponent } from './methodologie.component';

describe('MethodologieComponent', () => {
  let component: MethodologieComponent;
  let fixture: ComponentFixture<MethodologieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethodologieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodologieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
