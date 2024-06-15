import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcartManagementComponent } from './ecart-management.component';

describe('EcartManagementComponent', () => {
  let component: EcartManagementComponent;
  let fixture: ComponentFixture<EcartManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EcartManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcartManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
