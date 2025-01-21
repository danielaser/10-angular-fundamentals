import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitInformationComponent } from './kit-information.component';

describe('KitInformationComponent', () => {
  let component: KitInformationComponent;
  let fixture: ComponentFixture<KitInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KitInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KitInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
