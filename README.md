# Angular basic

[Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/overview) allows you to easily build [Angular](https://angular.io/) apps in minutes. Use this repo with the [Angular quickstart](https://docs.microsoft.com/azure/static-web-apps/getting-started?tabs=angular) to build and customize a new static site.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

## Project setup

```bash
npm install
```

### Start the dev server

```bash
npm run swa:start
```

> Note: This command will use the local configuration file `swa-cli.config.json`.

### Run unit tests

```bash
npm test
```

### Run e2e tests

```bash
npm run e2e
```

### Lints and fixes files

```bash
npm run lint
```

### Compiles and minifies for production

```bash
npm run build
```

### Login to Azure

```bash
npm run swa:login
```

### Deploy to Azure

```bash
npm run swa:deploy
```
### Local Test

1. Build api under project root/api
```bash
npm run prestart
```
2. Build client(Angular) under project root
```bash
npm run build --prod
```
3. Start client and api with swa cli under project root
```bash
swa start dist/rentalmaster --api-location api
```
### Local Debugging

Start client and function api separately
```
ng serve
```
and then under api folder

```
func start
```
### Email Sending

Reference: 
1. https://learn.microsoft.com/en-us/azure/communication-services/quickstarts/email/connect-email-communication-resource?pivots=azure-portal (connect communication service to email domain)
2. https://learn.microsoft.com/en-us/azure/communication-services/quickstarts/email/send-email?tabs=windows%2Cconnection-string&pivots=programming-language-javascript (sending email)


