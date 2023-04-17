;(function() {

  let dragZone, avatar, dropTarget, downX, downY

  function onMouseDown(e)
  {
    if (e.which !== 1) return

    dragZone = findDragZone(e)

    if (!dragZone) return

    downX = e.pageX
    downY = e.pageY

    prevent(e)
  }

  function onMouseMove(e)
  {
    if (!dragZone) return

    if (!avatar) { // the element is pressed, but has not yet begun to be moved
      if (Math.abs(e.pageX - downX) < 3 && Math.abs(e.pageY - downY) < 3) {
        return
      }

      // try to grab the element
      avatar = dragZone.onDragStart(downX, downY, e)

      if (!avatar) {      // failed, so the transfer cannot be continued
        return cleanUp()  // clear private variables
      }
    }

    // display object transfer, recalculate current element under cursor
    avatar.onDragMove(e)

    // find new dropTarget under cursor: newDropTarget
    // the current dropTarget is left over from the previous mousemove
    // *both values: newDropTarget and dropTarget can be null
    const newDropTarget = findDropTarget(e)

    if (newDropTarget !== dropTarget) {
      // notify the old and new target zones that they have been left/entered
      dropTarget && dropTarget.onDragLeave(newDropTarget, avatar, e)
      newDropTarget && newDropTarget.onDragEnter(dropTarget, avatar, e)
    }

    dropTarget = newDropTarget

    dropTarget && dropTarget.onDragMove(avatar, e)

    prevent(e)
  }

  function onMouseUp(e)
  {
    if (e.which !== 1) return

    // if you have already started the transfer
    if (avatar) {
      if (dropTarget) {
        // complete the transfer and get rid of the avatar if needed
        // this function must call avatar.onDragEnd/onDragCancel
        dropTarget.onDragEnd(avatar, e)
      } else {
        avatar.onDragCancel()
      }
    }

    cleanUp()
  }

  function cleanUp()
  {
    // clear all created objects
    dragZone = avatar = dropTarget = null
  }

  function findDragZone(event)
  {
    let el = event.target

    while (el !== document && !el.dragZone) {
      el = el.parentNode
    }

    return el.dragZone
  }

  function findDropTarget()
  {
    // get element under avatar
    let el = avatar.getTargetElem()

    while (el !== document && !el.dropTarget) {
      el = el.parentNode
    }

    if (!el.dropTarget) {
      return null
    }

    return el.dropTarget
  }

  function prevent(e)
  {
    e.preventDefault()
  }

  document.body.addEventListener('selectstart', prevent)
  document.addEventListener('mousemove', onMouseMove)
  document.addEventListener('mousedown', onMouseDown)
  document.addEventListener('mouseup', onMouseUp)
  document.addEventListener('dragstart', prevent)

})()
