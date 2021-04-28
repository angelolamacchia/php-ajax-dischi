var app = new Vue ({
    el: "#app",

    data: {
        songs: [],
        songsArtist: [],
        selected: '',
    },

    mounted() {
        axios
        .get("http://localhost:8888/php-ajax-dischi/Ver_PHP/partials/server.php")
        .then( (result) => {
            console.log(result.data);
            this.songs = result.data;

            this.songs.forEach((element, index) => {

                //popolo l'array con i generi delle canzoni
                if (!this.songsArtist.includes(element.author)) {
                    this.songsArtist.push(element.author);
                }; 
            });
           
        });  
    },

    methods: {
        orderSongs() {
            //funzione per ordinare le canzoni
            this.songs.sort( (a,b)=>(parseInt(a.year) < parseInt(b.year) ) ? -1:1);
        }
    }
});