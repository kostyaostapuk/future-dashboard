import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsBoardComponent } from './goods-board.component';

describe('GoodsBoardComponent', () => {
  let component: GoodsBoardComponent;
  let fixture: ComponentFixture<GoodsBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodsBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
