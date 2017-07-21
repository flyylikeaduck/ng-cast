angular.module('video-player')
.component('videoList', {
  // TODO
  controller: function() {
    this.videos = exampleVideoData;
    
  },
  
  templateUrl: 'src/templates/videoList.html'
});
