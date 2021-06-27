// https://www.encodedna.com/javascript/how-to-save-form-data-in-a-text-file-using-javascript.htm
function download() {
    
    // Get the data from each element on the form.

    const prompt = randomPrompt;
    const text = document.getElementById('essay');
    
    // This variable stores all the data.
    let data = 
        'Prompt: ' + prompt + '\r\n\n' +
        'You wrote: ' + text.value;

    // Convert the text to BLOB.
    const textToBLOB = new Blob([data], { type: 'text/plain' });
    const sFileName = 'response.txt';	   // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click(); 
}

