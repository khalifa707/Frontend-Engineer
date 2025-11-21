const global = {
    currentPage: window.location.pathname,
};

// Highlight active link
function highlightActiveLink() {
    const links = document.querySelectorAll('.nav-link');
    const currentFile = global.currentPage.split('/').pop() || 'app.ts';

    links.forEach((link) => {
        link.classList.remove('active');
        const linkHref = link.getAttribute('href');

        if (linkHref === currentFile ||
            (currentFile === 'app.ts' && linkHref === 'app.ts') ||
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

//Display Backdrop on Details pages
function displayBackgroundImage(type, backgroundPath) {
    // Remove any existing backdrop
    const existingBackdrop = document.querySelector('.backdrop');
    if (existingBackdrop) {
        existingBackdrop.remove();
    }

    const overlayDiv = document.createElement('div');
    overlayDiv.classList.add('backdrop');
    overlayDiv.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${backgroundPath})`;
    overlayDiv.style.backgroundSize = 'cover';
    overlayDiv.style.backgroundPosition = 'center center';
    overlayDiv.style.backgroundRepeat = 'no-repeat';
    overlayDiv.style.position = 'fixed';
    overlayDiv.style.top = '0';
    overlayDiv.style.left = '0';
    overlayDiv.style.width = '100%';
    overlayDiv.style.height = '100%';
    overlayDiv.style.zIndex = '-1';
    overlayDiv.style.opacity = '0.3'; // Make it subtle so content is readable

    // Append to body instead of the details container
    document.body.appendChild(overlayDiv);
}

// Remove backdrop when leaving details pages
function removeBackdrop() {
    const existingBackdrop = document.querySelector('.backdrop');
    if (existingBackdrop) {
        existingBackdrop.remove();
    }
}

// Display Movie Details
async function displayMovieDetails() {
    const movieID = window.location.search.split('=')[1];

    if (!movieID) {
        console.error('No movie ID found in URL');
        return;
    }

    try {
        const movie = await fetchAPIData(`movie/${movieID}`);
        const movieDetailsContainer = document.querySelector('#movie-details');

        if (!movieDetailsContainer) {
            console.error('Movie details container not found');
            return;
        }

        // Clear existing content and set new HTML directly
        movieDetailsContainer.innerHTML = `
            <div class="details-top">
                <div>
                    <img
                        src="${movie.poster_path
                            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                            : 'images/no-image.jpg'}"
                        class="card-img-top"
                        alt="${movie.title}"
                    />
                </div>
                <div>
                    <h2>${movie.title}</h2>
                    <p>
                        <i class="fas fa-star text-primary"></i>
                        ${movie.vote_average} / 10
                    </p>
                    <p class="text-muted">Release Date: ${movie.release_date}</p>
                    <p>${movie.overview}</p>
                    <h5>Genres</h5>
                    <ul class="list-group">
                        ${movie.genres && movie.genres.length > 0
                            ? movie.genres.map(genre => `<li>${genre.name}</li>`).join('')
                            : '<li>No genres available</li>'}
                    </ul>
                    ${movie.homepage
                        ? `<a href="${movie.homepage}" target="_blank" class="btn">Visit Movie Homepage</a>`
                        : ''}
                </div>
            </div>
            <div class="details-bottom">
                <h2>Movie Info</h2>
                <ul>
                    <li><span class="text-secondary">Budget:</span> $${movie.budget ? movie.budget.toLocaleString() : 'N/A'}</li>
                    <li><span class="text-secondary">Revenue:</span> $${movie.revenue ? movie.revenue.toLocaleString() : 'N/A'}</li>
                    <li><span class="text-secondary">Runtime:</span> ${movie.runtime ? movie.runtime + ' minutes' : 'N/A'}</li>
                    <li><span class="text-secondary">Status:</span> ${movie.status || 'N/A'}</li>
                </ul>
                <h4>Production Companies</h4>
                <div class="list-group">${movie.production_companies && movie.production_companies.length > 0
                    ? movie.production_companies.map(company => company.name).join(', ')
                    : 'No production companies available'}</div>
            </div>
        `;

        // Display backdrop image if available
        if (movie.backdrop_path) {
            displayBackgroundImage('movie', movie.backdrop_path);
        }
    } catch (error) {
        console.error('Error loading movie details:', error);
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



// Display Show Details
async function displayShowDetails() {
    const showID = window.location.search.split('=')[1];

    if (!showID) {
        console.error('No show ID found in URL');
        return;
    }

    try {
        const show = await fetchAPIData(`tv/${showID}`);
        const showDetailsContainer = document.querySelector('#show-details');

        if (!showDetailsContainer) {
            console.error('Show details container not found');
            return;
        }

        // Clear existing content and set new HTML directly
        showDetailsContainer.innerHTML = `
            <div class="details-top">
                <div>
                    <img
                        src="${show.poster_path
                            ? `https://image.tmdb.org/t/p/w500${show.poster_path}`
                            : 'images/no-image.jpg'}"
                        class="card-img-top"
                        alt="${show.name}"
                    />
                </div>
                <div>
                    <h2>${show.name}</h2>
                    <p>
                        <i class="fas fa-star text-primary"></i>
                        ${show.vote_average} / 10
                    </p>
                    <p class="text-muted">First Air Date: ${show.first_air_date}</p>
                    <p class="text-muted">Last Air Date: ${show.last_air_date}</p>
                    <p>${show.overview}</p>
                    <h5>Genres</h5>
                    <ul class="list-group">
                        ${show.genres && show.genres.length > 0
                            ? show.genres.map(genre => `<li>${genre.name}</li>`).join('')
                            : '<li>No genres available</li>'}
                    </ul>
                    ${show.homepage
                        ? `<a href="${show.homepage}" target="_blank" class="btn">Visit Show Homepage</a>`
                        : ''}
                </div>
            </div>
            <div class="details-bottom">
                <h2>Show Info</h2>
                <ul>
                    <li><span class="text-secondary">Number of Episodes:</span> ${show.number_of_episodes || 'N/A'}</li>
                    <li><span class="text-secondary">Number of Seasons:</span> ${show.number_of_seasons || 'N/A'}</li>
                    <li><span class="text-secondary">Status:</span> ${show.status || 'N/A'}</li>
                </ul>
                <h4>Production Companies</h4>
                <div class="list-group">${show.production_companies && show.production_companies.length > 0
                    ? show.production_companies.map(company => company.name).join(', ')
                    : 'No production companies available'}</div>
            </div>
        `;

        // Display backdrop image if available
        if (show.backdrop_path) {
            displayBackgroundImage('tv', show.backdrop_path);
        }
    } catch (error) {
        console.error('Error loading show details:', error);
    }
}

// Search functionality
function search() {
    // TODO: Implement search functionality
}

// Initialize App
function init() {
    // Remove any existing backdrop first
    removeBackdrop();

    switch (global.currentPage) {
        case '/':
        case '/app.ts':
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
            if (global.currentPage.includes('app.ts') || global.currentPage.endsWith('/')) {
                displayPopularMovies();
            } else if (global.currentPage.includes('shows.html')) {
                displayPopularShows();
            } else if (global.currentPage.includes('movie-details.html')) {
                displayMovieDetails();
            } else if (global.currentPage.includes('tv-details.html')) {
                displayShowDetails();
            } else if (global.currentPage.includes('search.html')) {
                search();
            }
            break;
    }

    highlightActiveLink();
}

document.addEventListener('DOMContentLoaded', init);