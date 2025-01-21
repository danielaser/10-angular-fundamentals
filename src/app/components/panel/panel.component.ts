import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnChanges {
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
