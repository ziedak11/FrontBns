import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantTestComponent } from './composant-test.component';

describe('ComposantTestComponent', () => {
  let component: ComposantTestComponent;
  let fixture: ComponentFixture<ComposantTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComposantTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposantTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
