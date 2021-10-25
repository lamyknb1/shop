import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPromotionComponent } from './cart-promotion.component';

describe('CartPromotionComponent', () => {
  let component: CartPromotionComponent;
  let fixture: ComponentFixture<CartPromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartPromotionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
