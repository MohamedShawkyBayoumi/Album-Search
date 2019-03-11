import { SEARCH, CLICK, CHANGE_LANGUAGE_TO_ARABIC, CHANGE_LANGUAGE_TO_ENGLISH } from './albumsConstants';

export const search = value => {
    return {
        type: SEARCH,
        payload: value
    }
}


export const click = (album, artist) => {
    return {
        type: CLICK,
        payload: {
            album,
            artist
        }
    }
}


export const changeLanguageToArabic = () => {
    return {
        type: CHANGE_LANGUAGE_TO_ARABIC
    }
}


export const changeLanguageToEnglish = () => {
    return {
        type: CHANGE_LANGUAGE_TO_ENGLISH
    }
}