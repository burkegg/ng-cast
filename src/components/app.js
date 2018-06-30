angular.module('video-player')

  .component('app', {
    templateUrl: 'src/templates/app.html',
  
    controller: function() {
    
      this.currentVideo = window.exampleVideoData[2];
      
      this.selectVideo = function(video) {
        // debugger;
        this.currentVideo = video;
        
      }.bind(this);
    
      this.searchResults = function() {
      
      };
    
    
      this.videos = window.exampleVideoData;
      
      this.onClick = function() {
        
      };
      
      this.apiTest = function() {
        get('https://www.googleapis.com/youtube/v3/search', {
          q: 'cat',
          key: window.YOUTUBE_API_KEY,
        
        }); 
      };
      
    //   $http({
    //     method: 'GET',
    //     url: '/someUrl'
    //   }).then(function successCallback(response) {
    // // this callback will be called asynchronously
    // // when the response is available
    //    }, function errorCallback(response) {
    // // called asynchronously if an error occurs
    // // or server returns response with an error status.
    //   });
      
    }
  // TODO
  
  }









  );
