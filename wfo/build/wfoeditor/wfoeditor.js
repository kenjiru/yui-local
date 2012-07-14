YUI.add('wfoeditor', function(Y) {
    function WFOEditor() {
        WFOEditor.superclass.constructor.apply(this, arguments);
    }

    WFOEditor.NAME = "wfoeditor";

    WFOEditor.ATTRS = {};

    Y.extend(WFOEditor, Y.Base, {
        initializer : function() {
            console.log('WFOEditor YUI3 class was initialized!');
        },
        destructor : function() {

        },
        attachToNode : function(element, config) {
            if (typeof CKEDITOR === 'undefined') {
                console.error('Could not detect the CKEditor global object!');
                return false;
            }

            if (CKEDITOR.env && !CKEDITOR.env.isCompatible) {
                console.error('The environment is not compatible with CKEditor!');
                return false;
            }

            // TODO Check if the element is textarea, div or p
            element = Y.one(element);
            console.log('Element: ' + element._node);

            // TODO Check if CKEditor is already registered for that element
            // Set instance reference in element's data.
            editor = CKEDITOR.replace(element.getDOMNode(), config);
            element.setData('ckeditorInstance', editor);
        }
    });

    Y.WFOEditor = WFOEditor;

    console.log('wfoeditor YUI3 module was loaded!');
}, "0.1", {
    requires : [ "base", "node" ]
});
