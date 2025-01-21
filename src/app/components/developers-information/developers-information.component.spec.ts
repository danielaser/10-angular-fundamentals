import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopersInformationComponent } from './developers-information.component';

describe('DevelopersInformationComponent', () => {
  let component: DevelopersInformationComponent;
  let fixture: ComponentFixture<DevelopersInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevelopersInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevelopersInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
