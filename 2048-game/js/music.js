// noinspection JSUnresolvedVariable
const AudioContext = (window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.oAudioContext || window.msAudioContext)
const hasWebAudioAPI = { data: !!AudioContext && location.protocol.includes('http') }

export function audio(url)
{
  return new Promise((resolve, reject) => {
    if (!hasWebAudioAPI.data) return reject()

    const context = new AudioContext()
    const music = {}

    fetch(url)
      .then(res => res.arrayBuffer())
      .then((raw) => {
        context.decodeAudioData(raw)
          .then(buf => {
            const getSource = () => {
              const source = context.createBufferSource()

              source.buffer = buf
              source.connect(context.destination)

              return source
            }

            music.start = () => getSource().start(0, 3.7202, 3.6224)
            music.clear = () => getSource().start(0, 0, 0.7675)
            music.fall = () => getSource().start(0, 1.2558, 0.3546)
            music.gameover = () => getSource().start(0, 8.1276, 1.1437)
            music.rotate = () => getSource().start(0, 2.2471, 0.0807)
            music.move = () => getSource().start(0, 2.9088, 0.1437)

            resolve(music)
          })
          .catch(error => {
            hasWebAudioAPI.data = false
            reject(error)
          })
      })
  })
}
