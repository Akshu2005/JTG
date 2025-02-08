const video = document.getElementById('my-video');
        const playPauseButton = document.getElementById('play-pause');

        playPauseButton.addEventListener('click', () => {
            if (video.paused) {
                video.play();
                playPauseButton.style.backgroundImage = "url('pause-icon.png')"; // Change to pause icon
            } else {
                video.pause();
                playPauseButton.style.backgroundImage = "url('play-icon.png')"; // Change to play icon
            }
        });

        video.addEventListener('play', () => {
            playPauseButton.style.backgroundImage = "url('pause-icon.png')";
        });

        video.addEventListener('pause', () => {
            playPauseButton.style.backgroundImage = "url('play-icon.png')";
        });

        video.addEventListener('loadeddata', () => {
            video.play();
        });

document.querySelectorAll('.social-icons a').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.boxShadow = "0px 0px 10px rgba(255,255,255,0.8)";
    });
    icon.addEventListener('mouseleave', () => {
        icon.style.boxShadow = "none";
    });
});




  document.getElementById("search-icon").addEventListener("click", function (event) {
    event.preventDefault(); 
    
    let searchInput = document.getElementById("search-input");
    searchInput.scrollIntoView({ behavior: "smooth", block: "center" });
    
    setTimeout(() => {
      searchInput.focus();
    }, 500); 
  });









