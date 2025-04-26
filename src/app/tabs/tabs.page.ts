import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: false,
})
export class TabsPage implements OnInit {
  darkMode = false;

  ngOnInit() {
    const savedTheme = localStorage.getItem('color-theme');
    if (savedTheme) {
      document.body.setAttribute('color-theme', savedTheme);
      if (savedTheme === 'dark') {
        this.darkMode = true;
        document.body.classList.add('dark');
      } else {
        this.darkMode = false;
        document.body.classList.remove('dark');
      }
    }
  }

  switchTheme() {
    this.darkMode = !this.darkMode;
    const theme = this.darkMode ? 'dark' : 'light';
  
    document.body.setAttribute('color-theme', theme);
  
    if (this.darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  
    localStorage.setItem('color-theme', theme);
  }

}
