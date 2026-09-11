const graph_btn = document.querySelector("#graph-menu-btn");

graph_btn.addEventListener("click", () => {
    window.open("graphAlgo/graphAlgo.html", "_blank");
});

const grid = document.querySelector(".grid");

let gridRows = 15;
let gridCols = 30;

let startNode = null;
let endNode = null;

let isMouseDown = false;
let eraseMode = false;

let draggingStart = false;
let draggingEnd = false;

let pauseScene = false;

const timeDisplay = document.querySelector(".time-value");
const pausePlayBtn = document.querySelector(".pause-play-button");

const bestCaseTC = document.querySelector(".best-case-value");
const worstCaseTC = document.querySelector(".worst-case-value");
const avgCaseTC = document.querySelector(".avg-case-value");

const spaceCompValue = document.querySelector(".spaceComplexity-value");

const noteForComplexity = document.querySelector(".optInfoNote");

let speedAdjustBar = document.querySelector("#speed-slider");


function createGrid() {

    bestCaseTC.innerText = "-";
    avgCaseTC.innerText = "-";
    worstCaseTC.innerText = "-";

    spaceCompValue.innerText = "-";

    noteForComplexity.innerText = "";

    for (let i = 1; i <= gridRows; i++) {
        for (let j = 1; j <= gridCols; j++) {

            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.dataset.row = i;
            cell.dataset.col = j;

            cell.dataset.weight = Math.floor(Math.random() * 10);
            if (cell.dataset.weight == 0) {
                cell.dataset.weight = 1;
            }

            cell.innerText = `${cell.dataset.weight}`;

            if (cell.classList.contains('visited')) {
                cell.classList.remove("visited");
            }
            if (cell.classList.contains('path')) {
                cell.classList.remove("path");
            }

            grid.appendChild(cell);
        }
    }

    timeDisplay.innerText = "0.00s";
}

createGrid(gridRows, gridCols);

grid.addEventListener("mouseover", (e) => {
    if (!isMouseDown) return;

    const cell = e.target;

    if (!cell.classList.contains("cell")) {
        return;
    }

    if (draggingStart) {
        if (!cell.classList.contains("wall") && !cell.classList.contains("end")) {

            startNode.classList.remove("start");
            cell.classList.add("start");

            startNode = cell;

            return;
        }
    }
    if (draggingEnd) {
        if (!cell.classList.contains("wall") && !cell.classList.contains("start")) {
            endNode.classList.remove("end");
            cell.classList.add("end");

            endNode = cell;

            return;
        }
    }

    if (cell.classList.contains("start")) {
        return;
    }
    if (cell.classList.contains("end")) {
        return;
    }

    if (eraseMode) {
        cell.classList.remove("wall");
    }
    else {
        cell.classList.add("wall");
    }

});

document.addEventListener("mouseup", () => {
    isMouseDown = false;
    draggingStart = false;
    draggingEnd = false;
});

grid.addEventListener("contextmenu", (e) => {
    e.preventDefault();
});

grid.addEventListener("mousedown", (e) => {

    const cell = e.target;


    if (!cell.classList.contains("cell")) {
        return;
    }

    if (e.button === 0 && cell.classList.contains("start")) {
        draggingStart = true;
        isMouseDown = true;
        return;
    }
    if (e.button === 0 && cell.classList.contains("end")) {
        draggingEnd = true;
        isMouseDown = true;
        return;
    }
    //right click
    if (e.button === 2) {

        cell.classList.remove("wall");
        eraseMode = true;
        isMouseDown = true;

        return;
    }
    //left click
    if (e.button === 0) {

        isMouseDown = true;

        if (cell.classList.contains("wall")) {
            eraseMode = true;
            cell.classList.remove("wall");
        }
        else {
            eraseMode = false;
            cell.classList.add("wall");
        }
    }
});

//start and end

function createStartAndEnd() {

    const start = document.querySelector('.cell[data-row="7"][data-col="5"]');
    const end = document.querySelector('.cell[data-row="7"][data-col="24"]');

    start.classList.add('start');
    end.classList.add('end');

    startNode = start;
    endNode = end;
}
createStartAndEnd();

//algo basis

let newGrid = document.querySelector("#new-maze");

newGrid.addEventListener("click", () => {

    bestCaseTC.innerText = "-";
    avgCaseTC.innerText = "-";
    worstCaseTC.innerText = "-";

    spaceCompValue.innerText = "-";

    noteForComplexity.innerText = "";

    grid.innerText = "";
    createGrid();
    createStartAndEnd();

    for (let i = 1; i <= gridRows; i++) {
        for (let j = 1; j <= gridCols; j++) {
            const cell = document.querySelector(`.cell[data-row="${i}"][data-col="${j}"]`);

            if (cell.classList.contains('visited')) {
                cell.classList.remove("visited");
            }
            if (cell.classList.contains('path')) {
                cell.classList.remove("path");
            }
        }
    }

    timeDisplay.innerText = "0.00s";
});

pausePlayBtn.addEventListener("click", () => {
    if (pauseScene == false) {
        pauseScene = true;
        pausePlayBtn.innerHTML = "";
        pausePlayBtn.innerHTML = "<i class='fa-regular fa-circle-play'></i>";
        pauseStartedAt = performance.now();
    }
    else {
        pauseScene = false;
        pausePlayBtn.innerHTML = "";
        pausePlayBtn.innerHTML = "<i class='fa-regular fa-circle-pause'></i>";
        pausedTime += performance.now() - pauseStartedAt;
    }
});

let timeAnimation;
let timeRunning = false;
let startingTime = performance.now();
let pausedTime = 0;
let pauseStartedAt = 0;


async function startTimer() {

    startingTime = performance.now();
    pausedTime = 0;
    timeRunning = true;

    async function updateTimer() {

        if (timeRunning == false) {
            return;
        }
        if (!pauseScene) {
            let currentTime = performance.now();
            let elapsedTime = (currentTime - startingTime - pausedTime) / 1000;
            timeDisplay.innerText = `${elapsedTime.toFixed(3)}s`;
        }


        timeAnimation = requestAnimationFrame(updateTimer);
    }

    await updateTimer();

    return startingTime;
}

async function stopTimer(startingTime) {

    timeRunning = false;
    cancelAnimationFrame(timeAnimation);

    let endTime = performance.now();
    let elapsedTime = (endTime - startingTime - pausedTime) / 1000;

    timeDisplay.innerText = `${elapsedTime.toFixed(3)}s`;

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function checkIfPaused() {

    while (pauseScene) {
        await sleep(100);
    }
}

async function reconstructionPath(previous) {

    let currNode = endNode;

    while (currNode !== startNode) {

        currNode = previous.get(currNode);
        currNode.classList.add("path");

        console.log(currNode);

        await sleep(getSpeed());
    }
}

//bfs

function getNeighbours(cell) {

    const rowNo = Number(cell.dataset.row);
    const colNo = Number(cell.dataset.col);

    const neighbours = [];

    const directions = [[1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]];

    for (const [dr, dc] of directions) {

        const neighbourRow = rowNo + dr;
        const neighbourCol = colNo + dc;

        const neighbour = document.querySelector(`.cell[data-row="${neighbourRow}"][data-col="${neighbourCol}"]`);
        if (neighbour) {
            neighbours.push(neighbour);
        }
    }

    return neighbours;
}

async function bfs() {
    const maxHeap = [];
    const visited = new Set();
    const previous = new Map();

    maxHeap.push(startNode);
    visited.add(startNode);

    while (maxHeap.length > 0) {

        await checkIfPaused();

        const currNode = maxHeap.shift();

        currNode.classList.add("visited");

        await sleep(getSpeed());

        if (currNode === endNode) {
            console.log("Found");
            reconstructionPath(previous);
            return;
        }

        const neighbours = getNeighbours(currNode);

        for (const neighbour of neighbours) {

            await checkIfPaused();

            if (visited.has(neighbour)) {
                continue;
            }
            if (neighbour.classList.contains("wall")) {
                continue;
            }

            visited.add(neighbour);
            maxHeap.push(neighbour);

            previous.set(neighbour, currNode);
        }
    }

    console.log("No Path");
}

const bfsBtn = document.querySelector("#bfsBtn");

bfsBtn.addEventListener("click", async () => {
    bestCaseTC.innerText = "O(1)";
    avgCaseTC.innerText = "O(V + E)";
    worstCaseTC.innerText = "O(V + E)";

    spaceCompValue.innerText = "O(V)";

    noteForComplexity.innerText = "These complexity values are possible when BFS is done with adjacency list";

    bfsBtn.style.backgroundColor = "green";
    bfsBtn.style.color = "white";
    let startingTime = await startTimer();
    await bfs();
    stopTimer(startingTime);
    bfsBtn.style.backgroundColor = "rgb(37, 36, 36)";
    bfsBtn.style.color = "blue";

    generateGraph("bfs");
});

//dfs
async function dfs() {

    const stack = [];
    const visited = new Set();
    const previous = new Map();

    stack.push(startNode);
    visited.add(startNode);

    while (stack.length > 0) {

        await checkIfPaused();

        const currNode = stack.pop();
        currNode.classList.add("visited");

        await sleep(getSpeed());

        if (currNode === endNode) {
            console.log("found");
            await reconstructionPath(previous);
            return;
        }

        const neighbours = getNeighbours(currNode);

        for (const neighbour of neighbours) {

            await checkIfPaused();

            if (visited.has(neighbour)) {
                continue;
            }
            if (neighbour.classList.contains("wall")) {
                continue;
            }

            visited.add(neighbour);
            previous.set(neighbour, currNode);
            stack.push(neighbour);
        }

    }

    console.log("No path");
}

const dfsBtn = document.querySelector("#dfsBtn");

dfsBtn.addEventListener("click", async () => {
    bestCaseTC.innerText = "O(1)";
    avgCaseTC.innerText = "O(V + E)";
    worstCaseTC.innerText = "O(V + E)";

    spaceCompValue.innerText = "O(V)";

    noteForComplexity.innerText = "These complexity values are possible when DFS is done with adjacency list";

    dfsBtn.style.backgroundColor = "green";
    dfsBtn.style.color = "white";
    let startingTime = await startTimer();
    await dfs();
    stopTimer(startingTime);
    dfsBtn.style.backgroundColor = "rgb(37, 36, 36)";
    dfsBtn.style.color = "blue";

    generateGraph("dfs");
});

//dijkstra

function getClosestNode(unvisited, distances) {

    let closestNode = null;
    let smallestDistance = Infinity;

    for (const node of unvisited) {

        const distance = distances.get(node);

        if (distance < smallestDistance) {
            closestNode = node;
            smallestDistance = distance;
        }
    }

    return closestNode;
}

async function dijkstra() {

    const cells = document.querySelectorAll(".cell");

    const distances = new Map();
    const previous = new Map();
    const unvisited = new Set();

    cells.forEach(cell => {
        unvisited.add(cell);
        distances.set(cell, Infinity);
    });

    distances.set(startNode, 0);

    while (unvisited.size > 0) {

        await checkIfPaused();

        const current = getClosestNode(unvisited, distances);

        if (current === null) {
            break;

        }

        unvisited.delete(current);

        if (current.classList.contains("wall")) {
            continue;
        }
        if (current !== startNode && current !== endNode) {
            current.classList.add("visited");
            await sleep(getSpeed());
        }

        if (current === endNode) {
            endNode.style.backgroundColor = "rgb(229, 80, 16)";
            console.log("Found");
            await reconstructionPath(previous);
            return;
        }

        const neighbours = getNeighbours(current);

        for (const neighbour of neighbours) {

            await checkIfPaused();

            if (!unvisited.has(neighbour)) {
                continue;
            }
            if (neighbour.classList.contains("wall")) {
                continue;
            }

            const weight = Number(neighbour.dataset.weight);
            const newDistance = distances.get(current) + weight;

            if (newDistance < distances.get(neighbour)) {

                distances.set(neighbour, newDistance);
                previous.set(neighbour, current);
            }
        }

    }

    console.log("No Path");
}

const dijkstraBtn = document.querySelector("#dijkstraBtn");

dijkstraBtn.addEventListener("click", async () => {
    bestCaseTC.innerText = "O(1)*";
    avgCaseTC.innerText = "O((V + E) log V)";
    worstCaseTC.innerText = "O((V + E) log V)";

    spaceCompValue.innerText = "O(V)";

    noteForComplexity.innerText = "These complexity values are possible when Dijkstra Algorithm is done using min-heap/priority queue. The * is important because the best case depends on your implementation and termination condition.";

    dijkstraBtn.style.backgroundColor = "green";
    dijkstraBtn.style.color = "white";
    let startingTime = await startTimer();
    await dijkstra();
    stopTimer(startingTime);
    dijkstraBtn.style.backgroundColor = "rgb(37, 36, 36)";
    dijkstraBtn.style.color = "blue";

    generateGraph("dijkstra");
});


//A*

function heuristic(node, end) {

    const row1 = Number(node.dataset.row);
    const row2 = Number(end.dataset.row);

    const col1 = Number(node.dataset.col);
    const col2 = Number(end.dataset.col);

    return Math.abs(row1 - row2) + Math.abs(col1 - col2);
}

function getLowestScore(openSet, fScore) {

    let bestNode = null;
    let lowestScore = Infinity;

    for (const node of openSet) {
        const score = fScore.get(node);

        if (score < lowestScore) {
            lowestScore = score;
            bestNode = node;
        }
    }

    return bestNode;
}

async function aStar() {

    const cells = document.querySelectorAll(".cell");

    const gScore = new Map();
    const fScore = new Map();
    const previous = new Map();
    const openSet = new Set();

    cells.forEach(cell => {
        gScore.set(cell, Infinity);
        fScore.set(cell, Infinity);
    });

    gScore.set(startNode, 0);

    fScore.set(startNode, heuristic(startNode, endNode));

    openSet.add(startNode);

    while (openSet.size > 0) {

        await checkIfPaused();

        const currNode = getLowestScore(openSet, fScore);

        if (currNode === null) {
            break;
        }

        openSet.delete(currNode);

        if (currNode.classList.contains("wall")) {
            continue;
        }
        if (currNode !== startNode && currNode !== endNode) {
            currNode.classList.add("visited");
            await sleep(getSpeed());
        }
        if (currNode === endNode) {
            console.log("Found");
            await reconstructionPath(previous);
            return;
        }

        const neighbours = getNeighbours(currNode);

        for (const neighbour of neighbours) {

            await checkIfPaused();

            if (neighbour.classList.contains("wall")) {
                continue;
            }

            const weight = Number(neighbour.dataset.weight);

            const tentativeGScore = gScore.get(currNode) + weight;

            if (tentativeGScore < gScore.get(neighbour)) {

                previous.set(neighbour, currNode);

                gScore.set(neighbour, tentativeGScore);

                const hScore = heuristic(neighbour, endNode);

                fScore.set(neighbour, tentativeGScore + hScore);

                openSet.add(neighbour);
            }
        }

    }

    console.log("No Path");

}

const aStarBtn = document.querySelector("#aStarBtn");

aStarBtn.addEventListener("click", async () => {
    bestCaseTC.innerText = "O(1)*";
    avgCaseTC.innerText = "Heuristic-Dependent";
    worstCaseTC.innerText = "O((V + E) log V)";

    spaceCompValue.innerText = "O(V)";

    noteForComplexity.innerText = "These complexity values are possible when A* Algorithm is done using priority queue. Highly dependent on heuristic. The * is important because the best case depends on your implementation and termination condition."

    aStarBtn.style.backgroundColor = "green";
    aStarBtn.style.color = "white";
    let startingTime = await startTimer();
    await aStar();
    stopTimer(startingTime);
    aStarBtn.style.backgroundColor = "rgb(37, 36, 36)";
    aStarBtn.style.color = "blue";

    generateGraph("aStar");
});

//graph work

function generateGraph(algorithm) {

    let graphTimeBar = document.createElement("div");
    let totalTime = timeDisplay.innerText.slice(0, -1);
    graphTimeBar.style.width = `${totalTime}%`;

    let graphTimeDisplay = document.createElement("p");

    graphTimeDisplay.innerText = `${totalTime}s`;

    let graphBar = document.querySelector(`.pre-${String(algorithm)}-bar`);
    graphBar.innerHTML = "";
    graphBar.append(graphTimeBar);
    graphBar.append(graphTimeDisplay);
}

//header sliders

// function updateGrid(){

//     gridRows = Number(rowAdjustBar.value);
//     gridCols = Number(colAdjustBar.value);

//     grid.innerHTML = "";

//     createGrid();
//     createStartAndEnd();

//     timeDisplay.innerText = "-";

//     bestCaseTC.innerText = "-";
//     avgCaseTC.innerText = "-";
//     worstCaseTC.innerText = "-";

//     spaceCompValue.innerText = "-";

// }

// rowAdjustBar.addEventListener("input", updateGrid);
// colAdjustBar.addEventListener("input", updateGrid);

function getSpeed(){
    let speed = Number(speedAdjustBar.value);

    if(speed==10){
        return 0;
    }
    else if(speed==9){
        return 15;
    }
    else if(speed==8){
        return 30;
    }
    else if(speed==7){
        return 45;
    }
    else if(speed==6){
        return 60;
    }
    else if(speed==5){
        return 75;
    } 
    else if(speed==4){
        return 90;
    } 
    else if(speed==3){
        return 105;
    } 
    else if(speed==2){
        return 120;
    } 
    else if(speed==1){
        return 135;
    } 
    else{
        return 150;
    }
}