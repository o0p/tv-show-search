const log = i => console.log(i);


const form = document.querySelector('#searchForm');

form.addEventListener('submit', async function(e){
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const res = await axios.get(` http://api.tvmaze.com/search/shows?q=${searchTerm}`);
    log(res.data[0].show.image.medium);
});
