import { MorphEngine } from './morph-engine.js'

/**
* Advanced Morphing (support for multiple images)
* @author Aleksey Tatasenko <alekstar79@yandex.ru>
*/

// Simple initialization function for easy usage
export function useMorph(container = document.body, imageUrls = [], options = {})
{
  if (!container) {
    console.error('Container element not passed')
    return null
  }

  const engine = new MorphEngine(container, options)

  if (imageUrls && imageUrls.length > 0) {
    engine
      .loadImages(imageUrls)
      .catch(error => {
        console.error('Failed to load images:', error)
      })
  }

  return engine
}

if (typeof window !== 'undefined') {
  window.__IMAGE_MORPH_INITIALIZED__ = true
  window.useMorph = useMorph
}

export { MorphEngine }
