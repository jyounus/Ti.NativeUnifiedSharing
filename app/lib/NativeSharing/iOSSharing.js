var Social = require('dk.napp.social');
init();

function init() 
{
    Ti.API.info("module is => " + Social);
   
    Ti.API.info("Facebook available: " + Social.isFacebookSupported());
    Ti.API.info("Twitter available: " + Social.isTwitterSupported());
}

function share(args)
{
    if (Social.isActivityViewSupported())// min iOS6 required
    {
        Ti.API.info("share args: " + JSON.stringify(args));
        
        var text = args.text || "";
        var image = args.image;
        
        Social.activityView({
            text:text,
            image:image
        });
    }
}


exports.share = share;