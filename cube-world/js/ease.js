export class Ease
{
  constructor(speed, val)
  {
    this.speed = speed
    this.target = val
    this.value = val
  }

  ease(target)
  {
    this.value += (target - this.value) * this.speed
  }
}
