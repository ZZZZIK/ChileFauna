import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: false,
})
export class Tab4Page implements OnInit {

  usuarios: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getUsuarios().subscribe((data) => {
      this.usuarios = data;
    });
  }

}
