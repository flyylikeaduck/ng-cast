angular.module('video-player')

.component('app', {
  controller: function(youTube) {
    this.videos = exampleVideoData;
    this.currentVideo = this.videos[0];

    this.onClick = (index) => {
      this.currentVideo = this.videos[index];
    };
    
    this.getVideos = (searchInput) => {
      var context = this;
      youTube.getVideos(searchInput, context);
    };
  },
  templateUrl: 'src/templates/app.html'
});


