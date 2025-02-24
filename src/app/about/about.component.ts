import { Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-about',
  imports: [PanelModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {}
