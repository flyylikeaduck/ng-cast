angular.module('video-player')

.component('videoPlayer', {
  controller: function() {
    this.getiframesrc = function (currentVideo) {
      return 'https://www.youtube.com/embed/' + currentVideo;
    };
  },
  
  bindings: {
    video: '<',
  },
  templateUrl: 'src/templates/videoPlayer.html'
});
