const полосочкаПрокрутки = window.innerWidth - document.documentElement.clientWidth
let окошко = "закртыто"

console.log("Размер экрана при  ",document.body.clientWidth)
console.log("Полосочка прокрутки =  ",полосочкаПрокрутки)
function fixScreenBug() {
    if(окошко == "закртыто"){
        document.querySelector("header").style.paddingRight = полосочкаПрокрутки + "px"
        окошко = "открыто"
    }       
    else{
        document.querySelector("header").style.paddingRight = 0 + "px"
        окошко = "закртыто"
    }  
}

const offcanvas1 = document.getElementById('offcanvasRight1'); // Ваш Offcanvas

offcanvas1.addEventListener('hidden.bs.offcanvas', function () {
    fixScreenBug()
});

offcanvas1.addEventListener('show.bs.offcanvas', function () {
    fixScreenBug()
});

const offcanvas2 = document.getElementById('offcanvasRight2'); // Ваш Offcanvas

offcanvas2.addEventListener('hidden.bs.offcanvas', function () {
    fixScreenBug()
});

offcanvas2.addEventListener('show.bs.offcanvas', function () {
    fixScreenBug()
});