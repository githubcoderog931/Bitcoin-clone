
var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: 'Gc2en3nHxA4',
    playerVars: {
      'controls': 0,
      'rel': 0,
      'showinfo': 0,
      'modestbranding': 1,
      'loop': 1
    },
    
  });
}



$(document).on('shown.bs.modal', '#videoModal', function () {
  onYouTubeIframeAPIReady();
  player.playVideo();
});

$(document).on('hidden.bs.modal', '#videoModal', function () {
  player.stopVideo();
});
