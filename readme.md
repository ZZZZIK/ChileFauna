# Proyecto de Aplicación Web y Móvil: ChileFauna 


## Autores:
- Miguel Bernales
- Pablo Daza
- Alonso Maurel
- Monserrath Morales
- Eduardo Pérez
  
---
##  Índice
1. [Resumen del Proyecto](#Resumen-del-Proyecto)
2. [Requerimientos de la Aplicación](#Requerimientos-de-la-Aplicación)
3. [Estructura de Navegación](#Estructura-de-Navegación)
5. [Experiencia de Usuario](#Experiencia-de-Usuario)
6. [Prototipo de Diseño Base - Figma](#Prototipo-de-Diseño-Base---Figma)
7. [Tecnologías Utilizadas](#Tecnologías-Utilizadas)
   
---
## Instrucciones para ejecución correcta de la aplicación

1. Utilizando XAMPP, inicie los servicios de MySQL y Apache.
2. Abra dos terminales: una para el "Backend" y otra para el "Frontend".
3. En una de las terminales, ingrese el comando "cd backend", luego "npm install" y, por último, "node index.js".
4. Ingrese a http://localhost/phpmyadmin/.
5. En la barra lateral izquierda, presione "Nueva", asígnele el nombre "chilefaunabd" y luego presione "Crear".
6. Presione "Importar" en la barra superior y suba el archivo SQL llamado "chilefaunabd", ubicado en la carpeta "otros" del proyecto.
7. En la otra terminal, ingrese "cd frontend", luego "npm install" y, por último, "ionic serve".
8. Utilice la aplicación.
   
---
## 1. Resumen del Proyecto
Aplicacion enfocada en informar sobre las especies nativas chilenas para su proteccion y reconocimiento. La aplicación contará con datos de las especies, tales como, la ubicación, el grado de peligrosidad y qué hacer ante un eventual encuentro. Además de características adicionales como noticias y un foro asociado.

---
## 2. Requerimientos de la Aplicación

### Roles de la Aplicación
- **Usuario General (USRGNL)**: Corresponde a un rol general de la aplicación, que incluye a los usuarios no registrados, usuarios registrados y administradores.
- **Usuario Registrado (USRRGT)**: Corresponde a un rol específico de la aplicación, este rol corresponde a aquellos usuarios que completan el proceso de registro de la aplicación
- **Administrador (ADM)**: Corresponde a un rol específico de la aplicación, encargado de gestionar el contenido y usuarios del sistema. Puede realizar acciones como aprobar o eliminar publicaciones, modificar registros de especies o noticias, y administrar permisos dentro de la plataforma.


### Requerimientos Funcionales por Rol

#### Rol-Usuario-General (USRGNL)

- **RF-USRGNL-01**: El usuario debe poder visualizar las categorías de especies.
- **RF-USRGNL-02**: El usuario debe poder visualizar un catalogo de especies (catalogo general y catalogo parte de una categoría).
- **RF-USRGNL-03**: El usuario debe poder filtrar el catalogo de especies general.
- **RF-USRGNL-04**: El usuario debe poder buscar una especie por su nombre.
- **RF-USRGNL-05**: El usuario debe poder visualizar los datos asociados a una especie (descripción, ubicación geográfica, indicador de peligro, principales amenazas & contenido visual) en el sistema.
- **RF-USRGNL-06**: El usuario debe poder visualizar noticias relacionadas a las especies.


#### Rol-Usuario Registrado (USRRGT)

- **RF-USRRGT-01**: El usuario registrado debe poder añadir a favoritos a una especie.
- **RF-USRRGT-02**: El usuario registrado debe poder eliminar de favoritos a una especie.
- **RF-USRRGT-03**: El usuario registrado debe poder crear una publicación en el foro.
- **RF-USRRGT-04**: El usuario registrado debe poder modificar una publicación propia en el foro.
- **RF-USRRGT-05**: El usuario registrado debe poder eliminar una publicación propia en el foro.


#### Rol-Administrador (ADM)
- **RF-ADM-01**: El administrador debe poder añadir una especie.
- **RF-ADM-02**: El administrador debe poder modificar una especie.
- **RF-ADM-03**: El administrador debe poder eliminar una especie.
- **RF-ADM-04**: El administrador debe poder añadir una noticia.
- **RF-ADM-05**: El administrador debe poder modificar una noticia.
- **RF-ADM-06**: El administrador debe poder eliminar una noticia.
- **RF-ADM-07**: El administrador debe poder crear una publicación con prioridad en el foro. 
- **RF-ADM-08**: El administrador debe poder modificar cualquier publicación en el foro.
- **RF-ADM-09**: El administrador debe poder eliminar cualquier publicación en el foro.

---

## Requerimientos No Funcionales
- **RNF-01: Estructura básica de rutas y navegación**
  - El sistema debe contar con una estructura de navegación clara y consistente.
  - La barra de navegación debe mantenerse visible o accesible desde todas las vistas principales.
  - Cada vista debe representar correctamente una funcionalidad específica del sistema (por ejemplo, inicio, registro, noticias, foro, etc.).

- **RNF-02: Usabilidad**
  - La interfaz debe ser clara y fácil de entender para el usuario final.
  - Se debe aplicar un diseño coherente, usando íconos y etiquetas comprensibles.
  - Se deben considerar al menos dos patrones de diseño UX básicos:
    - Menú de navegación visible en todas las vistas principales.
    - Confirmación visual de acciones del usuario (por ejemplo, al enviar formularios).

- **RNF-03: Responsividad**
  - La aplicación debe adaptarse correctamente a distintos tamaños de pantalla (computador y móvil).
  - Se debe emplear diseño responsive utilizando CSS o frameworks como Ionic o Bootstrap.

- **RNF-04: Seguridad**
  - Se deben implementar roles: Usuario de visita, Usuario registrado y Administrador, con control de acceso según permisos.
  - Las rutas protegidas deben validarse mediante middleware de autenticación.
  - El sistema debe utilizar **JSON Web Tokens (JWT)** para manejar sesiones seguras y autenticación basada en tokens.

- **RNF-05: Organización del Frontend**
  - El proyecto debe seguir una estructura modular clara en el cliente:
    - `/pages` para vistas principales.
    - `/services` para la lógica de conexión con API.
    - `/assets` para archivos estáticos como imágenes o íconos.

- **RNF-06: Organización del Backend**
  - El proyecto backend debe mantener una estructura ordenada por responsabilidades:
    - `/routes` para definir las rutas de la API.
    - `/controllers` para la lógica de cada endpoint.
    - `/models` para la conexión con la base de datos.
    - `/middlewares` para validaciones y autenticación.
    - `/config` para configuraciones generales (por ejemplo, conexión a base de datos).

- **RNF-07: Modularidad y escalabilidad**
  - El sistema debe estar estructurado de forma modular, permitiendo una escalabilidad progresiva y un mantenimiento eficiente del código.
  - Cada módulo debe tener responsabilidades bien definidas para evitar acoplamientos innecesarios.
  
---

## 3. [Estructura de Navegación](https://whimsical.com/chilefauna-Tb9MqdBW46YqzTZWMTxfcz)
---

## 4. Experiencia de Usuario
  - En el desarrollo de la aplicación, hemos considerado la experiencia del usuario, asegurando que la interfaz sea responsiva y se adapte a diferentes dispositivos y tamaños de pantalla. Además, nos hemos enfocado en que la aplicación sea intuitiva y simple de usar, buscando siempre facilitar la interacción del usuario.

---

## 5. [Prototipo de Diseño Base - Figma](https://www.figma.com/design/lLOef7YWi8NfUM0lYz78GO/ChileFauna-ProyectoWeb?node-id=33-444&t=bvsW8zplUBVVOAPT-1)
---
## 6. Tecnologías Utilizadas
- **Ionic (Incluye HTML, CSS & TS): Framework de Desarrollo Web y Móvil**
- **Angular: Framework de Desarrollo Frontend**
- **NgModules: Herramienta de Organización**
- **Figma: Herramienta de Prototipado**
- **Whimsical: Herramienta de Definición de Estructura de Navegación**
- **Google Docs: Herramienta Colaborativa para Registro de Ideas Iniciales**
- **WhatsApp & Discord: Medios de Comunicación del Equipo**
