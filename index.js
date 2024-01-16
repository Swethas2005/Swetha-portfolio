document.getElementById("Download").addEventListener("click", function() {
    let resumeFilePath = 'docs/resume.pdf';

    let downloadLink = document.createElement('a');
    downloadLink.href = resumeFilePath;
  
    downloadLink.download = 'resume.pdf.';
  
    document.body.append(downloadLink);
  
    downloadLink.click();

});






 