const form = document.querySelector("#searchForm");

form.addEventListener('submit', function(e){
    e.preventDefault();

    const searchTerm = form.element.query.value;
    console.log(searchTerm);
    const res = axios.get(`https://api.tvmaze.com/singlesearch/shows?q=${searchTerm}`)
    console.log(res.data)
})