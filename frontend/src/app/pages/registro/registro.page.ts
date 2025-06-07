import { Component } from '@angular/core';
import { IonicModule, ToastController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApiService } from 'src/app/services/api.service';

@Component({
  standalone: true,
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  imports: [CommonModule, FormsModule, IonicModule, RouterModule]
})
export class RegistroPage {
  nomUsuario: string = '';
  correo: string = '';
  contrasena: string = '';
  confirmarContrasena: string = '';
  aceptaTerminos: boolean = false;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private toastController: ToastController
  ) {}

  async registrarse() {
    if (!this.nomUsuario || !this.correo || !this.contrasena || !this.confirmarContrasena) {
      this.mostrarMensaje('Por favor completa todos los campos');
      return;
    }

    if (this.contrasena !== this.confirmarContrasena) {
      this.mostrarMensaje('Las contraseñas no coinciden');
      return;
    }

    if (!this.aceptaTerminos) {
      this.mostrarMensaje('Debes aceptar los términos y condiciones');
      return;
    }

    const nuevoUsuario = {
      nomUsuario: this.nomUsuario,
      correo: this.correo,
      contrasena: this.contrasena,
      id_perfil: 2
    };

    this.apiService.registro(nuevoUsuario).subscribe({
      next: (resp) => {
        this.mostrarMensaje('Registro exitoso. Ahora puedes iniciar sesión.');
        this.router.navigate(['/tabs/tab4']);
      },
      error: (err) => {
        const mensaje = err.error?.error || 'Error al registrar usuario';
        this.mostrarMensaje(mensaje);
      }
    });
  }

  async mostrarMensaje(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2500,
      color: 'primary'
    });
    await toast.present();
  }
}