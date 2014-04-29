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
    var numbers = $('#numbers').val().split(',');
    var start = numbers[0];
    var end = numbers[1];
    var step = numbers[2];

    var array = _.range(start, end, step).map(n=>n*n*n);
    array = _.shuffle(array).map(i=>'<div>'+i+'</div>');
    $('#output').append(array);

  }

})();
