import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductBComponent } from './add-product-b.component';

describe('AddProductBComponent', () => {
  let component: AddProductBComponent;
  let fixture: ComponentFixture<AddProductBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
