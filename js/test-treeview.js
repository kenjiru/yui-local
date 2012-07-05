YUI().use('gallery-yui3treeview', function(Y) {
    var treeview = new Y.TreeView({  
         srcNode: '#mytree',
         contentBox: null,
         type: "TreeView",
         children: [
                       {
                          label: "level1-1",
                          type: "TreeView",
                          children: [
                              {label: "level2-1"},
                              {label: "level2-2"}
                          ]
                       },
                       {
                          type: "TreeView",
                          label: "level1-2"
                      }
                   ]
    });
    
    treeview.set('label', 'mytree');
    
    treeview.on("treeview:click", function (e){
        alert(e.target.get("label"));
        console.log(e.target);
    })
     
    treeview.render();
});