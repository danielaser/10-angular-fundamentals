import { Component } from '@angular/core';
import { PanelComponent } from "../panel/panel.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kit-panel',
  imports: [PanelComponent, CommonModule],
  templateUrl: './kit-panel.component.html',
  styleUrls: ['./kit-panel.component.scss']
})
export class KitPanelComponent {

  kitContainerBackground: string = '#0e76fd'; 
  panelBackground: string = '#fff'; 
  panelRadius: string = '15px'; 

  accentColors = ['#0e76fd', '#5f5af9', '#ff5ca0', '#fa423c', '#ff801f', '#1db847'];

  modes = [
    { label: 'White', color: 'rgb(255, 255, 255)' },
    { label: 'Gray', color: 'rgb(26, 27, 30)' },
    { label: 'Black', color: 'rgb(0, 0, 0)' }
  ];

  // Opciones de radios
  radii = [
    { label: 'L', value: '15px' },
    { label: 'M', value: '10px' },
    { label: 'S', value: '5px' },
    { label: '—', value: '0px' }
  ];

  selectedAccent: string = this.accentColors[0]; 
  selectedMode: string = this.modes[0].color; 
  selectedRadius: string = this.radii[0].value;

  changeAccentColor(color: string): void {
    this.kitContainerBackground = color;
    this.selectedAccent = color;
  }

  changePanelBackground(color: string): void {
    this.panelBackground = color;
    this.selectedMode = color;
  
    if (color === 'rgb(26, 27, 30)' || color === 'rgb(0, 0, 0)') {
      document.querySelector('.panel-content')?.classList.add('text-white');
    } else {
      document.querySelector('.panel-content')?.classList.remove('text-white');
    }
  }
  
  changePanelRadius(radius: string): void {
    this.panelRadius = radius;
    this.selectedRadius = radius;
  }

  updateTextColor(newColor: string): void {
    console.log(`Text color updated to: ${newColor}`);
  }

}
