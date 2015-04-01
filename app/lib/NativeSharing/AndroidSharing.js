function share(args)
{
    Ti.API.info("share args: " + JSON.stringify(args));
    
    var text = args.text || "";
    var blob = args.image;
    var win = args.win;
    
    var intentType = "text/plain";
    
    if (!win)
    {
        Ti.API.error("must pass in a reference to the active window for Android Intent sharing to work!");
        return;
    }
    
    if (blob) // must save the blob to a temporary file, so that we can use the .nativePath property
    {
        var file = Titanium.Filesystem.getFile(Titanium.Filesystem.tempDirectory,'temp.png');
        file.write(blob);
        
        var tempImage = Titanium.Filesystem.getFile(Titanium.Filesystem.tempDirectory, 'temp.png');
        var tempBlob = tempImage.read();
        Ti.API.info("tempBlob: " + tempBlob);
        
        blob = tempBlob;
        
        intentType = "image/png";
    }
    
    var shareIntent = Ti.Android.createIntent({
        action:Ti.Android.ACTION_SEND,
        type:intentType
    });

    shareIntent.putExtra(Ti.Android.EXTRA_TEXT, text);
    
    if (blob)
    {
        shareIntent.putExtraUri(Ti.Android.EXTRA_STREAM, blob.nativePath);
    }
    
    win.activity.startActivity(Ti.Android.createIntentChooser(shareIntent, "Share.."));
}

exports.share = share;