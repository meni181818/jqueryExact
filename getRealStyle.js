(function ( $ ) {
    
    $.fn.getRealStyle = function(prop) {
        var styleStr = $(this).attr('style');
        // remove all the spaces after or before ; OR :
        styleStr = styleStr.replace(/;\s+/g, ';').replace(/\s+;/g, ';').replace(/:\s+/g, ':').replace(/\s+:/g, ':');
        // add " whare : OR ; (if has content after)
        styleStr = styleStr.replace(/:(?=.)/g, '":"').replace(/;(?=.)/g, '","');
        // cleanUp
        styleStr = '"' + styleStr.substring(0, styleStr.length - 1) + '"';
        var styleJson = '{' + styleStr + '}';
        var styleObj = JSON.parse(styleJson);
        return styleObj[prop];
    };
    
}( jQuery ));
