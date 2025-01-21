import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-worker-panel',
  imports: [CommonModule],
  templateUrl: './worker-panel.component.html',
  styleUrl: './worker-panel.component.scss'
})
export class WorkerPanelComponent {
  listItems = [
    { title: 'Easy Installation', icon: 'tick' },
    { title: 'Built-in Themes', icon: 'tick' },
    { title: 'Light and Dark Mode', icon: 'tick' },
    { title: 'App Store and Google Play Integration', icon: 'tick' },
    { title: 'Custom Themes', icon: 'tick' },
    { title: 'Custom Wallets List', icon: 'tick' },
    { title: 'Custom Chains', icon: 'tick' },
    { title: 'Custom Connect Button', icon: 'tick' }
  ];
}
