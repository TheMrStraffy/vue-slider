const {createApp} = Vue;

createApp({
  data(){
    return{
      movies: {
          images:[
            'https://m.media-amazon.com/images/M/MV5BMjI0NzcyMjM5Ml5BMl5BanBnXkFtZTgwMzk2NzAyNTM@._V1_.jpg',
            'https://cinemadetective.com/wp-content/uploads/2020/04/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
            'https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
            'https://images.moviesanywhere.com/a6f490d9d57cef66dc29a310b657b3e6/83bb3101-4ca0-40e0-932a-1aca331cdc2f.jpg',
            'https://pad.mymovies.it/filmclub/2006/02/302/locandina.jpg',
          ],
          titles: ['Upgrade','Fight Club','Shutter Island','L.A. Confidential','Serpico']
      },
      activateImg: 0,
    }
  },
  methods: {
    nextPrev(isTrue){
      isTrue ? this.activateImg++ : this.activateImg--;
      if (this.activateImg < 0) this.activateImg = this.movies.images.length - 1;
      if (this.activateImg === this.movies.images.length) this.activateImg = 0;
    },
    autoplay(){
      this.autoplay = setInterval(()=>{
        this.nextPrev(true);
      }, 1500)
      console.log("play");
    },
    stopAutoPlay(){
      clearInterval(this.autoplay);
      console.log("stop");
    }

    
  },
  mounted(){
    console.log("montata");
    this.autoplay();
  },
  created(){
    console.log("creata");
  }
}).mount('#app');