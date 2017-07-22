angular.module('video-player')

.component('app', {
  controller: function(youTube) {
    // controller is the best place to debug angular code since it represents the state of the component  
      
    this.setVideo = (data) => {
      this.videos = data.data.items;
      this.currentVideo = this.videos[0];
    };

    this.selectVideo = (index) => {
      this.currentVideo = this.videos[index];
    };
    
    this.searchResults = (searchInput) => {
      youTube.result(searchInput, this.setVideo);
    };
    
    youTube.result('corgi baker', this.setVideo);
    
  },
  
  templateUrl: 'src/templates/app.html'
});


