import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkipoperatorComponent } from './skipoperator.component';

describe('SkipoperatorComponent', () => {
  let component: SkipoperatorComponent;
  let fixture: ComponentFixture<SkipoperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkipoperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkipoperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
