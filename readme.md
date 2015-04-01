#Native Unified (Social) Sharing Module

This project provides a quick solution for implementing native sharing features on iOS and Android. It relies on the platform's way of sharing text/images. 

On Android, it uses Intents.

On iOS, it uses the TiSocial.Framework module (which makes use of the native Share Sheets feature).

##Dependency
Download and install the following iOS module in your project (the sample project uses version 1.7.10): https://github.com/viezel/TiSocial.Framework

##Quick Start

Working sample project is provided. The main files are:

`app/lib/nativeSharing.js`

`app/lib/NativeSharing/iOSSharing.js`

`app/lib/NativeSharing/AndroidSharing.js`


This is how to use it in your code:

	var Share = require("nativeSharing");
    Share.share({
        text:"Super easy to share stuff the native way! :D",
        image:blob, // remove this line if you don't want to share an image
        win:$.win // required on Android, ignored on iOS
    });
    

##Screenshots

###iOS:
![iOS](screenshot_iOS.png?raw=true)

###Android:
![Android](screenshot_android.png?raw=true) 