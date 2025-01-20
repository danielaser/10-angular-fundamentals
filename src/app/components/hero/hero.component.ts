import { Component } from '@angular/core';
import { HeroContainerComponent } from "../hero-components/hero-container/hero-container.component";
import { PictureContainerComponent } from "../hero-components/picture-container/picture-container.component";
import { TeamContainerComponent } from "../hero-components/team-container/team-container.component";

@Component({
  selector: 'app-hero',
  imports: [HeroContainerComponent, PictureContainerComponent, TeamContainerComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
