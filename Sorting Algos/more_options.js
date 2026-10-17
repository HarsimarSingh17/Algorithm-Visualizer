const mainMenuSideBtn = document.querySelector("#mainMenuSideBtn");
const sortingAlgoSideBtn = document.querySelector("#sortingAlgoSideBtn");
const graphSideBtn = document.querySelector("#graphSideBtn");
const sortingDocsSideBtn = document.querySelector("#sortingDocsSideBtn");
const graphDocsSideBtn = document.querySelector("#graphDocsSideBtn");

mainMenuSideBtn.addEventListener("click", ()=>{
    window.location.href = "../Main Page/index.html";
});

sortingAlgoSideBtn.addEventListener("click", ()=>{
    window.location.href = "../Sorting Algos/sortingAlgo.html";
});

graphSideBtn.addEventListener("click", ()=>{
    window.location.href = "../Path Finding Algos/graphAlgo.html";
});

sortingDocsSideBtn.addEventListener("click", ()=>{
    window.location.href = "../Sorting Documents/sortingDocs.html";
});

graphDocsSideBtn.addEventListener("click", ()=>{
    window.location.href = "../Graph Documents/graphDocs.html";
});