document.getElementById("Download").addEventListener("click", function() {
    let resumeFilePath = 'docs/Resume.pdf';

    let downloadLink = document.createElement('a');
    downloadLink.href = resumeFilePath;
  
    downloadLink.download = 'Resume.pdf.';
  
    document.body.append(downloadLink);
  
    downloadLink.click();

});






 