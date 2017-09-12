'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.index = () => {
    $('#about').show().siblings().hide(); // REVIEW: We have a slight refactor in selectors here, which has reduced the amount of code from the last lab.

    // TODO: Call a function to load all the data.
    // Pass a view function as a callback, so the view will render after the data is loaded.

    $.ajax({
      url: 'https://api.github.com/morganlacouture/repos',
      method: 'GET',
      header: {
        'Authorization': `token ${TOKEN}`
      }
    }).then( data => {
      
      console.log( 'Data:', data );
    })
  };

  module.aboutController = aboutController;
})(app);
