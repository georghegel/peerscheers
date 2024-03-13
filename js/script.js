const tabItems = Array.from(document.querySelectorAll('.tab_item'))
const contentItems = Array.from(document.querySelectorAll('.content_item'))

const clearActiveClass = (element, className = 'is_active') => {
    element.find(item => item.classList.remove(`${ className }`))
}
  
const setActiveClass = (element, index, className = 'is_active') => {
    element[index].classList.add(`${ className }`)
}
  
const checkoutTabs = (item, index) => {
    item.addEventListener('click', () => {
        if (item.classList.contains('is_active')) return

        clearActiveClass(tabItems)
        clearActiveClass(contentItems)
        
        setActiveClass(tabItems, index)
        setActiveClass(contentItems, index)
    })
}
  
tabItems.forEach(checkoutTabs)



const dropFileZone = document.querySelector("#upload_zone")
const uploadInput = document.querySelector("#input_file")
const uploadImg = document.querySelector(".upload_img")


uploadInput.addEventListener("change", uploadImage);

function uploadImage() {
    let imgLink = URL.createObjectURL(uploadInput.files[0]);
    uploadImg.style.backgroundSize = "contain";
    uploadImg.style.backgroundImage = `url(${imgLink})`;
    uploadImg.style.fontSize = "0";
    document.querySelector('.answer').style.display = 'table';
}

dropFileZone.addEventListener("dragover", function(e) {
    e.preventDefault();
    document.querySelector('#upload_zone').style.backgroundColor = "#9C9C9C";
});

dropFileZone.addEventListener("drop", function(e) {
    e.preventDefault();
    uploadInput.files = e.dataTransfer.files;
    document.querySelector('#upload_zone').style.backgroundColor = "#2A2A2A";
    uploadImage();
});