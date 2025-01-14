import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakelastComponent } from './takelast.component';

describe('TakelastComponent', () => {
  let component: TakelastComponent;
  let fixture: ComponentFixture<TakelastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TakelastComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakelastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
