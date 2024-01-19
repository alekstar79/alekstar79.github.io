export class InputHandler
{
  static init(game)
  {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        game.keys.add(e.key)
      } else if (e.key === ' ') {
        game.player.shootTop()
      } else if (e.key === 'd') {
        game.debug = !game.debug
      }
    })

    window.addEventListener('keyup', (e) => {
      game.keys.delete(e.key)
    })
  }
}
