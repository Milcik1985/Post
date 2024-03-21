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
    const id = document.createElement("div");
    id.innerHTML = `ID: ${idInput.value}`;
    const title = document.createElement("div");
    title.innerHTML = `Title: ${titleInput.value}`;
    const rating = document.createElement("div");
    rating.innerHTML = `Rating: ${ratingInput.value}`;
    const description = document.createElement("div");
    description.innerHTML = `Description: ${descriptionInput.value}`;
    const imdbLink = document.createElement("a");
    imdbLink.href = linkInput.value;
    imdbLink.innerHTML = `IMDB link`;
    imdbLink.target = "_blank";

    movieRecommendationsContainer.classList.add("active")
    movieRecommendationsContainer.append(id);
    movieRecommendationsContainer.append(title);
    movieRecommendationsContainer.append(rating);
    movieRecommendationsContainer.append(description);
    movieRecommendationsContainer.append(imdbLink);
})};