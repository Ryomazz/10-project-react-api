# 2️⃣ **Buscador de Películas (API Fetch)**

🔹 **Hooks:** `useState`, `useEffect`, `useMemo`, `useCallback`  
🔹 **APIs:** Fetch a [OMDb API](https://www.omdbapi.com/) o [The Movie DB](https://www.themoviedb.org/)  
🔹 **Extras:** Paginación, búsqueda en tiempo real con debounce, favoritos con `localStorage`.

key : edf2da3d

## Steps by deepseek ✔️

## Funcionalidades Básicas (MVP - Mínimo Producto Viable)

1. Búsqueda por título ✔️

   -  Integración con una API como OMDb, The Movie Database (TMDb) o IMDb API. ✔️
   -  Campo de búsqueda con autocompletado (sugerencias al escribir). ✔️

2. Mostrar resultados básicos

   -  Grid o lista de películas con:
      -  Poster.
      -  Título.
      -  Año de lanzamiento.
      -  Rating (ej: ⭐ 7.5/10).

3. Detalles de la película

   -  Al hacer clic en una película, mostrar:
      -  Sinopsis.
      -  Géneros.
      -  Duración.
      -  Director.
      -  Reparto (actores principales).

4. Diseño responsive

   -  Que funcione bien en móviles, tablets y desktop.

## Funcionalidades Intermedias (Para destacar)

5. Filtros y ordenación

   -  Filtrar por:

      -  Género (ej: Acción, Comedia).
      -  Año (rango de años).
      -  Idioma.

   -  Ordenar por:
      -  Popularidad.
      -  Fecha de lanzamiento.
      -  Rating (IMDb/TMDb).

6. Paginación o scroll infinito

   -  Para manejar muchos resultados sin saturar la pantalla.

7. Favoritos / Watchlist

   -  Guardar películas en una lista (usando localStorage o una backend sencillo como Firebase).

8. Modo oscuro/claro

   -  Alternar entre temas (usando Context API o CSS variables).

## Funcionalidades Avanzadas (Para un proyecto más profesional)

9. Trailer o videos relacionados

   - Integrar YouTube API para mostrar tráilers.

10. Recomendaciones similares

-  "Si te gustó X, también te puede interesar Y" (usando datos de la API).

11. Búsqueda por voz

-  Usar la Web Speech API para permitir búsqueda por voz.

12. Autenticación de usuarios

-  Registro/login para guardar listas personalizadas (con Firebase Auth o Auth0).

13. Comentarios/Reseñas

-  Permitir a usuarios dejar opiniones (requiere backend).

14. Descubrimiento aleatorio

-  Botón "Película aleatoria" para recomendaciones sorpresa.

## Extras (Diferenciales)

15. Comparador de películas

-  Seleccionar dos películas y comparar ratings, géneros, etc.

16. Exportar lista

-  Permitir exportar la watchlist a PDF o CSV.

17. API de tendencias

-  Mostrar películas populares o "trending" en la página de inicio.

18. Sistema de búsqueda avanzada

-  Búsqueda por actor, director, presupuesto, etc.

## Tecnologías Recomendadas

-  APIs: TMDb (gratis y completa), OMDb (sencilla), IMDb API (si tienes acceso).
-  Estado global: Context API, Redux Toolkit o Zustand.
-  Estilos: CSS Modules, TailwindCSS, o Styled Components.
-  Routing: React Router.
-  Deploy: Vercel, Netlify o GitHub Pages.
