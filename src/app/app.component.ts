import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'recipe-app';
  currentFeature: string = 'recipe';

  onFeatureSelection(feature: string) {
    this.currentFeature = feature;
  }
}
