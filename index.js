document.getElementById("Download").addEventListener("click", function() {
    let resumeFileURL = "docs/SwethaS-FullStackWebDeveloper.pdf"; // Use a relative path

    let downloadLink = document.createElement('a');
    downloadLink.href = resumeFileURL;
    downloadLink.download = "SwethaS-FullStackWebDeveloper.pdf";
    
    document.body.appendChild(downloadLink);
    
    downloadLink.click();
    
    document.body.removeChild(downloadLink); // Clean up the DOM
});
