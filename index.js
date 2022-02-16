let plus = document.getElementsByClassName('btn-plus');
let minius = document.getElementsByClassName('btn-minius');
let price = document.getElementsByClassName('price');
let quantity = document.getElementsByClassName('quantity');
let tt = document.getElementsByClassName('total');
let Delete = document.getElementsByClassName('btn-delete');
let ttp = document.getElementById('tt_p');
let like = document.getElementsByClassName('btn-like');

for (let l of like) {
  l.addEventListener("click", function () {
    l.classList.toggle("red");
 });
}

for (let d of Delete) {
    d.addEventListener ("click",function() {
        d.parentElement.remove();
        tp();
    });
}



function prices(x) {
    let s = 0;
    s = quantity[x].innerHTML * price[x].innerHTML;
    tt[x].innerHTML = s;

}
function tp() {
    let s = 0;
    for (let n of tt) {
        s += +n.innerHTML;
    }
    return ttp.innerHTML = s;

}



for (let i = 0 ; i< plus.length ; i++) {
plus[i].addEventListener("click",function() {
    quantity[i].innerHTML++;
    prices(i);
    tp();


})
}
for (let i = 0 ; i< minius.length ; i++){
    minius[i].addEventListener("click",function() {
        if (quantity[i].innerHTML > 0) {
        quantity[i].innerHTML--;
        prices(i);
        tp();
    }
    })
    }

