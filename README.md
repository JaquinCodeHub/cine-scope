# 🎬 CineScope

Aplicación web que permite a los usuarios buscar películas utilizando la API pública de TMDB, consultar detalles, ver pósters y gestionar una lista de favoritas.

Incluye paginación, filtros avanzados y una interfaz moderna, rápida y responsiva. Las películas favoritas se almacenan localmente en el navegador.

---

## 🚀 Tecnologías utilizadas

### 🔧 Frontend

- **Next.js** – Framework React moderno con soporte para SSR, SSG y rutas API.
- **Tailwind CSS** – Utilidades CSS para diseño responsivo, limpio y personalizable.
- **shadcn/ui** – Componentes accesibles listos para producción, basados en Radix UI y estilizados con Tailwind.
- **Skeleton UI** – Indicadores de carga para una mejor experiencia mientras se obtienen los datos.
- **React Query** *(opcional)* – Para fetching eficiente, caché y sincronización de datos.

### 🔐 Autenticación

- **Auth.js (antes NextAuth.js)** – Solución de autenticación con múltiples proveedores (Google, GitHub, etc.).

---

## 🎥 APIs utilizadas

| API            | Descripción                                                                 | Link                                  |
|----------------|-----------------------------------------------------------------------------|---------------------------------------|
| **TMDB API**   | Datos de películas, series, actores, trailers, géneros, etc.                | [developer.themoviedb.org](https://developer.themoviedb.org) |
| **OMDb API**   | Calificaciones (IMDb, Rotten Tomatoes), sinopsis, año, pósters, etc.        | [omdbapi.com](http://www.omdbapi.com) |
| **Watchmode API** | Información sobre plataformas donde ver contenido (Netflix, Prime, etc.) | [watchmode.com/api](https://watchmode.com/api) |

---

## 💾 Persistencia de datos

- No se utiliza una base de datos externa.
- Las películas marcadas como favoritas se almacenan localmente mediante **LocalStorage** del navegador.

---

## ⚙️ Funcionalidades

- 🔍 Búsqueda de películas en tiempo real
- 📄 Paginación de resultados
- 🎚️ Filtros avanzados por género, año, popularidad
- 🌟 Gestión de favoritas (guardar/quitar)
- 🖼️ Visualización de pósters y detalles
- 💻 Interfaz responsive y accesible
- ⏳ Carga optimizada con skeletons
- 🔐 Autenticación de usuarios (opcional)

## 📦 Instalación

```bash
git clone https://github.com/JaquinCodeHub/cine-scope.git
cd cine-scope
npm install
cp .env.local.example .env.local
# Añade tus claves de API en .env.local
npm run dev