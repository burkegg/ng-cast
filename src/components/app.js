angular.module('video-player')

  .component('app', {
    templateUrl: 'src/templates/app.html',
  
    controller: function(youTube) {
    
      this.currentVideo = window.exampleVideoData[2];
      
      this.selectVideo = function(video) {
        // debugger;
        this.currentVideo = video;
        
      }.bind(this);
    
      this.searchResults = function() {
        console.log('button pressed')
        // console.log(youTube.getData())
      
      }.bind(this);
    
    
      this.videos = window.exampleVideoData;
      
      this.onClick = function() {
        
      };
      

      
    }

  
  }









  );
