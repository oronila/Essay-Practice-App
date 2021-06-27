

var lengthOfWord = 0;
function preventBackspace(e) {
    if (e) {
        
        console.log(lengthOfWord);
        var keyCode = e.charCode || e.keyCode;
        if (keyCode == 8 && lengthOfWord==0) {
            if (e.preventDefault) {
                e.preventDefault();
            } else {
                e.returnValue = false;
            }
        }
        else if(keyCode==8){
            lengthOfWord--;
        }
        else{
            lengthOfWord++;
            document.getElementById('submitButton').removeAttribute("disabled");
        }
        
    }
    
}

var wordcount = 0;
function checkNewWords(e) {
    //console.log(document.getElementById("essay").value.charCodeAt((document.getElementById("essay").value).length-1));
    
    var writing = document.getElementById("essay").value;
    if (e.keyCode == 32 && writing.charCodeAt((writing).length-1) == 32) {
        if (e.preventDefault) {
            e.preventDefault();
        }
        else {
            e.returnValue = false;
        }
    }
    else if(e.keyCode == 32 && writing.charCodeAt((writing).length-1) != 32){
        wordcount = writing.split(" ").length;
        document.getElementById('wordCount').innerHTML = "Words: "+wordcount;
        valueChange();
        lengthOfWord = 0;
    }    
}

