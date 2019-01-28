# Películas y series de OMDb.

## npm start

Corre la app en el modo desarrollador. 
Abre http://localhost:3000 para verlo en el navegador.

## npm run build
Prepara la app para llevarla a producción a través de webpack. 
No está completamente cerrado, por lo que recomiendo su uso, por ahora, en modo desarrollador. 

## Instrucciones de la app. 

    - Al abrir, aparecerá un login. Introduce un nombre de usuario y contraseña. 
      Dado que se trata de un login estático, no es necesario haberse registrado anteriormente. 
      
    - El Login redirigirá a la sección "Movies" donde encontrarás un input donde buscar la película que desees. 
      La search box es dinámica, por lo que no es necesario pulsar ningún botón. Solo escribe y verás aparecer las películas. 
    
    - Aparecidas las películas, podemos pinchar en el botón "ver detalles" para acceder a toda la información de la película. 
    
    - También podrás agregar a favoritos pulsando en el corazón que aparece al lado del botón anterior. 
    
    - Podemos hacer lo mismo con las series haciendo uso del navbar. +
    
    - Por último, podremos ver los elementos que hayamos guardado en favoritos. 
    
 ### Notas. 
 
El almacenamiento de la información (usuario, sesión películas favoritas o series favoritas) se hace a través del estado de React y no a través del localStorage, por lo que es necesario no refrescar la página para no pereder esa información. 

    
