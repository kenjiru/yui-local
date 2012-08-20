YUI().use('wfoeditor', function(Y) {
    var wfoeditor = new Y.WFOEditor();

    wfoeditor.attachToNode('#editor', {
        toolbar : [
            [ 'Source', '-', 'Bold', 'Italic' ]
        ],
        toolbarCanCollapse : false,
        removePlugins : 'maximize,resize,image,clipboard,pastefromword,pastetext,link,forms,liststyle'
    });
});