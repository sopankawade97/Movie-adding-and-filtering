
// append Item----
const appendData = () => {
    movieArray.forEach((el, index) => {
        createTags(el, index);
    })
}

//creating html tags to append----
const createTags = (el, index) => {
    p = document.createElement("p");
    div = document.createElement("div");
    button = document.createElement("button");
    button.innerText = "DELETE";
    p.innerText = `${el.movieName.toUpperCase()} - ${el.name}: ${el.value}`;
    button.addEventListener("click", () => {
        deleteData(el, index)
    });
    div.append(p, button);
    display.append(div);
    display.className = "output_div";
}


// delete Item-----
const deleteData = (el, index) => {
    //console.log(el);
    movieArray.splice(index, 1);
    searchData();
}