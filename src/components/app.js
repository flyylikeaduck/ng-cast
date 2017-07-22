angular.module('video-player')

.component('app', {
  controller: function() {
    this.videos = exampleVideoData;
    this.currentVideo = exampleVideoData[0];

    this.onClick = (index) => {
      this.currentVideo = this.videos[index];
    };

   
  },
  templateUrl: 'src/templates/app.html'
});


