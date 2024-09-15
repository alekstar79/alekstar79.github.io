;(function(game) {
  window.addEventListener('click', (e) => {
    if (e.target === game.scoreBoard) {
      game.scoreBoard.style.display = 'none'
    }
  })

  game.cards.forEach(card => {
    card.addEventListener('click', e => {
      game.isClickedOp = true

      if (game.timerOp) {
        game.timer()

        setTimeout(() => {
          game.timerOp = false
        })
      }

      game.flipCard(e)
    })
  })

  game.restartBtn.addEventListener('click', () => {
    game.cards.forEach(card => {
      if (game.isClickedOp) {
        setTimeout(() => {
          game.isClickedOp = false
        })

        game.scoreVbReset()

        card.classList.remove('flip')
        card.addEventListener('click', game.flipCard)

        game.disableflip = true
        game.clickOne = game.clickTwo = ''

        setTimeout(() => {
          game.shuffleCards()
        })

        setTimeout(() => {
          game.disableflip = false
        })
      }
    })
  })

  game.shuffleCards()

})(new class Game {

  static shuffleArray(array)
  {
    for (let j, i = array.length -1; i > 0; i--){
      j = Math.floor(Math.random()* (i + 1))
      const temp = array[i]

      array[i] = array[j]
      array[j] = temp
    }

    return array
  }

  constructor()
  {
    this.restartBtn = document.querySelector('.restart-btn')
    this.flipCount = document.querySelector('.flipCount')
    this.cards = document.querySelectorAll('.cards')
    this.second = document.querySelector('.nav')

    this.scoretext = document.querySelector('.scoretext')
    this.scoreBoard = document.querySelector('.modal')
    this.scoreSec = document.querySelector('.secs')
    this.flips = document.querySelector('.flips')

    this.disableflip = false
    this.isClickedOp = true
    this.timerOp = true

    this.matchFlip = 0
    this.score = 0
    this.sec = 0

    this.interval = null
    this.clickOne = ''
    this.clickTwo = ''

    this.bind()
  }

  bind()
  {
    this.shuffleCards = this.shuffleCards.bind(this)
    this.shuffle = this.shuffle.bind(this)
    this.flipCard = this.flipCard.bind(this)
  }

  timer()
  {
    clearInterval(this.interval)

    this.interval = setInterval(() => {
      this.second.innerHTML = `${this.sec}s`
      this.sec++

    }, 1000)
  }

  flipCard(e)
  {
    let clickedCard = e.target

    if (clickedCard !== this.clickOne && !this.disableflip) {
      this.score++
      this.flipCount.innerHTML = `Flips: ${this.score}`

      clickedCard.classList.add('flip')

      if (!this.clickOne) {
        return this.clickOne = clickedCard
      }

      this.clickTwo = clickedCard
      this.disableflip = true

      this.matchCards()
    }
  }

  matchCards()
  {
    if (this.clickOne.innerHTML === this.clickTwo.innerHTML) {
      this.matchFlip++

      if (this.matchFlip === 12) {
        setTimeout(this.shuffle, 1000)
      }

      this.clickOne.removeEventListener('click', this.flipCard)
      this.clickTwo.removeEventListener('click', this.flipCard)

      this.clickOne = this.clickTwo = ''

      return this.disableflip = false
    }

    setTimeout(() => {
      if (this.clickOne.classList.contains('flip') && this.clickTwo.classList.contains('flip')) {
        this.clickOne.classList.remove('flip')
        this.clickTwo.classList.remove('flip')

        this.clickOne = this.clickTwo = ''
        this.disableflip = false
      }
    }, 700)
  }

  scoreVbReset()
  {
    this.score = 0
    this.flipCount.innerHTML = `Flips: ${this.score}`
    this.matchFlip = 0

    clearInterval(this.interval)

    this.sec = 0
    this.second.innerHTML = `${this.sec}s`
    this.timerOp = true
  }

  shuffle()
  {
    this.scoreBoard.style.display = 'flex'

    if (this.score < 45) {
      this.scoretext.classList.toggle('damn')
      this.scoretext.innerHTML = 'Flawless'
      this.flips.innerHTML =`Flips: ${this.score}`
      this.scoreSec.innerHTML = `Second: ${this.sec}s`
    }
    if (this.score >= 45 && this.score < 65) {
      this.scoretext.classList.toggle('great')
      this.scoretext.innerHTML = 'Great Game'
      this.flips.innerHTML = `Flips: ${this.score}`
      this.scoreSec.innerHTML = `Second: ${this.sec}s`
    }
    if (this.score >= 65 && this.score < 80) {
      this.scoretext.classList.toggle('mid')
      this.scoretext.innerHTML = 'Not Bad'
      this.flips.innerHTML = `Flips: ${this.score}`
      this.scoreSec.innerHTML = `Second: ${this.sec}s`
    }
    if (this.score >= 80) {
      this.scoretext.classList.toggle('bad')
      this.scoretext.innerHTML = 'Bad Game :('
      this.flips.innerHTML = `Flips: ${this.score}`
      this.scoreSec.innerHTML = `Second: ${this.sec}s`
    }

    this.cards.forEach(card => {
      card.classList.remove('flip')
      card.addEventListener('click', this.flipCard)
    })

    setTimeout(this.shuffleCards)

    this.scoreVbReset()

    this.clickOne = this.clickTwo = ''
  }

  shuffleCards()
  {
    let cardContents = []

    for (let i = 0; i < this.cards.length; i++) {
      cardContents.push(this.cards[i].innerHTML)
    }

    cardContents = Game.shuffleArray(cardContents)

    for (let i = 0; i < this.cards.length; i++) {
      this.cards[i].innerHTML = cardContents[i]
    }
  }
})
