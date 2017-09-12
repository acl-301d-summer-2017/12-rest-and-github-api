'use strict';
var app = app || {};

(function(module) {
  const repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    $.ajax ({ 
      url: 'https://api.github.com/users/martsyalis/repos',
      method: 'GET',
      headers: { 'Authorization':` token ${TOKEN}` }
    })
      .then (data=> {

        repos.all = data;
        // data.map(function(currentValue) {
        //   repos.all.push(currentValue);
        // })
        console.log(repos.all)
        callback(); 
      })
    console.log ("repos:all",repos.all)
     
  }

      
     
    
    
  //TODO-DONE?: How would you like to fetch your repos? Don't forget to call the callback.
  //       Remember that the callback function we'll want to call relies on repos.all
  //       being an array with a bunch of repo objects in it, so you'll need to
  //       populate it with the response from Github before you call the callback.



  // REVIEW: Model method that filters the full collection for repos with a particular attribute.
  // You could use this to filter all repos that have a non-zero `forks_count`, `stargazers_count`, or `watchers_count`.
  repos.with = (attr) => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(app);

