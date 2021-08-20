//NAV BAR
function mynav007() {
    var x = document.getElementById("myTopnav007");
    if (x.className === "topnav007") {
    x.className += " responsive007";
    } else {
    x.className = "topnav007";
    }
    }
    
    
    
    
    
    
    
    (function() {
    $(".grid").height($(window).height());
    
    var contents = $("iframe").contents(),
    body = contents.find("body"),
    styleTag = $("<style></style>").appendTo(contents.find("head"));
    scriptTag = $("<script></script>").appendTo(contents.find("head"));
    
    $("textarea.edit007").keyup(function() {
    var $this = $(this);
    if ($this.attr("id") === "html") {
    body.html($this.val());
    }
    else if ($this.attr("id") === "js") {
    scriptTag.text($this.val());
    } else {
    // it had to be css
    styleTag.text($this.val());
    }
    });
    })();
    
    
    
    
    
    
    
    
    
    //SCREEN
    function screen(size){
    if(size=="mobile"){
    document.getElementById("screen").style.width="400px";
    document.getElementById("screen").style.margin = "auto 40%"; 
    }
    else if(size=="desktop"){
    document.getElementById("screen").style.width="100%";
    document.getElementById("screen").style.margin = "auto 0%"; 
    }
    else{
    }
    }
    
    
    
    
    
    //DOWNLOAD
    function download(type){
    if(document.getElementById(type).value==""){
    return 1;
    }
    var strupper=type.toUpperCase();
    var filename =prompt("Please enter the " +strupper+" file name", "");
    
    if(filename!=null){
    var a = document.body.appendChild(
    document.createElement("a")
    );
    a.download = filename+"."+type;
    a.href = "data:text/html," + document.getElementById(type).value;
    a.click();
    }
    }