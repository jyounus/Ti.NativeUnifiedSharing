var Share = OS_IOS ? require("NativeSharing/iOSSharing") : require("NativeSharing/AndroidSharing");

function share(args)
{
    Share.share(args);
}

exports.share = share;
