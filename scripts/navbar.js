const list = document.querySelectorAll('.list')
const pages  = document.querySelectorAll('.pages')
let num = 0;
function activeLink() {
    list.forEach((item) => {
        item.classList.remove('active')
        this.classList.add('active')
    })
    
    // console.dir(list)
    list.forEach((item, index) => {
        if(item.classList[1] == "active") {
            pages[index].classList.add('active_page')
        } else {
            pages[index].classList.remove('active_page')
        }
    })    
}

list.forEach((item) => {
    item.addEventListener('click', activeLink)
})