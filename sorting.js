let arr = [];

for (let i = 1; i <= 100; i++) {
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

newArrBtn.addEventListener("click", () => {
    arr = [];

    for (let i = 0; i < 100; i++) {
        const elementToDelete = document.querySelector(`#height${i}`);
        elementToDelete.remove();
    }
    for (let i = 1; i <= 100; i++) {
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