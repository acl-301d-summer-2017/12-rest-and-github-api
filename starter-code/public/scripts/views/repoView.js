'use strict';
var app = app || {};

(function (module) {
  const repoView = {};

  const ui = function () {
    let $about = $('#about');
    // Best practice: Cache the DOM query if it's used more than once.
    // REVIEW: Private methods declared here live only within the scope of the wrapping IIFE.
    $about.find('ul').empty();
    $about.show().siblings().hide();
  };
  // DONE:TODO: Remember that new Handlebars template? Let's compile it!
  // Save the result in this `render` variable.
    
  const render = function (repo) {
    var template = $('#repo-template').text();
    var templateFiller = Handlebars.compile(template);
    return templateFiller(repo);
  }
  //  let render= Handlebars.compile($('#repo-template').text());
  repoView.index = function () {
    ui();
    $('#about ul').append(

      app.repos.with('name').map(render) // Want to filter by a different property other than name?
    );
  };

  module.repoView = repoView;
})(app);

// The jQuery `append` method lets us append an entire array of HTML elements at once:





