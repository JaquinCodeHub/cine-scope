# Especificaciones Detalladas de Casos de Uso - Cine Scope

**Aplicación de Búsqueda y Gestión de Películas**  
**Generado**: 2025-08-23 01:43:37 UTC  
**Documentado por**: ShivaAtom

---

## 📋 Casos de Uso Prioritarios (MVP)

### UC001: Buscar películas por título

**Actor:** Usuario Anónimo/Registrado  
**Descripción:** Permite buscar películas utilizando la API de TMDB  
**Precondiciones:** Conexión a internet disponible  

**Flujo Principal:**
1. Usuario ingresa término de búsqueda (mínimo 3 caracteres)
2. Sistema muestra sugerencias en tiempo real
3. Sistema consulta TMDB API o cache local
4. Sistema muestra resultados paginados
5. Usuario puede ver más detalles de cualquier película

**Flujo Alternativo:**
- Si no hay conexión: buscar en datos locales cacheados
- Si TMDB API falla: mostrar resultados de cache con advertencia

---

### UC008: Ver detalles de película

**Actor:** Usuario Anónimo/Registrado  
**Descripción:** Muestra información completa de una película  
**Precondiciones:** Película válida seleccionada  

**Flujo Principal:**
1. Usuario selecciona película de resultados
2. Sistema obtiene detalles completos desde TMDB/cache
3. Sistema muestra: título, sinopsis, reparto, imágenes, trailers
4. Sistema muestra puntuación TMDB y metadatos
5. Si usuario registrado: mostrar estado de favorito y listas

---

### UC015: Agregar película a favoritos

**Actor:** Usuario Registrado  
**Descripción:** Marca una película como favorita del usuario  
**Precondiciones:** Usuario autenticado, película válida  

**Flujo Principal:**
1. Usuario hace clic en "Agregar a Favoritos"
2. Sistema guarda en base de datos local
3. Sistema actualiza interfaz inmediatamente
4. Sistema sincroniza con backend si hay conexión
5. Sistema confirma acción al usuario

---

### UC026: Crear lista personalizada

**Actor:** Usuario Registrado  
**Descripción:** Crea una lista temática de películas  
**Precondiciones:** Usuario autenticado, no exceder 50 listas  

**Flujo Principal:**
1. Usuario accede a "Mis Listas"
2. Usuario hace clic en "Nueva Lista"
3. Usuario completa formulario (nombre, descripción, privacidad)
4. Sistema valida nombre único para el usuario
5. Sistema crea lista y redirecciona a vista de lista

---

## 🔐 Casos de Uso de Autenticación

### UC038: Registrarse en el sistema

**Actor:** Usuario Anónimo  
**Descripción:** Crear nueva cuenta de usuario  

**Flujo Principal:**
1. Usuario accede a página de registro
2. Usuario completa formulario (username, email, password)
3. Sistema valida formato y unicidad de datos
4. Sistema crea usuario con estado "no verificado"
5. Sistema envía email de verificación
6. Sistema redirige a página de confirmación

---

### UC039: Iniciar sesión

**Actor:** Usuario Anónimo  
**Descripción:** Autenticarse en el sistema  

**Flujo Principal:**
1. Usuario accede a página de login
2. Usuario ingresa credenciales (username/email + password)
3. Sistema valida credenciales contra base de datos
4. Sistema genera JWT token y session
5. Sistema guarda token en localStorage
6. Sistema redirige a página solicitada o perfil

---

## 📊 Casos de Uso de Estadísticas

### UC024: Ver estadísticas de favoritos

**Actor:** Usuario Registrado  
**Descripción:** Mostrar métricas personalizadas de favoritos  

**Datos Mostrados:**
- Total de películas favoritas
- Géneros más frecuentes
- Década preferida
- Puntuación promedio personal
- Tiempo total de películas
- Gráficos de tendencias

---

### UC055: Ver estadísticas del sistema

**Actor:** Administrador  
**Descripción:** Dashboard administrativo con métricas globales  

**Datos Mostrados:**
- Usuarios activos diarios/mensuales
- Búsquedas más frecuentes
- Películas más agregadas a favoritos
- Uso de API TMDB
- Performance del sistema

---

## 🔄 Casos de Uso Offline (PWA)

### UC065: Ver favoritos offline

**Actor:** Usuario Registrado  
**Descripción:** Acceder a favoritos sin conexión a internet  

**Funcionalidad:**
- Lista completa de favoritos almacenada localmente
- Información básica de películas (título, poster, rating personal)
- Posibilidad de quitar de favoritos (se sincroniza al conectar)
- Búsqueda en favoritos locales

---

### UC068: Sincronizar al conectar

**Actor:** Sistema  
**Descripción:** Sincronización automática cuando se restaura conexión  

**Proceso:**
1. Detectar conexión restaurada
2. Obtener cambios locales pendientes
3. Sincronizar favoritos añadidos/eliminados
4. Sincronizar listas creadas/modificadas
5. Resolver conflictos automáticamente
6. Notificar al usuario el estado de sincronización

---

## 🎯 Reglas de Negocio por Módulo

### Búsqueda y Exploración:
- **Rate Limiting TMDB**: Máximo 40 requests por segundo
- **Cache Duration**: Resultados populares 6h, búsquedas 2h, detalles 24h
- **Búsqueda Mínima**: 3 caracteres para activar búsqueda
- **Resultados por Página**: 20 películas por defecto, máximo 100
- **Fallback Offline**: Búsqueda en cache local si no hay conexión

### Gestión de Favoritos:
- **Límite por Usuario**: Máximo 1000 películas favoritas
- **Calificación Personal**: Escala 1-10, opcional
- **Notas Personales**: Máximo 500 caracteres
- **Sincronización**: Inmediata en UI, background sync con servidor
- **Duplicados**: No permitir la misma película dos veces

### Listas Personalizadas:
- **Límite de Listas**: Máximo 50 listas por usuario
- **Límite por Lista**: Máximo 200 películas por lista
- **Nombres Únicos**: Por usuario, no globalmente
- **Privacidad**: Pública/privada, por defecto privada
- **Compartir**: Enlace único para listas públicas

### Usuario y Autenticación:
- **Email Único**: Un email por cuenta en todo el sistema
- **Contraseña Segura**: Mínimo 8 caracteres, mayús/minús/números
- **Verificación Obligatoria**: Email debe verificarse para funciones completas
- **Sesión**: JWT expira en 8 horas, refresh token 7 días
- **Intentos Login**: Máximo 5 intentos fallidos, bloqueo temporal

### Sistema y Performance:
- **Cache Local**: SQLite con WAL mode para desarrollo
- **Cache Redis**: Producción con cluster Redis
- **Imágenes**: Proxy local para optimización y cache
- **API Monitoring**: Logs de uso TMDB para no exceder límites
- **Backup**: Automático diario de datos de usuario

---

## 📱 Consideraciones PWA

### Funcionalidad Offline:
- **Core App Shell**: Interfaz básica siempre disponible
- **Datos Críticos**: Favoritos y listas en IndexedDB
- **Imágenes**: Cache de posters frecuentemente vistos
- **Búsqueda Local**: En favoritos y listas personales
- **Sync Background**: Service Worker para sincronización

### Notificaciones Push:
- **Nuevas Películas**: Alertas de estrenos en géneros favoritos
- **Recordatorios**: Películas marcadas "para ver"
- **Actualizaciones**: Cambios en listas compartidas
- **Sistema**: Mantenimiento o nuevas funcionalidades

---

**Documento generado el 2025-08-23 01:43:37 UTC por ShivaAtom**