/* jshint unused:false*/
/* global moment:true*/
/* global _ */
/* jshint camelcase: false */


(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#magic').click(magic);
  }

  function magic(){
    var number = $('#number').val();
    var url = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?limit='+number+'&country=us&apikey=w3g72ec3szmr45u7xr8rah4h&callback=?';
    $.getJSON(url, addInfo);
  }

  function addInfo(data){
    var number = $('#number').val();
    var score = $('#score').val();

    for(var i = 0; i < number; i++){
      var $div = $('<div class="movies">');
      var $img = $('<img>');
      var $div1 = $('<div>');
      var $div2 = $('<div>');

      var poster = data.movies[i].posters.original;
      var title = data.movies[i].title;
      var rating = data.movies[i].ratings.critics_score;


      if(rating >= score){
        $img.attr('src', poster);
        $div1.append($img);
        $div2.text(title + ':' + rating);
        $div.append($div1);
        $div.append($div2);
        $('#output').append($div);
      }
    }
  }

})();
