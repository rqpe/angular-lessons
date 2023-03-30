# Angular

## Introducción a TypeScript

### Descripción y motivación

TypeScript (TS en adelante) es un superset de JavaScript (JS en adelante), es decir, soporta toda la sintaxis de JS y además añade nuevas palabras reservadas y conceptos a implementar, enriqueciéndolo.

El objetivo principal de usar TS es desarrollar aplicaciones más robustas, escalables y que se beneficien de características propias de otros lenguajes de programación como el tipado, el diseño orientado a objetos, entre otras.

### Instalación y entorno

Se puede instalar vía `npm` de forma global o local a un proyecto:

    # Global
    npm install --global typescript

    # Local
    npm install typescript --save-dev

Y ejecutarlo según el caso:

    # Global
    tsc index.ts

    # Local
    npx tsc index.ts

Para configurar el compilador para cada proyecto, es posible establecer unas opciones personalizadas mediante el fichero `tsconfig.json`, que se puede generar con:

    tsc init

Opcionalmente y en caso de que el proyecto concreto requiera de otros paquetes y/o librerías de terceros no desarrolladas inicialmente en TS, es posible añadir un fichero de declaraciones extra a los módulos JS a incluir, llamado `index.d.ts`.

Para algunas librerías concretas del ecosistema de TS (e.g., *jquery*), existe el proyecto *DefinitelyTyped* mantenido por la comunidad, que ofrece definiciones de tipos de alta calidad para dotar de la mayor retrocompatibilidad posible:

    npm install --save-dev @types/jquery

### Sintaxis básica

- Tipos simples y especiales
- Arrays y tuplas
- Objetos y enumerados
- Alias e interfaces
- Unión de tipos
- Funciones
- Casting
- Clases
- Genéricos
- Tipos de utilidades
- keyof, null y undefined

## Introducción a Angular. Instalación

Para empezar a trabajar con Angular, es necesario tener instalados los siguientes prerrequisitos:

- Node.js y npm
- TypeScript
- Angular CLI:

      npm install -g @angular/cli

*Nota para Windows: Si no se ha hecho previamente, es necesario activar la siguiente política en la PowerShell:*

    Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned

[Descarga e instalación de Node](https://nodejs.org/en/download)

## Creación de proyectos

Para crear un proyecto nuevo, también llamado espacio de trabajo (*workspace*), el primer paso es ejecutar con Angular CLI el siguiente comando:

    ng new my-app

Esto realizará un proceso de *bootstraping* que consistirá en crear una carpeta con el nombre indicado, en la que descargará y añadirá todos los ficheros y carpetas necesarios, entre los que se encuentran todos los paquetes npm de las dependencias del proyecto, alojadas en `node_modules/`.

Inicialmente el CLI realizará unas preguntas de configuración inicial de cara a personalización de cada proyecto, tales como preprocesador de CSS (Sass, Less, etc.) si se desea, añadir o no el enrutamiento de Angular, entre otras.

Una vez terminado el *bootstraping*, se puede arrancar y servir localmente la aplicación recién creada en el paso anterior con los comandos:

    cd my-app
    ng serve --open

Angular implementa los proyectos basándose en una arquitectura por componentes, que son piezas o módulos independientes y reutilizables que contienen los elementos a representar (HTML), el estilo (CSS) y la lógica de presentación (TypeScript).

![Conceptos generales](overview.png)

Además, existen otros tipos de elementos en Angular además de los componentes, como son los servicios, los pipes, directivas, clases e interfaces, etc. Todos ellos se pueden crear mediante el CLI con la opción `generate`:

    ng generate component hello-world

## Componentes

Los componentes son piezas o módulos reutilizables con los que construir aplicaciones, y que están formados por una clase TypeScript que contiene un decorador `@Component()`, que especifica:

- El selector que define cómo llamar al componente.
- La plantilla con los elementos HTML del componente.
- Los estilos CSS opcionales que definen su apariencia.

Ejemplo (TypeScript):

    import { Component } from '@angular/core'

    @Component({
      selector: 'hello-world',
      template: `
          <h2>Hola Mundo</h2>
          <p>Mi primer componente</p>
      `
    })

    export class HelloWorldComponent {
      // Datos y lógica del componente
    }

Para usarlo, se llamará de la siguiente manera en la plantilla HTML del componente `app`:

    <hello-world></hello-world>

Lo que renderizará lo siguiente:

    <hello-world>
      <h2>Hola Mundo</h2>
      <p>Mi primer componente</p>
    </hello-world>

En el ejemplo anterior el HTML se carga de forma estática a partir de un código literal.

Angular permite indicar un fichero de plantilla que se renderiza dinámicamente con elementos específicos que el framework provee (`event/property binding`, directivas, `pipes`, etc.) para definir contenidos, valores de atributos y manejadores de eventos:

  - TypeScript
  
    ```
    import { Component } from '@angular/core';

    @Component ({
      selector: 'toggle-example',
      templateUrl: './toggle-example.component.html',
      styleUrls: ['./toggle-example.component.css']
    })

    export class ToggleExampleComponent {
      myId = "text1"
      fontColor = "blue"

      message = "Empieza el show"
      disabledBtn = true

      statusBtn = false
      btnMessage = "OFF"

      start() {
        this.disabledBtn = false

        alert(this.message)
      }

      onToggleClick() {
        if (!this.statusBtn) {
          this.btnMessage = 'ON'
        } else {
          this.btnMessage = 'OFF'
        }

        this.statusBtn = !this.statusBtn
      }
    }
    ```

  - HTML
  
    ```
    <button
      type="button"
      (click)="start()">
      Empezar
    </button>

    <button
      type="button"
      [disabled]="disabledBtn"
      (click)="onToggleClick()">
      {{ btnMessage }}
    </button>

    <div *ngIf="statusBtn">
      <p
        [id]="myId"
        [style.color]="fontColor">
        Mi color favorito es {{ fontColor }}
      </p>
    </div>
    ```

## Referencias generales

[Documentación oficial TypeScript](https://www.typescriptlang.org/es/)  
[Introducción a TypeScript](https://codigofacilito.com/articulos/typescript)  
[TypeScript (w3schools)](https://www.w3schools.com/typescript/index.php)  
[TypeScript express](https://www.typescript.express/)

[Documentación oficial Angular](https://angular.io/docs)  
[Introducción a Angular](https://angular.io/guide/architecture)  
[Tutorial Angular](https://angular.io/tutorial/tour-of-heroes)

[Guía de estilo](https://github.com/johnpapa/angular-styleguide)  
[Arquitectura en Angular](https://medium.com/notasdeangular/arquitectura-de-nuestras-aplicaciones-en-angular-84df61691b57)

## Ejercicios

1. [TypeScript](https://www.w3schools.com/typescript/typescript_exercises.php)  