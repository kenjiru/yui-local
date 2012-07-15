YUI_config = {
    filter: "raw",
    root: "lib/yui3/build/",
    comboBase: "/combo?",
    combine: false,
    groups: {
        gallery: {
            root: "lib/yui3-gallery/build/",
            comboBase: "/combo?",
            combine: false,
            patterns: {
                "gallery-": {},
                "gallerycss-": { type: "css" }
            }
        },
        wfo: {
            base: "wfo/build/",
            combine: false,
            modules : {
                wfoeditor : {
                    requires : [ 'ckeditor' ]
                }
            }
        },
        ckeditor: {
            base: "wfo/build/",
            combine: false,
            modules : {
                ckeditor : {
                    fullpath : "lib/ckeditor/ckeditor.js"
                },
                // TODO Loading CKEditor source is not loaded
                ckeditor_source : {
                    fullpath : "lib/ckeditor/ckeditor_source.js"
                }
            }
        }
    }
};
