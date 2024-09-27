# FrontEldChall

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.3.

## Estructura de carpetas:

src/app/core: Contiene servicios, guards e interceptores globales.
-core:
    /auth: Contiene los servicios de autenticación y archivos TS que utilizan NgRx para el manejo de estados, es posible mejorar esta estructura agregando y dividiendo el Store, Models y Reducers en una estructura de carpetas más eficiente
src/app/features: Contiene las secciones Admin y User, cada componente 'padre' contiene componentes 'hijos', a su vez, el componente padre tiene su propia carpeta de Servicios 
src/app/shared: Debería contener componentes compartidos, como el header, footer. También debería contener directivas, módulos y pipes para que estos sean reutilizables en toda la aplicación.

## Usuarios para hacer el login

'administrador'

username: admin
password: admin123

'usuario comun'
username: user
password: user123

## Tecnologías utilizadas

Se usó el siguiente environment tecnológico:

NodeJs:
v22.0.0

npm:
10.8.1

Angular:
@angular-devkit/architect       0.1802.5
@angular-devkit/build-angular   18.2.5
@angular-devkit/core            18.2.5
@angular-devkit/schematics      18.2.5
@schematics/angular             18.2.5
rxjs                            7.8.1
typescript                      5.4.5
zone.js                         0.14.10



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
