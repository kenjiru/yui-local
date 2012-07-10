YUI_config = {
    filter: "raw",
    root: "lib/yui3/build/",
    comboBase: "/combo?",
    combine: false,
    groups: {
        // set up for locally served gallery
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
            comboBase: "/combo?",
            combine: false,
            modules : {
                ckeditor : { }
            }
        }
    }
};
