const Metalsmith = require("metalsmith");
const layouts = require("metalsmith-layouts");
const markdown = require("metalsmith-markdown-sections");
const pdf = require("metalsmith-pdf");
const sass = require("metalsmith-sass");

Metalsmith(__dirname)
    .source("./src")
    .destination("./build")
    .clean(true)
    .use(markdown())
    .use(layouts({
        engine: "pug"
    }))
    .use(sass())
    .use(pdf({
        pattern: "**/*.html",
        //printMediaType: true,
        pageSize: "A4",
        disableSmartShrinking: true
    }))
    .build(err => {
        if(err) throw err;
    });