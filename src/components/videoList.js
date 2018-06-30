angular.module('video-player')
  .component('videoList', {
    templateUrl: 'src/templates/videoList.html',
    // TODO
    bindings: {
      videos: '<',
      onClick: '<',
    },
  
    controller: function() {
      console.log(this.videos);
      //debugger;
      

    }
  
  });
