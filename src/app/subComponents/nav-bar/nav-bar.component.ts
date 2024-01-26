import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  @ViewChild('menuElement')
  menuElement!: ElementRef;

  toggleMenu() {
    const menu = this.menuElement.nativeElement;
    menu.classList.toggle('hidden');
  }

}

