import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComanguComponent } from './comangu.component';

describe('ComanguComponent', () => {
  let component: ComanguComponent;
  let fixture: ComponentFixture<ComanguComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComanguComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComanguComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
