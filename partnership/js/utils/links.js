/**
* Creating links to styles
* @param {String[]} links
* @return {HTMLLinkElement[]}
*/
export function createStyleLinks(links)
{
  return links.map(href => {
    const lnk = document.createElement('link')

    lnk.rel = 'stylesheet'
    lnk.href = href

    return lnk
  })
}
