import { Component } from '@angular/core';
import { HeroComponent } from "../hero/hero.component";
import { KitPanelComponent } from "../kit-panel/kit-panel.component";
import { WorkerPanelComponent } from "../worker-panel/worker-panel.component";
import { CompanyPanelComponent } from "../company-panel/company-panel.component";

@Component({
  selector: 'app-main',
  imports: [HeroComponent, KitPanelComponent, WorkerPanelComponent, CompanyPanelComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
