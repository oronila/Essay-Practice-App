var wordcount = 0;
function checkNewWords(e) {
    //console.log(document.getElementById("essay").value.charCodeAt((document.getElementById("essay").value).length-1));
    
    var writing = document.getElementById("essay").value;
    if(e.keyCode == 32 && writing.charCodeAt((writing).length-1) != 32){
        wordcount = writing.split(" ").length;
        document.getElementById('wordCount').innerHTML = "Words: "+wordcount;
    }    
}