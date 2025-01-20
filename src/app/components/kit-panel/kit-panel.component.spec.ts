import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitPanelComponent } from './kit-panel.component';

describe('KitPanelComponent', () => {
  let component: KitPanelComponent;
  let fixture: ComponentFixture<KitPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KitPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KitPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
