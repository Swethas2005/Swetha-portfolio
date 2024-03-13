document.getElementById("Download").addEventListener("click", function() {
    let resumeFileURL = "https://drive.google.com/uc?export=download&id=1VLWpDRPlr_JkQfxC6wWUQJrK4zog3jHX";

    let downloadLink = document.createElement('a');
    downloadLink.href = resumeFileURL;
    
    document.body.append(downloadLink);
  
    downloadLink.click();
});
