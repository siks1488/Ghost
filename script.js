const openMenu = document.querySelector(`.openb`);
const closeMenu = document.querySelector(`.closeb`);
const menu = document.querySelector(`.menu`);
const plusEu = document.querySelector(`.plus`);
const plusNAm = document.querySelector(`.fa-solid.fa-plus.fa-flip-horizontal`);
const Euc = document.querySelector(`.EuC`);
const Amc = document.querySelector(`.AmC`);
const pluscEu = document.querySelector(`.plusc`);
const pluscAm = document.querySelector(`.plusc1`);

const openA = function(){
    menu.classList.remove("hidden");
}
const closeA = function(){
    menu.classList.add(`hidden`);
}

const openEu = function(){
    Euc.classList.remove(`hidden`);
    plusEu.classList.add(`hidden`);
    pluscEu.classList.remove("hidden");
}
const closeEu = function(){
    Euc.classList.add("hidden");
    plusEu.classList.remove("hidden");
    pluscEu.classList.add(`hidden`);
}

const openAmc = function (){
    Amc.classList.remove("hidden");
    plusNAm.classList.add("hidden");
    pluscAm.classList.remove("hidden");
}
const closeAmc = function(){
    Amc.classList.add("hidden");
    plusNAm.classList.remove("hidden")
    pluscAm.classList.add("hidden");
}
openMenu.addEventListener(`click`, openA);
closeMenu.addEventListener(`click`,closeA);

pluscEu.addEventListener(`click`,closeEu);
plusEu.addEventListener("click",openEu);

plusNAm.addEventListener("click",openAmc);
pluscAm.addEventListener("click",closeAmc);