YUI().use('node', function (Y) {
    var node = Y.one('#demo');
    
    node.on("click", function(e){
        node.set('text', 'Hello world!');
    });
});