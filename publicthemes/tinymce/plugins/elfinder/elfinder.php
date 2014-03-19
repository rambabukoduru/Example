<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>elFinder 2.0</title>

		<!-- jQuery and jQuery UI (REQUIRED) -->
		<link rel="stylesheet" type="text/css" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.21/themes/smoothness/jquery-ui.css" />
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" ></script>
    	<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.21/jquery-ui.min.js"></script>

		<!-- elFinder CSS (REQUIRED) -->
		<link rel="stylesheet" type="text/css" href="css/elfinder.min.css">
		<link rel="stylesheet" type="text/css" href="css/theme.css">

		<!-- elFinder JS (REQUIRED) -->
		<script src="js/plugin.min.js"></script>

		<!-- elFinder translation (OPTIONAL) -->
		<script src="js/i18n/elfinder.ru.js"></script>

		<!-- elFinder initialization (REQUIRED) -->
		<script type="text/javascript" charset="utf-8">
		var FileBrowserDialogue = {
    init: function() {
      // Here goes your code for setting your custom things onLoad.
    },
    mySubmit: function (URL) {
      // pass selected file path to TinyMCE
      top.tinymce.activeEditor.windowManager.getParams().setUrl(URL);

      // close popup window
      top.tinymce.activeEditor.windowManager.close();
    }
  }

  $(document).ready(function() {
    var elf = $('#elfinder').elfinder({
      // set your elFinder options here
      url: "php/connector.minimal.php",  // connector URL
      getFileCallback: function(file) { // editor callback
        FileBrowserDialogue.mySubmit(file.url); // pass selected file path to TinyMCE 
      }
    }).elfinder('instance');      
  });
		</script>
	</head>
	<body>

		<!-- Element where elFinder will be created (REQUIRED) -->
		<div id="elfinder"></div>

	</body>
</html>
