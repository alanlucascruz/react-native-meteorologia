# Meteorologia App

App desenvolvido com React Native, usando a API de previsão do tempo [Advisor](https://advisor.climatempo.com.br/).

# Comandos Úteis

### Install App

Abra um emulador e execute:

> npx react-native run-android

### Run Metro Server

> npx react-native start

### Load bundle.js in device

> set Debug server host & port for device -> [IP_LOCAL]:8081

### Generate APK

> cd android && ./gradlew bundleRelease

### Test APK

> npx react-native run-android --variant=release

### Resolução de Erros

- Erro: Execution failed for task ':app:mergeDebugShaders'. Unable to delete file...

  - Abra o CMD como administrador, navegue até o projeto e rode o comando cd android && gradlew clean
