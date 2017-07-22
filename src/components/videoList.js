angular.module('video-player')
.component('videoList', {
  controller: function() {
    this.onClick = () => console.log('hi');
  },
  
  bindings: {
    videos: '<'
  },
  
  templateUrl: 'src/templates/videoList.html'
});
