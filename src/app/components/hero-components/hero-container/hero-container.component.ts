import { Component } from '@angular/core';
import { CodeContainerComponent } from "../code-container/code-container.component";

@Component({
  selector: 'app-hero-container',
  imports: [CodeContainerComponent],
  templateUrl: './hero-container.component.html',
  styleUrl: './hero-container.component.scss'
})
export class HeroContainerComponent {

}
