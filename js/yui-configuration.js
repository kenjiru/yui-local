YUI_config = {
    filter: "raw",
    base: "/kenjiru/yui-local/workspace/lib/yui3/build/",
    root: "kenjiru/yui-local/workspace/lib/yui3/build/",
    comboBase: "/combo?",
    combine: false,
    groups: {
        // set up for locally served gallery
        gallery: {
            base: "/kenjiru/yui-local/workspace/lib/yui3-gallery/build/",
            root: "kenjiru/yui-local/workspace/lib/yui3-gallery/build/",
            comboBase: "/combo?",
            combine: false,
            patterns: {
                "gallery-": {},
                "gallerycss-": { type: "css" }
            }
        }
    }
};
