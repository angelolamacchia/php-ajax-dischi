var app = new Vue ({
    el: "#app",

    data: {
        songs: [],
        songsArtist: [],
        selected: '',
    },

    mounted() {
        axios
        //la chiamata get è dinamica
        .get(window.location.protocol + '//' + window.location.hostname + ':' + window.location.port + '/php-ajax-dischi/Ver_PHP/partials/server.php')
        .then( (result) => {

            this.songs = result.data;
        }); 
        
    },

    methods: {
        orderSongs() {
            //funzione per ordinare le canzoni
            this.songs.sort( (a,b)=>(parseInt(a.year) < parseInt(b.year) ) ? -1:1);
        },

        getAuthors() {
            //chiamata per gli autori
            axios
            .get(window.location.protocol + '//' + window.location.hostname + ':' + window.location.port + '/php-ajax-dischi/Ver_PHP/partials/server.php?listAuthor=true')
            .then((result) => {

                this.songsArtist = result.data;
            });
        }


    }
});