export const replaceSlashSlash = (str, replaceWith = '/') => {
  // exit early to avoid recursion
  if (!str.includes('/')) {
    return str
  }

  const replaceRegex = /\/\/+/gim

  if (str.startsWith('http')) {
    return str
      .split('://')
      .map(s => replaceSlashSlash(s, replaceWith))
      .join('://')
  }

  return str.replace(replaceRegex, replaceWith)
}
