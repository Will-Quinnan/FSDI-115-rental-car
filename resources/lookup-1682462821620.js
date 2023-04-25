(function(window, undefined) {
  var dictionary = {
    "0a487b76-7566-438e-846e-9f81c9107e1d": "Manage booking",
    "1339658a-a280-4f9d-bd7c-38bdc6bba76a": "Order Confirmation",
    "723d3f8d-5055-4f73-bda0-761fd5aa3341": "Home page",
    "d4c97d23-0971-411b-a9e3-dc7c2cd71b71": "View Deal",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Catalog",
    "59ea88c0-3b3b-47e3-88d6-1493ca67233b": "Log in",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);