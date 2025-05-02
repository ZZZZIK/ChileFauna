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
## 1. Resumen del Proyecto
Aplicacion enfocada en informar sobre las especies nativas chilenas para su proteccion y reconocimiento. La aplicación contará con datos de las especies, tales como, la ubicación, el grado de peligrosidad y qué hacer ante un eventual encuentro. Además de características adicionales como noticias y un foro asociado.

---
## 2. Requerimientos de la Aplicación

### Roles de la Aplicación
- **Usuario General (USRGNL)**: Corresponde a un rol general de la aplicación, que incluye a los usuarios no registrados, usuarios registrados y administradores.
- **Usuario Registrado (USRRGT)**: Corresponde a un rol específico de la aplicación, este rol corresponde a aquellos usuarios que completan el proceso de registro de la aplicación
- **Administrador (ADM)**: Corresponde a un rol específico de la aplicación


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
- **RNF-01: Tiempo de respuesta**
  - El sistema debe responder a operaciones clave (registro, edición, búsqueda) en menos de **3 segundos** en el 95% de los casos.

- **RNF-02: Seguridad**
  - Los roles deben restringir el acceso a funciones según permisos (Usuario Registrado, Usuario de Visita & Administrador).
  - Acceso protegido por HTTPS y almacenamiento seguro de contraseñas.

- **RNF-03: Usabilidad**
  - La interfaz debe ser intuitiva y fácil de usar.
  - Compatible con pantallas móviles y escritorio (responsive design).

- **RNF-04: Compatibilidad**
  - Compatible con los navegadores:
    - Google Chrome
    - Mozilla Firefox

- **RNF-05: Escalabilidad**
  - El sistema debe ser capaz de manejar más de **1,000 visitas simultáneas** sin pérdida notable de rendimiento.

- **RNF-06: Tamaño en su versión móvil**
  - El sistema debe pesar entre 30MB a 60MB.

- **RNF-07: Disponibilidad**
  - El sistema debe estar disponible el 99% del tiempo, semanalmente.

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


