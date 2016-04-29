(function(){
      $(document).ready(function(){
          //Reset the title form
          document.getElementById("file-name").reset();
          var currentLanguage = "text";
          //Set up the editors
          var editor = ace.edit("editor");
          editor.setTheme("ace/theme/monokai");
          var output = ace.edit("output");
          output.setReadOnly(true);
          output.setTheme("ace/theme/monokai");
          $("#escape-button").click(function(event){
                console.log("escape clicked");
                var str = '<pre>' + '\n' +
                          '    <code class="language-' + currentLanguage + '">' + '\n' +
                          '        ' + Code.tagEscape(editor.getValue()) + '\n' +
                          '    </code>' + '\n' +
                          '</pre>';
                output.setValue(str);
          });
          $("#unescape-button").click(function(event){
                console.log("unescape clicked");
                var str = Code.tagUnescape(editor.getValue());
                output.setValue(str);
          });
          //Listen for lost focus event on file title input
          $("#file-name").on("blur", function(event){
            //Get the type of language used and act accordingly
            var input = $("#file-name").val();
            if(input.length > 0){
              currentLanguage = getLanguage(input);
              switch(currentLanguage){
                default:
                case "text":
                  //Try to set to the default mode
                  editor.getSession().setMode();
                  output.getSession().setMode();
                  break;
                case "markdown":
                  editor.getSession().setMode("ace/mode/markdown");
                  output.getSession().setMode("ace/mode/markdown");
                  break;
                case "c++":
                  editor.getSession().setMode("ace/mode/c_pp");
                  output.getSession().setMode("ace/mode/c_pp");
                  break;
                case "c#":
                  editor.getSession().setMode("ace/mode/csharp");
                  output.getSession().setMode("ace/mode/csharp");
                  break;
                case "css":
                  editor.getSession().setMode("ace/mode/css");
                  output.getSession().setMode("ace/mode/css");
                  break;
                case "groovy":
                  editor.getSession().setMode("ace/mode/groovy");
                  output.getSession().setMode("ace/mode/groovy");
                  break;
                case "html":
                  editor.getSession().setMode("ace/mode/html");
                  output.getSession().setMode("ace/mode/html");
                  break;
                case "java":
                  editor.getSession().setMode("ace/mode/java");
                  output.getSession().setMode("ace/mode/java");
                  break;
                case "javascript":
                  editor.getSession().setMode("ace/mode/javascript");
                  output.getSession().setMode("ace/mode/javascript");
                  break;
                case "json":
                  editor.getSession().setMode("ace/mode/json");
                  output.getSession().setMode("ace/mode/json");
                  break;
                case "jsp":
                  editor.getSession().setMode("ace/mode/jsp");
                  output.getSession().setMode("ace/mode/jsp");
                  break;
                case "less":
                  editor.getSession().setMode("ace/mode/less");
                  output.getSession().setMode("ace/mode/less");
                  break;
                case "objective-c":
                  editor.getSession().setMode("ace/mode/objectivec");
                  output.getSession().setMode("ace/mode/objectivec");
                  break;
                case "php":
                  editor.getSession().setMode("ace/mode/php");
                  output.getSession().setMode("ace/mode/php");
                  break;
                case "python":
                  editor.getSession().setMode("ace/mode/python");
                  output.getSession().setMode("ace/mode/python");
                  break;
                case "ruby":
                  editor.getSession().setMode("ace/mode/ruby");
                  output.getSession().setMode("ace/mode/ruby");
                  break;
                case "sass":
                  editor.getSession().setMode("ace/mode/sass");
                  output.getSession().setMode("ace/mode/sass");
                  break;
                case "scss":
                  editor.getSession().setMode("ace/mode/scss");
                  output.getSession().setMode("ace/mode/scss");
                  break;
                case "sql":
                  editor.getSession().setMode("ace/mode/sql");
                  output.getSession().setMode("ace/mode/sql");
                  break;
                case "swift":
                  editor.getSession().setMode("ace/mode/swift");
                  output.getSession().setMode("ace/mode/swift");
                  break;
                case "xml":
                  editor.getSession().setMode("ace/mode/xml");
                  output.getSession().setMode("ace/mode/xml");
                  break;
              }
            }
          });
      });
      
      function getLanguage(input){
            if(input == null || typeof(input) !== "string") return "text";
            var i = input.indexOf(".");
            if(i == -1 || i + 1 >= input.length) return "text";
            var suffix = input.substring(i + 1, input.length);
            switch(suffix.toLowerCase()){
                  default:
                  case "txt":
                  case "text":
                        return "text";
                  case "md":
                        return "markdown";
                  case "c++":
                  case "cpp":
                  case "h":
                  case "cc":
                  case "c":
                  case "cxx":
                        return "c++";
                  case "cs":
                        return "c#";
                  case "css":
                        return "css";
                  case "groovy":
                  case "gvy":
                  case "gy":
                  case "gsh":
                  case "gradle":
                        return "groovy";
                  case "html":
                  case "htm":
                        return "html";
                  case "java":
                  case "class":
                        return "java";
                  case "javascript":
                  case "js":
                        return "javascript";
                  case "json":
                        return "json";
                  case "jsp":
                        return "jsp";
                  case "less":
                        return "less";
                  case "m":
                        return "objective-c";
                  case "php":
                        return "php";
                  case "py":
                  case "pyc":
                  case "pyo":
                  case "pyd":
                        return "python";
                  case "ruby":
                  case "rb":
                        return "ruby";
                  case "sass":
                        return "sass";
                  case "scss":
                        return "scss";
                  case "sql":
                        return "sql";
                  case "swift":
                        return "swift";
                  case "xml":
                  case "xhtml":
                        return "xml";
            }
      }
      
})();
