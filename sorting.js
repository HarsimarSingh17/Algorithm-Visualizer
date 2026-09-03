let arr = [];
let timeComplexityValue = document.querySelector(".timeComplexity-value");
let spaceComplexityValue = document.querySelector(".spaceComplexity-value");
let timeSeconds = document.querySelector(".time-seconds");
let learnMoreDiv = document.querySelector(".learnMore");
let graph = document.querySelector(".axis-box");

let sizeBar = document.querySelector("#size-slider");
let n = sizeBar.value;

let speedBar = document.querySelector("#speed-slider");
let pause_play_btn = document.querySelector(".pause-play-button");
let pause_play_status = document.querySelector(".pause-play-status");

let pauseScene = false;


for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * 100));
}

let heights = document.querySelector(".heights");

for (let i = 0; i < n; i++) {
    let height_bar = document.createElement("div");
    height_bar.style.marginTop = "1.5px";
    height_bar.id = `height${i}`;
    height_bar.style.backgroundColor = "yellow";
    height_bar.style.width = "2vmin";
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
        height_bar.style.width = "2vmin";
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

sizeBar.addEventListener("input", () => {
    generateArray();
});

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

function startTimer() {
    return performance.now();
}

function stopTimer(startTimer) {
    let endTime = performance.now();

    let elapsedTime = (endTime - startTimer) / 1000;

    timeSeconds.innerText = `${elapsedTime.toFixed(3)}s`;
}

function runTimer(startTimer) {

    let endTime = performance.now();
    let elapsedTime = (endTime - startTimer) / 1000;

    timeSeconds.innerText = `${elapsedTime.toFixed(2)}s`;
}


newArrBtn.addEventListener("click", () => {

    timeComplexityValue.innerText = "-";
    spaceComplexityValue.innerText = "-";
    generateArray();
    timeSeconds.innerText = "0.00s"

});

pause_play_btn.addEventListener("click", () => {
    if (pauseScene == false) {
        pause_play_btn.innerHTML = "";
        pause_play_btn.innerHTML = "<i class='fa-solid fa-play'></i>";
        pauseScene = true;
        pause_play_status.innerText = "play";
    }
    else {
        pause_play_btn.innerHTML = "";
        pause_play_btn.innerHTML = "<i class='fa-solid fa-pause'>";
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

    timeComplexityValue.innerText = "O(n²)";
    spaceComplexityValue.innerText = "O(1)";

    let startTime = startTimer();


    for (let i = 0; i < arr.length; i++) {
        let flag = 0;
        for (let j = 0; j < arr.length - i - 1; j++) {

            await checkIfPaused();

            highlight(j, "green");
            highlight(j + 1, "green");

            await sleep(getSpeed());

            runTimer(startTime);

            if (arr[j] > arr[j + 1]) {
                flag = 1;
                swap(j, j + 1);
            }
            resetColor(j);
            resetColor(j + 1);


            await sleep(getSpeed());
        }
        if (flag == 0) {
            break;
        }
    }

    runTimer(startTime);

    let graph_bar = document.createElement("div");
    graph_bar.style.backgroundColor = "green";
    let graph_bar_height = Number(timeSeconds.innerText.slice(0, -1));
    graph_bar.style.height = `${graph_bar_height}%`;
    graph.append(graph_bar);

}

async function insertionSort() {

    timeComplexityValue.innerText = "O(n²)";
    spaceComplexityValue.innerText = "O(1)";


    let startTime = startTimer();

    for (let i = 1; i < arr.length; i++) {

        let key = arr[i];
        let j = i - 1;

        highlight(i, "red");

        await sleep(getSpeed());

        while (j >= 0 && arr[j] > key) {

            await checkIfPaused();

            highlight(j, "green");
            highlight(j + 1, "green");

            await sleep(getSpeed());

            runTimer(startTime);

            arr[j + 1] = arr[j];

            updateBar(j + 1);
            resetColor(j);
            resetColor(j + 1);

            j--;


            await sleep(getSpeed());
        }

        arr[j + 1] = key;
        updateBar(j + 1);

        resetColor(i);

        await sleep(getSpeed());
    }

    runTimer(startTime);

    let graph_bar = document.createElement("div");
    graph_bar.style.backgroundColor = "yellow";
    let graph_bar_height = Number(timeSeconds.innerText.slice(0, -1));
    graph_bar.style.height = `${graph_bar_height}%`;
    graph.append(graph_bar);
}

async function selectionSort() {

    timeComplexityValue.innerText = "O(n²)";
    spaceComplexityValue.innerText = "O(1)";
    let startTime = startTimer();

    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < arr.length; j++) {

            await checkIfPaused();

            highlight(i, "green");
            highlight(j, "green");

            await sleep(getSpeed());

            runTimer(startTime);

            if (arr[j] < arr[minIndex]) {
                minIndex = j;
                highlight(minIndex, "red");
                await sleep(getSpeed());
            }

            resetColor(i);
            resetColor(j);
        }

        await sleep(getSpeed());

        swap(i, minIndex);
        resetColor(minIndex);

    }

    runTimer(startTime);

    let graph_bar = document.createElement("div");
    graph_bar.style.backgroundColor = "orange";
    let graph_bar_height = Number(timeSeconds.innerText.slice(0, -1));
    graph_bar.style.height = `${graph_bar_height}%`;
    graph.append(graph_bar);
}

async function partition(low, high) {
    let pivot = arr[high];

    let i = low - 1;
    for (let j = low; j < high; j++) {

        await checkIfPaused();
        highlight(j, "green");
        highlight(high, "purple");

        await sleep(getSpeed());

        if (arr[j] <= pivot) {

            i++;
            highlight(i, "red");
            highlight(j, "red");
            await sleep(getSpeed());
            swap(i, j);

            resetColor(j);
            resetColor(i);
        }

        resetColor(j);
        resetColor(high);
    }

    await checkIfPaused();
    highlight(i + 1, "red");
    highlight(high, "purple");

    swap(i + 1, high);

    await sleep(getSpeed());

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

        await checkIfPaused();


        if (left[i] <= right[j]) {

            arr[k] = left[i];
            i++;

        }
        else {
            arr[k] = right[j];
            j++;
        }

        updateBar(k);

        await sleep(getSpeed());


        k++;
    }

    while (i < left.length) {

        await checkIfPaused();
        arr[k] = left[i];
        i++;

        updateBar(k);
        k++;

        await sleep(getSpeed());
    }

    while (j < right.length) {

        await checkIfPaused();
        arr[k] = right[j];
        j++;

        updateBar(k);
        k++;

        await sleep(getSpeed());
    }
}

async function mergeSort(low, high) {

    if (low < high) {
        let mid = Math.floor(low + (high - low) / 2);
        await mergeSort(low, mid);
        await mergeSort(mid + 1, high);

        await merge(low, mid, high);

    }
}



bubbleSortBtn.addEventListener("click", async () => {
    bubbleSortBtn.style.backgroundColor = "green";
    bubbleSortBtn.style.color = "white";
    await bubbleSort();
    bubbleSortBtn.style.backgroundColor = "rgb(37, 36, 36)";
    bubbleSortBtn.style.color = "blue";
});

insertionSortBtn.addEventListener("click", async () => {
    insertionSortBtn.style.backgroundColor = "green";
    insertionSortBtn.style.color = "white";
    await insertionSort();
    insertionSortBtn.style.backgroundColor = "rgb(37, 36, 36)";
    insertionSortBtn.style.color = "blue";
});

selectionSortBtn.addEventListener("click", async () => {
    selectionSortBtn.style.backgroundColor = "green";
    selectionSortBtn.style.color = "white";
    await selectionSort();
    selectionSortBtn.style.backgroundColor = "rgb(37, 36, 36)";
    selectionSortBtn.style.color = "blue";
});

quickSortBtn.addEventListener("click", async () => {
    timeComplexityValue.innerText = "O(nlogn)";
    spaceComplexityValue.innerText = "O(1)";

    quickSortBtn.style.backgroundColor = "green";
    quickSortBtn.style.color = "white";

    let startTime = startTimer();
    await quickSort(0, arr.length - 1);
    stopTimer(startTime);
    
    quickSortBtn.style.backgroundColor = "rgb(37, 36, 36)";
    quickSortBtn.style.color = "blue";

    let graph_bar = document.createElement("div");
    graph_bar.style.backgroundColor = "blue";
    let graph_bar_height = Number(timeSeconds.innerText.slice(0, -1));
    graph_bar.style.height = `${graph_bar_height}%`;
    graph.append(graph_bar);
});

mergeSortBtn.addEventListener("click", async () => {
    timeComplexityValue.innerText = "O(nlogn)";
    spaceComplexityValue.innerText = "O(n)";

    mergeSortBtn.style.backgroundColor = "green";
    mergeSortBtn.style.color = "white";

    let startTime = startTimer();
    await mergeSort(0, arr.length - 1);
    stopTimer(startTime);

    mergeSortBtn.style.backgroundColor = "rgb(37, 36, 36)";
    mergeSortBtn.style.color = "blue";

    let graph_bar = document.createElement("div");
    graph_bar.style.backgroundColor = "purple";
    let graph_bar_height = Number(timeSeconds.innerText.slice(0, -1));
    graph_bar.style.height = `${graph_bar_height}%`;
    graph.append(graph_bar);
});

