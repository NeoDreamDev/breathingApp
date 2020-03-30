const app = () => {
    const song = document.querySelector('.song');
    const play = document.querySelector('.play');
    const outline = document.querySelector('.moving-outline circle');
    const video = document.querySelector('.vid-container video');

    // sounds
    const sounds = document.querySelectorAll('.sound-picker button');
    //time display
    const timeDisplay = document.querySelector('.time-display');
    // Get length of play outline
    const outlineLength = outline.getTotalLength();
    // console.log(outlineLength);
    // Duration
    let fakeDuration = 600;

    outline.style.strokeDasharray = outlineLength;
    outline.style.strokeDashoffset = outlineLength;

    // Play Sound
    play.addEventListener('click', () => {
        checkPlaying(song);
    });

    // Create specific function to play and pause sound
    const checkPlaying = song => {
        if (song.paused) {
            song.play();
            video.play();
            play.src = "./svg/pause.svg";
        } else {
            song.pause();
            video.pause();
            play.src = "./svg/play.svg"
        }
    }

};

app();