/* jshint unused:false*/


(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#string').click(makeString);
  }

  function makeString(){
    var first = $('#first').val();
    var last = $('#last').val();
    var movie = $('#movie').val();

    var string = `${first.toLowerCase()} ${last.toLowerCase()} loves ${movie.toUpperCase()}`;

    $('#output').text(string);
  }

})();
