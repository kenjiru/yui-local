YUI.add('ckeditor', function(Y) {
    Y.CKEditor = Y.Base.create("ckeditor", Y.Widget, [], {
        initializer : function() {

        },
        destructor : function() {

        },
        renderUI : function() {
            console.log('renderUI');
        },
        bindUI : function() {

        },
        syncUI : function() {

        }
    }, {
        NAME : "CKEditor",
        ATTRS : {
            title : {
                value : "Bla"
            }
        },
        HTML_PARSER : {
            title : function(srcNode) {
                console.log('Id-ul nodului: ');
            }
        }
    });
}, "0.1", {
    requires : [
        "base-build",
        "widget"
    ]
});
