function swap(i, j) {

    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;

    let bar1 = document.querySelector(`#height${i}`);
    let bar2 = document.querySelector(`#height${j}`);

    bar1.style.height = `${arr[i]}%`;
    bar2.style.height = `${arr[j]}%`;

    bar1.style.backgroundColor = `yellow`;
    bar2.style.backgroundColor = `yellow`;

}

function highlight(i, j) {
    let bar1 = document.querySelector(`#height${i}`);
    let bar2 = document.querySelector(`#height${j}`);

    bar1.style.backgroundColor = `green`;
    bar2.style.backgroundColor = `green`;
}

async function bubbleSort(){
    for(let i = 0; i<)
}