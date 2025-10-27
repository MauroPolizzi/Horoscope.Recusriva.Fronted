## Horoscope.Recursiva.Backend

Pasos a seguir para ejecutar y probar el proyecto.

📋 Descripción
Este proyecto es una aplicación frontend desarrollada con Angular 18 y TypeScript 5.4, que consume los servicios expuestos por la API de Horoscope,Api (.NET 8).
Implementa una arquitectura modular, componentes reutilizables, servicios centralizados para comunicación HTTP y gestión de estado, y un diseño responsivo con Bootstrap 5.

🚀 Requisitos previos
Antes de ejecutar el proyecto, asegurate de tener instalado lo siguiente:
| Herramienta                               | Versión recomendada | Comando para verificar |
| ----------------------------------------- | ------------------- | ---------------------- |
| [Node.js](https://nodejs.org/en/download) | 20.x o superior     | `node -v`              |
| [npm](https://www.npmjs.com/get-npm)      | 10.x o superior     | `npm -v`               |
| [Angular CLI](https://angular.dev/)       | 18.x                | `ng version`           |
| [Git](https://git-scm.com/)               | —                   | `git --version`        |

📦 Instalación del proyecto
1️⃣ Clonar el repositorio
git clone https://github.com/tu-usuario/tu-repositorio-frontend.git
cd tu-repositorio-frontend

2️⃣ Instalar dependencias
npm install

⚙️ Configuración de entorno
3️⃣ Configurar la URL de la API
Edita src/core/services/api.service.ts con la URL base de tu API local (la de tu proyecto NET. cambiar solo el puerto):

▶️ Ejecución del proyecto
4️⃣ Servir la aplicación en modo desarrollo
ng serve

La aplicación se ejecutará por defecto en:
http://localhost:4200

💡 Si deseas cambiar el puerto:
ng serve --port 4300

🧩 Integración con el Backend (.NET 8)
Asegúrate de que la API .NET 8 esté ejecutándose antes de levantar el frontend.
Si ambos proyectos están en local:

| Proyecto           | URL local                                        |
| ------------------ | ------------------------------------------------ |
| API (.NET 8)       | [https://localhost:5001](https://localhost:5001) |
| Frontend (Angular) | [http://localhost:4200](http://localhost:4200)   |

🧑‍💻 Tecnologías utilizadas
Angular 18
TypeScript 5.4
RxJS
Bootstrap 5
SCSS
Angular Router
HttpClient
LocalStorage / SessionStorage