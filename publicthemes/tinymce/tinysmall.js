tinymce.init({
    selector: "textarea.editme1",
    editor_selector : "mceEditor",
    theme: "modern",
	relative_urls : false,
	remove_script_host : false,
	document_base_url : "http://localhost/food/",
    width: 460,
    height: 150,
    menubar:false,
    statusbar: false,
    plugins: [
                "advlist autolink autosave link image lists charmap print preview hr anchor pagebreak spellchecker",
                "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
                "table contextmenu directionality emoticons template textcolor paste fullpage textcolor responsivefilemanager"
        ],
    browser_spellcheck : true ,
    image_advtab: true,
   toolbar1: "bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist | styleselect",
 });
