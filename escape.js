(function(){
    /*
 * Copyright 2016 chRyNaN
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
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
    };
    
    var createEscaper = function(map){
        var escaper = function(match){
            return map[match];
        }
        var source = '(?:' + getKeys(map).join('|') + ')';
        var testRegexp = RegExp(source);
        var replaceRegexp = RegExp(source, 'g');
        return function(string){
            string = string == null ? '' : '' + string;
            return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
        };
    };
    
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
    };
    
    window.Code.tagEscape = cEscape;
    window.Code.tagUnescape = cUnescape;
    window.Code.escapeCodeTag = escapeCodeTag;
    
})();
