document.getElementById("Download").addEventListener("click", function() {
    let resumeFileURL = "https://drive.google.com/file/d/1VLWpDRPlr_JkQfxC6wWUQJrK4zog3jHX/view?usp=drive_link";

    let downloadLink = document.createElement('a');
    downloadLink.href = resumeFileURL;
    
    document.body.append(downloadLink);
  
    downloadLink.click();
});




 