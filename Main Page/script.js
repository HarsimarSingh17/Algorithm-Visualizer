const sortingNavBar = document.querySelector(".sortingVis");
const pathFindNavBar = document.querySelector(".pathFindingVis");

const sortingMainBtn = document.querySelector(".sortingContent");
const pathFindMainBtn = document.querySelector(".graphContent");

sortingNavBar.addEventListener("click", ()=>{
    window.location.href = "../Sorting Algos/sortingAlgo.html";
});

pathFindNavBar.addEventListener("click", ()=>{
    window.location.href= "../Path Finding Algos/graphAlgo.html";
})

sortingMainBtn.addEventListener("click", ()=>{
    window.location.href = "../Sorting Algos/sortingAlgo.html";
});

pathFindMainBtn.addEventListener("click", ()=>{
    window.location.href= "../Path Finding Algos/graphAlgo.html";
});

const docsBtn = document.querySelector(".docs");
const aboutBtn = document.querySelector(".about");

docsBtn.addEventListener("click", ()=>{
    document.querySelector("#docs-section-id").scrollIntoView({
        behavior: "smooth"
    });
});

aboutBtn.addEventListener("click", ()=>{
    document.querySelector("#about-section-id").scrollIntoView({
        behavior: "smooth"
    });
});


const sortingDocsBtn = document.querySelector(".sortingDocsDiv");
const graphsDocsBtn = document.querySelector(".graphsDocsDiv");

sortingDocsBtn.addEventListener("click", ()=>{
    window.location.href = "../Sorting Documents/sortingDocs.html";
});

graphsDocsBtn.addEventListener("click", ()=>{
    window.location.href = "../Graph Documents/graphDocs.html";
});