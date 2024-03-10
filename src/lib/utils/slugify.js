import { is } from './is'

/**
 *
 *
 * @param {string} str
 * @param {boolean} [dash=false]
 * @returns
 */
export const slugify = (str, dash = false) => {
  if (!is(str, 'string')) {
    return ''
  }

  const replaceMap = {
    A: 'ÁÂÀÃÅĀ',
    B: 'Þ',
    C: 'ČĆ',
    CH: 'Ç',
    D: 'ĎĐ',
    E: 'ÉĚËÈÊẼĔȆ',
    /*
     * this turkish letter just changes the letters around it
     */
    // G: 'Ğ',
    I: 'ÍÌÎÏİ',
    N: 'ŇÑ',
    O: 'ÓÒÔÕØ',
    R: 'ŘŔ',
    S: 'Š',
    SH: 'Ş',
    T: 'Ť',
    U: 'ÚŮÙÛÖ',
    Y: 'ÝŸ',
    Z: 'Ž',
    a: 'áâàãāầảàå',
    b: 'þ',
    c: 'čć',
    ch: 'ç',
    d: 'ďđ',
    e: 'éěëèêẽĕȇ',
    /*
     * this turkish letter just changes the letters around it
     */
    // g: 'ğ',
    h: 'ḩ',
    i: 'íìîïī',
    n: 'ňñ',
    o: 'óòôõøộðồơ',
    r: 'řŕ',
    s: 'š',
    sh: 'ş',
    ss: 'ß',
    t: 'ť',
    u: 'úůùû',
    y: 'ýÿ',
    z: 'ž',
    Ae: 'Ä',
    Oe: 'Ö',
    Ue: 'Ü',
    ae: 'ä',
    oe: 'ö',
    ue: 'ü',
    '-': '·/ _,: ; ',
  }

  const strArray = str.split('')
  const entries = Object.entries(replaceMap)

  for (let i = 0; i < strArray.length; i++) {
    const char = strArray[i]

    const match = entries.find(([_, val]) => val.includes(char))

    if (match) {
      const [k] = match
      strArray[i] = k
    }
  }

  const replacer = dash ? '-' : ''

  /*
   * Make sure we remove all unwanted chars
   * and replace them with a dash or nothing
   */
  const final = strArray
    .join('')
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, replacer)
    .replace(/\s+/g, replacer)
    .replace(/-+/g, replacer)

  return final
}

export default slugify
