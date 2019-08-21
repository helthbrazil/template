import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSitioComponent } from './item-sitio.component';

describe('ItemSitioComponent', () => {
  let component: ItemSitioComponent;
  let fixture: ComponentFixture<ItemSitioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemSitioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSitioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
