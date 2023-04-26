
// 获取所有的td
let tds = document.querySelectorAll('td')
tds.forEach(item => {
    item.onclick = function () {
        tds.forEach(td => {
            td.classList.remove('hover')
        })
        this.classList.add('hover')
    }
})