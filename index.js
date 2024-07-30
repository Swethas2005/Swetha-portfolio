// document.getElementById("Download").addEventListener("click", function() {
//     let resumeFileURL = "C:\Users\Swetha s\OneDrive\Desktop\Swetha-portfolio\docs\Swetha_S_FrontendDeveloper(React).pdf";

//     let downloadLink = document.createElement('a');
//     downloadLink.href = resumeFileURL;
    
//     document.body.append(downloadLink);
  
//     downloadLink.click();
// });


document.getElementById("Download").addEventListener("click", function() {
    let resumeFileURL = "docs/Swetha_S_FrontendDeveloper(React).pdf"; // Use a relative path

    let downloadLink = document.createElement('a');
    downloadLink.href = resumeFileURL;
    downloadLink.download = "Swetha_S_FrontendDeveloper(React).pdf"; // Optional: specify the download filename
    
    document.body.appendChild(downloadLink);
    
    downloadLink.click();
    
    document.body.removeChild(downloadLink); // Clean up the DOM
});
