YUI.add('ckeditor', function(Y) {
    function CKEditor() {
        CKEditor.superclass.constructor.apply(this, arguments);
    }

    CKEditor.NAME = "ckeditor";

    CKEditor.ATTRS = {};

    Y.extend(CKEditor, Y.Base, {
        initializer : function() {
            console.log('CKEditor class was initialized!');
        },
        destructor : function() {

        }
    });

    Y.CKEditor = CKEditor;

    console.log('ckeditor module was loaded!');
}, "0.1", {
    requires : [
        "base"
    ]
});
