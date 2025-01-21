import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-panel',
  imports: [CommonModule],
  templateUrl: './menu-panel.component.html',
  styleUrl: './menu-panel.component.scss'
})
export class MenuPanelComponent {
  menus = [
    {
      name: 'Rainbow',
      icon: 'svg/rainbow.svg#rainbow',
      id: 'rainbow'
    },
    {
      name: 'Coinbase Wallet',
      icon: 'svg/coinbase.svg#coinbase',
      id: 'coinbase'
    },
    {
      name: 'MetaMask',
      icon: 'svg/metamask.svg#metamask',
      id: 'metamask'
    },
    {
      name: 'Wallet Connect',
      icon: 'svg/wallet.svg#wallet',
      id: 'wallet'
    }
  ];

  moreMenus = [
    {
      name: 'Argent',
      icon: 'svg/argent.svg#argent',
      id: 'argent'
    },
    {
      name: 'Trust Wallet',
      icon: 'svg/trust.svg#trust',
      id: 'trust'
    },
    {
      name: 'Omni',
      icon: 'svg/omni.svg#omni',
      id: 'omni'
    },
    {
      name: 'imToken',
      icon: 'svg/token.svg#token',
      id: 'token'
    },
    {
      name: 'Leader',
      icon: 'svg/leader.svg#leader',
      id: 'leader'
    }
  ];
}
