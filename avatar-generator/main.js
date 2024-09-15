class Avatar
{
  constructor(options)
  {
    this.canvas = options.canvas
    this.context = this.canvas.getContext('2d')
    this.size = options.size
    this.center = {
      x: this.size / 2,
      y: this.size / 2
    }

    this.context.canvas.height = this.size
    this.context.canvas.width = this.size
    this.context.fillStyle = '#fff'
    this.context.fillRect(0, 0, this.size, this.size)
    this.context.strokeStyle = '#000'
    this.context.lineWidth = Math.ceil(this.size / 100)
    this.context.lineCap = 'round'
    this.context.font = Math.ceil(10 * (this.size / 7) / options.text.length) + 'px Architects Daughter'
    this.context.textAlign = 'center'
    this.context.textBaseline = 'middle'

    this.params = this.generateDrawingParameters(options.text)

    this.humanFriendlyParams = {
      headForm: this.params[1],
      headColor: this.params[2],
      eyesPosition: this.params[3],
      mouthPosition: this.params[4],
      hairForm: this.params[5]
    }

    this.generateImage()
    this.context.fillStyle = '#000'
    this.context.fillText(options.text, this.center.x, this.center.y + this.size / 2.5)
  }

  generateDrawingParameters(str)
  {
    let hash = 0

    if (str.length === 0) {
      return hash
    }

    for (let i = 0, len = str.length; i < len; i++) {
      let chr = str.charCodeAt(i)

      hash = ((hash << 5) - hash) + chr
      hash |= 0
    }

    return (new Array(9).join('1') + Math.abs(hash)).slice(-8).split('').map(x => parseInt(x))
  }


  generateImage()
  {
    this.generateHead()
    this.generateEyes()
    this.generateMouth()
    this.generateHair()
  }


  generateHead()
  {
    const P = this.humanFriendlyParams.headForm

    const A1 = {
      x: this.center.x + this.size / 4 + (P - 4) * this.size / 50,
      y: this.center.y - this.size / 4
    }

    const B1 = {
      x: this.center.x + this.size / 4 - (P - 4) * this.size / 50,
      y: this.center.y + this.size / 4
    }

    const A2 = {
      x: this.center.x - this.size / 4 - (P - 4) * this.size / 50,
      y: this.center.y - this.size / 4
    }

    const B2 = {
      x: this.center.x - this.size / 4 + (P - 4) * this.size / 50,
      y: this.center.y + this.size / 4
    }

    this.context.beginPath()
    this.context.moveTo(this.center, this.center - this.size / 4)
    this.context.bezierCurveTo(
      this.center.x,
      this.center.y - this.size / 4,
      A1.x,
      A1.y,
      this.center.x + this.size / 4,
      this.center.y
    )

    this.context.bezierCurveTo(
      this.center.x + this.size / 4,
      this.center.y,
      B1.x,
      B1.y,
      this.center.x,
      this.center.y + this.size / 4
    )

    this.context.bezierCurveTo(
      this.center.x,
      this.center.y + this.size / 4,
      B2.x,
      B2.y,
      this.center.x - this.size / 4,
      this.center.y
    )

    this.context.bezierCurveTo(
      this.center.x - this.size / 4,
      this.center.y,
      A2.x,
      A2.y,
      this.center.x,
      this.center.y - this.size / 4
    )

    this.context.fillStyle = 'hsl(' + 360 * this.humanFriendlyParams.headColor / 10 + ', 100%, 50%)'
    this.context.fill()
    this.context.stroke()
  }

  generateEyes()
  {
    const P = this.humanFriendlyParams.eyesPosition

    const A1 = {
      x: this.center.x - this.size / 10 + (P - 4) * this.size / 100,
      y: this.center.y - this.size / 10
    }

    const A2 = {
      x: this.center.x + this.size / 10 - (P - 4) * this.size / 100,
      y: this.center.y - this.size / 10
    }

    this.context.fillStyle = '#fff'
    this.context.beginPath()
    this.context.arc(A1.x, A1.y, this.size / 30, 0, Math.PI * 2, true)
    this.context.fill()
    this.context.stroke()
    this.context.beginPath()
    this.context.arc(A2.x, A2.y, this.size / 30, 0, Math.PI * 2, true)
    this.context.fill()
    this.context.stroke()
    this.context.fillStyle = '#000'
    this.context.beginPath()
    this.context.arc(A1.x, A1.y, this.size / 200, 0, Math.PI * 2, true)
    this.context.fill()
    this.context.stroke()
    this.context.beginPath()
    this.context.arc(A2.x, A2.y, this.size / 200, 0, Math.PI * 2, true)
    this.context.fill()
    this.context.stroke()
  }

  generateMouth()
  {
    const P = this.humanFriendlyParams.mouthPosition

    const A1 = {
      x: this.center.x - this.size / 10 + P * this.size / 50,
      y: this.center.y + this.size / 9 + P * this.size / 80
    }

    const A2 = {
      x: this.center.x + this.size / 10 - P * this.size / 50,
      y: this.center.y + this.size / 9 + P * this.size / 80
    }

    this.context.beginPath()
    this.context.moveTo(this.center.x + this.size / 10, this.center.y + this.size / 10)
    this.context.bezierCurveTo(
      A1.x,
      A1.y,
      A2.x,
      A2.y,
      this.center.x - this.size / 10,
      this.center.y + this.size / 10
    )

    this.context.stroke()
  }


  generateHair()
  {
    const P = this.humanFriendlyParams.hairForm

    const A1 = {
      x: this.center.x - this.size / 10 + P * this.size / 10,
      y: this.center.y - this.size / 4 - P * this.size / 40
    }

    const A2 = {
      x: this.center.x + this.size / 10 - P * this.size / 10,
      y: this.center.y - this.size / 4 - P * this.size / 40
    }

    this.context.beginPath()
    this.context.moveTo(this.center.x, this.center.y - this.size / 4)
    this.context.bezierCurveTo(
      A1.x,
      A1.y,
      A2.x,
      A2.y,
      this.center.x,
      this.center.y - this.size / 3
    )

    this.context.stroke()
  }
}

const NAMES = [
  'Aleksey Tarasenko',
  'Jack Aldridge',
  'Alex Metayer',
  'Nguyet Lago',
  'Bonita Leu',
  'Ola Vila',
  'Luetta Shaughnessy',
  'Ileana Reppert',
  'Dina Huizar',
  'Michaele Hugo',
  'Deshawn Imboden',
  'Monty Bethea',
  'Audie Weesner',
  'Florencia Kittelson',
  'Zella Blackerby',
  'Augusta Varley',
  'Marcela Priebe',
  'Melissa Kolman',
  'Tamisha Hillis',
  'Lynwood Whitener',
  'Mellissa Warf',
  'Margherita Flippen',
  'Ewa Navarre',
  'Pattie Hardrick',
  'Wilbur Banda',
  'Morgan Sydow',
  'Nisha Schmeltzer',
  'Liz Croley',
  'Margurite Delreal',
  'Ayesha Penhollow',
  'Dorcas Leech',
  'Jone Feaster',
  'Roscoe Winford',
  'Ione Caputo',
  'Monnie Jacinto',
  'Morton Freels',
  'Reyes Achorn',
  'Quinton Mccormack',
  'Rosanne Amorim',
  'Glynda Mcfarland',
  'Rhea Lauzon',
  'Maya Yarnall',
  'Jutta Hamilton',
  'Adrien Waites',
  'Lona Tuller',
  'Leia Giel',
  'Ted Shealey',
  'Angeline Montanez',
  'Wilmer Whitaker',
  'Davida Raker',
  'Cristina Chabolla',
  'Kathleen Eliason',
  'Chuck Booze',
  'Elmo Saba',
  'Tomika Lehmann',
  'Marivel Ensley',
  'Willene Kimpel',
  'Donn Dimatteo',
  'Evelina Juneau',
  'Fernando Wojciechowski',
  'Mario Mortensen',
  'Griselda Watkins',
  'Kymberly Mendel',
  'Donella Audia',
  'Wes Sweatt',
  'Tisha Styons',
  'Leif Tiedeman',
  'Art Biscoe',
  'Shona Meagher',
  'Rocky Bolding',
  'Tari Silvey',
  'Marsha Mifflin',
  'Lois Buchta',
  'Wm Wiese',
  'Emely Trump',
  'Felicia Arora',
  'Suzy Tonkin',
  'Alvin Mendell',
  'Talisha Marotta',
  'Fredda Haefner',
  'Migdalia Hersey',
  'Johanna Crisman',
  'Brent Muff',
  'Willette Sae',
  'Eldon Kuykendall',
  'Noella Beausoleil',
  'Laurence Starner',
  'Yu Maldanado',
  'Fermina Alcantar',
  'Flossie Viola',
  'Shirlene Lopinto',
  'Isis Hixson',
  'Elana Whitenack',
  'Erica Lamprecht',
  'Elinore Otto',
  'Catrice Stutz',
  'Adelia Aycock',
  'Tosha Singleterry',
  'Pam Carman',
  'Pearle Ruston',
  'Danette Phillippi',
  'Darcy Priester',
  'Terresa Estevez',
  'Daron Witherite',
  'Leatha Fiorini',
  'Summer Haff',
  'Jerrica Boyden',
  'Marine Rehberg',
  'Eliz Mischke',
  'Reagan Kupiec',
  'Lynsey Graff',
  'Martin Clem',
  'Marva Mumm',
  'Shane Steele',
  'Violette Cantero',
  'Venita Mader',
  'Jutta Hagler',
  'Senaida Rumore',
  'Ivey Catalano',
  'Racquel Grimaldo',
  'Lavenia Dunkelberger',
  'Myrtle Gentner',
  'Katy Hayhurst',
  'Kira Moritz',
  'Inga Bourassa',
  'Prudence Fluker',
  'Henrietta Reck',
  'Dorthy Mair',
  'Conrad Orrell',
  'Dorinda Yeates',
  'Clarinda Mccombs',
  'Flora Ainsworth',
  'Treva Petri',
  'Yu Gaylor',
  'Hedwig Buth',
  'Wilford Madigan',
  'Lorenza Bibler',
  'Jonie Quigg',
  'Many Synder',
  'Ashton Gandy',
  'Brenna Vandermark',
  'Cassidy Heuser',
  'Kelvin Troiano',
  'Jeana Aguinaldo',
  'Corina Tomko',
  'Youlanda Galaz',
  'Annelle Martinez',
  'Lovie Kania',
  'Hermelinda Lumb',
  'Debera Wanke',
  'Delfina Chancey',
  'Katrice Treacy',
  'Caridad Hollie',
  'Elina Prosperie',
  'Vernia Heywood',
  'Chara Cutright',
  'Arnulfo Hitchman',
  'Edmundo Hobby',
  'Anisha Rutter',
  'Jenifer Hommel',
  'Brendon Latorre',
  'Kristina Luciano',
  'Javier Earnest',
  'Lorie Whiten',
  'Susanna Planas',
  'Enoch Fitting',
  'Garnet Burrage',
  'Cristal Gallaway',
  'Lael Gallucci',
  'Zenobia Kroner',
  'Leonie Morais',
  'Charline Chatmon',
  'Aracely Millington',
  'Onita Surace',
  'Ying Hallock',
  'Rebecca Bigler',
  'Jeanene Deer',
  'Dana Vanvliet',
  'Kimbra Tryon',
  'Leta Biddle',
  'Sharolyn Forbus',
  'Myriam Laffin',
  'Ivette Veillon',
  'Delorse Altschuler',
  'Shayne Tillett',
  'Eula Bostwick',
  'Irina Oba',
  'Jesus Grieco',
  'Chelsea Bowes',
  'Jeanetta Hazel',
  'Elaina Tinajero',
  'Shantel Rosario',
  'Arlena Cuddy',
  'Valorie Metz',
  'Yajaira Fausnaught',
  'Tammara Sines',
  'Linwood Kothari',
  'Jed Licari',
  'Leilani Marmon',
  'Jerrie Berthiaume',
  'Yolande Maul',
  'Lilei Huang'
]

WebFont.load({
  google: {
    families: ['Architects Daughter']
  },
  active()
  {
    const wrapper = document.createElement('div')

    wrapper.classList.add('wrapper')

    NAMES.forEach(name => {
      const canvas = document.createElement('canvas')
      new Avatar({ canvas, size: 150, text: name })
      wrapper.appendChild(canvas)
    })

    document.body.appendChild(wrapper)
  }
})
