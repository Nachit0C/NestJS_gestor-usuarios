# Gestor de Usuarios con NestJS

Este es un proyecto personal para aplicar lo aprendido de NestJS. La aplicación permite gestionar usuarios mediante un CRUD completo, integrando autenticación para procesos de Login y Register, con persistencia en PostgreSQL.

## Tecnologías

### Backend & Core
* **NestJS**: Framework principal.
* **TypeScript**: Lenguaje base para tipado estático.
* **TypeORM**: ORM para la gestión de la base de datos.
* **Class-Validator & Class-Transformer**: Validación de DTOs en tiempo de ejecución.
* **@nestjs/config**: Manejo de variables de entorno.

### Base de Datos & Infraestructura
* **PostgreSQL**: Base de datos relacional.
* **Docker & Docker Compose**: Contenerización de la app y la base de datos.

### Seguridad (Próximamente)
* **Bcrypt**: Para el hasheo de contraseñas.
* **Passport & JWT**: Para la estrategia de autenticación y protección de rutas.

## Avance del Proyecto

### Completado ✅
* [x] Configuración de entorno Docker (App + DB).
* [x] Estructura modular (AppModule, DatabaseModule, UsersModule).
* [x] Entidad de Usuario y conexión con PostgreSQL.
* [x] CRUD básico de usuarios.
* [x] Implementación de DTOs.

### Pendiente ⏳
* [ ] Implementación de Bcrypt para seguridad de contraseñas.
* [ ] Creación del módulo de Autenticación (AuthModule).
* [ ] Generación y validación de tokens JWT.
* [ ] Implementación de Guards para proteger rutas privadas.
* [ ] Manejo de excepciones personalizadas.

## Cómo ejecutar el proyecto

1. Clonar el repositorio.
2. Crear un archivo `.env` basado en `.env.example`.
```
DB_USER=???
DB_PASSWORD=???
DB_HOST=???
DB_PORT=???
DB_NAME=???
```
4. Ejecutar el comando:
```
docker-compose up --build

```
La API estará disponible en `http://localhost:3000`.
