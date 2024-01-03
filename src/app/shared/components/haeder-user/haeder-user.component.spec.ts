import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaederUserComponent } from './haeder-user.component';

describe('HaederUserComponent', () => {
  let component: HaederUserComponent;
  let fixture: ComponentFixture<HaederUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HaederUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HaederUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
