/* jshint unused:false*/


(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#squares').click(square);
  }

  function square(){
    var array = $('#numbers').val().split(',').map(n=>n.trim()).map(n=>n*n).map(n=>'<div>'+n+'</div>');
    $('#output').append(array);
  }

})();
