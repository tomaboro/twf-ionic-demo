# twf-ionic-demo

This application was created as a demo for TWF meetup (https://www.meetup.com/pl-PL/TWF-Meetup/events/263937983).

## Requirements 
* Node.js
* Android Studio + Android SDK
* xcode

## Run instructions
```
$ npm install
$ ng build
$ npx cap copy

//For web
$ npx cap serve

//For Android
$ npx cap open android

//For iOS
$ npx cap open ios

//For electron
$ npx cap open electron
```

### Electron side notes
[Bug on Github: https://github.com/ionic-team/capacitor/issues/1878]

In orded to correctly generate electron app You need to change `<base href="/"/>` to `<base href="./"/>` in index.html file. Although remember that this change breaks routing on other platforms.

##Screenshots
![Screen 1](https://github.com/tomaboro/twf-ionic-demo/blob/master/imgs/screen_1.png)
![Screen 2](https://github.com/tomaboro/twf-ionic-demo/blob/master/imgs/screen_2.png)
![Screen 3](https://github.com/tomaboro/twf-ionic-demo/blob/master/imgs/screen_3.png)
