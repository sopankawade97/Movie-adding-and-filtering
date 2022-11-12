
const display = document.getElementById("display");
const movieArray = []; 

// Adding movie-------
const addMovies = (event) => {
    event.preventDefault();

    let newMovie = document.getElementById("movie_name").value;
    let name = document.getElementById("name").value;
    let value1 = document.getElementById("value").value;

    if(newMovie === "" || name === "" || value1 === ""){
        alert("Something is missing, Please Check");
    }
    else{
        //console.log(newMovie, name, value1);
        let movieObj = {
            movieName: newMovie,
            name: name,
            value: value1
        }
        movieArray.push(movieObj);
        display.innerHTML = "";
        appendData();
    }
    // console.log("movieArray", movieArray)
}

document.querySelector("form").addEventListener("submit", addMovies);


// searching Movie--------
const searchData = () => {
    display.innerHTML = "";
    let movie = document.getElementById("movie").value;
    //console.log("movieArray", movieArray);
    if(movie === ""){
        appendData()
    }
    else if(movie !== ""){
        let countItem = 0;
        movieArray.filter((el, index) => {
            let count = 0;
            for(let i=0; i<movie.length; i++){
                if(el.movieName[i] === movie[i]){
                    count++;
                }
            }
            if(count===movie.length){
                createTags(el, index);
                countItem++;
            }
            else if(index === movieArray.length-1 && countItem === 0){
                display.innerHTML = "";
                alert("Movie not found");
                //console.log(countItem);
            }
        })
    }
}

document.getElementById("search_movie").addEventListener("click", searchData);
