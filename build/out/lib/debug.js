jQuery.sap.require("zcust.lib.common"),jQuery.sap.require("zcust.lib.thirdparty.Base64"),jQuery.sap.declare("zcust.lib.debug"),zcust.lib.debug={storeLoadedData:function(a,b){setTimeout(function(){if("undefined"==typeof zcust.lib.debug.loadedData)try{zcust.lib.debug.loadedData={},zcust.lib.debug.loadedData.hashTable={}}catch(c){return}zcust.lib.debug.loadedData[zcust.lib.common.getHash(b)]=a.oData,zcust.lib.debug.loadedData.hashTable[zcust.lib.common.getHash(b)]=b.match(/[^\/]*$/)[0]}.bind(this))},addLinkToDownloadJSONObject:function(a,b){"undefined"==typeof b&&(b="#content");var c="text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(a,void 0,4));$('<a href="data:'+c+'" download="data.json">download JSON</a>').appendTo(b)},downloadEncodedLoadedData:function(){var a=50,b={};for(var c in zcust.lib.debug.loadedData){var d=zcust.lib.debug.loadedData[c];"undefined"!==d.slice&&d.length>a?b[c]=d.slice(d.length-a):b[c]=d}var e="text/json;charset=utf-8,"+encodeURIComponent(zcust.lib.thirdparty.Base64.encode(JSON.stringify(b)));$('<a href="data:'+e+'" download="data.json">download JSON</a>').appendTo("#content")},mergeMockData:function(a,b){for(var c in b)a[c]=b[c]},downloadDecodedLoadedData:function(a){var b="text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(JSON.parse(zcust.lib.thirdparty.Base64.decode(a)),void 0,4));$('<a href="data:'+b+'" download="data.json">download JSON</a>').appendTo("#content")},decodeLoadedData:function(a){return JSON.parse(zcust.lib.thirdparty.Base64.decode(a))},showMockData:function(a){var b="data:text/json;charset=utf8,"+encodeURIComponent(JSON.stringify(zcust.lib.debug.loadedData,void 0,4));window.open(b,"_blank"),window.focus()}};