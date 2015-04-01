$.win.open();

function showMediaPicker(callback)
{
    Ti.API.info("inside showMediaPicker");
    
    Ti.Media.openPhotoGallery({
        mediaTypes:[Ti.Media.MEDIA_TYPE_PHOTO],
        success:function(e)
        {
            Ti.API.info("inside openPhotoGallery success function: " + e);
            callback(e.media);
        }
    });
}

function selectImagePressed()
{
    Ti.API.info("selectImagePressed");
    
    showMediaPicker(function(imageBlob)
    {
        Ti.API.info("imageBlob: " + imageBlob);
        
        if (imageBlob)
        {
            Ti.API.info("setting image blob");
            $.imageView.image = imageBlob;
        }
    });
}

function sharePressed(e) 
{
    Ti.API.info("sharePressed text: " + $.textField.value);
    
    var Share = require("nativeSharing");
    Share.share({
        text:$.textField.value,
        image:$.imageView.image,
        win:$.win // required on Android, ignored on iOS
    });
}