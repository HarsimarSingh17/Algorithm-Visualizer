let arr = [];
let graph = document.querySelector(".axis-box");
let sizeTitle = document.querySelector("#size-title");
let speedTitle = document.querySelector("#speed-title");
let axisBox = document.querySelector(".axis-box");

let sizeBar = document.querySelector("#size-slider");
let n = sizeBar.value;

let speedBar = document.querySelector("#speed-slider");
let pause_play_btn = document.querySelector(".pause-play-button");
let pause_play_status = document.querySelector(".pause-play-status");

let pauseScene = false;

let bestTimeComplexity = document.querySelector(".best-case-value");
let worstTimeComplexity = document.querySelector(".worst-case-value");
let avgTimeComplexity = document.querySelector(".avg-case-value");
let spaceComplexity = document.querySelector(".spaceComplexity-value");
let timeDisplay = document.querySelector(".time-value");


for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * 100));
}

let heights = document.querySelector(".heights");

for (let i = 0; i < n; i++) {
    let height_bar = document.createElement("div");
    height_bar.style.marginTop = "1.5px";
    height_bar.id = `height${i}`;
    height_bar.style.backgroundColor = "yellow";
    height_bar.style.width = `${(100 - n)}%`;
    height_bar.style.height = `${arr[i]}%`;
    heights.append(height_bar);
}

function generateArray() {
    arr = [];
    heights.innerHTML = "";

    n = Number(sizeBar.value);

    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }

    for (let i = 0; i < n; i++) {
        let height_bar = document.createElement("div");
        height_bar.style.marginTop = "1.5px";
        height_bar.id = `height${i}`;
        height_bar.style.backgroundColor = "yellow";
        height_bar.style.width = `${(100 - n)}%`;
        height_bar.style.height = `${arr[i]}%`;
        heights.append(height_bar);
    }

}
function getSpeed() {
    let speed = Number(speedBar.value);

    if (speed === 1) return 500;
    if (speed === 2) return 250;
    if (speed === 3) return 100;
    if (speed === 4) return 50;
    if (speed === 5) return 10;
}

speedBar.addEventListener("input", () => {
    let speedInMS = getSpeed();

    if (speedInMS === 5) {
        speedInMS = 500;
    }
    else if (speedInMS === 4) {
        speedInMS = 250;
    }
    else if (speedInMS === 3) {
        speedInMS = 100;
    }
    else if (speedInMS === 2) {
        speedInMS = 50;
    }
    else if (speedInMS === 1) {
        speedInMS = 10;
    }
    speedTitle.innerText = `Speed : ${speedInMS}ms`;
});



sizeBar.addEventListener("input", () => {
    bestTimeComplexity.innerText = "-";
    worstTimeComplexity.innerText = "-";
    avgTimeComplexity.innerText = "-";

    spaceComplexity.innerText = "-";

    timeDisplay.innerText = "0.00s"

    let size = Number(sizeBar.value);
    sizeTitle.innerText = `Size : ${size}`;
    generateArray();
});

let timerRunning = false;
let timerAnimation;

function startTimer() {
    let startTime = performance.now();

    timerRunning = true;

    function updateTimer() {
        if (timerRunning == false) {
            return;
        }

        let currentTime = performance.now();
        let elapsedTime = (currentTime - startTime) / 1000;

        timeDisplay.innerHTML = `${elapsedTime.toFixed(3)}s`;

        timerAnimation = requestAnimationFrame(updateTimer);
    }

    updateTimer();

    return startTime;
}

function stopTimer(startTimer) {
    timerRunning = false;
    cancelAnimationFrame(timerAnimation);

    let endTime = performance.now();

    let elapsedTime = (endTime - startTimer) / 1000;

    timeDisplay.innerText = `${elapsedTime.toFixed(3)}s`;
}

let newArrBtn = document.querySelector("#new-array");

function swap(i, j) {

    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;

    let bar1 = document.querySelector(`#height${i}`);
    let bar2 = document.querySelector(`#height${j}`);

    bar1.style.height = `${arr[i]}%`;
    bar2.style.height = `${arr[j]}%`;

}

function updateBar(i) {

    let bar = document.querySelector(`#height${i}`);
    bar.style.height = `${arr[i]}%`;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function checkIfPaused() {

    while (pauseScene) {
        await sleep(100);
    }
}

function highlight(i, color) {
    let bar1 = document.querySelector(`#height${i}`);
    bar1.style.backgroundColor = `${color}`;
}

newArrBtn.addEventListener("click", () => {

    bestTimeComplexity.innerText = "-";
    worstTimeComplexity.innerText = "-";
    avgTimeComplexity.innerText = "-";

    spaceComplexity.innerText = "-";
    timeDisplay.innerText = "0.00s"


    generateArray();


});

pause_play_btn.addEventListener("click", () => {
    if (pauseScene == false) {
        pause_play_btn.innerHTML = "";
        pause_play_btn.innerHTML = "<i class='fa-regular fa-circle-play'></i>";
        pauseScene = true;
        pause_play_status.innerText = "play";
    }
    else {
        pause_play_btn.innerHTML = "";
        pause_play_btn.innerHTML = "<i class='fa-regular fa-circle-pause'></i>";
        pauseScene = false;
        pause_play_status.innerText = "pause";
    }

});

function resetColor(i) {
    let bar1 = document.querySelector(`#height${i}`);
    // let bar2 = document.querySelector(`#height${j}`);

    bar1.style.backgroundColor = `yellow`;
    // bar2.style.backgroundColor = `yellow`;
}

let bubbleSortBtn = document.querySelector("#bubbleSort");
let insertionSortBtn = document.querySelector("#insertionSort");
let selectionSortBtn = document.querySelector("#selectionSort");
let quickSortBtn = document.querySelector("#quickSort");
let mergeSortBtn = document.querySelector("#mergeSort");

async function bubbleSort() {

    for (let i = 0; i < arr.length; i++) {
        let flag = 0;
        for (let j = 0; j < arr.length - i - 1; j++) {

            await checkIfPaused();

            highlight(j, "green");
            highlight(j + 1, "green");

            let speedInMS = getSpeed();
            await sleep(speedInMS);

            if (arr[j] > arr[j + 1]) {
                flag = 1;
                swap(j, j + 1);
            }
            resetColor(j);
            resetColor(j + 1);


            speedInMS = getSpeed();
            await sleep(speedInMS);

        }
        if (flag == 0) {
            break;
        }
    }

}

async function insertionSort() {

    for (let i = 1; i < arr.length; i++) {

        let key = arr[i];
        let j = i - 1;

        highlight(i, "red");

        let speedInMS = getSpeed();
        await sleep(speedInMS);

        while (j >= 0 && arr[j] > key) {

            await checkIfPaused();

            highlight(j, "green");
            highlight(j + 1, "green");

            speedInMS = getSpeed();
            await sleep(speedInMS);

            arr[j + 1] = arr[j];

            updateBar(j + 1);
            resetColor(j);
            resetColor(j + 1);

            j--;


            speedInMS = getSpeed();
            await sleep(speedInMS);
        }

        arr[j + 1] = key;
        updateBar(j + 1);

        resetColor(i);

        speedInMS = getSpeed();
        await sleep(speedInMS);
    }


}

async function selectionSort() {



    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < arr.length; j++) {

            await checkIfPaused();

            highlight(i, "green");
            highlight(j, "green");

            let speedInMS = getSpeed();
            await sleep(speedInMS);


            if (arr[j] < arr[minIndex]) {
                minIndex = j;
                highlight(minIndex, "red");
                speedInMS = getSpeed();
                await sleep(speedInMS);

            }

            resetColor(i);
            resetColor(j);
        }

        speedInMS = getSpeed();
        await sleep(speedInMS);

        swap(i, minIndex);
        resetColor(minIndex);

    }


}

async function partition(low, high) {
    let pivot = arr[high];

    let i = low - 1;
    for (let j = low; j < high; j++) {

        await checkIfPaused();
        highlight(j, "green");
        highlight(high, "purple");

        let speedInMS = getSpeed();
        await sleep(speedInMS);


        if (arr[j] <= pivot) {

            i++;
            highlight(i, "red");
            highlight(j, "red");

            speedInMS = getSpeed();
            await sleep(speedInMS);

            swap(i, j);

            resetColor(j);
            resetColor(i);
        }

        resetColor(j);
        resetColor(high);
    }

    speedInMS = getSpeed();
    await sleep(speedInMS);

    highlight(i + 1, "red");
    highlight(high, "purple");

    swap(i + 1, high);

    speedInMS = getSpeed();
    await sleep(speedInMS);

    resetColor(i + 1);
    resetColor(high);


    return i + 1;
}

async function quickSort(low, high) {


    if (low < high) {
        let pi = await partition(low, high);

        await quickSort(low, pi - 1);
        await quickSort(pi + 1, high);
    }

}

async function merge(low, mid, high) {

    let left = [];
    let right = [];

    for (let i = low; i <= mid; i++) {
        left.push(arr[i]);
    }

    for (let i = mid + 1; i <= high; i++) {
        right.push(arr[i]);
    }

    let i = 0;
    let j = 0;
    let k = low;

    while (i < left.length && j < right.length) {

        highlight(i, "green");
        highlight(j, "green");

        await checkIfPaused();

        let speedInMS = getSpeed();
        await sleep(speedInMS);

        highlight(k, "red");

        if (left[i] <= right[j]) {
            arr[k] = left[i];
            i++;
            let speedInMS = getSpeed();
            await sleep(speedInMS);
            resetColor(i);

        }
        else {
            arr[k] = right[j];
            j++;
            let speedInMS = getSpeed();
            await sleep(speedInMS);
            resetColor(j);
        }

        updateBar(k);

        await checkIfPaused();
        resetColor(k);
        resetColor(i);
        resetColor(j);




        speedInMS = getSpeed();
        await sleep(speedInMS);


        k++;
    }

    while (i < left.length) {

        highlight(i, "green");
        await checkIfPaused();

        let speedInMS = getSpeed();
        await sleep(speedInMS);

        highlight(k, "red");
        arr[k] = left[i];
        resetColor(i);
        i++;

        updateBar(k);

        speedInMS = getSpeed();
        await sleep(speedInMS);
        resetColor(k);
        k++;

        speedInMS = getSpeed();
        await sleep(speedInMS);

    }

    while (j < right.length) {

        highlight(j, "green");
        await checkIfPaused();

        let speedInMS = getSpeed();
        await sleep(speedInMS);

        highlight(k, "red");
        arr[k] = right[j];
        resetColor(j);
        j++;

        updateBar(k);
        speedInMS = getSpeed();
        await sleep(speedInMS);
        resetColor(k);
        k++;

        speedInMS = getSpeed();
        await sleep(speedInMS);

    }
}

async function mergeSort(low, high) {

    if (low < high) {
        let mid = Math.floor(low + (high - low) / 2);
        highlight(mid, "purple");
        await mergeSort(low, mid);
        await mergeSort(mid + 1, high);

        await merge(low, mid, high);
        resetColor(mid);

    }
}




bubbleSortBtn.addEventListener("click", async () => {
    bestTimeComplexity.innerText = "O(n)";
    worstTimeComplexity.innerText = "O(n²)";
    avgTimeComplexity.innerText = "O(n²)";

    spaceComplexity.innerText = "O(1)";

    bubbleSortBtn.style.backgroundColor = "green";
    bubbleSortBtn.style.color = "white";

    let startTime = startTimer();
    await bubbleSort();
    stopTimer(startTime);

    bubbleSortBtn.style.backgroundColor = "rgb(37, 36, 36)";
    bubbleSortBtn.style.color = "blue";
    

    
    let graph_bar = document.createElement("div");
    let parent_bar = document.querySelector(".pre-bubble-sort-bar");
    let graph_bar_width = Number(timeDisplay.innerText.slice(0, -1));
    graph_bar.style.width = `${graph_bar_width}%`;
    graph_bar.innerText = `${graph_bar_width}s`;
    parent_bar.innerHTML = "";
    parent_bar.append(graph_bar);
});

insertionSortBtn.addEventListener("click", async () => {
    bestTimeComplexity.innerText = "O(n)";
    worstTimeComplexity.innerText = "O(n²)";
    avgTimeComplexity.innerText = "O(n²)";

    spaceComplexity.innerText = "O(1)";

    insertionSortBtn.style.backgroundColor = "green";
    insertionSortBtn.style.color = "white";

    let startTime = startTimer();
    await insertionSort();
    stopTimer(startTime);

    insertionSortBtn.style.backgroundColor = "rgb(37, 36, 36)";
    insertionSortBtn.style.color = "blue";

    let graph_bar = document.createElement("div");
    let parent_bar = document.querySelector(".pre-insertion-sort-bar");
    let graph_bar_width = Number(timeDisplay.innerText.slice(0, -1));
    graph_bar.style.width = `${graph_bar_width}%`;
    graph_bar.innerText = `${graph_bar_width}s`;
    parent_bar.innerHTML = "";
    parent_bar.append(graph_bar);
});

selectionSortBtn.addEventListener("click", async () => {
    bestTimeComplexity.innerText = "O(n²)";
    worstTimeComplexity.innerText = "O(n²)";
    avgTimeComplexity.innerText = "O(n²)";

    spaceComplexity.innerText = "O(1)";

    selectionSortBtn.style.backgroundColor = "green";
    selectionSortBtn.style.color = "white";

    let startTime = startTimer();
    await selectionSort();
    stopTimer(startTime);

    selectionSortBtn.style.backgroundColor = "rgb(37, 36, 36)";
    selectionSortBtn.style.color = "blue";

    let graph_bar = document.createElement("div");
    let parent_bar = document.querySelector(".pre-selection-sort-bar");
    let graph_bar_width = Number(timeDisplay.innerText.slice(0, -1));
    graph_bar.style.width = `${graph_bar_width}%`;
    graph_bar.innerText = `${graph_bar_width}s`;
    parent_bar.innerHTML = "";
    parent_bar.append(graph_bar);
});

quickSortBtn.addEventListener("click", async () => {

    bestTimeComplexity.innerText = "O(n log n)";
    worstTimeComplexity.innerText = "O(n²)";
    avgTimeComplexity.innerText = "O(n log n)";

    spaceComplexity.innerText = "O(1)";

    quickSortBtn.style.backgroundColor = "green";
    quickSortBtn.style.color = "white";

    let startTime = startTimer();
    await quickSort(0, arr.length - 1);
    stopTimer(startTime);

    quickSortBtn.style.backgroundColor = "rgb(37, 36, 36)";
    quickSortBtn.style.color = "blue";

    let graph_bar = document.createElement("div");
    let parent_bar = document.querySelector(".pre-quick-sort-bar");
    let graph_bar_width = Number(timeDisplay.innerText.slice(0, -1));
    graph_bar.style.width = `${graph_bar_width}%`;
    graph_bar.innerText = `${graph_bar_width}s`;
    parent_bar.innerHTML = "";
    parent_bar.append(graph_bar);
});

mergeSortBtn.addEventListener("click", async () => {

    bestTimeComplexity.innerText = "O(n log n)";
    worstTimeComplexity.innerText = "O(n log n)";
    avgTimeComplexity.innerText = "O(n log n)";

    spaceComplexity.innerText = "O(n)";

    mergeSortBtn.style.backgroundColor = "green";
    mergeSortBtn.style.color = "white";

    let startTime = startTimer();
    await mergeSort(0, arr.length - 1);
    stopTimer(startTime);

    mergeSortBtn.style.backgroundColor = "rgb(37, 36, 36)";
    mergeSortBtn.style.color = "blue";

    let graph_bar = document.createElement("div");
    let parent_bar = document.querySelector(".pre-merge-sort-bar");
    let graph_bar_width = Number(timeDisplay.innerText.slice(0, -1));
    graph_bar.style.width = `${graph_bar_width}%`;
    graph_bar.innerText = `${graph_bar_width}s`;
    parent_bar.innerHTML = "";
    parent_bar.append(graph_bar);
});

