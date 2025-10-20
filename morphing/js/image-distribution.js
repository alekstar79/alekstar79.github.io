/**
* @class
* @name ImageDistribution
* @property {string} id
* @property {ImageData} imageData
* @property {MorphPoint[]} points
* @property {number} maxRadius
* @property {number} minRadius
*/
export class ImageDistribution
{
  constructor(imageData, points, maxRadius, minRadius)
  {
    this.id = Math.random().toString(36).substring(2, 11)
    this.imageData = imageData
    this.points = points
    this.maxRadius = maxRadius
    this.minRadius = minRadius
  }

  getPointCount()
  {
    return this.points.length
  }

  findClosestPoint(point, maxDistance = 50)
  {
    let closestPoint = null
    let minDistance = Infinity

    for (const p of this.points) {
      const dist = point.distanceTo(p)

      if (dist < minDistance && dist < maxDistance) {
        minDistance = dist
        closestPoint = p
      }
    }

    return closestPoint
  }
}
