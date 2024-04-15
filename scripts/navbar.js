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
            if(index == 1) {
                let order = document.getElementById('order')
                let iframe = document.createElement('iframe')
                iframe.src = "./pages/distribution_and_order_statistics.html"
                iframe.id = "iOrder"
                iframe.classList = "iframe"
                order.appendChild(iframe)
            } else if(index == 2) {
                let R = document.getElementById('r')
                let iframe = document.createElement('iframe')
                iframe.src = "./pages/Practical_Session_5_R.html"
                iframe.id = "iR"
                iframe.classList = "iframe"
                R.appendChild(iframe)
            }
        } else {
            pages[index].classList.remove('active_page')
        }
    })    
}

list.forEach((item) => {
    item.addEventListener('click', activeLink)
})