window.addEventListener("load", sidenVises);

var temaContainer1 = document.getElementById('tema-container1');
var temaContainer2 = document.getElementById('tema-container2');
var temaContainer3 = document.getElementById('tema-container3');
var temaContainer4 = document.getElementById('tema-container4');

var tema1Btn = document.getElementById('tema1-btn');
var tema2Btn = document.getElementById('tema2-btn');
var tema3Btn = document.getElementById('tema3-btn');
var tema4Btn = document.getElementById('tema4-btn');

function hideAllTemaContainers() {
    temaContainer1.classList.add('hide');
    temaContainer2.classList.add('hide');
    temaContainer3.classList.add('hide');
    temaContainer4.classList.add('hide');
}

if (tema1Btn) {
    tema1Btn.onclick = function () {
        console.log('tema container 1 click');

        hideAllTemaContainers();
        temaContainer1.classList.remove('hide');
        window.scrollTo(0, 100);
    };

    tema2Btn.onclick = function () {
        console.log('tema container 2 click');

        hideAllTemaContainers();
        temaContainer2.classList.remove('hide');
        window.scrollTo(0, 100);
    };

    tema3Btn.onclick = function () {
        console.log('tema container 3 click');

        hideAllTemaContainers();
        temaContainer3.classList.remove('hide');
        window.scrollTo(0, 100);
    };

    tema4Btn.onclick = function () {
        console.log('tema container 4 click');

        hideAllTemaContainers();
        temaContainer4.classList.remove('hide');
        window.scrollTo(0, 100);
    };
}




function sidenVises() {
    console.log("sidenVises");
}

var menuKnap = document.getElementById('menuknap');
menuKnap.onclick = function () {
    console.log('menu vises');
    document.querySelector("#sidebar").classList.toggle("hide");

    let erSkjult = document.querySelector("#menu").classList.contains("hide");

    if (erSkjult == true) {
        document.querySelector("#menuknap").textContent = "☰";
    } else {
        document.querySelector("#menuknap").textContent = "X";
    }
}
