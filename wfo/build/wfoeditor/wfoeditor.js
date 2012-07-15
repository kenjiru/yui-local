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

            config = config || {};

            // TODO Check if the element is textarea, div or p
            element = Y.one(element);
            console.log('Element: ' + element.getDOMNode());

            config.autoUpdateElement = false;
            element.setData('_ckeditorInstanceLock', true);

            // TODO Check if CKEditor is already registered for that element
            // Set instance reference in element's data.
            var editor = CKEDITOR.replace(element.getDOMNode(), config);
            element.setData('ckeditorInstance', editor);
        }
    });

    Y.WFOEditor = WFOEditor;

    console.log('wfoeditor YUI3 module was loaded!');
}, "0.1", {
    requires : [ "base", "node" ]
});
