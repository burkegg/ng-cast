angular.module('video-player')
  .service('youTube', function($http) {
    this.search = function(query, callback) {
      console.log('inside getData');
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        contentType: 'application/json',
        
        
        
        params: {
          type: 'video',
          part: 'snippet',  
          key: window.YOUTUBE_API_KEY,
          q: query,
          maxResults: 5,
          videoEmbeddable: 'true',
          format: '5',
          
        }
      }).then(function successCallback(response) {
        // this callback will be called asynchronously
        //  callBackFunc(response.data.items)
        console.log('inside then');
        callback(response.data.items);
        // when the response is available
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
      
    };
    
      
    
    
  // TODO
  });
