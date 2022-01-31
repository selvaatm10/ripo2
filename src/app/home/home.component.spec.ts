import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



describe('HomeComponent', () => {
  let component: HomeComponent;
  
  it('MY Function Test ', () => {
    let xyz=new HomeComponent();
    expect(xyz.myfincton(10,20)).toEqual(30);
  });


  
  // myfincton(a:any,b:any){
  //   return a+b;
  // }

  
});
