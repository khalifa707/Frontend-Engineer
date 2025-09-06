const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

populateUI();

let ticketPrice = +movieSelect.value;

/*
📚 EXPLANATION - DOM Element Selection & Initialization:

🎯 Purpose: Get references to all necessary DOM elements and initialize the application

🔍 Elements Selected:
- container: Main container element for event delegation
- seats: All available seats (excludes occupied ones using :not(.occupied))
- count: Element to display number of selected seats
- total: Element to display total price
- movieSelect: Dropdown for movie selection

⚙️ Key Concepts:
- querySelector(): Selects first matching element
- querySelectorAll(): Selects all matching elements (returns NodeList)
- CSS selector :not(.occupied): Excludes occupied seats from selection
- Event delegation: Using container for seat click events

🔄 Initialization Flow:
1. Get DOM element references
2. Call populateUI() to restore previous state from localStorage
3. Set initial ticket price from selected movie

💡 Advanced Selector Usage:
- '.row .seat:not(.occupied)': Selects seats that are NOT occupied
- This prevents users from clicking on unavailable seats
- Combines descendant selector (.row .seat) with negation (:not())

🎬 Movie Theater Structure Expected:
- div.container (main container)
  - div.row (seat row)
    - div.seat (available seat)
    - div.seat.occupied (unavailable seat)
    - div.seat.selected (user-selected seat)

💰 Price Conversion:
- +movieSelect.value: Unary plus operator converts string to number
- Essential for mathematical calculations later
*/


// Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}

/*
📚 EXPLANATION - setMovieData Function:

🎯 Purpose: Persist movie selection data to browser's localStorage for session continuity

🔧 Function Parameters:
- movieIndex: The index of the selected movie in the dropdown (0, 1, 2, etc.)
- moviePrice: The price of the selected movie ticket

⚙️ How It Works:
1. Stores movie index in localStorage with key 'selectedMovieIndex'
2. Stores movie price in localStorage with key 'selectedMoviePrice'
3. Data persists even after page refresh or browser close/reopen

💾 localStorage Features:
- Browser-based storage (client-side only)
- Data persists until manually cleared
- Stores data as strings (automatic conversion)
- Domain-specific (only accessible by same website)

🔄 Usage Context:
- Called when user changes movie selection
- Ensures user's movie choice is remembered
- Works with populateUI() to restore state

📊 Data Storage Example:
localStorage: {
  'selectedMovieIndex': '1',
  'selectedMoviePrice': '12'
}

💡 Benefits:
- Enhanced user experience (remembers preferences)
- No need to re-select movie after page refresh
- Maintains application state across sessions
- Simple key-value storage mechanism

🎬 Real-World Application:
- Movie booking systems
- Shopping carts
- User preferences
- Form data persistence
*/


// Update total and count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

/*
📚 EXPLANATION - updateSelectedCount Function:

🎯 Purpose: Calculate and display seat count/total price, and save selection to localStorage

⚙️ How It Works:
1. Gets all currently selected seats using CSS selector
2. Maps selected seats to their index positions
3. Saves seat indices to localStorage for persistence
4. Updates UI with count and total price

🔍 Complex Operations Breakdown:

📍 Seat Index Mapping:
[...selectedSeats].map(seat => [...seats].indexOf(seat))
- [...selectedSeats]: Converts NodeList to Array
- .map(): Transforms each seat element to its index
- [...seats].indexOf(seat): Finds position of seat in original seats array
- Result: Array of indices like [2, 5, 8] representing selected seat positions

💾 Data Persistence:
localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex))
- JSON.stringify(): Converts array to string for storage
- localStorage only stores strings, not objects/arrays
- Example: [2, 5, 8] becomes "[2,5,8]"

📊 UI Updates:
- count.innerText: Shows number of selected seats
- total.innerText: Shows total price (count × ticket price)

🔄 When This Function Runs:
- After seat selection/deselection
- After movie change (price might change)
- During initial page load
- Any time seat state changes

💡 Advanced JavaScript Concepts:
- Spread operator (...): Converts NodeList to Array
- Array.map(): Transforms data structure
- Array.indexOf(): Finds element position
- JSON serialization for storage

🎬 Example Calculation:
- 3 seats selected × $12 ticket price = $36 total
- Seat indices [1, 4, 7] saved to localStorage
- UI shows: "3 seats selected, Total: $36"
*/


// Get data from localstorage and populate UI
function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        });
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if (selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
    }
}

/*
📚 EXPLANATION - populateUI Function:

🎯 Purpose: Restore previous user selections from localStorage when page loads

⚙️ How It Works:
1. Retrieves saved seat selections from localStorage
2. Restores visual state of previously selected seats
3. Restores previously selected movie from dropdown

🔍 Seat Restoration Process:

📥 Data Retrieval:
JSON.parse(localStorage.getItem('selectedSeats'))
- Gets stored seat indices string from localStorage
- JSON.parse(): Converts string back to array
- Example: "[2,5,8]" becomes [2, 5, 8]

🎭 Seat State Restoration:
seats.forEach((seat, index) => {
    if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
    }
});
- Loops through all available seats
- Checks if current seat index exists in saved selection
- Adds 'selected' class to restore visual state

🎬 Movie Selection Restoration:
movieSelect.selectedIndex = selectedMovieIndex;
- Restores dropdown to previously selected movie
- selectedIndex property sets which option is selected

🛡️ Error Handling:
- Checks if selectedSeats is not null and has length > 0
- Prevents errors when no previous data exists
- Graceful handling of first-time visitors

🔄 When This Runs:
- Called during initial page load
- Ensures seamless user experience across sessions
- Restores complete application state

💡 Key Benefits:
- Persistent user experience
- No data loss on page refresh
- Maintains booking progress
- Professional application behavior

🎪 Example Restoration:
Previous session: User selected seats 2, 5, 8 and movie "Avengers ($12)"
Page reload: All selections automatically restored
Result: User can continue where they left off
*/


// Movie select event
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
});

/*
📚 EXPLANATION - Movie Selection Event Listener:

🎯 Purpose: Handle movie dropdown changes and update pricing/storage accordingly

⚙️ How It Works:
1. Listens for 'change' event on movie dropdown
2. Updates global ticket price variable
3. Saves new movie selection to localStorage
4. Recalculates total price with new ticket price

🔧 Event Handling Details:

📝 Event Object Properties:
- e.target.value: The price value of selected movie option
- e.target.selectedIndex: The index position of selected option
- Arrow function (e) => {}: Modern ES6 event handler syntax

💰 Price Update:
ticketPrice = +e.target.value;
- Updates global ticketPrice variable
- Unary plus (+) converts string to number
- Essential for mathematical calculations

💾 Data Persistence:
setMovieData(e.target.selectedIndex, e.target.value);
- Saves both movie index and price to localStorage
- Ensures selection persists across page reloads
- Maintains user's movie choice

🔄 UI Synchronization:
updateSelectedCount();
- Recalculates total price with new ticket price
- Updates display immediately
- Maintains selected seat count but updates total cost

🎬 Example Flow:
1. User changes from "Avengers ($12)" to "Joker ($10)"
2. ticketPrice changes from 12 to 10
3. Movie data saved to localStorage
4. If 3 seats selected: total changes from $36 to $30
5. UI updates immediately

💡 Key Benefits:
- Immediate price updates
- Persistent movie selection
- Automatic total recalculation
- Smooth user experience

🎭 HTML Structure Expected:
- select#movie (dropdown element)
  - option value="10": Avengers ($10)
  - option value="12": Joker ($12)
  - option value="8": Toy Story ($8)
*/


// Seat click event
container.addEventListener('click', e => {
    if (
        e.target.classList.contains('seat') &&
        !e.target.classList.contains('occupied')
    ) {
        e.target.classList.toggle('selected');

        updateSelectedCount();
    }
});

/*
📚 EXPLANATION - Seat Click Event Listener:

🎯 Purpose: Handle seat selection/deselection through user clicks using event delegation

⚙️ How It Works:
1. Uses event delegation on container element (not individual seats)
2. Validates clicked element is a valid, available seat
3. Toggles seat selection state
4. Updates count and total price

🔧 Event Delegation Benefits:
- Single event listener handles all seats (performance)
- Works with dynamically added seats
- Cleaner code than individual seat listeners
- Efficient memory usage

🛡️ Validation Logic:
e.target.classList.contains('seat') && !e.target.classList.contains('occupied')

Condition 1: Must be a seat element
- Prevents clicks on non-seat elements
- Ensures only seat elements are selectable

Condition 2: Must NOT be occupied
- Prevents selection of unavailable seats
- Maintains booking system integrity

🎭 State Toggle:
e.target.classList.toggle('selected');
- Adds 'selected' class if not present
- Removes 'selected' class if already present
- Perfect for on/off selection behavior

🔄 UI Update Chain:
1. User clicks available seat
2. Validation passes
3. Seat visual state toggles
4. updateSelectedCount() recalculates everything
5. localStorage updated with new selection
6. UI displays updated count and total

💡 CSS Classes Expected:
- .seat: Basic seat styling
- .seat.selected: Selected seat styling (e.g., blue background)
- .seat.occupied: Occupied seat styling (e.g., red background)

🎪 Example Interaction:
- Click empty seat → becomes selected (blue)
- Click selected seat → becomes unselected (default)
- Click occupied seat → nothing happens
- Each valid click updates count and total

🏗️ Event Delegation Pattern:
Instead of: seat1.addEventListener(), seat2.addEventListener()...
Use: container.addEventListener() + validation
Result: One listener handles all seats efficiently
*/

// Initial count and total set
updateSelectedCount();

/*
📚 EXPLANATION - Initial Application Setup:

🎯 Purpose: Ensure UI displays correct count and total when page first loads

⚙️ Why This Is Needed:
1. populateUI() restores seat selections from localStorage
2. But doesn't automatically update the count/total display
3. This call ensures UI is synchronized with restored state

🔄 Application Initialization Flow:
1. DOM elements selected and stored in variables
2. populateUI() called → restores previous selections
3. ticketPrice set from current movie selection
4. updateSelectedCount() called → calculates and displays current state

💡 Without This Call:
- Seats would be visually selected (from populateUI)
- But count and total would show 0
- UI would be inconsistent until user interaction

✅ With This Call:
- Seats visually selected
- Count shows correct number (e.g., "3")
- Total shows correct price (e.g., "$36")
- UI is fully synchronized

🎬 Example Scenario:
User's previous session: 3 seats selected, Avengers movie ($12)
Page reload:
1. populateUI() → 3 seats appear selected, Avengers selected in dropdown
2. updateSelectedCount() → Display shows "3 seats, $36 total"
3. User sees exactly where they left off

🔧 Function Chain:
updateSelectedCount() triggers:
- Calculates selected seats
- Maps to indices
- Saves to localStorage (redundant but harmless)
- Updates count display
- Updates total display

💎 Best Practice:
- Always synchronize UI state after data restoration
- Ensures consistent user experience
- Prevents confusion from mismatched displays
- Professional application behavior

🎯 This single line completes the application initialization and ensures everything works perfectly from the moment the page loads!
*/

