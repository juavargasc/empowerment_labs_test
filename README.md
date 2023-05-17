## Descripcion

Permite a los usuarios consultar de acuerdo a sus preferencias una base de datos de restaurantes y recetas, de las cuales se retornara la infromación de aquellas que tengan coincidencia con la busqueda, ordenada de mayor a menor.

## Instalación

Una vez clonado el repositorio, podrás ejecutar el siguiente comando para la instalación de los paqutes necesarios

```bash
$ npm i
```

## Ejecutando la aplicacion

Si cuentas con una cuenta AWS sobre la que pueda realizar el despliegue del backend y sus dependencias, realice los siguientes pasos:

- Asegurese de tener configurado AWS-Cli en su maquina y configurado correctamente para su cuenta
- En el archivo .env de la aplicación, agregue el KEY y SECRET_KEY de AWS generado para un usuario IAM de su cuenta con los permisos suficientes para leer y escribir en DynamoDB.
- Ahora ejecute el despliegue correspodiente sobre AWS, para esto se usa Serverless Framework

```bash
#En la raiz del proyecto, luego de asegurarse de tener configurado el aws-cli ejecute el siguiente comando
$ sls deploy --stage prod --verbose

```

- Una vez desplegado, al finalizar la ejecución podra conocer los host y path para la ejecución de los servicios desplegados.

Ya con los pasos anteriores realizados, podrá tener el backend ejecutandose en su nube, ahora procedemos a ejecutar el servicio {{TU_DOMINIO_APIGW}}/prod/recommendation/seedDb con este se poblara la tabla de Dynamo con la información de recetas y restaurantes.

Con lo anterior ya podrias ejecutar el servicio {{TU_DOMINIO_APIGW}}/prod/recommendation/data con el cual obtener las sugerencias a su busqueda.

Por otro lado, si quiere ejecutarlo localmente, tiene 2 caminos disponibles para hacerlo; el primero, con serverless-offline para simular el entorno de trabajo de AWS y el segundo, ejecutar directamente con npm y nestjs.

Abordando el primer caso, hay que tener en cuenta, si se usan las credenciales incluidas por defeecto en el repositorio en el archivo .env estará a puntando a la cuenta donde se desarrollo, si quiere apuntar a su propio despliegue debe reemplazar con las llaves correspondiente de su cuenta de aws, por lo demas solo queda ejecutar el siguiente comando:

```bash
# development
$ sls offline start --stage prod

```

Ahora con la ayuda del navegador o de postman ingrese a la siguiente url [seddDb](http://localhost:3000/prod/recommendation/seedDb) con esto cargar la información base para la bese de datos dynamo, con esto ya podra ejecutar [recommendation](http://localhost:3000/prod/recommendation/data) para obtener recomendaciones para su busqueda conforme a los criterios enviados.

Abordando el segundo caso, hay que tener en cuenta, si se usan las credenciales incluidas por defeecto en el repositorio en el archivo .env estará a puntando a la cuenta donde se desarrollo, si quiere apuntar a su propio despliegue debe reemplazar con las llaves correspondiente de su cuenta de aws, por lo demas solo queda ejecutar el siguiente comando:

```bash
# development
$ npm run start

```

Ahora con la ayuda del navegador o de postman ingrese a la siguiente url [seddDb](http://localhost:3000/prod/recommendation/seedDb) con esto cargar la información base para la bese de datos dynamo, con esto ya podra ejecutar [recommendation](http://localhost:3000/prod/recommendation/data) para obtener recomendaciones para su busqueda conforme a los criterios enviados.

En caso de no contar con una cuenta aws disponible, omita el paso del deploy y haga uso de las credenciales ya definidas en el proyecto para consumir la base de datos y los metodos de ejecución local.

## Ejecutando la aplicacion con docker

Si tiene docker instalado en su equipo el proyecto cuenta con la ocnfiguración para la ejecución del mismo, por favor ejecute la siguientes instrucciones:

```bash
# Para iniciar el proyecto, ejecute
$ npm run start:docker
# Para detener el proyecto, ejecute.
$ npm run stop:docker

```

## Test

Para ejecutar los test ejecute los siguiente:

```bash
# unit tests
$ npm run test
# coverage
$ npm run test:cov
```

## Requerimientos

- NodeJS 14 o superior
- Aws-cli
- Docker
- Docker Compose

## Ejecución

Para lanzar las peticiones asociadas al proyecto puede hacer uso de postman, en la raiz va a encontrar la coleccion lista para que la importe y pueda probar, siempre y cuando, la aplicacion se este ejecutando. El nombre del archivo es Prueba_técnica.postman_collection.json encontrara la versión apuntando a local que podra usar para cuando lo despliegue localmente, ya sea con docker, con npm o con serverless-offline y unos para AWS que estan apuntando a un servicio previamente desplegado, si quiere apuntar a su propio despliegue, por favor reemplace por el host generado en el mismo.

## Descripcion de funcionalidad

El servicio requiere de unos parámetros de entrada para la seleccion del restaurante o receta asociada, estos parámetros son:

- type_search: tipo de busqueda que desea.
- characteristics: Caracteristicas de la receta o restaurante.
- foods: el tipo de comida que busca.
- price: Precio de la reseta o restaurante
- type_food: region de donde desea la comida.
- content: contenido de la receta o el plato en el restaurante.
- food_restrictions: si tiene algun requisito especial frente a la comida
  Los posibles valores que puede tener cada parámetro se peuden conocer dejando de enviar cada uno o enviandolos vacios, con esto el servicio retornará la lista de posibles valores.

La respuesta del servicio esta basada en en el mayor numero de coincidencias obtenidas entre los registros y los valores de los paŕametros obtenidos, siempre se ordenara del mas coincidente al utlimo, omitiendo los qeu no tienen coincidencia alguna.

## Tecnologías

- Se usa el framework [NestJS](https://nestjs.com/) para el desarrollo de la API.
- Docker para la implementación del servicio.
- DynamoDB, para la persistencia de datos y agildiad de las consultas.
- El proyecto se puede ejecutar en local directametne con nest o a través de docker
- Se usa NodeJS 14 o superior.
- Se implementa Sonarcloud para revisión de codigo desde github

## License

Nest is [MIT licensed](LICENSE).
