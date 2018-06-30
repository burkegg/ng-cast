angular.module('video-player')

  .component('app', {
    templateUrl: 'src/templates/app.html',
    
    controller: function(youTube) {
    
      this.videos = [];
      this.selectVideo = function(video) {
        // debugger;
        this.currentVideo = video;
     
        
      }.bind(this);
    
      this.searchResults = function(query) {
        
        youTube.search(query, function(result) {
          this.videos = result;
          this.currentVideo = result[0];
        }.bind(this));
        
      }.bind(this);
    
    
      this.videos = this.searchResults('');
      this.currentVideo = null;
      
      this.onClick = function() {
        
      };
      

      
    }

  
  }









  );
