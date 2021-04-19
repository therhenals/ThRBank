# ThRBank

### English
The app is developed with [Ionic](https://ionicframework.com/) and [Cordova](https://cordova.apache.org/)

### Español
La aplicación está desarrollada con [Ionic](https://ionicframework.com/) y [Cordova](https://cordova.apache.org/)

## Test users / Usuarios de prueba

Username: luis
Password: demopass

Username: yomaris
Password: demopass2

---

## Information / Información

### English
I allow myself to compile an [apk](https://github.com/therhenals/ThRBank/blob/main/app-debug.apk?raw=true) of the app in production version, this apk points to the [api](https://github.com/therhenals/ThRBank_backend) mounted on [vercel.com](https://thrbank-backend.vercel.app/api), I do this for practical purposes.

### Español
Me permito compilar un [apk](https://github.com/therhenals/ThRBank/blob/main/app-debug.apk?raw=true) de la aplicación en versión producción, este apk apunta a la api montada en [vercel.com](https://thrbank-backend.vercel.app/api), lo hago por cuestiones prácticas.

## Requirements / Requerimientos

### English
It is necessary to install nodejs, npm and [ionic cli](https://ionicframework.com/docs/cli)
Follow the [Cordova Android Platform Guide](https://cordova.apache.org/docs/en/latest/guide/platforms/android/) to set up your development environment.

### Español
Es necesario instalar nodejs, npm y [ionic cli](https://ionicframework.com/docs/cli)
Sigue la [Cordova Android Platform Guide](https://cordova.apache.org/docs/en/latest/guide/platforms/android/) para configurar tu entorno de desarrollo.

## Prepare / Preparar

```bash
$ npm install
$ npm run prepare
```

## Environment Variables / Variables de enterno

### English
The environment variables are found within the src/environments folder

### Español
Las variables de entorno se encuentran en la carpeta src/environments

## API

### English
In each request, the token generated with the firebase sdk is sent. The backend validates that it is valid in order to allow all operations to be performed. This token is automatically sent by an interceptor, found in src/app/services/api-client.service.ts. It should be noted that firebase only uses sdk to maintain authentication states. The data and the validations of the users are stored in the backend/API.

### Español
En cada petición se envía el token generado con el sdk de firebase. El backend valida que sea válido para permitir que se realicen todas las operaciones. Este token es enviado automáticamente por un interceptor, que se encuentra en src/app/services/api-client.service.ts. Hay que tener en cuenta que firebase sólo utiliza el sdk para mantener los estados de autenticación. Los datos y las validaciones de los usuarios se almacenan en el backend/API.


## Running the app / Ejecución de la aplicación

```bash
# watch mode
$ ionic serve

# run production
$ ionic cordova run android --prod
```
