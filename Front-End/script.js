// 2. Per front-end sukurt formą kuri įdėtu filmą į servisą;
const btn = document.getElementsByClassName("btn")[0];
const movieRecommendationsContainer = document.getElementById("movie-recommendation-container");
const idInput = document.getElementById("id");
const titleInput = document.getElementById("title");
const ratingInput = document.getElementById("rating");
const descriptionInput = document.getElementById("description");
const linkInput = document.getElementById("imdb-link");


export function addMovieRecommendationButton() {
    btn.addEventListener("click", () => {
        const movieDetails = [
            { label: "ID", value: idInput.value },
            { label: "Title", value: titleInput.value },
            { label: "Rating", value: ratingInput.value },
            { label: "Description", value: descriptionInput.value }
        ];
            const recommendationWrapper = document.createElement("div")
            recommendationWrapper.classList.add("active")

            movieDetails.forEach(detail => {
                const div = document.createElement("div");
                div.innerHTML = `${detail.label}: ${detail.value}`;
                recommendationWrapper.append(div);
            });

            const imdbLink = document.createElement("a");
            imdbLink.href = linkInput.value;
            imdbLink.innerHTML = `IMDB link`;
            imdbLink.target = "_blank";
            recommendationWrapper.append(imdbLink)

            movieRecommendationsContainer.append(recommendationWrapper)
                
            idInput.value = "";
            titleInput.value = "";
            ratingInput.value = "";
            descriptionInput.value = "";
            linkInput.value = "";
});
}

// fetch ("http://localhost:3000/createMovieRecommendation").then ((response => {
//     console.log(response)
// }));

// fetch ("http://localhost:3000/getAllMovieRecommendations").then ((response => {
//     console.log(response)
// }));

// fetch ("http://localhost:3000/createMovieRecommendation").then ((response => {
//     console.log(response)
// }));

// fetch ("http://localhost:3000/getSortedByRatingMovieRecommendations").then ((response => {
//     console.log(response)
// }));

// fetch ("http://localhost:3000/deleteAllMovieRecommendations").then ((response => {
//     console.log(response)
// }));

// fetch ("http://localhost:3000/getMovieRecommendationById/:movieRecommendationId").then ((response => {
//     console.log(response)
// }));