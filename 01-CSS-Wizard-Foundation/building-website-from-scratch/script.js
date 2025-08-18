const hamburgerButton = document.querySelector(
    '[aria-controls="primary-nav"]'
);
const nav = document.querySelector(".primary-navigation");

hamburgerButton.addEventListener("click", () => {
    // check if the navigation is opened
    const isNavOpened = hamburgerButton.getAttribute("aria-expanded");

    if (isNavOpened === "false") {
        hamburgerButton.setAttribute("aria-expanded", "true");
    } else {
        hamburgerButton.setAttribute("aria-expanded", "false");
    }
});


const cards = document.querySelectorAll(".mushroom-guide .card");

const seasonFilter = document.querySelector("#season");
const edibleFilter = document.querySelector("#edible");

const currentFilters = {
    season: "all",
    edible: "all",
};

seasonFilter.addEventListener("change", updateFilters);
edibleFilter.addEventListener("change", updateFilters);

function updateFilters(e) {
    const filterType = e.target.id;
    currentFilters[filterType] = e.target.value;

    filterCards();
}

function filterCards(){
    cards.forEach((card) => {
        const season = card.querySelector("[data-season]").dataset.season;
        const edible = card.querySelector("[data-edible]").dataset.edible;

        const matchesSeason = currentFilters.season === season;
        const matchesEdible = currentFilters.edible === edible;

        if (
            (currentFilters.season === "all" || currentFilters.season === season) &&
            (currentFilters.edible === "all" || currentFilters.edible === edible)
        ) {
            card.hidden = false;
        } else {
            card.hidden = true;
        }

    })
}