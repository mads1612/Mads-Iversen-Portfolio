window.addEventListener("load", sidenVises);

var tema2Btn = document.getElementById('tema2-btn');
tema2Btn.onclick = function () {
    console.log('click');
    var temaContainer2 = document.getElementById('tema-container2');
    temaContainer2.classList.toggle('hide');
};


function sidenVises() {
    console.log("sidenVises");
}
