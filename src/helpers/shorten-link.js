import { SHORT_LINK_REGEXP } from './patterns-regexp'

export const shortenLink = (link) => {
    if (link.length > 0) {
        return SHORT_LINK_REGEXP.exec(link)[1]
    } else return null
}