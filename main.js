define(function (require, exports, module) {
    "use strict";
    
    var AppInit        = brackets.getModule("utils/AppInit"),
        ExtensionUtils = brackets.getModule("utils/ExtensionUtils");

    AppInit.appReady(function () {
        ExtensionUtils.loadStyleSheet(module, "style.css");
       
        var content_col = document.getElementsByClassName('content');
        var sbb_col     = document.getElementsByClassName('cw-sidebar-btn');
        
        var content     = content_col[0];        
        var sbb         = sbb_col[0];
        var sidebar     = document.getElementById('sidebar');
        
        var sbb_classes = sbb.className;
        var sbb_class   = sbb_classes.replace('cw-show-sidebar', '');
        
        content. style.left = '0px';
        
        sidebar.style.display = "none";
        
        sbb.className   = sbb_class;
        sbb.innerHTML   = '→';    
    });
});