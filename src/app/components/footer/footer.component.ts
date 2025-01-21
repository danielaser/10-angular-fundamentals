import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  footerLinks = [
    { icon: '👾', text: 'github', url: '#' },
    { icon: '⬇️', text: 'media kit', url: '#' },
    { icon: '📜', text: 'terms of use', url: '#' },
    { icon: '🔒', text: 'privacy policy', url: '#' },
    { icon: '', text: '© Rainbow', url: '#', isDisabled: true }
  ];
}
