# ThRBank

The app is developed with [Ionic](https://ionicframework.com/) and [Cordova](https://cordova.apache.org/)

La aplicación está desarrollada con [Ionic](https://ionicframework.com/) y [Cordova](https://cordova.apache.org/)

## Information / Información

I allow myself to compile an [apk]() of the app in production version, this apk points to the [api](https://github.com/therhenals/ThRBank_backend) mounted on [vercel.com](https://thrbank-backend.vercel.app/api), I do this for practical purposes.

Me permito compilar un [apk]() de la aplicación en versión producción, este apk apunta a la api montada en [vercel.com](https://thrbank-backend.vercel.app/api), lo hago por cuestiones prácticas.

## Requirements / Requerimientos

It is necessary to install nodejs, npm and [ionic cli](https://ionicframework.com/docs/cli)
Follow the [Cordova Android Platform Guide](https://cordova.apache.org/docs/en/latest/guide/platforms/android/) to set up your development environment.

Es necesario instalar nodejs, npm y [ionic cli](https://ionicframework.com/docs/cli)
Sigue la [Cordova Android Platform Guide](https://cordova.apache.org/docs/en/latest/guide/platforms/android/) para configurar tu entorno de desarrollo.

## Prepare / Preparar

```bash
$ npm install
$ npm run prepare
```

## Environment Variables / Variables de enterno

The environment variables are found within the src/environments folder

Las variables de entorno se encuentran en la carpeta src/environments

## API

In each request, the token generated with the firebase sdk is sent. The backend validates that it is valid in order to allow all operations to be performed. This token is automatically sent by an interceptor, found in src/app/services/api-client.service.ts. It should be noted that firebase only uses sdk to maintain authentication states. The data and the validations of the users are stored in the backend/API.

En cada petición se envía el token generado con el sdk de firebase. El backend valida que sea válido para permitir que se realicen todas las operaciones. Este token es enviado automáticamente por un interceptor, que se encuentra en src/app/services/api-client.service.ts. Hay que tener en cuenta que firebase sólo utiliza el sdk para mantener los estados de autenticación. Los datos y las validaciones de los usuarios se almacenan en el backend/API.

Traducción realizada con la versión gratuita del traductor www.DeepL.com/Translator

## Running the app / Ejecución de la aplicación

```bash
# watch mode
$ ionic serve

# build production
$ ionic cap run android --prod
```