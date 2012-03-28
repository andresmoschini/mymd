/// <reference path="marked.js" />
/// <reference path="jquery-1.7.1.js" />

//TODO: 
//  Permitir cambiar entre distintos markdowns

//Ver: 
//  http://github.github.com/github-flavored-markdown/
//  https://github.com/chjj/marked (Syntax Highlighting)
//  http://softwaremaniacs.org/playground/showdown-highlight/
//  http://github.github.com/github-flavored-markdown/preview.html
//  http://www.toptensoftware.com/markdowndeep/
//  http://bergie.github.com/hallo/markdown.html


$(function () {
    var $input = $("#inputPane");
    var $preview = $("#previewPane");

    marked.setOptions({
        gfm: true,
        pedantic: false,
        sanitize: false
    });

    $input.keyup(function () {
        $preview.html(marked.parse($input.val()));
    });
});