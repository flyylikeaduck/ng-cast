angular.module('video-player')
.service('youTube', function($http) {
  
  this.result = function(searchInput, cb) {
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
      cb(data);
    });
  };
});
