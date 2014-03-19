tinymce.init({
    selector: "textarea.editme",
    editor_selector : "mceEditor",
    theme: "modern",
	relative_urls : false,
	remove_script_host : false,
	document_base_url : "http://localhost/food/",
    width: 700,
    height: 300,
    plugins: [
                "advlist autolink autosave link image lists charmap print preview hr anchor pagebreak spellchecker",
                "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
                "table contextmenu directionality emoticons template textcolor paste fullpage textcolor responsivefilemanager"
        ],
    browser_spellcheck : true ,
    filemanager_title:"Filemanager",
    external_filemanager_path:"/food/publicthemes/filemanager/",
    external_plugins: { "filemanager" : "/food/publicthemes/filemanager/plugin.min.js"},
    codemirror: {
    indentOnInit: true, // Whether or not to indent code on init. 
    path: 'CodeMirror'
  },
  
   image_advtab: true,
   toolbar1: "undo redo | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | styleselect",
   toolbar2: "| responsivefilemanager | image | media | link unlink anchor | print preview code  | youtube | qrcode | flickr | picasa | colorpicker forecolor backcolor"
 });
