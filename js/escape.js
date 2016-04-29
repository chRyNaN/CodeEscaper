(function(){
    /**
     * Code is heavily influenced from Underscore.js (their escape and unescape functions):
     * https://github.com/jashkenas/underscore/blob/master/underscore.js
     */
    
    window.Code = {};
    
    var escapeMap = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '`': '&#x60;'
    };
    
    var unescapeMap = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#x27;': "'",
        '&#x60;': '`'
    };
    
    var getKeys = function(obj){
        if(Object.keys){
            return Object.keys(obj);
        }
        var keys = [];
        for (var key in obj) if (obj.hasOwnProperty(key)) keys.push(key);
        return keys;
    }
    
    var createEscaper = function(map){
        var escaper = function(match){
            return map[match];
        }
        var source = '(?:' + getKeys(map).join('|') + ')';
        var testRegexp = RegExp(source);
        var replaceRegexp = RegExp(source, 'g');
        return function(string){
            string = string == null ? '' : '' + string;
            return testRexexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
        }
    }
    
    var cEscape = createEscaper(escapeMap);
    var cUnescape = createEscaper(unescapeMap);
    
    var escapeCodeTag = function(string){
        var startIndex = string.indexOf('<code>');
        if(startIndex != -1){
            var endIndex = string.indexOf('</code>');
            if(endIndex == -1 || endIndex < startIndex) return string;
            string = string.substring(startIndex, endIndex - startIndex);
            string = cEscape(string);
        }
        return string;
    }
    
    window.Code.tagEscape = cEscape;
    window.Code.tagUnescape = cUnescape;
    window.Code.escapeCodeTag = escapeCodeTag;
    
})();
