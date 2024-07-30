document.getElementById("Download").addEventListener("click", function() {
    let resumeFileURL = "file:///C:/Users/Swetha%20s/OneDrive/Desktop/Swetha_S_FrontendDeveloper(React).pdf";

    let downloadLink = document.createElement('a');
    downloadLink.href = resumeFileURL;
    
    document.body.append(downloadLink);
  
    downloadLink.click();
});
