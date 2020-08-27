document.onkeydown = function(evt) {
    evt = evt || window.event;
    let photoOverlay = document.getElementById('photoOverlay');
    let filmOverlay = document.getElementById('filmOverlay')
    if (evt.keyCode == 27) {
        if (photoOverlay != null && photoOverlay.style.display === 'flex')
        {
            photoOverlay.style.display = 'none';
            let active = document.getElementsByClassName('carousel-item active')[0];
            active.className = 'carousel-item';
        }
        if(filmOverlay != null && filmOverlay.style.display === 'flex')
        {
            filmOverlay.style.display = 'none';
            let video = document.getElementById('overlayVideo');
            video.muted = true;
            video.pause();
        }
        
    }
  };