import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainpagecerrarsesionComponent } from './mainpagecerrarsesion.component';

describe('MainpagecerrarsesionComponent', () => {
  let component: MainpagecerrarsesionComponent;
  let fixture: ComponentFixture<MainpagecerrarsesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainpagecerrarsesionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainpagecerrarsesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
