import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-panel',
  imports: [CommonModule],
  templateUrl: './main-panel.component.html',
  styleUrl: './main-panel.component.scss'
})
export class MainPanelComponent {
  articles = [
    {
      icon: 'svg/asset.svg#asset',
      title: 'A Home for your Digital Assets',
      description: 'Wallets are used to send, receive, store, and display digital assets like Ethereum and NFTs.'
    },
    {
      icon: 'svg/log.svg#log',
      title: 'A New Way to Log In',
      description: 'Instead of creating new accounts and passwords on every website, just connect your wallet.'
    }
  ];
}
