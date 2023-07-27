// Kiến thức & kỹ năng áp dụng: Hàm, biến, mảng, điều kiện if...else, vòng lặp for, sử dụng tag audio


const Music_List = [
    {
        "img" : "../images/Faded.jpg",
        "name" : "Faded",
        "artist" : "Alan Walker",
        "music" : "../musics/Fade.mp3"
    },
    {
        "img": "../images/Lily.png",
        "name": "Lily",
        "artist": "Alan Walker",
        "music": "../musics/Lily.mp3"
    },
    {
        "img": "../images/TheNights.jpg",
        "name": "The Night",
        "artist": "Avicii (Cover by AngieN.)",
        "music": "../musics/TheNights.mp3"
    },
    {
        "img": "../images/VuHoiHoaTrang.jpg",
        "name": "假面舞会",
        "artist": "很美味",
        "music": "../musics/VuHoiHoaTrang.mp3"
    }
]

var nowPlaying = document.querySelector('.now__playing');
var trackImg = document.querySelector('.track__img');
var trackName = document.querySelector('.track__name');
var trackArtist = document.querySelector('.track__artist');

var playpauseTrack = document.querySelector('.playpause__track');
var prevTrack = document.querySelector('.prev__track');
var nextTrack = document.querySelector('.next__track');


var seekSlider = document.querySelector('.seek__slider');
var volumeSlider = document.querySelector('.volume__slider');
var currentTime = document.querySelector('.current__time');
var totalDuration = document.querySelector('.total__duration');