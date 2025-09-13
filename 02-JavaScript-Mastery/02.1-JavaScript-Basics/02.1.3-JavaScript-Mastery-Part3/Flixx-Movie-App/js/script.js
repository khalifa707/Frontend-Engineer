const global = {
    currentPage: window.location.pathname,
};

// Highlight active link
function highlightActiveLink() {
    const links = document.querySelectorAll('.nav-link');
    const currentFile = global.currentPage.split('/').pop() || 'index.html';

    links.forEach((link) => {
        link.classList.remove('active');
        const linkHref = link.getAttribute('href');

        if (linkHref === currentFile ||
            (currentFile === 'index.html' && linkHref === 'index.html') ||
            (global.currentPage.includes('shows.html') && linkHref === 'shows.html')) {
            link.classList.add('active');
        }
    });
}

// Display Popular Movies
async function displayPopularMovies() {
    const moviesContainer = document.querySelector('#popular-movies');
    if (!moviesContainer) return;

    moviesContainer.innerHTML = '';

    try {
        const { results } = await fetchAPIData('movie/popular');

        results.forEach((movie) => {
            const div = document.createElement('div');
            div.classList.add('card');
            div.innerHTML = `
                <a href="movie-details.html?id=${movie.id}">
                    ${movie.poster_path
                        ? `<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="card-img-top" alt="${movie.title}" />`
                        : `<img src="images/no-image.jpg" class="card-img-top" alt="${movie.title}" />`
                    }
                </a>
                <div class="card-body">
                    <h5 class="card-title">${movie.title}</h5>
                    <p class="card-text">
                        <small class="text-muted">Release: ${movie.release_date}</small>
                    </p>
                </div>
            `;
            moviesContainer.appendChild(div);
        });
    } catch (error) {
        console.error('Error loading movies:', error);
    }
}

// Display Popular TV Shows
async function displayPopularShows() {
    const showsContainer = document.querySelector('#popular-shows');
    if (!showsContainer) return;

    showsContainer.innerHTML = '';

    try {
        const { results } = await fetchAPIData('tv/popular');

        results.forEach((show) => {
            const div = document.createElement('div');
            div.classList.add('card');
            div.innerHTML = `
                <a href="tv-details.html?id=${show.id}">
                    ${show.poster_path
                        ? `<img src="https://image.tmdb.org/t/p/w500${show.poster_path}" class="card-img-top" alt="${show.name}" />`
                        : `<img src="images/no-image.jpg" class="card-img-top" alt="${show.name}" />`
                    }
                </a>
                <div class="card-body">
                    <h5 class="card-title">${show.name}</h5>
                    <p class="card-text">
                        <small class="text-muted">Air Date: ${show.first_air_date}</small>
                    </p>
                </div>
            `;
            showsContainer.appendChild(div);
        });
    } catch (error) {
        console.error('Error loading TV shows:', error);
    }
}

// Fetch data from TMDB API
async function fetchAPIData(endpoint) {
    const API_KEY = 'f0eed904e8f3dbe6feb435d0196fed3a';
    const API_URL = 'https://api.themoviedb.org/3/';

    const response = await fetch(`${API_URL}${endpoint}?api_key=${API_KEY}`);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
}

// Display Movie Details
function displayMovieDetails() {
    // TODO: Implement movie details functionality
}

// Display Show Details
function displayShowDetails() {
    // TODO: Implement show details functionality
}

// Search functionality
function search() {
    // TODO: Implement search functionality
}

// Initialize App
function init() {
    switch (global.currentPage) {
        case '/':
        case '/index.html':
            displayPopularMovies();
            break;
        case '/shows.html':
            displayPopularShows();
            break;
        case '/movie-details.html':
            displayMovieDetails();
            break;
        case '/tv-details.html':
            displayShowDetails();
            break;
        case '/search.html':
            search();
            break;
        default:
            // Handle file:// protocol and other paths
            if (global.currentPage.includes('index.html') || global.currentPage.endsWith('/')) {
                displayPopularMovies();
            } else if (global.currentPage.includes('shows.html')) {
                displayPopularShows();
            }
            break;
    }

    highlightActiveLink();
}

document.addEventListener('DOMContentLoaded', init);