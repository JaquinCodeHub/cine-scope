## Cine Scope - Frontend Routes Map (SPA)

### Información General
- **Sistema**: Cine Scope - Aplicación de Búsqueda y Gestión de Películas
- **Tipo**: Single Page Application (SPA)
- **Framework sugerido**: React.js / Vue.js / Next.js
- **Router**: React Router / Vue Router / Next.js Router
- **Base URL**: `https://cinescope.app`
- **Autenticación**: JWT Token + Guards (opcional para funciones básicas)
- **Generado**: 2025-08-23 01:35:49 UTC
- **Documentado por**: ShivaAtom

---

## 🏠 Módulo Principal y Búsqueda
*Páginas públicas principales para búsqueda de películas*

| Ruta | Componente | Descripción | Auth Required | Props/Estado | Datos API |
|------|------------|-------------|---------------|--------------|-----------|
| `/` | `HomePage` | Página de inicio con películas populares | No | `{trending, popular}` | `/movies/popular` |
| `/search` | `SearchPage` | Búsqueda principal de películas | No | `{query, filters, page}` | `/search/movies` |
| `/search/advanced` | `AdvancedSearchPage` | Búsqueda con filtros avanzados | No | `{filters, sorting}` | `/search/movies` |
| `/movies/popular` | `PopularMoviesPage` | Películas más populares | No | `{page, movies}` | `/movies/popular` |
| `/movies/top-rated` | `TopRatedMoviesPage` | Películas mejor valoradas | No | `{page, movies}` | `/movies/top-rated` |
| `/movies/now-playing` | `NowPlayingPage` | Películas en cartelera | No | `{page, movies}` | `/movies/now-playing` |
| `/movies/upcoming` | `UpcomingMoviesPage` | Próximos estrenos | No | `{page, movies}` | `/movies/upcoming` |
| `/genres` | `GenresPage` | Lista de géneros disponibles | No | `{genres}` | `/genres` |
| `/genres/:id` | `GenreMoviesPage` | Películas por género específico | No | `{genreId, page}` | `/genres/:id/movies` |

### Componentes de Búsqueda:
```
src/
├── components/search/
│   ├── SearchBar.vue           // Barra de búsqueda principal
│   ├── SearchFilters.vue       // Filtros básicos (año, género, rating)
│   ├── AdvancedFilters.vue     // Filtros avanzados completos
│   ├── SearchResults.vue       // Grilla de resultados de búsqueda
│   ├── SearchSuggestions.vue   // Autocompletado y sugerencias
│   ├── NoResults.vue           // Componente cuando no hay resultados
│   └── SearchHistory.vue       // Historial de búsquedas (si está logueado)
├── pages/search/
│   ├── HomePage.vue            // Página principal
│   ├── SearchPage.vue          // Búsqueda principal
│   ├── AdvancedSearchPage.vue  // Búsqueda avanzada
│   ├── PopularMoviesPage.vue   // Películas populares
│   ├── TopRatedMoviesPage.vue  // Mejor valoradas
│   ├── NowPlayingPage.vue      // En cartelera
│   ├── UpcomingMoviesPage.vue  // Próximos estrenos
│   ├── GenresPage.vue          // Lista de géneros
│   └── GenreMoviesPage.vue     // Películas por género
```

---

## 🎬 Módulo de Detalle de Películas
*Información completa y multimedia de películas*

| Ruta | Componente | Descripción | Auth Required | Props/Estado | Datos API |
|------|------------|-------------|---------------|--------------|-----------|
| `/movie/:id` | `MovieDetailPage` | Detalle completo de película | No | `{movieId, isFavorite}` | `/movies/:id` |
| `/movie/:id/cast` | `MovieCastPage` | Reparto y equipo completo | No | `{movieId}` | `/movies/:id/credits` |
| `/movie/:id/images` | `MovieImagesPage` | Galería de imágenes y pósters | No | `{movieId}` | `/movies/:id/images` |
| `/movie/:id/videos` | `MovieVideosPage` | Trailers y videos relacionados | No | `{movieId}` | `/movies/:id/videos` |
| `/movie/:id/reviews` | `MovieReviewsPage` | Reseñas y críticas | No | `{movieId, page}` | `/movies/:id/reviews` |
| `/movie/:id/similar` | `SimilarMoviesPage` | Películas similares | No | `{movieId}` | `/movies/:id/similar` |
| `/movie/:id/recommendations` | `RecommendationsPage` | Recomendaciones basadas en la película | No | `{movieId}` | `/movies/:id/recommendations` |

### Componentes de Película:
```
src/
├── components/movie/
│   ├── MovieCard.vue           // Tarjeta de película (múltiples tamaños)
│   ├── MoviePoster.vue         // Componente de póster optimizado
│   ├── MovieHero.vue           // Hero section con backdrop
│   ├── MovieInfo.vue           // Información básica (título, año, etc.)
│   ├── MovieRating.vue         // Rating y votos
│   ├── MovieGenres.vue         // Lista de géneros
│   ├── MovieRuntime.vue        // Duración formateada
│   ├── MovieOverview.vue       // Sinopsis expandible
│   ├── MovieCast.vue           // Lista del reparto principal
│   ├── MovieCrew.vue           // Equipo técnico
│   ├── MovieTrailer.vue        // Player de trailer principal
│   ├── MovieImageGallery.vue   // Galería de imágenes
│   ├── MovieReview.vue         // Componente de reseña individual
│   ├── MovieMeta.vue           // Metadatos (presupuesto, recaudación)
│   └── FavoriteButton.vue      // Botón agregar/quitar favoritos
├── pages/movie/
│   ├── MovieDetailPage.vue     // Página principal de película
│   ├── MovieCastPage.vue       // Página de reparto completo
│   ├── MovieImagesPage.vue     // Galería completa
│   ├── MovieVideosPage.vue     // Videos relacionados
│   ├── MovieReviewsPage.vue    // Todas las reseñas
│   ├── SimilarMoviesPage.vue   // Películas similares
│   └── RecommendationsPage.vue // Recomendaciones
```

---

## ⭐ Módulo de Favoritos (Requiere Auth)
*Gestión personal de películas favoritas*

| Ruta | Componente | Descripción | Auth Required | Props/Estado | Datos API |
|------|------------|-------------|---------------|--------------|-----------|
| `/favorites` | `FavoritesPage` | Lista de películas favoritas | Sí | `{page, sorting, filters}` | `/user/favorites` |
| `/favorites/watched` | `WatchedMoviesPage` | Favoritos marcados como vistos | Sí | `{page, filters}` | `/user/favorites?watched=true` |
| `/favorites/unwatched` | `UnwatchedMoviesPage` | Favoritos pendientes de ver | Sí | `{page, filters}` | `/user/favorites?watched=false` |
| `/favorites/by-genre/:genreId` | `FavoritesByGenrePage` | Favoritos filtrados por género | Sí | `{genreId, page}` | `/user/favorites?genre=:id` |
| `/favorites/statistics` | `FavoriteStatsPage` | Estadísticas de favoritos | Sí | `{stats}` | `/user/favorites/stats` |
| `/favorites/export` | `ExportFavoritesPage` | Exportar lista de favoritos | Sí | `{format, options}` | `/user/favorites/export` |

### Componentes de Favoritos:
```
src/
├── components/favorites/
│   ├── FavoritesList.vue       // Lista principal de favoritos
│   ├── FavoriteCard.vue        // Tarjeta de favorito con rating personal
│   ├── FavoritesFilters.vue    // Filtros específicos (visto/no visto, género)
│   ├── FavoritesSorting.vue    // Opciones de ordenamiento
│   ├── WatchedToggle.vue       // Toggle para marcar como visto
│   ├── PersonalRating.vue      // Rating personal del usuario
│   ├── PersonalNotes.vue       // Notas personales de la película
│   ├── FavoriteStats.vue       // Estadísticas visuales
│   ├── ExportOptions.vue       // Opciones de exportación
│   └── EmptyFavorites.vue      // Estado vacío
├── pages/favorites/
│   ├── FavoritesPage.vue       // Página principal de favoritos
│   ├── WatchedMoviesPage.vue   // Películas vistas
│   ├── UnwatchedMoviesPage.vue // Pendientes de ver
│   ├── FavoritesByGenrePage.vue // Por género
│   ├── FavoriteStatsPage.vue   // Estadísticas
│   └── ExportFavoritesPage.vue // Exportar
```

---

## 📋 Módulo de Listas Personalizadas (Requiere Auth)
*Creación y gestión de listas personalizadas*

| Ruta | Componente | Descripción | Auth Required | Props/Estado | Datos API |
|------|------------|-------------|---------------|--------------|-----------|
| `/lists` | `ListsPage` | Todas las listas del usuario | Sí | `{lists}` | `/user/lists` |
| `/lists/new` | `CreateListPage` | Crear nueva lista personalizada | Sí | `{listData}` | `/user/lists` |
| `/lists/:id` | `ListDetailPage` | Detalle de lista específica | Sí | `{listId, movies}` | `/user/lists/:id` |
| `/lists/:id/edit` | `EditListPage` | Editar lista existente | Sí | `{listId, listData}` | `/user/lists/:id` |
| `/lists/:id/add-movies` | `AddMoviesPage` | Agregar películas a la lista | Sí | `{listId, searchQuery}` | `/search/movies` |
| `/lists/public` | `PublicListsPage` | Listas públicas de otros usuarios | No | `{page, filters}` | `/lists/public` |
| `/lists/shared/:shareId` | `SharedListPage` | Lista compartida por enlace | No | `{shareId}` | `/lists/shared/:id` |

### Componentes de Listas:
```
src/
├── components/lists/
│   ├── ListCard.vue            // Tarjeta de lista con preview
│   ├── ListForm.vue            // Formulario crear/editar lista
│   ├── ListHeader.vue          // Header con título, descripción, stats
│   ├── ListMovies.vue          // Películas de la lista con ordenamiento
│   ├── ListMovieItem.vue       // Item individual con notas
│   ├── AddToListModal.vue      // Modal para agregar a lista
│   ├── RemoveFromListModal.vue // Confirmación de eliminación
│   ├── ListVisibilityToggle.vue // Toggle público/privado
│   ├── ShareListModal.vue      // Modal para compartir lista
│   ├── DuplicateListModal.vue  // Modal para duplicar lista
│   ├── ListSorting.vue         // Opciones de ordenamiento
│   └── EmptyList.vue           // Estado de lista vacía
├── pages/lists/
│   ├── ListsPage.vue           // Página principal de listas
│   ├── CreateListPage.vue      // Crear nueva lista
│   ├── ListDetailPage.vue      // Detalle de lista
│   ├── EditListPage.vue        // Editar lista
│   ├── AddMoviesPage.vue       // Agregar películas
│   ├── PublicListsPage.vue     // Listas públicas
│   └── SharedListPage.vue      // Lista compartida
```

---

## 👤 Módulo de Usuario y Perfil (Requiere Auth)
*Gestión de cuenta y configuraciones personales*

| Ruta | Componente | Descripción | Auth Required | Props/Estado | Datos API |
|------|------------|-------------|---------------|--------------|-----------|
| `/profile` | `ProfilePage` | Perfil del usuario actual | Sí | `{user, stats}` | `/user/profile` |
| `/profile/edit` | `EditProfilePage` | Editar información personal | Sí | `{user}` | `/user/profile` |
| `/profile/settings` | `SettingsPage` | Configuraciones de la aplicación | Sí | `{preferences}` | `/user/preferences` |
| `/profile/activity` | `ActivityPage` | Historial de actividad del usuario | Sí | `{activities, page}` | `/user/activity` |
| `/profile/search-history` | `SearchHistoryPage` | Historial de búsquedas | Sí | `{searches, page}` | `/user/search-history` |
| `/profile/statistics` | `UserStatsPage` | Estadísticas personales completas | Sí | `{stats}` | `/user/statistics` |

### Componentes de Usuario:
```
src/
├── components/user/
│   ├── UserProfile.vue         // Información del perfil
│   ├── UserAvatar.vue          // Avatar con upload
│   ├── ProfileForm.vue         // Formulario de edición
│   ├── PasswordChange.vue      // Cambio de contraseña
│   ├── UserPreferences.vue     // Preferencias de la app
│   ├── LanguageSelector.vue    // Selector de idioma
│   ├── ThemeSelector.vue       // Selector de tema
│   ├── NotificationSettings.vue // Configuración de notificaciones
│   ├── ActivityFeed.vue        // Feed de actividades
│   ├── SearchHistoryList.vue   // Lista de búsquedas pasadas
│   ├── UserStatistics.vue      // Estadísticas visuales
│   └── AccountActions.vue      // Acciones de cuenta (desactivar, etc.)
├── pages/user/
│   ├── ProfilePage.vue         // Página de perfil
│   ├── EditProfilePage.vue     // Editar perfil
│   ├── SettingsPage.vue        // Configuraciones
│   ├── ActivityPage.vue        // Actividad del usuario
│   ├── SearchHistoryPage.vue   // Historial de búsquedas
│   └── UserStatsPage.vue       // Estadísticas completas
```

---

## 🔐 Módulo de Autenticación
*Login, registro y gestión de sesión*

| Ruta | Componente | Descripción | Auth Required | Props/Estado | Redirección |
|------|------------|-------------|---------------|--------------|-------------|
| `/login` | `LoginPage` | Formulario de inicio de sesión | No | `{returnUrl}` | → `/profile` o `returnUrl` |
| `/register` | `RegisterPage` | Registro de nuevo usuario | No | - | → `/profile` |
| `/forgot-password` | `ForgotPasswordPage` | Recuperar contraseña | No | - | → `/login` |
| `/reset-password/:token` | `ResetPasswordPage` | Restablecer contraseña | No | `{token}` | → `/login` |
| `/verify-email/:token` | `VerifyEmailPage` | Verificar email | No | `{token}` | → `/login` |
| `/logout` | `LogoutPage` | Cerrar sesión y limpiar datos | Sí | - | → `/` |

### Componentes de Autenticación:
```
src/
├── components/auth/
│   ├── LoginForm.vue           // Formulario de login
│   ├── RegisterForm.vue        // Formulario de registro
│   ├── ForgotPasswordForm.vue  // Formulario recuperar contraseña
│   ├── ResetPasswordForm.vue   // Formulario restablecer contraseña
│   ├── EmailVerification.vue   // Componente verificación email
│   ├── AuthGuard.vue           // Guard de rutas protegidas
│   ├── GuestGuard.vue          // Guard para usuarios no autenticados
│   └── LogoutConfirm.vue       // Confirmación de logout
├── pages/auth/
│   ├── LoginPage.vue           // Página de login
│   ├── RegisterPage.vue        // Página de registro
│   ├── ForgotPasswordPage.vue  // Recuperar contraseña
│   ├── ResetPasswordPage.vue   // Restablecer contraseña
│   ├── VerifyEmailPage.vue     // Verificar email
│   └── LogoutPage.vue          // Logout y redirección
```

---

## 🔍 Módulo de Navegación Global
*Componentes de navegación y utilidades*

| Ruta | Componente | Descripción | Auth Required | Props/Estado | Datos API |
|------|------------|-------------|---------------|--------------|-----------|
| `/about` | `AboutPage` | Información sobre la aplicación | No | - | - |
| `/privacy` | `PrivacyPage` | Política de privacidad | No | - | - |
| `/terms` | `TermsPage` | Términos y condiciones | No | - | - |
| `/contact` | `ContactPage` | Página de contacto | No | - | - |
| `/help` | `HelpPage` | Ayuda y documentación | No | - | - |
| `/404` | `NotFoundPage` | Página no encontrada | No | `{requestedUrl}` | - |
| `/offline` | `OfflinePage` | Página offline (PWA) | No | - | - |

### Componentes Globales:
```
src/
├── components/layout/
│   ├── Header.vue              // Header principal con navegación
│   ├── Navbar.vue              // Barra de navegación principal
│   ├── Sidebar.vue             // Sidebar para filtros/navegación
│   ├── Footer.vue              // Footer de la aplicación
│   ├── SearchHeader.vue        // Header específico para búsquedas
│   ├── UserMenu.vue            // Menú de usuario (avatar + opciones)
│   ├── MobileMenu.vue          // Menú hamburguesa para móvil
│   └── Breadcrumbs.vue         // Breadcrumbs de navegación
├── components/common/
│   ├── LoadingSpinner.vue      // Spinner de carga
│   ├── ErrorMessage.vue        // Mensaje de error genérico
│   ├── EmptyState.vue          // Estado vacío genérico
│   ├── Pagination.vue          // Componente de paginación
│   ├── Modal.vue               // Modal genérico reutilizable
│   ├── Tooltip.vue             // Tooltip informativo
│   ├── ConfirmDialog.vue       // Diálogo de confirmación
│   ├── ImageLazyLoad.vue       // Carga perezosa de imágenes
│   ├── InfiniteScroll.vue      // Scroll infinito para listas
│   └── BackToTop.vue           // Botón volver arriba
├── pages/static/
│   ├── AboutPage.vue           // Sobre la aplicación
│   ├── PrivacyPage.vue         // Política de privacidad
│   ├── TermsPage.vue           // Términos y condiciones
│   ├── ContactPage.vue         // Contacto
│   ├── HelpPage.vue            // Ayuda
│   ├── NotFoundPage.vue        // 404
│   └── OfflinePage.vue         // Offline
```

---

## 🛡️ Guards y Middleware

### Authentication Guards:
```javascript
// Guard para rutas que requieren autenticación
const authGuard = (to, from, next) => {
  const isAuthenticated = store.getters['auth/isAuthenticated'];
  if (isAuthenticated) {
    next();
  } else {
    next(`/login?returnUrl=${encodeURIComponent(to.fullPath)}`);
  }
};

// Guard para rutas solo para invitados (no autenticados)
const guestGuard = (to, from, next) => {
  const isAuthenticated = store.getters['auth/isAuthenticated'];
  if (!isAuthenticated) {
    next();
  } else {
    next('/profile');
  }
};

// Guard para verificar email verificado (opcional)
const verifiedEmailGuard = (to, from, next) => {
  const user = store.getters['auth/user'];
  if (user && user.isVerified) {
    next();
  } else {
    next('/verify-email');
  }
};
```

### Middleware de Navegación:
- `AuthMiddleware`: Verificación de token JWT
- `ScrollMiddleware`: Scroll to top en cambio de ruta
- `MetaMiddleware`: Actualización de meta tags SEO
- `AnalyticsMiddleware`: Tracking de navegación
- `OfflineMiddleware`: Manejo de estado offline

---

## 🗂️ Estructura de Carpetas Frontend

```
src/
├── components/           # Componentes reutilizables
│   ├── common/          # Componentes comunes (botones, modales, etc.)
│   ├── layout/          # Componentes de layout (header, footer, nav)
│   ├── auth/            # Componentes de autenticación
│   ├── search/          # Componentes de búsqueda
│   ├── movie/           # Componentes de películas
│   ├── favorites/       # Componentes de favoritos
│   ├── lists/           # Componentes de listas
│   └── user/            # Componentes de usuario
├── pages/               # Páginas completas (vistas)
│   ├── auth/
│   ├── search/
│   ├── movie/
│   ├── favorites/
│   ├── lists/
│   ├── user/
│   └── static/
├── router/              # Configuración de rutas
│   ├── index.js         # Router principal
│   ├── guards.js        # Guards de autenticación
│   └── routes/          # Definición de rutas por módulo
├── store/               # Estado global (Vuex/Pinia/Redux)
│   ├── modules/
│   │   ├── auth.js
│   │   ├── movies.js
│   │   ├── favorites.js
│   │   ├── lists.js
│   │   ├── search.js
│   │   └── user.js
├── services/            # Servicios API
│   ├── api.js           # Cliente HTTP base
│   ├── tmdbApi.js       # API de TMDB
│   ├── authService.js
│   ├── movieService.js
│   ├── favoriteService.js
│   └── listService.js
├── utils/               # Utilidades
│   ├── constants.js     # Constantes de la app
│   ├── helpers.js       # Funciones auxiliares
│   ├── validators.js    # Validaciones
│   ├── formatters.js    # Formateadores de datos
│   └── storage.js       # LocalStorage/SessionStorage
├── composables/         # Composables de Vue (o hooks de React)
│   ├── useAuth.js
│   ├── useMovies.js
│   ├── useFavorites.js
│   ├── useLists.js
│   └── useSearch.js
└── assets/              # Recursos estáticos
    ├── css/             # Estilos globales
    ├── images/          # Imágenes de la app
    ├── icons/           # Iconografía
    └── fonts/           # Fuentes tipográficas
```

---

## 🎨 Estados y Navegación

### Estados Globales (Store):
- `auth`: Autenticación y usuario actual
- `movies`: Cache de películas y detalles
- `favorites`: Lista de favoritos del usuario
- `lists`: Listas personalizadas del usuario
- `search`: Estado de búsquedas y filtros
- `ui`: Estado de la interfaz (loading, modales, tema)

### Flujos de Navegación Principales:
1. **Búsqueda** → Resultados → Detalle película → Agregar favorito/lista
2. **Usuario nuevo** → Registro → Verificación email → Login → Explorar
3. **Usuario existente** → Login → Perfil/Favoritos → Gestión listas
4. **Navegación libre** → Búsqueda → Películas populares → Sin necesidad de auth

### Características PWA:
- **Offline first**: Funcionalidad básica sin conexión
- **Service Worker**: Cache inteligente de imágenes y datos
- **App Shell**: Carga rápida de la interfaz
- **Push Notifications**: Notificaciones de nuevas películas (opcional)

---