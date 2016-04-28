(function(){
      	$(document).ready(function(){
      	  var currentLanguage = "text";
      	  //Set up the editors
      	  var editor = ace.edit("editor");
          editor.setTheme("ace/theme/monokai");
          var output = ace.edit("output");
          output.setReadOnly(true);
          output.setTheme("ace/theme/monokai");
          //Listen for lost focus event on file title input
          $("#file-name").on("blur", function(event){
            //Get the type of language used and act accordingly
            var input = $("#file-name").val();
            if(input.length > 0){
              currentLanguage = getLanguage(input);
              switch(currentLanguage){
                default:
                "text":
                  //Try to set to the default mode
                  editor.getSession().setMode();
                  output.getSession().setMode();
                  break;
                "markdown":
                  editor.getSession().setMode("ace/mode/markdown");
                  output.getSession().setMode("ace/mode/markdown");
                  break;
                "c++":
                  editor.getSession().setMode("ace/mode/c_pp");
                  output.getSession().setMode("ace/mode/c_pp");
                  break;
                "c#":
                  editor.getSession().setMode("ace/mode/csharp");
                  output.getSession().setMode("ace/mode/csharp");
                  break;
                "css":
                  editor.getSession().setMode("ace/mode/css");
                  output.getSession().setMode("ace/mode/css");
                  break;
                "groovy":
                  editor.getSession().setMode("ace/mode/groovy");
                  output.getSession().setMode("ace/mode/groovy");
                  break;
                "html":
                  editor.getSession().setMode("ace/mode/html");
                  output.getSession().setMode("ace/mode/html");
                  break;
                "java":
                  editor.getSession().setMode("ace/mode/java");
                  output.getSession().setMode("ace/mode/java");
                  break;
                "javascript"
                  editor.getSession().setMode("ace/mode/javascript");
                  output.getSession().setMode("ace/mode/javascript");
                  break;
                "json":
                  editor.getSession().setMode("ace/mode/json");
                  output.getSession().setMode("ace/mode/json");
                  break;
                "jsp":
                  editor.getSession().setMode("ace/mode/jsp");
                  output.getSession().setMode("ace/mode/jsp");
                  break;
                "less":
                  editor.getSession().setMode("ace/mode/less");
                  output.getSession().setMode("ace/mode/less");
                  break;
                "objective-c":
                  editor.getSession().setMode("ace/mode/objectivec");
                  output.getSession().setMode("ace/mode/objectivec");
                  break;
                "php":
                  editor.getSession().setMode("ace/mode/php");
                  output.getSession().setMode("ace/mode/php");
                  break;
                "python":
                  editor.getSession().setMode("ace/mode/python");
                  output.getSession().setMode("ace/mode/python");
                  break;
                "ruby":
                  editor.getSession().setMode("ace/mode/ruby");
                  output.getSession().setMode("ace/mode/ruby");
                  break;
                "sass":
                  editor.getSession().setMode("ace/mode/sass");
                  output.getSession().setMode("ace/mode/sass");
                  break;
                "scss":
                  editor.getSession().setMode("ace/mode/scss");
                  output.getSession().setMode("ace/mode/scss");
                  break;
                "sql":
                  editor.getSession().setMode("ace/mode/sql");
                  output.getSession().setMode("ace/mode/sql");
                  break;
                "swift":
                  editor.getSession().setMode("ace/mode/swift");
                  output.getSession().setMode("ace/mode/swift");
                  break;
                "xml":
                  editor.getSession().setMode("ace/mode/xml");
                  output.getSession().setMode("ace/mode/xml");
                  break;
              }
            }
          });
      	});
      })();
