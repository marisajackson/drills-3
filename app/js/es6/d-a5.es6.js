/* jshint unused:false*/
/* global moment:true*/
/* global _ */


(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#magic').click(magic);
  }

  function magic(){
    var url = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?limit=16&country=us&apikey=w3g72ec3szmr45u7xr8rah4h&callback=?';
    $.getJSON(url, addInfo);
  }

  function addInfo(data){
    for(var i = 0; i < 16; i++){
      var $div = $('<div class="movies">');
      var $img = $('<img>');
      var $div1 = $('<div>');
      var $div2 = $('<div>');

      var poster = data.movies[i].posters.original;
      var title = data.movies[i].title;

      $img.attr('src', poster);
      $div1.append($img);
      $div2.text(title);
      $div.append($div1);
      $div.append($div2);
      $('#output').append($div);

    }
  }

})();
