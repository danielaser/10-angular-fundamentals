import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-panel',
  imports: [CommonModule],
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnChanges {
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

  @Input() panelBackground: string = 'rgb(255, 255, 255)';
  @Input() panelRadius: string = '15px';

  @Output() textColorChange = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['panelBackground'] && changes['panelBackground'].currentValue) {
      const newColor = this.getTextColor(changes['panelBackground'].currentValue);
      this.textColorChange.emit(newColor);
    }
  }

  private getTextColor(backgroundColor: string): string {
    if (backgroundColor === 'rgb(255, 255, 255)') {
      return 'black';
    } else if (backgroundColor === 'rgb(26, 27, 30)' || backgroundColor === 'rgb(0, 0, 0)') {
      return 'white';
    }
    return 'black';
  }
}
