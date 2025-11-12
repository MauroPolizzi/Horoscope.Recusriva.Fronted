# 🌠 Horoscope.Recursiva.Frontend

Aplicación **frontend** desarrollada con **Angular 18** y **TypeScript 5.4**, que consume los servicios expuestos por la API **Horoscope.Recursiva.Backend** (.NET 8).  

El proyecto implementa una arquitectura modular, componentes reutilizables, servicios centralizados para comunicación HTTP y gestión de estado, y un diseño totalmente **responsivo** con **Bootstrap 5**.

---

## 📋 Descripción

Este frontend permite interactuar con el backend de horóscopos, ofreciendo una experiencia de usuario fluida y moderna.  
Está diseñado bajo buenas prácticas de desarrollo web, empleando **Angular Router** para la navegación, **RxJS** para manejo reactivo de datos, y **SCSS** para estilos mantenibles.

---

## 🚀 Requisitos previos

Antes de ejecutar el proyecto, asegúrate de tener instaladas las siguientes herramientas:

| Herramienta | Versión recomendada | Comando para verificar |
|--------------|---------------------|------------------------|
| [Node.js](https://nodejs.org/en/download) | 20.x o superior | `node -v` |
| [npm](https://www.npmjs.com/get-npm) | 10.x o superior | `npm -v` |
| [Angular CLI](https://angular.dev/) | 18.x | `ng version` |
| [Git](https://git-scm.com/) | — | `git --version` |

---

## 📦 Instalación del proyecto

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/MauroPolizzi/Horoscope.Recusriva.Fronted.git
```

### 2️⃣ Instalar dependencias

```bash
npm install
```

---

## ⚙️ Configuración de entorno

### 3️⃣ Configurar la URL base de la API

Edita el archivo:  
**`src/core/services/api.service.ts`**

Allí se encuentra la URL base de conexión hacia la API backend.  
Modifica únicamente el puerto si es necesario, manteniendo el formato del endpoint:

```typescript
// src/core/services/api.service.ts
private baseUrl = 'https://localhost:5001/api';
```

Si tu backend se ejecuta en otro puerto, por ejemplo 5002:

```typescript
private baseUrl = 'https://localhost:5002/api';
```

> 💡 Asegúrate de que la API .NET 8 esté ejecutándose antes de levantar el frontend.

---

## ▶️ Ejecución del proyecto

### 4️⃣ Servir la aplicación en modo desarrollo

```bash
ng serve
```

La aplicación se ejecutará por defecto en:

👉 [http://localhost:4200](http://localhost:4200)

Si deseas cambiar el puerto:

```bash
ng serve --port 4300
```

---

## 🔗 Integración con el Backend (.NET 8)

Para un funcionamiento correcto, el backend debe estar activo antes de ejecutar el frontend.  
Si ambos proyectos se ejecutan localmente, las URLs por defecto son:

| Proyecto | URL local |
|-----------|------------|
| API (.NET 8) | [https://localhost:5001](https://localhost:5001) |
| Frontend (Angular) | [http://localhost:4200](http://localhost:4200) |

---

## 🧩 Estructura del proyecto

```
Horoscope.Recursiva.Frontend/
├── src/
│   ├── app/                 # Módulos y componentes principales
│   ├── core/                # Servicios, interceptores, modelos, utilidades
│   ├── assets/              # Recursos estáticos (imágenes, íconos, etc.)
│   ├── environments/        # Configuraciones por entorno (dev/prod)
│   └── styles/              # Estilos globales (SCSS)
├── angular.json             # Configuración general del proyecto Angular
├── package.json             # Dependencias y scripts del proyecto
└── README.md
```

---

## 🧠 Tecnologías principales

- **Angular 18**
- **TypeScript 5.4**
- **RxJS**
- **Bootstrap 5**
- **SCSS**
- **Angular Router**
- **HttpClient**
- **LocalStorage / SessionStorage**

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas.  

Para colaborar:

1. Crea un *fork* del repositorio.  
2. Crea una nueva rama:  
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. Realiza tus cambios y haz commit.  
4. Abre un *Pull Request* describiendo tu aporte.

---

