/* jshint unused:false*/
/* global moment:true*/


(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#fromnow').click(magic);
  }

  function magic(){
    var date = $('#date').val();
    var fromNow = moment(date, 'YYYYMMDD').fromNow();
    $('#output').text(fromNow);
  }

})();
