import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeuntiloperatorComponent } from './takeuntiloperator.component';

describe('TakeuntiloperatorComponent', () => {
  let component: TakeuntiloperatorComponent;
  let fixture: ComponentFixture<TakeuntiloperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TakeuntiloperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakeuntiloperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
