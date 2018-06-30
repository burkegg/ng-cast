angular.module('video-player')
  .component('videoList', {
    templateUrl: 'src/templates/videoList.html',
    // TODO
    bindings: {
      videos: '<',
      onClick: '<',
      selectVideo: '<'
    },
  
    controller: function() {
      // console.log(this.videos);
      //debugger;
      

    }
  
  });
