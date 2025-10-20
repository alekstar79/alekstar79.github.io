/**
* Deep merge objects with custom callback handler for merge customization
* @param {{[p: string]: *}} target - Target object to merge into
* @param {{[p: string]: *}} source - Source object to merge from
* @param {(function(...[*]): *)?} [customizer] - Custom callback function for merge handling
* @param {{[p: string]: *}} [context={}] - Context with path and parent object
* @param {string} customizer.key - Current key being merged
* @param {any} customizer.targetValue - Value from target object
* @param {any} customizer.sourceValue - Value from source object
* @param {{[p: string]: *}} customizer.context - Merge context (optional)
* @returns {{[p: string]: *}} Merged object
*/
export function deepMerge(target, source, customizer = null, context = {})
{
  // Handle null/undefined inputs
  if (target === null || typeof target !== 'object') {
    return customizer ? customizer('root', target, source, context) : source
  }

  if (source === null || typeof source !== 'object') {
    return customizer ? customizer('root', target, source, context) : target
  }

  // Handle array merging
  if (Array.isArray(target) && Array.isArray(source)) {
    if (customizer) {
      const customResult = customizer('array', target, source, context)

      if (customResult !== undefined) {
        return customResult
      }
    }

    return [...target, ...source]
  }

  if (Array.isArray(target) || Array.isArray(source)) {
    if (customizer) {
      const customResult = customizer('array_mismatch', target, source, context)

      if (customResult !== undefined) {
        return customResult
      }
    }

    return source
  }

  // Create output object
  const output = { ...target }

  // Merge all keys from source
  for (const key of Object.keys(source)) {
    const targetValue = target[key]
    const sourceValue = source[key]

    // Create new context for nested merging
    const newContext = {
      ...context,
      path: context.path ? `${context.path}.${key}` : key,
      parent: output
    }

    // Call customizer if provided
    if (customizer) {
      const customResult = customizer(key, targetValue, sourceValue, newContext)

      if (customResult !== undefined) {
        output[key] = customResult
        continue
      }
    }

    // Default merge behavior
    if (typeof targetValue === 'object' && targetValue !== null &&
      typeof sourceValue === 'object' && sourceValue !== null) {
      // Recursive merge for nested objects
      output[key] = deepMerge(targetValue, sourceValue, customizer, newContext)
    } else if (sourceValue !== undefined) {
      // Overwrite with source value
      output[key] = sourceValue
    }
  }

  return output
}
