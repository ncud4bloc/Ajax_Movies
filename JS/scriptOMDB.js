/* --------------- Global Variables --------------- */

var myMovieList = ["tt3385516", "tt0076759", "tt0206634", "tt0083658", "tt0073195", "tt0079574", "tt0059243", "tt0067525", "tt0080336", "tt0071853", "tt0032138", "tt1136608", "tt0119177", "tt1355644", "tt0062622"];
var count = 0;
var newAddition;


/* --------------- Functions --------------- */

function getMovies(){
    for (var i = count; i < count + 3; i++){
        newAddition = myMovieList[i];
        var myURL = 'http://www.omdbapi.com/?i=' + newAddition;
        console.log('URL: ' + myURL);
        
        $.ajax({
            url: myURL,
            success: function(movie){
                var el = '<div class="aMovie">';
                el += '<div class="mTitle">' + movie.Title + '</div>';
                el += '<div class="mYear">' + movie.Year + '</div>';
                el += '<img src="' + movie.Poster + '>';
                el += '</div>';
                
                container.append(el);
            },
            error: function(){
                $('.alert').show();
            },
        });
    }
    count += 3;
}


/* ---------------  Function Calls  --------------- */

$(function(){
    var container = $('#container');
    
    getMovies();
    
    /* Scroll Functionality */
    container.scroll(function(){
        var $this = $(this);
        var height = this.scrollHeight - $this.height();    // Gets height
        var scroll = $this.scrollTop();                     // Gets scroll position
        var isScrolledToEnd = (scroll >= height);           // Determines if scrolled to bottom

        if (isScrolledToEnd) {
            var addContent = getMovies();                   // Get more movies
            $this.append(addContent);                       // Append more movies
        }
    });

    

    
})