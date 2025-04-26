# Presentado por:
- Miguel Bernales
- Pablo Daza
- Alonso Maurel
- Monserrath Morales
- Eduardo Pérez

# Proyecto Aplicación Web y Móvil ChileFauna 

##  Índice
1. [Resumen del Proyecto](#resumen-del-proyecto)
2. [Requerimientos](#requerimientos)
3. [Arquitectura de la Información](#arquitectura-de-la-información)
3. [Diseño de prototipos](#prototipo-de-diseño)
4. [Librerías en Angular](#liberías-usadas-con-angular)

## Resumen del Proyecto
Aplicacion enfocada en informar sobre las especies nativas chilenas para su proteccion y reconocimiento. La app contará con datos importantes como la zona donde se encuentran, el grado de peligrosidad y qué hacer ante un eventual encuentro. Además de características adicionales como, por ejemplo, noticias y un foro asociado.

---
## Requerimientos

## Roles del Sistema
- **Usuario Registrado**: Visualizar información y poder añadir animales a su lista de favoritos.
- **Usuario de Visita**: Visualizar información.
- **Administrador**: Control total sobre el sistema.


## Requerimientos Funcionales por Rol

### Rol-Usuario Registrado (USRRGT)

- **RF-USRRGT-01**: El usuario busca una especie por su nombre en el sistema.
- **RF-USRRGT-02**: El sistema muestra la descripción de una especie.
- **RF-USRRGT-03**: El sistema muestra la ubicación geográfica de una especie.
- **RF-USRRGT-04**: El sistema muestra contenido visual de una especie (fotos, videos y/o imágenes).
- **RF-USRRGT-05**: El sistema muestra un indicador de peligro de una especie.
- **RF-USRRGT-06**: El sistema muestra noticias relacionadas a las especies.
- **RF-USRRGT-07**: El sistema muestra un catálogo de especies.
- **RF-USRRGT-08**: El sistema muestra las principales amenazas de las especies.
- **RF-USRRGT-09**: El usuario puede añadir a favoritos a una especie.



### Rol-Usuario de Visita (USRVIS)

- **RF-USRVIS-01**: El usuario busca una especie por su nombre en el sistema.
- **RF-USRVIS-02**: El sistema muestra la descripción de una especie.
- **RF-USRVIS-03**: El sistema muestra la ubicación geográfica de una especie.
- **RF-USRVIS-04**: El sistema muestra contenido visual de una especie (fotos, videos y/o imágenes).
- **RF-USRVIS-05**: El sistema muestra un indicador de peligro de una especie.
- **RF-USRVIS-06**: El sistema muestra noticias relacionadas a las especies.
- **RF-USRVIS-07**: El sistema muestra un catálogo de especies.
- **RF-USRVIS-08**: El sistema muestra las principales amenazas de las especies.


### Rol-Administrador (ADM)
- **RF-ADM-01**: El administrador puede añadir una especie.
- **RF-ADM-02**: El administrador puede modificar una especie.

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
  - El sistema debe ser capaz de manejar más de **10,000 visitas simultáneas** sin pérdida notable de rendimiento.

- **RNF-06: Tamaño en su versión móvil**
  - El sistema debe pesar menos de 50MB

- **RNF-07: Disponibilidad**
  - El sistema debe estar disponible el 99% del tiempo, medido de forma semanal.


## Arquitectura de la Información 
[Estructura de Navegación](https://whimsical.com/chilefauna-Tb9MqdBW46YqzTZWMTxfcz)
---

## Experiencia de Usuario
En el desarrollo de la aplicación, hemos considerado la experiencia del usuario, asegurando que la interfaz sea responsiva y se adapte a diferentes dispositivos y tamaños de pantalla. Además, nos hemos enfocado en que la aplicación sea intuitiva y simple de usar, buscando siempre facilitar la interacción del usuario.
---

## Prototipo de diseño 
[Figma - Prototipo de Gestión de Productos](https://www.figma.com/design/lLOef7YWi8NfUM0lYz78GO/ChileFauna-ProyectoWeb?node-id=33-444&t=bvsW8zplUBVVOAPT-1)
---
## Liberías usadas con Angular
- Bootstrap

## Consideraciones adicionales
- RECORDAR USAR MODO DIA EN EL NAVEGADOR, NO HAY MODO OSCURO

## Tecnologías
- **Ionic Framework**
- **Angular**
- **TypeScript**
- **Figma** 
