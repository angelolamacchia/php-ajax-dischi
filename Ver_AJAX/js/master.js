var app = new Vue ({
    el: "#app",

    data: {
        songs: [],
        songsArtist: [],
        selected: '',
    },

    created() {
        this.getAlbums();
        this.getAuthors();
    },

    methods: {
        orderSongs() {
            //funzione per ordinare le canzoni
            this.songs.sort( (a,b)=>(parseInt(a.year) < parseInt(b.year) ) ? -1:1);
        },

        getAlbums() {
            axios
            //chiamata get dinamica
            .get(window.location.protocol + '//' + window.location.hostname + ':' + window.location.port + '/php-ajax-dischi/Ver_PHP/partials/server.php')
            .then( (result) => {
                this.songs = result.data;
            }); 
        },

        getAuthors() {
            //chiamata per gli autori
            axios
            .get(window.location.protocol + '//' + window.location.hostname + ':' + window.location.port + '/php-ajax-dischi/Ver_PHP/partials/server.php?getAuthor=all')
            .then((result) => {
                this.songsArtist = result.data;
            });
        },

        getSingleAuthor() {
            //chiamata per l'album di uno specifico autore
            axios
            .get(window.location.protocol + '//' + window.location.hostname + ':' + window.location.port + '/php-ajax-dischi/Ver_PHP/partials/server.php?getAuthor=' + this.selected)
            .then((result) => {
                this.songs = result.data;
            });
        }
    }

});