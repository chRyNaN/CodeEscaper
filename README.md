# CodeEscaper
Easily escapes code to be displayed in HTML and XHTML. You can use the app [here](http://chrynan.com/CodeEscaper/). Based off of my [Gist](https://gist.github.com/chRyNaN/270c2761bb6c6642fd7e66df53013465) and influenced from methods by [Underscore.js](http://underscorejs.org/). App code is available under the [gh-pages branch](https://github.com/chRyNaN/CodeEscaper/tree/gh-pages). And here is the main code, [escape.js](https://github.com/chRyNaN/CodeEscaper/blob/master/escape.js). Uses the [Ace editor](https://ace.c9.io/#nav=about) in the app code (along with other libraries, such as, Bootstrap, FontAwesome, JQuery, etc.). Free to use in accordance with an Apache License. Enjoy!

# Example:

Turns:

```java
for(int i = 0; i < array.length; i++){
  if(array[i] > 10) return;
}
```

Into:

```java
for(int i = 0; i &lt; array.length; i++){
  if(array[i] &gt; 10) return;
}
```
