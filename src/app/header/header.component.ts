import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output('featureSelection') featureSelectionEvent =
    new EventEmitter<string>();

  onSelect(catagory: string) {
    this.featureSelectionEvent.emit(catagory);
  }
}
