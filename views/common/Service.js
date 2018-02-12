import Server from './Server';

export default {
    getBookList : params => {
        return Server
            .get(`/book/search`, {params: params})
            .then(res => res);
    },

    getMovieList : params => {
        return Server
            .get(`/movie/search`, {params: params})
            .then(res => res);
    }
}
