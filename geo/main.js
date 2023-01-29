const mymap = L.map('map').setView([33.777603, -84.389371], 13)

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  accessToken: 'pk.eyJ1IjoiY2V6YXJ5dHJ1c3RzdGFtcCIsImEiOiJjazZodGd3OGwxZG9qM2VudmVrbGxyYzVoIn0.XkEVgAqpqwq-gjfJy6lDow',
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox/streets-v11'
})
  .addTo(mymap)

const setMap = ({ latitude, longitude, accuracy }) => {
  mymap.setView([latitude, longitude], 13)

  const circle = L.circle([latitude, longitude], {
    color: 'green',
    fillColor: '#0f0',
    fillOpacity: 0.5,
    radius: accuracy
  })
    .addTo(mymap)


  const group = new L.featureGroup([circle])

  mymap.fitBounds(group.getBounds())
}

const updateResults = (value, title = 'Results') => {
  resultTitle.innerText = title
  result.innerText = JSON.stringify(value, null, 2)
}

const success = ({coords}) => {
  const coordsKeys = Object.keys(coords.constructor.prototype),
    finalCoords = _.pick(coords, coordsKeys)

  setMap(finalCoords)
  updateResults(finalCoords, 'Result: SUCCESS')
}

const error = (err) => {
  updateResults(err, 'Result: ERROR')
}

getAccessButton.onclick = () => {
  updateResults('', 'PENDING')
  navigator.geolocation.getCurrentPosition(success, error, { enableHighAccuracy: false })
}

getHighAccessButton.onclick = () => {
  updateResults('', 'PENDING')
  navigator.geolocation.getCurrentPosition(success, error, { enableHighAccuracy: true })
}
