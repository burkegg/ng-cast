angular.module('video-player')
.component('videoList', {
  templateUrl : 'src/templates/videoList.html',
  // TODO
  bindings: {
    videos: '<'
  },
  
  controller: function() {
    console.log(this.videos);
    debugger;
  }
  
});
