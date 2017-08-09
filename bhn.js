var element = function (string_selector) {
    var element = document.querySelector(string_selector);
    return element;
}
var elements = function (string_selector) {
    var elements = document.querySelectorAll(string_selector);
    return elements;
}

var off = function (params) {
    if (typeof params == "string") {
        document.querySelector(params).style.display = "none";
    } else if (params instanceof Node) {
        params.style.display = "none";
    } else if (params instanceof Event) {
        params.target.style.display = "none";
    }
}

var on = function (params) {
    if (typeof params == "string") {
        document.querySelector(params).style.display = "initial";
    } else if (params instanceof Node) {
        params.style.display = "initial";
    } else if (params instanceof Event) {
        params.target.style.display = "initial";
    }
}