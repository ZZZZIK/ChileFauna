import { Component } from '@angular/core';
import { IonicModule, ToastController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApiService } from 'src/app/services/api.service';

@Component({
  standalone: true,
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  imports: [CommonModule, FormsModule, IonicModule, RouterModule]
})
export class Tab4Page {
  correo: string = '';
  contrasena: string = '';

  constructor(
    public apiService: ApiService,
    private router: Router,
    private toastController: ToastController
  ) {}

  async iniciarSesion() {
    if (!this.correo || !this.contrasena) {
      this.mostrarMensaje('Por favor ingresa correo y contraseña');
      return;
    }

    this.apiService.login({ correo: this.correo, contrasena: this.contrasena }).subscribe({
      next: (resp) => {
        this.apiService.guardarToken(resp.token);
        this.mostrarMensaje(`Bienvenido ${resp.usuario.nomUsuario}`);
        this.router.navigate(['/home']);
      },
      error: (err) => {
        const msg = err.error?.error || 'Error al iniciar sesión';
        this.mostrarMensaje(msg);
      }
    });
  }

  async mostrarMensaje(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      color: 'danger'
    });
    toast.present();
  }

  cerrarSesion() {
    this.apiService.cerrarSesion();
  }
}