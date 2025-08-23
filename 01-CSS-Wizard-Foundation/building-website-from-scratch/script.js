/**
 * FUNGI FINDERS - INTERACTIVE WEBSITE FUNCTIONALITY
 *
 * This script handles:
 * 1. Mobile navigation toggle functionality
 * 2. Resize observer for performance optimization
 * 3. Mushroom card filtering with fade animations
 * 4. View transitions for smooth UI updates
 */

// ============================================================================
// MOBILE NAVIGATION FUNCTIONALITY
// ============================================================================

/**
 * Mobile hamburger menu button element
 * Controls the visibility of the primary navigation on mobile devices
 */
const hamburgerButton = document.querySelector(
    '[aria-controls="primary-nav"]'
);

/**
 * Primary navigation element
 * Contains the main site navigation links
 */
const nav = document.querySelector(".primary-navigation");

/**
 * Toggle mobile navigation menu
 *
 * Handles the opening and closing of the mobile navigation menu by:
 * - Reading the current aria-expanded state
 * - Toggling between "true" and "false" states
 * - CSS handles the visual transitions based on aria-expanded attribute
 */
hamburgerButton.addEventListener("click", () => {
    // Check if the navigation is currently opened
    const isNavOpened = hamburgerButton.getAttribute("aria-expanded");

    // Toggle the navigation state
    if (isNavOpened === "false") {
        hamburgerButton.setAttribute("aria-expanded", "true");
    } else {
        hamburgerButton.setAttribute("aria-expanded", "false");
    }
});

// ============================================================================
// PERFORMANCE OPTIMIZATION - RESIZE HANDLING
// ============================================================================

/**
 * Resize Observer for performance optimization
 *
 * Prevents animations from running during window resize to avoid:
 * - Janky animations during resize
 * - Performance issues on slower devices
 * - Layout thrashing
 *
 * Works by:
 * 1. Adding "resizing" class when resize starts
 * 2. Removing class on next animation frame after resize ends
 * 3. CSS uses this class to disable transitions/animations
 */
const resizeObserver = new ResizeObserver(() => {
    // Add resizing class to disable animations
    document.body.classList.add("resizing");

    // Remove class on next frame to re-enable animations
    requestAnimationFrame(() => {
        document.body.classList.remove("resizing");
    });
});

// Start observing body element for size changes
resizeObserver.observe(document.body);


// ============================================================================
// MUSHROOM CARD FILTERING SYSTEM
// ============================================================================

/**
 * All mushroom cards in the guide section
 * Used for filtering and animation purposes
 */
const cards = document.querySelectorAll(".mushroom-guide .card");

/**
 * Season filter dropdown element
 * Allows users to filter mushrooms by growing season
 */
const seasonFilter = document.querySelector("#season");

/**
 * Edible/Toxic filter dropdown element
 * Allows users to filter mushrooms by safety (edible vs toxic)
 */
const edibleFilter = document.querySelector('select[name="edible"]');

/**
 * "No matches" message element
 * Displayed when no mushrooms match the current filter criteria
 */
const noResultsMessage = document.querySelector(".no-matches");

/**
 * Initialize mushroom cards
 *
 * Sets up each card with:
 * - Unique view transition names for smooth animations between filter states
 * - Enables CSS view transitions to work properly with individual cards
 */
cards.forEach((card, index) => {
    // Create unique identifier for view transitions
    // This allows CSS to animate individual cards rather than the entire container
    const mushroomId = `mushroom-${index + 1}`;
    card.style.viewTransitionName = `mushroom-card-${mushroomId}`;
});

/**
 * Current filter state object
 * Tracks the selected values for both filter types
 *
 * @property {string} season - Currently selected season filter ("all", "spring", "summer", "fall")
 * @property {string} edible - Currently selected edible filter ("all", "edible", "toxic")
 */
const currentFilters = {
    season: "all",
    edible: "all",
};

// ============================================================================
// EVENT LISTENERS SETUP
// ============================================================================

/**
 * Add event listeners for filter dropdowns
 * Only adds listeners if elements exist (defensive programming)
 * This prevents errors on pages that don't have the mushroom guide
 */
if (seasonFilter) {
    seasonFilter.addEventListener("change", updateFilters);
}
if (edibleFilter) {
    edibleFilter.addEventListener("change", updateFilters);
}

// ============================================================================
// FILTER UPDATE FUNCTIONALITY
// ============================================================================

/**
 * Handle filter dropdown changes
 *
 * Called when user selects a new option in either filter dropdown.
 * Updates the current filter state and triggers the fade animation sequence.
 *
 * @param {Event} e - The change event from the dropdown
 */
function updateFilters(e) {
    // Determine which filter was changed (season or edible)
    const filterType = e.target.name || e.target.id;

    // Update the current filter state with the new value
    currentFilters[filterType] = e.target.value;

    // Trigger the fade out -> filter -> fade in sequence
    fadeOutAndFilter();
}

/**
 * Orchestrate the fade animation sequence
 *
 * Implements a smooth transition when filters change:
 * 1. Fade out currently visible cards
 * 2. Apply new filter logic (show/hide cards)
 * 3. Fade in the newly visible cards
 *
 * This creates a polished user experience instead of jarring instant changes.
 */
function fadeOutAndFilter() {
    // Phase 1: Fade out all currently visible cards
    cards.forEach(card => {
        if (!card.hidden) {
            card.style.opacity = '0';
            card.style.transition = 'opacity 0.3s ease-out';
        }
    });

    // Phase 2 & 3: After fade out completes, filter and fade in
    setTimeout(() => {
        // Apply the new filter logic
        filterCards();

        // Fade in the cards that should now be visible
        cards.forEach(card => {
            if (!card.hidden) {
                card.style.opacity = '1';
                card.style.transition = 'opacity 0.3s ease-in';
            }
        });
    }, 300); // Wait 300ms for fade out animation to complete
}

// ============================================================================
// CARD FILTERING LOGIC
// ============================================================================

/**
 * Apply current filter criteria to all mushroom cards
 *
 * This function:
 * 1. Loops through all mushroom cards
 * 2. Extracts season and edible data from each card's tags
 * 3. Compares against current filter settings
 * 4. Shows/hides cards based on match criteria
 * 5. Shows/hides "no results" message as needed
 *
 * Filter Logic:
 * - "all" filter values match everything
 * - Cards must match BOTH season AND edible filters to be visible
 * - Cards with missing data attributes are treated as non-matching
 */
function filterCards() {
    let hasVisibleCards = false;

    cards.forEach((card) => {
        // Find the season and edible tag elements within this card
        const seasonElement = card.querySelector("[data-season]");
        const edibleElement = card.querySelector("[data-edible]");

        // Extract data attributes safely (null if element doesn't exist)
        const season = seasonElement ? seasonElement.dataset.season : null;
        const edible = edibleElement ? edibleElement.dataset.edible : null;

        // Check if card matches current filter criteria
        const matchesSeason = (currentFilters.season === "all" || currentFilters.season === season);
        const matchesEdible = (currentFilters.edible === "all" || currentFilters.edible === edible);

        if (matchesSeason && matchesEdible) {
            // Card matches filters - make it visible
            card.hidden = false;
            hasVisibleCards = true;
        } else {
            // Card doesn't match - hide it and ensure it's transparent
            card.hidden = true;
            card.style.opacity = '0';
        }
    });

    // Show/hide "no results" message based on whether any cards are visible
    if (noResultsMessage) {
        noResultsMessage.hidden = hasVisibleCards;
    }
}