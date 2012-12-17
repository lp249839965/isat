Modernizr.load([
  {
    test : Modernizr.webgl,
    yep: 'index.js',
    nope : 'static/js/nope.js'
  },{
    load: '//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.js',
    complete: function () {
      if ( !window.jQuery ) {
            Modernizr.load('js/libs/jquery-1.8.3.min.js');
      }
    }
  },
  {
    load: ['static/js/jquery.simplemodal.js', 'static/js/main.js']
  }
]);