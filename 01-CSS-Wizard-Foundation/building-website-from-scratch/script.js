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
const edibleFilter = document.querySelector('select[name="edible"]');
const noResultsMessage = document.querySelector(".no-matches");

const currentFilters = {
    season: "all",
    edible: "all",
};

// Add event listeners only if elements exist
if (seasonFilter) {
    seasonFilter.addEventListener("change", updateFilters);
}
if (edibleFilter) {
    edibleFilter.addEventListener("change", updateFilters);
}

function updateFilters(e) {
    const filterType = e.target.name || e.target.id;
    currentFilters[filterType] = e.target.value;

    filterCards();
}

function filterCards() {
    let hasVisibleCards = false;
    cards.forEach((card) => {
        const seasonElement = card.querySelector("[data-season]");
        const edibleElement = card.querySelector("[data-edible]");

        // Check if elements exist before accessing dataset
        const season = seasonElement ? seasonElement.dataset.season : null;
        const edible = edibleElement ? edibleElement.dataset.edible : null;

        if (
            (currentFilters.season === "all" || currentFilters.season === season) &&
            (currentFilters.edible === "all" || currentFilters.edible === edible)
        ) {
            card.hidden = false;
            hasVisibleCards = true;
        } else {
            card.hidden = true;
        }

        if (hasVisibleCards) {
            noResultsMessage.hidden = true;
        } else {
            noResultsMessage.hidden = false;
        }
    });
}