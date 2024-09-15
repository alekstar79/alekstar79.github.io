export class Scene
{
  /**
   * @param {App} app
   */
  constructor(app)
  {
    this.app = app

    this.createScene()
  }

  /**
   * @note Method needs to be overridden
   */
  createScene()
  {
    // noop
  }

  /**
   * @note Method needs to be overridden
   * @param {Number} correction
   */
  updateScene(correction = 0)
  {
    // noop
  }

  /**
   * @note Method needs to be overridden
   * @param {CanvasRenderingContext2D} ctx
   */
  renderScene(ctx)
  {
    // noop
  }
}
