const API_URL_POPULAR = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1'
const API_URL_SEARCH = 'https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword='
const API_URL_MOVIE_DETAILS = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/'
const API_KEY = '8c8e1a50-6322-4135-8875-5d40a5420d86'

const template = {
  /**
  * @param {{ posterUrlPreview: String, nameRu: String, genres: { genre: String }[], rating: Number, filmId: String}} movie
  * @returns {string}
  */
  movie(movie)
  {
    return `
      <div class="movie__cover-inner">
        <img
          src="${movie.posterUrlPreview}"
          class="movie__cover"
          alt="${movie.nameRu}"
        />
        <div class="movie__cover--darkened"></div>
      </div>
      
      <div class="movie__info">
        <div class="movie__title">${movie.nameRu}</div>
        
        <div class="movie__category">
          ${movie.genres.map((genre) => ` ${genre.genre}`)}
        </div>
        
        ${movie.rating && `
          <div class="movie__average movie__average--${getClassByRate(movie.rating)}">
            ${movie.rating}
          </div>
        `}
      </div>`
  },
  /**
  * @param {{ posterUrl: String, nameRu: String, year: Number, genres: { genre: String }[], filmLength: Number, webUrl: String, description: String }} data
  * @returns {string}
  */
  modal(data)
  {
    return `
      <div class="modal__card">
        <img class="modal__movie-backdrop" src="${data.posterUrl}" alt="">
        
        <h2>
          <span class="modal__movie-title">${data.nameRu}</span>
          <span class="modal__movie-release-year"> - ${data.year}</span>
        </h2>
        
        <ul class="modal__movie-info">
          <div class="loader"></div>
          <li class="modal__movie-genre">Жанр - ${data.genres.map((el) => `<span>${el.genre}</span>`)}</li>
          ${data.filmLength ? `<li class="modal__movie-runtime">Время - ${data.filmLength} минут</li>` : ''}
          <li >Сайт: <a class="modal__movie-site" href="${data.webUrl}">${data.webUrl}</a></li>
          <li class="modal__movie-overview">Описание - ${data.description}</li>
        </ul>
        
        <button type="button" class="modal__button-close">Закрыть</button>
      </div>`
  }
}

/**
* @param {Number} vote
* @returns {string}
*/
function getClassByRate(vote)
{
  if (vote >= 7) {
    return 'green'
  } else if (vote > 5) {
    return 'orange'
  } else {
    return 'red'
  }
}

/**
* @class Movies
*
* @property {HTMLElement} form
* @property {HTMLElement} search
* @property {HTMLElement} movies
* @property {HTMLElement} modal
*/
class Movies
{
  static init = () => new Movies()

  /**
  * @constructor
  */
  constructor()
  {
    this.form = document.querySelector('form')
    this.search = this.form.querySelector('.header__search')
    this.movies = document.querySelector('.movies')
    this.modal = document.querySelector('.modal')

    this.form.addEventListener('submit', (e) => {
      e.preventDefault()

      if (this.search.value) {
        this.getMovies(`${API_URL_SEARCH}${this.search.value}`).catch()
        this.search.value = ''
      }
    })

    window.addEventListener('click', (e) => {
      if (e.target === this.modal) this.closeModal()
    })

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.closeModal()
    })
  }

  /**
  * @param {String} url
  * @returns {Promise<void>}
  */
  async getMovies(url)
  {
    try {

      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": API_KEY,
        }
      })

      const data = await response.json()

      this.showMovies(data)

    } catch (e) {
    }
  }

  /**
  * @param {{ films: Object[] }} data
  */
  showMovies(data)
  {
    this.movies.innerHTML = ''

    data.films.forEach((movie) => {
      const movieEl = document.createElement('div')

      movieEl.classList.add('movie')
      movieEl.innerHTML = template.movie(movie)

      movieEl.addEventListener('click', async () => {
        await this.openModal(movie.filmId)
      })

      this.movies.appendChild(movieEl)
    })
  }

  /**
  * @param {String} id
  * @returns {Promise<void>}
  */
  async openModal(id)
  {
    const response = await fetch(API_URL_MOVIE_DETAILS + id, {
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": API_KEY,
      }
    })

    try {

      const data = await response.json()

      document.body.classList.add('stop-scrolling')

      this.modal.innerHTML = template.modal(data)
      this.modal.classList.add('modal--show')

      this.modal.querySelector('.modal__button-close')
        .addEventListener('click', this.closeModal)

    } catch (e) {
    }
  }

  closeModal()
  {
    document.body.classList.remove('stop-scrolling')

    this.modal.classList.remove('modal--show')
  }
}


window.addEventListener('DOMContentLoaded', async () => {
  await Movies.init().getMovies(API_URL_POPULAR)
})
