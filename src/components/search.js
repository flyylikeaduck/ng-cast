angular.module('video-player')

.component('search', {
  bindings: {
    getVideos: '<'
  },
  
  templateUrl: 'src/templates/search.html'
  
});
