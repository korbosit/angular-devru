import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentRef,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DynamicComponent } from './dynamic/dynamic.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'dynamic-component-loader';
  @ViewChild('dynamic', { read: ViewContainerRef })
  private viewRef: ViewContainerRef;
  private componentRef: ComponentRef<DynamicComponent>;

  showDynamicComponent(): void {
    this.viewRef.clear();
    this.componentRef = this.viewRef.createComponent(DynamicComponent); // теперь так
  }

  removeDynamicComponent(): void {
    this.viewRef.clear();
  }
}
