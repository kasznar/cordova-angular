# Firebase Cloud Messaging with Angular in Cordova

## Setup and Run

For running the android emulator, [environment variable setup is needed](https://gist.github.com/kasznar/e6be8f378e2bdf30c625913e6c5848a6).
I found it easier to start the emulator first and then target it with `cordova run`:

```
cordova run android --target emulator-5554
```

## Technical background

This is a proof of concept on wrapping an angular application in cordova and providing push 
notification support. The project is built to cordova's `www` directory and hosted from static files 
by cordova. The default build had problems running in android webview, because the angular build's
`index.html` references the bundled javascript files as modules. It is not allowed by chrome's MIME 
policy to access such resources without proper `type` definition from the server. For this reason the
 application couldn't start from the local files provided by cordova. This is resolved by setting 
`"target": "es5"` in `tsconfig.json` and thus changing the imports.

Firebase Cloud Messaging push notifications handled by [phonegap-plugin-push](https://github.com/phonegap/phonegap-plugin-push)
cordva plugin. 

