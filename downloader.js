const inputUrl = document.querySelector("form input"),
downloadBtn = document.querySelector("form button");

downloadBtn.addEventListener("click", (e) => {
    e.preventDefault();// Prevent from form submitting
    fetchFile(inputUrl.value);
    downloadBtn.innerText = "downloading file......."
})

function fetchFile(url){
    // Fetching url then returns response as blob object
   fetch(url).then(res => res.blob()).then(file => {
    // getting url for the created blob object
    let tempUrl = URL.createObjectURL(file);
    let aTag = document.createElement("a");
    aTag.href=tempUrl;
    aTag.download='filename'
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
    URL.revokeObjectURL(tempUrl);
    downloadBtn.innerText = "Download";
   }).catch(()=>{
    downloadBtn.innerText = "Download";
    alert("failed to download");
   });
}