/* jshint unused:false*/
/* global moment:true*/
/* global _ */
/* jshint camelcase: false */
/* global AmCharts */


(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    makeChart();
    $('#magic').click(magic);
  }

  function magic(){
    var number = $('#number').val();
    var url = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?limit='+number+'&country=us&apikey=w3g72ec3szmr45u7xr8rah4h&callback=?';
    $.getJSON(url, generateChartData);
  }

  function generateChartData(data) {
      var number = $('#number').val();
      var chartData = [];

      for (var i = 0; i < number; i++) {
          var movie = data.movies[i].title;
          var critic = data.movies[i].ratings.critics_score;
          var audience = data.movies[i].ratings.audience_score;

          chart.dataProvider.push({
              movie: movie,
              critic: critic,
              audience: audience,
          });
      }
      chart.validateData();
  }

  var chart;
  function makeChart(){
    chart = AmCharts.makeChart('graph', {
        'type': 'serial',
        'theme': 'dark',
        'pathToImages': 'http://www.amcharts.com/lib/3/images/',
        'legend': {
            'useGraphSettings': true
        },
        'dataProvider': [],
        'valueAxes': [{
            'id':'v1',
            'minimum': 0,
            'maximum': 100,
            'axisColor': '#FF6600',
            'axisThickness': 2,
            'gridAlpha': 0,
            'axisAlpha': 1,
            'position': 'left'
        }],
        'graphs': [{
            'valueAxis': 'v1',
            'lineColor': '#FF6600',
            'bullet': 'round',
            'bulletBorderThickness': 1,
            'hideBulletsCount': 30,
            'title': 'Audience Rating',
            'valueField': 'audience',
    		'fillAlphas': 0
        }, {
            'valueAxis': 'v1',
            'lineColor': '#FCD202',
            'bullet': 'square',
            'bulletBorderThickness': 1,
            'hideBulletsCount': 30,
            'title': 'Critic Rating',
            'valueField': 'critic',
    		    'fillAlphas': 0
        }],
        'chartCursor': {
            'cursorPosition': 'mouse'
        },
        'categoryField': 'movie',
        'categoryAxis': {
            'axisColor': '#DADADA',
            'minorGridEnabled': true
        }
    });
  }



})();
