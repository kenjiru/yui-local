YUI.add('ckeditor', function(Y) {
    function CKEditor() {
        CKEditor.superclass.constructor.apply(this, arguments);
    }

    CKEditor.NAME = "ckeditor";

    CKEditor.ATTRS = {};

    Y.extend(CKEditor, Y.Base, {
        initializer : function() {
            console.log('initializer!');
        },
        destructor : function() {

        }
    });

    Y.CKEditor = CKEditor;
}, "0.1", {
    requires : [
        "base"
    ]
});
