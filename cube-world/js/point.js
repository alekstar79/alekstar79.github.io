export class Point
{
  constructor(world, x, y, z, project)
  {
    this.world     = world
    this.project2D = project
    this.visible   = false
    this.x         = x
    this.y         = y
    this.z         = z
    this.xo        = x
    this.yo        = y
    this.zo        = z
    this.xp        = 0.0
    this.yp        = 0.0
  }

  project(canvas)
  {
    // 3D rotation
    const u = this.world.sinZ * this.yo + this.world.cosZ * this.xo
    const t = this.world.cosZ * this.yo - this.world.sinZ * this.xo
    const s = this.world.cosY * this.zo + this.world.sinY * u

    this.x = this.world.cosY * u - this.world.sinY * this.zo
    this.y = this.world.sinX * s + this.world.cosX * t
    this.z = this.world.cosX * s - this.world.sinX * t

    // 3D to 2D projection
    if (this.project2D) {
      const dz = this.world.zEye.value + this.z

      this.xp = canvas.centerX + this.x * (this.world.fl / dz)
      this.yp = canvas.centerY + this.y * (this.world.fl / dz)

      this.visible = dz > 0
    }
  }
}
