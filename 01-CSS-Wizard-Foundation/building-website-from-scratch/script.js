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


const resizeObserver = new ResizeObserver(() => {
    document.body.classList.add("resizing");

    requestAnimationFrame(() => {
        document.body.classList.remove("resizing");
    });
});
resizeObserver.observe(document.body);



const cards = document.querySelectorAll(".mushroom-guide .card");
const seasonFilter = document.querySelector("#season");
const edibleFilter = document.querySelector('select[name="edible"]');
const noResultsMessage = document.querySelector(".no-matches");


cards.forEach((card, index) => {
    // You can use a data attribute if cards have unique IDs
    const mushroomId = `mushroom-${index + 1}`;
    card.style.viewTransitionName = `mushroom-card-${mushroomId}`;
});



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


    if (!document.startViewTransition()) {
        filterCards();
        return;
    }

    document.startViewTransition(() => filterCards());
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

        noResultsMessage.hidden = hasVisibleCards;
    });
}