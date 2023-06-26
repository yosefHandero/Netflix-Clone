const API_KEY = "41dc3534d8b18ed64631cb67655fdbea"

const requests = {
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRatedMovies:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fecthActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_gernes=99`,

};
export default requests