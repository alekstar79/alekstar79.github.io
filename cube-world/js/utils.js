export const distance = (dx, dy) => Math.sqrt(dx * dx + dy * dy)

export function points(points, canvas)
{
  points.project = function() {
    for (let i = 0, len = this.length; i < len; i++) {
      this[i].project(canvas)
    }
  }

  return points
}

export function volume(volume, context = null)
{
  context || (context = this)

  volume.size = context.size

  for (let i = 0; i < context.count; i++) {
    volume[i] = 0
  }

  volume.get = function(x, y, z) {
    return this[x + y * this.size + z * this.size * this.size]
  }

  volume.set = function(x, y, z, value) {
    this[x + y * this.size + z * this.size * this.size] = value
  }

  return volume
}

export function faces(faces, canvas, context = null)
{
  context || (context = this)

  faces.world = context

  // insertion sort
  faces.sort = function() {
    for (let i = 0, len = this.length; i < len; i++) {
      let j = i, item = this[j]

      for(; j > 0 && this[j - 1].zIndex < item.zIndex; j--) {
        this[j] = this[j - 1]
      }

      this[j] = item
    }
  }

  // culling loop
  faces.culling = function() {
    for (let i = 0, len = this.length; i < len; i++) {
      const f = this[i]

      if (f.isVisible()) {
        const dx = f.center.x
        const dy = f.center.y
        const dz = f.center.z + this.world.zEye.value

        f.zIndex = (dx * dx + dy * dy + dz * dz)
      }
    }
  }

  // draw loop
  faces.draw = function() {
    for (let i = 0, len = this.length; i < len; i++) {
      if (this[i].visible) {
        this[i].draw(canvas)
      } else {
        break
      }
    }
  }

  return faces
}
