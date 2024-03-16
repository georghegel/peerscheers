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
        // console.log(index)
        clearActiveClass(tabItems)
        clearActiveClass(contentItems)
        
        setActiveClass(tabItems, index)
        setActiveClass(contentItems, index)
    })
}
  
tabItems.forEach(checkoutTabs)

document.querySelector('.humburger_menu').onclick = function() {
    document.querySelector('.header-nav').classList.toggle("show");
    document.querySelector('header').classList.toggle("show_mobile");
}

document.querySelector('.mobile_icon').onclick = function() {
        clearActiveClass(tabItems)
        clearActiveClass(contentItems)
        
        setActiveClass(tabItems, 0)
        setActiveClass(contentItems, 0)
}




const dropFileZone = document.querySelector("#upload_zone")
const uploadInput = document.querySelector("#input_file")
const uploadImg = document.querySelector(".upload_img")


uploadInput.addEventListener("change", uploadImage);
uploadInput.addEventListener("click", initialize);


function uploadImage() {
    let imgLink = URL.createObjectURL(uploadInput.files[0]);
    upload_zone.style.backgroundSize = "contain";
    upload_zone.style.backgroundImage = `url(${imgLink})`;
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






const matrix_one = document.querySelector('.matrix_one_container')
const matrix_one_cell = document.querySelector('.matrix_one_cell')
const matrix_one_n = document.querySelector('.matrix_one_n')
const matrix_one_m = document.querySelector('.matrix_one_m')
let matrix_one_cell_clone;
let matrix_one_past_n = 2;
let matrix_one_past_m = 2;

matrix_one_m.addEventListener("change", function() {
    document.querySelector('.matrix_one_error').style.display = "none"
    if (matrix_one_m.value > matrix_one_past_m) 
    {
        for (let i = matrix_one_past_m; i < matrix_one_m.value; i++) {
            for (let j = 0; j < matrix_one_n.value; j++) { 
                matrix_one_cell_clone = matrix_one_cell.cloneNode(true); 
                matrix_one_cell_clone.value = ""
                matrix_one.prepend(matrix_one_cell_clone)
            }
        }
    }
    else if (matrix_one_m.value < matrix_one_past_m && matrix_one_m.value > 0) {
        for (let i = 0; i < matrix_one_past_m - matrix_one_m.value; i++) {
            for (let j = 0; j < matrix_one_n.value; j++) {
                document.querySelector('.matrix_one_cell').remove()
            }
        }
    } else {
        document.querySelector('.matrix_one_error').style.display = "inline-block"
        return
    }
    
    matrix_one_past_m = Number(matrix_one_m.value);
})

let str_one = "auto auto"
matrix_one_n.addEventListener("change", function() {
    document.querySelector('.matrix_one_error').style.display = "none"

    if (matrix_one_n.value > matrix_one_past_n) {

        for (let i = matrix_one_past_n; i < matrix_one_n.value; i++) {
            str_one += " auto"
            for (let j = 0; j < matrix_one_m.value; j++) {
                matrix_one_cell_clone = matrix_one_cell.cloneNode(true)
                matrix_one.prepend(matrix_one_cell_clone)
            }
        }
    } else if (matrix_one_n.value < matrix_one_past_n && matrix_one_n.value > 0) {

        for (let i = 0; i < matrix_one_past_n - matrix_one_n.value; i++) {
            str_one = " auto"
            for (let j = 0; j < matrix_one_m.value; j++) {
                document.querySelector('.matrix_one_cell').remove()
            }
        }
        // console.log(str_one)
    } else {
        document.querySelector('.matrix_one_error').style.display = "inline-block"
        return
    }

    matrix_one_past_n = Number(matrix_one_n.value);
    matrix_one.style.gridTemplateColumns = str_one;

    let grid_size = Number(matrix_one_n.value) + 1;
    document.querySelector('.matrix_one_size').style.gridColumn = "1/" + grid_size;
   
})








const matrix_two = document.querySelector('.matrix_two_container')
const matrix_two_cell = document.querySelector('.matrix_two_cell')
const matrix_two_n = document.querySelector('.matrix_two_n')
const matrix_two_m = document.querySelector('.matrix_two_m')
let matrix_two_cell_clone;
let matrix_two_past_n = 2;
let matrix_two_past_m = 2;

matrix_two_m.addEventListener("change", function() {
    document.querySelector('.matrix_one_error').style.display = "none"
    if (matrix_two_m.value > matrix_two_past_m) 
    {
        for (let i = matrix_two_past_m; i < matrix_two_m.value; i++) {
            for (let j = 0; j < matrix_two_n.value; j++) { 
                matrix_two_cell_clone = matrix_two_cell.cloneNode(true); 
                matrix_two_cell_clone.value = ""
                matrix_two.prepend(matrix_two_cell_clone)
            }
        }
    }
    else if (matrix_two_m.value < matrix_two_past_m && matrix_two_m.value > 0) {
        for (let i = 0; i < matrix_two_past_m - matrix_two_m.value; i++) {
            for (let j = 0; j < matrix_two_n.value; j++) {
                document.querySelector('.matrix_two_cell').remove()
            }
        }
    } else {
        document.querySelector('.matrix_two_error').style.display = "inline-block"
        return
    }
    
    matrix_two_past_m = Number(matrix_two_m.value);

})

let str_two = "auto auto"
matrix_two_n.addEventListener("change", function() {
    document.querySelector('.matrix_two_error').style.display = "none"

    if (matrix_two_n.value > matrix_two_past_n) {

        for (let i = matrix_two_past_n; i < matrix_two_n.value; i++) {
            str_two += " auto"
            for (let j = 0; j < matrix_two_m.value; j++) {
                matrix_two_cell_clone = matrix_two_cell.cloneNode(true)
                matrix_two.prepend(matrix_two_cell_clone)
            }
        }
    } else if (matrix_two_n.value < matrix_two_past_n && matrix_two_n.value > 0) {

        for (let i = 0; i < matrix_two_past_n - matrix_two_n.value; i++) {
            str_two = " auto"
            for (let j = 0; j < matrix_two_m.value; j++) {
                document.querySelector('.matrix_two_cell').remove()
            }
        }
        // console.log(str_two)
    } else {
        document.querySelector('.matrix_two_error').style.display = "inline-block"
        return
    }

    matrix_two_past_n = Number(matrix_two_n.value);
    matrix_two.style.gridTemplateColumns = str_two;

    let grid_size = Number(matrix_two_n.value) + 1;
    document.querySelector('.matrix_two_size').style.gridColumn = "1/" + grid_size;
   
})




const range_value = document.querySelector("#range_value");
const input_range = document.querySelector("#input_range");
range_value.textContent = input_range.value;
input_range.addEventListener("input", (event) => {
    range_value.textContent = event.target.value;
});






const dropImageZone = document.querySelector("#drop_zone")
const InputZone = document.querySelector("#input_zone")
// const uploadImg = document.querySelector(".upload_img")


InputZone.addEventListener("change", inputImage);
InputZone.addEventListener("click", initialize);

function initialize()
{
    document.body.onfocus = checkIt;
}
    
function checkIt()
{
    if(InputZone.value.length)  InputZone.value = ""
    document.body.onfocus = null;
}

function inputImage() {

    let imgLink = URL.createObjectURL(InputZone.files[0]);
    drop_zone.style.backgroundSize = "contain";
    drop_zone.style.backgroundImage = `url(${imgLink})`;
    
    document.querySelector('.input_zone_text').style.fontSize = "0";
    // document.querySelector('.answer').style.display = 'table';
}

dropImageZone.addEventListener("dragover", function(e) {
    e.preventDefault();
    // dropImageZone.style.backgroundColor = "#9C9C9C";
});

dropImageZone.addEventListener("drop", function(e) {
    e.preventDefault();
    InputZone.files = e.dataTransfer.files;
    // dropImageZone.style.backgroundColor = "#2A2A2A";
    inputImage();
});


