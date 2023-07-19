import is from '@magic/types'
import error from '@magic/error'

let continuedLines = []

const multiSpaceRegExp = /  /gim
const newLineRegExp = /\n/gim

export const glslMinify = str =>
  str
    .split('\n')
    .map(line => {
      // handle line continuation characters
      if (line.endsWith('\\') && !line.endsWith('\\\\')) {
        // if a line has a continuation char, save the line
        continuedLines.push(line)
        // then return nothing for this line
        return ''
      } else if (!is.empty(continuedLines)) {
        // if we have items in the continuedLines array, we join it before the line
        line = `${continuedLines.join('\n')}\n${line}`
        // replace the line continuation character
        line = line.replace(/\\/gim, '')
        // reset continuedLines to restart this cycle for the next continuation group
        continuedLines = []
      }

      // does this line include a comment?
      if (line.includes('//')) {
        const [before] = line.split('//')
        return before
      }

      return line.trim()
    })
    .join('')
    // replace all newlines with nothing
    .replace(newLineRegExp, ' ')
    // replace all multi spaces with one space
    .replace(multiSpaceRegExp, ' ')
    .replace(/; /gim, ';')
    .trim()
