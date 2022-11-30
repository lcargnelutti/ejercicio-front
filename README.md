Es necesario para que el proyecto funcione instalar angular en el proyecto:
  - npm i @angular/cli
  
## El proyecto esta estructurado de la siguiente manera:

- Componete principal 
  - Componente Home
    - Componente reporte

De esta manera se podría tener otros componentes y mantener fijo el contenido de *Home* . Debido al tamaño del proyecto no serían necesarios tantos componentes, lo hice así simplemente para aprender como manejar varios componentes. 

- Existe un servicio de reporte para acceder a la api

- Existen dos interfaces para representar los datos que se obtienen de la API. Una contiene los datos que son fijos de cada consulta y hace uso de la otra interfaz que es un vector que contiene los datos de cada cobro.

- La URL y la Key de la Api se encuentran en el archivo *environment* 

- El pipe "external-reference.pipe" permite modelar los datos de External Reference que contienen los reportes quitando los ceros a la izquierda de dicho dato.
