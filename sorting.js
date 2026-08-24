let arr = [];

for (let i = 0; i < 100; i++) {
    arr.push(Math.floor(Math.random() * 100));
}

let heights = document.querySelector(".heights");

for (let i = 0; i < 100; i++) {
    let height_bar = document.createElement("div");
    height_bar.id = `height${i}`;
    height_bar.style.backgroundColor = "yellow";
    height_bar.style.width = "2vmin";
    height_bar.style.height = `${arr[i]}%`;
    heights.append(height_bar);
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

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

function highlight(i, j) {
    let bar1 = document.querySelector(`#height${i}`);
    let bar2 = document.querySelector(`#height${j}`);

    bar1.style.backgroundColor = `green`;
    bar2.style.backgroundColor = `green`;
}



newArrBtn.addEventListener("click", () => {
    arr = [];

    for (let i = 0; i < 100; i++) {
        const elementToDelete = document.querySelector(`#height${i}`);
        elementToDelete.remove();
    }
    for (let i = 0; i < 100; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }

    for (let i = 0; i < 100; i++) {
        let height_bar = document.createElement("div");
        height_bar.id = `height${i}`;
        height_bar.style.backgroundColor = "yellow";
        height_bar.style.width = "2vmin";
        height_bar.style.height = `${arr[i]}%`;
        heights.append(height_bar);
    }

});

function resetColor(i, j){
    let bar1 = document.querySelector(`#height${i}`);
    let bar2 = document.querySelector(`#height${j}`);

    bar1.style.backgroundColor = `yellow`;
    bar2.style.backgroundColor = `yellow`;
}

let bubbleSortBtn = document.querySelector("#bubbleSort");

async function bubbleSort(){

    

    for(let i = 0; i<arr.length; i++){
        let flag=0;
        for(let j = 0; j<arr.length-i-1; j++){

            highlight(j, j+1);

            await sleep(0.000001);

            if(arr[j]>arr[j+1]){
                flag=1;
                swap(j, j+1);
            }
            resetColor(j, j+1);


            await sleep(0.000001);
        }
        if(flag==0){
            break;
        }
    }
}

bubbleSortBtn.addEventListener("click", async ()=>{
    bubbleSortBtn.style.backgroundColor = "green";
    bubbleSortBtn.style.color = "white";
    await bubbleSort();
    bubbleSortBtn.style.backgroundColor = "rgb(37, 36, 36)";
    bubbleSortBtn.style.color = "blue";
});
