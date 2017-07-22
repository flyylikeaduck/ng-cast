angular.module('video-player')
.service('youTube', function($http) {
  
  this.getVideos = function(searchInput, context) {
    return $http({
      url: 'https://www.googleapis.com/youtube/v3/search',
      method: 'GET',
      params: {
        key: YOUTUBE_API_KEY,
        videoEmbeddable: true,
        maxResults: 5,
        q: searchInput,
        part: 'snippet',
        type: 'video'
      }
    }).then(function(data) {
      if (data.data.items.length === 0) {
        console.log(data);
      }
      context.videos = data.data.items;
      context.currentVideo = context.videos[0];
    });
  };
});
