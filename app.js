const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const app = $(".app");
app.innerHTML = `
<div class="col l-8 m-8 s-12">
<div class="player">
    <video id="video" preload="metadata" crossorigin poster=""></video>
    <div class="video-spinner"></div>
    <div class="controls-container">
        <div class="caption-text"></div>
        <div class="progress">
            <div class="time-progress">
                <div class="time-preview"></div>
                <div class="time-indicator"></div>
            </div>
        </div>
        <div class="controls">
            <div class="controls-left">
                <button type="button" class="prev btn">
            <svg class="prev-icon" height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
                <path d="m 12,12 h 2 v 12 h -2 z m 3.5,6 8.5,6 V 12 z"></path>
            </svg>
        </button>
                <button type="button" class="toggle-play btn">
            <svg class="play-icon" height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
                <path d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path>
            </svg>
            <svg class="pause-icon" height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
                <path d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"></path>
            </svg>
            <svg class="review-icon" height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
                <path d="M 18,11 V 7 l -5,5 5,5 v -4 c 3.3,0 6,2.7 6,6 0,3.3 -2.7,6 -6,6 -3.3,0 -6,-2.7 -6,-6 h -2 c 0,4.4 3.6,8 8,8 4.4,0 8,-3.6 8,-8 0,-4.4 -3.6,-8 -8,-8 z"></path>
            </svg>
        </button>
                <button type="button" class="next btn">
            <svg class="next-icon" height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
                <path d="M 12,24 20.5,18 12,12 V 24 z M 22,12 v 12 h 2 V 12 h -2 z"></path>
            </svg>
        </button>
                <button type="button" class="toggle-mute btn" data-volume="high">
            <div class="volume-icon">
            <svg class="high-icon" height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
                <path clip-path="url(#ytp-svg-volume-animation-mask)" d="M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 ZM19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z"></path>
            </svg>

            <svg class="low-icon" height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
                <path clip-path="url(#ytp-svg-volume-animation-mask)" d="M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 Z"></path>
            </svg>

            <svg class="muted-icon" height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
                <path d="m 21.48,17.98 c 0,-1.77 -1.02,-3.29 -2.5,-4.03 v 2.21 l 2.45,2.45 c .03,-0.2 .05,-0.41 .05,-0.63 z m 2.5,0 c 0,.94 -0.2,1.82 -0.54,2.64 l 1.51,1.51 c .66,-1.24 1.03,-2.65 1.03,-4.15 0,-4.28 -2.99,-7.86 -7,-8.76 v 2.05 c 2.89,.86 5,3.54 5,6.71 z M 9.25,8.98 l -1.27,1.26 4.72,4.73 H 7.98 v 6 H 11.98 l 5,5 v -6.73 l 4.25,4.25 c -0.67,.52 -1.42,.93 -2.25,1.18 v 2.06 c 1.38,-0.31 2.63,-0.95 3.69,-1.81 l 2.04,2.05 1.27,-1.27 -9,-9 -7.72,-7.72 z m 7.72,.99 -2.09,2.08 2.09,2.09 V 9.98 z"></path>
            </svg>
        </div>
            <div class="volume-bar">
                <input class="volume-progress" type="range" value="" min="0" max="100"> 
            </div>
        </button>
                <div class="timer">
                    <span class="current-time">0:00</span>
                    <span class="slash">/</span>
                    <span class="duration">0:00</span>
                </div>
            </div>
            <div class="controls-right">
                <button class="toggle-autoplay btn" type="button">
            <div class="toggle-autoplay-container">
                <div class="autoplay-check" data-autoplay="false" ></div>
            </div>
        </button>
                <button type="button" class="toggle-captions btn" data-captions="false">
            <svg class="captions-icon" height="100%" version="1.1" width="100%" viewBox="0 0 36 36">
                <path d="M11,11 C9.9,11 9,11.9 9,13 L9,23 C9,24.1 9.9,25 11,25 L25,25 C26.1,25 27,24.1 27,23 L27,13 C27,11.9 26.1,11 25,11 L11,11 Z M11,17 L14,17 L14,19 L11,19 L11,17 L11,17 Z M20,23 L11,23 L11,21 L20,21 L20,23 L20,23 Z M25,23 L22,23 L22,21 L25,21 L25,23 L25,23 Z M25,19 L16,19 L16,17 L25,17 L25,19 L25,19 Z"></path>
            </svg>
            </button>
                <button type="button" class="toggle-settings btn">
            <svg class="settings-icon" height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
                <path d="m 23.94,18.78 c .03,-0.25 .05,-0.51 .05,-0.78 0,-0.27 -0.02,-0.52 -0.05,-0.78 l 1.68,-1.32 c .15,-0.12 .19,-0.33 .09,-0.51 l -1.6,-2.76 c -0.09,-0.17 -0.31,-0.24 -0.48,-0.17 l -1.99,.8 c -0.41,-0.32 -0.86,-0.58 -1.35,-0.78 l -0.30,-2.12 c -0.02,-0.19 -0.19,-0.33 -0.39,-0.33 l -3.2,0 c -0.2,0 -0.36,.14 -0.39,.33 l -0.30,2.12 c -0.48,.2 -0.93,.47 -1.35,.78 l -1.99,-0.8 c -0.18,-0.07 -0.39,0 -0.48,.17 l -1.6,2.76 c -0.10,.17 -0.05,.39 .09,.51 l 1.68,1.32 c -0.03,.25 -0.05,.52 -0.05,.78 0,.26 .02,.52 .05,.78 l -1.68,1.32 c -0.15,.12 -0.19,.33 -0.09,.51 l 1.6,2.76 c .09,.17 .31,.24 .48,.17 l 1.99,-0.8 c .41,.32 .86,.58 1.35,.78 l .30,2.12 c .02,.19 .19,.33 .39,.33 l 3.2,0 c .2,0 .36,-0.14 .39,-0.33 l .30,-2.12 c .48,-0.2 .93,-0.47 1.35,-0.78 l 1.99,.8 c .18,.07 .39,0 .48,-0.17 l 1.6,-2.76 c .09,-0.17 .05,-0.39 -0.09,-0.51 l -1.68,-1.32 0,0 z m -5.94,2.01 c -1.54,0 -2.8,-1.25 -2.8,-2.8 0,-1.54 1.25,-2.8 2.8,-2.8 1.54,0 2.8,1.25 2.8,2.8 0,1.54 -1.25,2.8 -2.8,2.8 l 0,0 z"></path>
            </svg>
             <div class="control-settings">
                <div class="playbackRate">
                    <label for="playbackRateCheck" class="playbackRateLabel">PlaybackRate  <span>Normal</span></label>
                    <input type="checkbox" name="" id="playbackRateCheck" hidden>
                    <ul class="speed-list">
                        <label for="playbackRateCheck" class="playbackRateLabel"><span>SpeedPlayback</span></label>
                        <div class="OverflowYAuto">
                        <li class="speed-item">
                            <input type="radio" name="radio-speed" id="radio-0" value="0.5" hidden>
                            <label for="radio-0"> 0.5X</label>
                        </li>
                        <li class="speed-item">
                            <input type="radio" name="radio-speed" id="radio-2" value="0.75" hidden>
                            <label for="radio-2"> 0.75X</label>
                        </li>
                        <li class="speed-item">
                            <input type="radio" name="radio-speed" id="radio-3" value="1" hidden checked>
                            <label for="radio-3"> Normal</label>
                        </li>
                        <li class="speed-item">
                            <input type="radio" name="radio-speed" id="radio-4" value="1.25" hidden>
                            <label for="radio-4"> 1.25X</label>
                        </li>
                        <li class="speed-item">
                           <input type="radio" name="radio-speed" id="radio-5" value="1.5" hidden>
                           <label for="radio-5"> 1.5X</label>
                        </li>
                        <li class="speed-item">
                            <input type="radio" name="radio-speed" id="radio-6" value="1.75" hidden>
                            <label for="radio-6"> 1.75X</label>
                        </li>
                        <li class="speed-item">
                            <input type="radio" name="radio-speed" id="radio-7" value="2" hidden>
                            <label for="radio-7"> 2X</label>
                        </li>
                    </div>
                    </ul>
                </div>

                <div class="tracksLanguageList"></div>

                <div class="qualities"></div>
        </button>
                <button type="button" class="toggle-min-player btn">
            <svg class="min-player-icon" height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
                <path d="M25,17 L17,17 L17,23 L25,23 L25,17 L25,17 Z M29,25 L29,10.98 C29,9.88 28.1,9 27,9 L9,9 C7.9,9 7,9.88 7,10.98 L7,25 C7,26.1 7.9,27 9,27 L27,27 C28.1,27 29,26.1 29,25 L29,25 Z M27,25.02 L9,25.02 L9,10.97 L27,10.97 L27,25.02 L27,25.02 Z"></path>
            </svg>
        </button>
                <button type="button" class="toggle-max-player btn">
            <svg class="max-player-large-icon" height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
                <path d="m 28,11 0,14 -20,0 0,-14 z m -18,2 16,0 0,10 -16,0 0,-10 z" fill-rule="evenodd"></path>
            </svg>
            <svg class="max-player-small-icon" height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
                <path d="m 26,13 0,10 -16,0 0,-10 z m -14,2 12,0 0,6 -12,0 0,-6 z" fill-rule="evenodd"></path>
            </svg>
        </button>
                <button type="button" class="toggle-full-screen btn">
            <svg class="full-screen-large-icon" height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
                <path d="m 10,16 2,0 0,-4 4,0 0,-2 L 10,10 l 0,6 0,0 z"></path>
                <path d="m 20,10 0,2 4,0 0,4 2,0 L 26,10 l -6,0 0,0 z"></path>
                <path d="m 24,24 -4,0 0,2 L 26,26 l 0,-6 -2,0 0,4 0,0 z"></path>
                <path d="M 12,20 10,20 10,26 l 6,0 0,-2 -4,0 0,-4 0,0 z"></path>
            </svg>
            <svg class="full-screen-small-icon" height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
                <path d="m 14,14 -4,0 0,2 6,0 0,-6 -2,0 0,4 0,0 z"></path>
                <path d="m 22,14 0,-4 -2,0 0,6 6,0 0,-2 -4,0 0,0 z"></path>
                <path d="m 20,26 2,0 0,-4 4,0 0,-2 -6,0 0,6 0,0 z"></path>
                <path d="m 10,22 4,0 0,4 2,0 0,-6 -6,0 0,2 0,0 z"></path>
            </svg>
        </button>
            </div>
        </div>
    </div>
</div>
</div>
<div class="col l-4 m-4 s-12">
<div class="render-video">
    <header class="header">
        <div class="header-content">
            <h2 class="header-title"></h2>
        </div>
        <div class="header-chanel">
            <p>Cuồng Phim Review</p>
        </div>
        <div class="header-tool">
            <div class="btn btn-repeat">
                <svg viewBox="0 0 24 24" width="100%" height="100%" class="repeat-icon">
            <path d="M21,13h1v5L3.93,18.03l2.62,2.62l-0.71,0.71L1.99,17.5l3.85-3.85l0.71,0.71l-2.67,2.67L21,17V13z M3,7l17.12-0.03 l-2.67,2.67l0.71,0.71l3.85-3.85l-3.85-3.85l-0.71,0.71l2.62,2.62L2,6v5h1V7z"></path>
        </svg>
            </div>
            <div class="btn btn-random">
                <svg viewBox="0 0 24 24" width="100%" height="100%" class="random-icon">
            <path d="M18.15,13.65l3.85,3.85l-3.85,3.85l-0.71-0.71L20.09,18H19c-2.84,0-5.53-1.23-7.39-3.38l0.76-0.65 C14.03,15.89,16.45,17,19,17h1.09l-2.65-2.65L18.15,13.65z M19,7h1.09l-2.65,2.65l0.71,0.71l3.85-3.85l-3.85-3.85l-0.71,0.71 L20.09,6H19c-3.58,0-6.86,1.95-8.57,5.09l-0.73,1.34C8.16,15.25,5.21,17,2,17v1c3.58,0,6.86-1.95,8.57-5.09l0.73-1.34 C12.84,8.75,15.79,7,19,7z M8.59,9.98l0.75-0.66C7.49,7.21,4.81,6,2,6v1C4.52,7,6.92,8.09,8.59,9.98z"></path>
        </svg>
            </div>
        </div>
    </header>
    <div class="playlist">
    </div>
</div>
</div>`

// 
const video = $('video');
const player = $('.player');
const videoLoad = $('.video-spinner');
const captionText = player.querySelector(".caption-text");

const progress = $('.progress');
const timePreview = $(".time-preview");

const prevBtn = $('.prev');
const nextBtn = $('.next');
const togglePlayBtn = $('.toggle-play');

const toggleMuteBtn = $('.toggle-mute');
const volumeProgress = $('.volume-progress');

const currentTime = $('.current-time');
const totalTime = $('.duration');

const toggleAutoplayBtn = $('.toggle-autoplay');
const autoplayCheck = $('.autoplay-check');
const toggleCaptionsBtn = $('.toggle-captions');
const toggleSettingsBtn = $('.toggle-settings');

const playbackRate = $(".playbackRate");
const tracksLanguageList = $(".tracksLanguageList");
const qualitiesList = $(".qualities");

const toggleMinPlayerBtn = $('.toggle-min-player');
const toggleMaxPlayerBtn = $('.toggle-max-player');
const toggleFullScreenBtn = $('.toggle-full-screen');

let textTracks = video.textTracks;
let captions = textTracks.length ? textTracks[0] : textTracks;
captions.mode = "hidden";

const headerTitle = $('.header-title');
const repeatBtn = $('.btn-repeat');
const randomBtn = $('.btn-random');
const playlist = $('.playlist');

const VIDEO_DATA = "VIDEO_DATA";
const appVideo = {
    isCurrentIndex: 0,
    isRandom: false,
    isRepeat: false,
    isVolume: 80,
    isSetting: false,
    isCaptions: false,
    isAutoplay: false,
    isSpeed: 1.0,
    isScrubbing: false,
    isMinPlayer: false,
    isMaxPlayer: false,
    isFullScreen: false,
    playlist: [{
            title: "View From A Blue Moon Trailer HD",
            image: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg",
            source: [{
                size: 567,
                type: "video/mp4",
                file: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
            }, {
                size: 720,
                type: "video/mp4",
                file: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"
            }, {
                size: 1080,
                type: "video/mp4",
                file: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4"
            }, {
                size: 1440,
                type: "video/mp4",
                file: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1440p.mp4"
            }, ],
            tracks: [{
                language: "en",
                label: "English",
                kind: "captions",
                src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt"
            }, {
                language: "fr",
                label: "France",
                kind: "captions",
                src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt"
            }]
        }, {
            title: "Sintel Short",
            image: "https://image.tmdb.org/t/p/original/icw9JX8NzqhpbvOze0PydX0bahH.jpg",
            source: [{
                size: 360,
                type: "video/mp4",
                file: "http://iandevlin.github.io/mdn/video-player-with-captions/video/sintel-short.mp4"
            }, {
                size: 720,
                type: "video/webm",
                file: "http://iandevlin.github.io/mdn/video-player-with-captions/video/sintel-short.webm"
            }],
            tracks: [{
                language: "de",
                label: "Deutsch",
                kind: "captions",
                src: "http://iandevlin.github.io/mdn/video-player-with-captions/subtitles/vtt/sintel-de.vtt"
            }, {
                language: "en",
                label: "English",
                kind: "captions",
                src: "http://iandevlin.github.io/mdn/video-player-with-captions/subtitles/vtt/sintel-en.vtt"
            }, {
                language: "es",
                label: "Español",
                kind: "captions",
                src: "http://iandevlin.github.io/mdn/video-player-with-captions/subtitles/vtt/sintel-es.vtt"
            }]
        }, {
            title: "Sintel",
            image: "",
            source: [{
                size: 720,
                type: "video/mp4",
                file: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
            }],
            tracks: [{
                language: "de",
                label: "Deutsch",
                kind: "captions",
                src: "http://iandevlin.github.io/mdn/video-player-with-captions/subtitles/vtt/sintel-de.vtt"
            }, {
                language: "en",
                label: "English",
                kind: "captions",
                src: "http://iandevlin.github.io/mdn/video-player-with-captions/subtitles/vtt/sintel-en.vtt"
            }, {
                language: "es",
                label: "Español",
                kind: "captions",
                src: "http://iandevlin.github.io/mdn/video-player-with-captions/subtitles/vtt/sintel-es.vtt"
            }]
        }, {
            title: "ForBigger Joyrides",
            image: "",
            source: [{
                size: 720,
                type: "video/mp4",
                file: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
            }],
            tracks: []
        }, {
            title: "ForBigger Blazes",
            image: "",
            source: [{
                size: 720,
                type: "video/mp4",
                file: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
            }],
            tracks: []
        }, {
            title: "Hate Thy Neighbor",
            image: "https://image.tmdb.org/t/p/original/icw9JX8NzqhpbvOze0PydX0bahH.jpg",
            source: [{
                size: 360,
                type: "video/mp4",
                file: "https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_1920_18MG.mp4"
            }],
            tracks: []
        },
        {
            title: "Oceans",
            image: "https://image.tmdb.org/t/p/original/icw9JX8NzqhpbvOze0PydX0bahH.jpg",
            source: [{
                size: 720,
                type: "video/mp4",
                file: "https://vjs.zencdn.net/v/oceans.mp4"
            }],
            tracks: [{
                language: "en",
                label: "English",
                kind: "subtitles",
                src: "https://kot-politiken.s3-eu-west-1.amazonaws.com/2019/114_en.vtt.txt"
            }]
        },
    ],

    getItemLocalStorage: JSON.parse(localStorage.getItem(VIDEO_DATA)) || {},

    setItemLocalStorage(key, value) {
        this.getItemLocalStorage[key] = value;
        localStorage.setItem(VIDEO_DATA, JSON.stringify(this.getItemLocalStorage))
    },


    renderPlaylistVideo() {
        const videos = this.playlist.map((video, index) => {
            const track = Object.values(video.tracks);
            return `<article class="item ${this.isCurrentIndex===index?"active":""}" data-index="${index}">
            <div class="poster">
                <img src="${video.image}" class="image">
            </div>
            <div class="body">
            <div class="title"><h5 class="title-text">${video.title}</h5></div>
            <div class="chanel"><p class="name-chanel">Cuồng Phim Review</p></div>
            <div class="track">${(track!='')?'<span>CC</span>':''}</div>
            </div>
            <div class="btn btn-option"><svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style=""><g class="style-scope yt-icon"><path d="M12,16.5c0.83,0,1.5,0.67,1.5,1.5s-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5S11.17,16.5,12,16.5z M10.5,12 c0,0.83,0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5s-0.67-1.5-1.5-1.5S10.5,11.17,10.5,12z M10.5,6c0,0.83,0.67,1.5,1.5,1.5 s1.5-0.67,1.5-1.5S12.83,4.5,12,4.5S10.5,5.17,10.5,6z" class="style-scope yt-icon"></path></g></svg></div>
            <div class="index"><span class="index-number">${Number(index)+1}</span><span class="index-playing">▶</span>
            </div>
        </article>`
        })
        playlist.innerHTML = videos.join("");
    },
    defineProperties() {
        Object.defineProperty(this, "currentVideo", {
            get() {
                return this.playlist[this.isCurrentIndex]
            }
        })
    },
    handleEventsPlayer() {
        let $this = this;
        let source = $$("source") ? $$("source") : $("source");
        let videoTracks = source ? source : [];
        let textTracks = video.textTracks;
        let captions = textTracks.length ? textTracks[0] : textTracks;

        //Play vide
        video.onplay = () => {
            video.played = true;
            player.classList.add("play");
            player.classList.remove("review")

        }

        //Pause Video
        video.onpause = () => {
            video.paused = false;
            player.classList.remove("play");
        }

        //Start Video
        video.onended = () => {
            if ($this.isRepeat) {
                video.play()
            } else if ($this.isRandom) {
                $this.toggleRandomVideo();
                video.play()
            } else if ($this.isAutoplay) {
                $this.toggleNextVideo();
                video.play()
            } else {
                player.classList.add("review");
                player.classList.remove("play");
            }
            if ($this.isAutoplay) video.play();
        }

        //Catch  Error Video
        video.onerror = () => {
            if ($this.isAutoplay) {
                $this.toggleNextVideo();
                video.play()
            }
        }

        //Toggle Scrubbing
        document.onmouseup = (e) => {
            if ($this.isScrubbing) {
                $this.toggleScrubbing(e)
            }
        }

        //Toggle Scrubbing
        document.onmousemove = (e) => {
            if ($this.isScrubbing) {
                $this.handleCurrentTimeView(e)
            }
        }

        //Loading Video
        video.onwaiting = () => {
            videoLoad.style.display = "block"
        };

        video.oncanplay = () => {
            videoLoad.style.display = "none"
        };

        //Toggle Scrubbing
        progress.onmousedown = (e) => {
            $this.toggleScrubbing(e);

        }

        //Toggle Scrubbing
        progress.onmousemove = (e) => {
            $this.handleCurrentTimeView(e)
        }

        //Scroll Change Time Update
        progress.onwheel = (e) => {
            e.preventDefault()
            if (e.deltaY < 0) {
                video.currentTime += 5
            } else if (e.deltaY > 0) {
                video.currentTime -= 5
            }
        }


        //Toggle Play/Pause Video Center
        video.onclick = () => {
            $this.togglePlay()
        };

        //Toggle Play / Pause Btn
        togglePlayBtn.onclick = () => {
            $this.togglePlay();
        };


        //Handle CurrentTime Update
        video.ontimeupdate = () => {
            if (video.readyState) {
                const hours = Math.floor(video.currentTime / 3600);
                const minutes = Math.floor(video.currentTime / 60) % 60;
                const seconds = Math.floor(video.currentTime % 60);
                const hoursLive = hours ? `${hours}` : ``;
                const minutesLive = (minutes > 0 && video.currentTime > 600) ? `${minutes}` : `${minutes}`;
                const secondsLive = (seconds < 10) ? `:0${seconds}` : `:${seconds}`;
                currentTime.textContent = `${hoursLive + minutesLive + secondsLive}`;

                //Progress Indicator
                const percent = video.currentTime / video.duration;
                progress.style.setProperty("--time-progress", percent);
                $this.setItemLocalStorage("isCurrentTime", video.currentTime)
            }
        };

        //Handle CurrentTime Update
        video.onloadeddata = () => {
            if (video.duration) {
                const hours = Math.round(video.duration / 3600);
                const minutes = Math.floor(video.duration / 60) % 60;
                const seconds = Math.floor(video.duration % 60);
                const hoursTotal = hours ? `${hours}` : ``;
                const minutesTotal = (minutes > 0 && video.duration > 600) ? `${minutes}` : `${minutes}`;
                const secondsTotal = (seconds < 10) ? `:0${seconds}` : `:${seconds}`;
                totalTime.textContent = `${hoursTotal + minutesTotal + secondsTotal}`;
            }

        };

        //Toggle Next
        nextBtn.onclick = () => {
            if ($this.isRandom) {
                $this.toggleRandomVideo()
            } else {
                $this.toggleNextVideo();
            }
            video.play()
        };

        //Toggle Next
        prevBtn.onclick = () => {
            if ($this.isRandom) {
                $this.toggleRandomVideo()
            } else {
                $this.togglePrevVideo();
            }
            video.play()
        };

        // Repeat video
        repeatBtn.onclick = () => {
            $this.isRepeat = !$this.isRepeat;
            repeatBtn.classList.toggle('isRepeat', $this.isRepeat)
            $this.setItemLocalStorage("isRepeat", $this.isRepeat)
        }

        //Random video
        randomBtn.onclick = () => {
            $this.isRandom = !$this.isRandom;
            randomBtn.classList.toggle('isRandom', $this.isRandom);
            $this.setItemLocalStorage('isRandom', $this.isRandom);
        }

        toggleAutoplayBtn.onclick = (e) => {
            $this.isAutoplay = !$this.isAutoplay;
            autoplayCheck.dataset.autoplay = $this.isAutoplay;
            $this.setItemLocalStorage('isAutoplay', $this.isAutoplay);
        }

        //Set Volume
        toggleMuteBtn.onclick = (e) => {
            if (!e.target.closest(".volume-bar")) {
                video.muted = !video.muted;
                $this.setItemLocalStorage('isMuted', video.muted);
            }
        };

        video.onvolumechange = () => {
            volumeProgress.value = video.volume * 100;
            let volumeChange;
            if (video.muted || video.volume === 0) {
                volumeProgress.value = 0;
                volumeChange = "muted"
            } else if (video.volume >= 0.5) {
                volumeChange = "high"
            } else {
                volumeChange = "low"
            }
            toggleMuteBtn.dataset.volume = volumeChange;
            $this.setItemLocalStorage('isVolume', video.volume * 100);
        };

        volumeProgress.oninput = (e) => {
            video.volume = Number(e.target.value) / 100;
            video.muted = Number(e.target.value) === 0

        };

        toggleMuteBtn.onwheel = (e) => {
            e.preventDefault()
            if (e.deltaY < 0) {
                video.volume += 0.2
            } else if (e.deltaY > 0) {
                video.volume -= 0.2
            }
        }

        //Set Auto Captions
        toggleCaptionsBtn.onclick = () => {
            if (textTracks.length) {
                $this.isCaptions = captions.mode === "hidden";
                captions.mode = $this.isCaptions ? "showing" : "hidden";
                player.classList.toggle("captions", $this.isCaptions);
                $this.setItemLocalStorage('isCaptions', $this.isCaptions);
            }
        }

        // Captions Change
        tracksLanguageList.onclick = (e) => {
            if (e.target.closest(".track-item")) {
                $(".trackListLabel>span").innerText = e.target.closest(".track-item").innerText;
                for (const index in textTracks) {
                    if (textTracks.hasOwnProperty(index)) {
                        textTracks[index].mode = 'disabled';
                        if (textTracks[index].language === e.target.value) {
                            textTracks[index].mode = "showing"
                            player.classList.toggle("captions", (textTracks[index].language === e.target.value))
                        }
                    }
                }
            }
        }

        //PlayBackRate Change
        playbackRate.onclick = (e) => {
            if (e.target.closest(".speed-item")) {
                video.playbackRate = Number(e.target.value);
                $(".playbackRateLabel>span").innerText = e.target.closest(".speed-item").innerText;
                $this.setItemLocalStorage('isSpeed', Number(e.target.value));
            }
        }

        //Quality Change
        qualitiesList.onclick = (e) => {
            if (e.target.closest(".qualities-item")) {
                const quality = e.target.value;
                $(".qualitiesLabel>span").innerText = (Number(quality) > 0) ? quality + "p" : "Auto";
                videoTracks.forEach(item => {
                    if (item.getAttribute("size") === quality && (Number(quality) > 0)) {
                        const currentTime = video.currentTime;
                        const videoUrl = item.src;
                        video.currentTime = currentTime;
                        item.src = videoUrl;
                        video.autoplay = false;
                        video.play();
                        player.classList.toggle("play", video.played)
                    } else {
                        const currentTime = video.currentTime;
                        video.currentTime = currentTime;
                        video.play();
                        video.autoplay = true;
                        player.classList.toggle("play", video.played)
                    }
                })
            }

        }

        //Toggle Settings
        toggleSettingsBtn.onclick = (e) => {
            if (!e.target.closest(".control-settings")) {
                $this.isSetting = !$this.isSetting;
                toggleSettingsBtn.classList.toggle("settings", $this.isSetting)
            }
        }

        //toggle Min Player
        toggleMinPlayerBtn.onclick = () => {
            $this.isMinPlayer = !$this.isMinPlayer;
            if ($this.isMinPlayer) {
                video.requestPictureInPicture()
            } else {
                document.exitPictureInPicture()
            }
            player.classList.toggle("min-player", $this.isMinPlayer);
        };

        //toggle Max Player
        toggleMaxPlayerBtn.onclick = () => {
            $this.isMaxPlayer = !$this.isMaxPlayer;
            app.classList.toggle("max-player", $this.isMaxPlayer);
            $this.setItemLocalStorage('isMaxPlayer', $this.isMaxPlayer);
        };

        //Toggle Full Screen
        toggleFullScreenBtn.onclick = () => {
            $this.toggleFullScreen()
        }

        video.ondblclick = () => {
            $this.toggleFullScreen()
        };

        playlist.onclick = (e) => {
            const nodeIndex = e.target.closest('.item:not(.item.active)')
            if (nodeIndex || e.target.closest('.btn-option')) {
                $this.isCurrentIndex = Number(nodeIndex.dataset.index)
                video.load();
                if ($this.isAutoplay) {
                    video.play()
                    $this.isAutoplay = true
                }
                $this.renderPlaylistVideo()
                $this.handleLoadVideoPlayer()
                $this.scrollTopActionPlaylist()
                $this.setItemLocalStorage('isCurrentIndex', Number(nodeIndex.dataset.index));
            }
        }


    },

    togglePlay() {
        if (video.paused) {
            video.play();
        } else if (video.played) {
            video.pause();
        }
    },

    toggleNextVideo() {
        this.isCurrentIndex++;
        if (this.isCurrentIndex >= this.playlist.length) {
            this.isCurrentIndex = 0;
        }
        video.load();
        this.renderPlaylistVideo();
        this.handleLoadVideoPlayer();
        this.scrollTopActionPlaylist();
    },


    togglePrevVideo() {
        this.isCurrentIndex--;
        if (this.isCurrentIndex < 0) {
            this.isCurrentIndex = this.playlist.length - 1;
        }
        video.load();
        this.renderPlaylistVideo();
        this.scrollTopActionPlaylist();
        this.handleLoadVideoPlayer();
    },

    toggleRandomVideo() {
        let index;
        do {
            index = Math.floor(Math.random() * this.playlist.length)
        }
        while (index == this.isCurrentIndex) {
            this.isCurrentIndex = index
            this.renderPlaylistVideo()
            this.handleLoadVideoPlayer()
            this.scrollTopActionPlaylist();
        }
    },

    handleCurrentTimeView(e) {
        const Rect = progress.getBoundingClientRect();
        const percent = Math.min(Math.max(0, e.x - Rect.x), Rect.width) / Rect.width;
        const hours = Math.floor((percent * video.duration) / 3600);
        const minutes = Math.floor((percent * video.duration) / 60) % 60;
        const seconds = Math.floor((percent * video.duration) % 60);
        const hoursLive = hours ? `${hours}` : ``;
        const minutesLive = (minutes > 0 && video.currentTime > 600) ? `${minutes}` : `${minutes}`;
        const secondsLive = (seconds < 10) ? `:0${seconds}` : `:${seconds}`;
        timePreview.textContent = `${hoursLive + minutesLive + secondsLive}`;
        progress.style.setProperty("--time-preview", percent);
        if (this.isScrubbing) {
            e.preventDefault()
            progress.style.setProperty("--time-progress", percent)
        }
    },

    toggleScrubbing(e) {
        const Rect = progress.getBoundingClientRect();
        const percent = Math.min(Math.max(0, e.x - Rect.x), Rect.width) / Rect.width;
        this.isScrubbing === (e.buttons && 1);
        player.classList.toggle("scrubbing", this.isScrubbing);
        let isPaused;
        if (this.isScrubbing) {
            video.paused();
            isPaused = video.paused;
        } else {
            video.currentTime = percent * video.duration;
            if (isPaused) {
                video.play()
            }
        }
        this.handleCurrentTimeView(e)
    },

    toggleFullScreen() {
        this.isFullScreen = !this.isFullScreen;
        if (this.isFullScreen) {
            player.requestFullscreen()
        } else {
            document.exitFullscreen()
        }
        player.classList.toggle("full-screen", this.isFullScreen);
    },

    //Scroll Top Action Playlist
    scrollTopActionPlaylist() {
        setTimeout(() => {
            $(".item.active").scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            })
        }, 900)
    },

    handleLoadVideoPlayer() {
        const source = $$("source") ? $$("source") : $("source");
        const videoTracks = source ? source : [];

        const currentVideo = this.currentVideo;
        const image = (currentVideo.image != undefined) ? currentVideo.image : "";
        video.poster = image;
        headerTitle.innerText = this.currentVideo.title;
        let sources = "";
        let tracks = "";

        //Render Source
        if (currentVideo.source.length) {
            let quality = `
        <label for="qualitiesChecked" class="qualitiesLabel">Qualities <span>Auto ${currentVideo.source[0].size}</span></label>
        <input type="checkbox" name="" id="qualitiesChecked" hidden>
        <ul class="qualities-list">
            <label for="qualitiesChecked" class="qualitiesLabel"><span>Qualities</span></label>
            <div class="OverflowYAuto">`
            if (currentVideo.source.length > 1) {
                quality += `<li class="qualities-item">
                    <input type="radio" name="radio-quality" id="radio-2o" value="auto" checked>
                    <label for="radio-2o">Auto</label>
                </li>`;
            };
            currentVideo.source.forEach((source, index) => {
                sources += `<source src="${source.file}" size="${source.size}" type="${source.type}">`;
                quality += `<li class="qualities-item"><input type="radio" name="radio-quality" id="radio-2${index}" value="${source.size}" hidden>
                        <label for="radio-2${index}">${source.size}p</label></li>`
            });
            quality += `</div></ul>`;
            setTimeout(() => {
                qualitiesList.innerHTML = quality;
            }, 1000)
        };

        //Render textTracks
        if (currentVideo.tracks.length) {
            let languages = `
        <label for="trackListChecked" class="trackListLabel">Language <span>${currentVideo.tracks[0].label}</span></label>
        <input type="checkbox" name="" id="trackListChecked" hidden>
        <ul class="track-list">
          <label for="trackListChecked" class="trackListLabel"><span>Language</span></label>
            <div class="OverflowYAuto">`;
            currentVideo.tracks.forEach((track, index) => {
                tracks += `<track kind="${track.kind}" src="${track.src}" srclang="${track.language}" label="${track.label}">`;
                languages += `<li class="track-item"><input type="radio" name="radio-language" id="radio-1${index}" value="${track.language}" hidden>
                      <label for="radio-1${index}">${track.label}</label></li>`
            });

            languages += `</div></ul>`;
            setTimeout(() => {
                tracksLanguageList.innerHTML = languages;
                if (currentVideo.tracks.length) $(".track-item>input:first-child").setAttribute("checked", "");
            }, 1000)
        } else {
            tracksLanguageList.innerHTML = ""
        };
        video.innerHTML = sources + tracks;
        toggleCaptionsBtn.dataset.captions = (textTracks.length > 0);

        video.load();
        video.play();
        currentTime.innerText = `0:00`;
        player.classList.remove("review");
        prevBtn.classList.toggle('active', this.isCurrentIndex);
        progress.style.setProperty("--time-progress", 0);
        if (!this.isAutoplay) {
            player.classList.remove("play");
        }

        //Content text Shows Captions
        /*
                if (textTracks.length) {
                    for (const index in textTracks) {
                        if (textTracks.hasOwnProperty(index)) {
                            textTracks[index].oncuechange = () => {
                                if (textTracks[index].mode === "showing") {
                                    if (textTracks[index].activeCues[0]) {
                                        let text = `<span><mark>${textTracks[index].activeCues[0].text}</mark></span>`;
                                        captionText.innerHTML = text
                                    } else {
                                        captionText.innerHTML = "";
                                    }
                                }

                            }
                        }
                    }
                }
        */
        //Blob Url
        videoTracks.forEach(video => {
            const videoUrl = video.src;
            this.handleBlobUrl(video, videoUrl)
        })
    },

    handleBlobUrl(video, videoUrl) {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", videoUrl);
        xhr.responseType = "arraybuffer";
        xhr.onload = (e) => {
            const blob = new Blob([xhr.response]);
            const url = URL.createObjectURL(blob);
            video.src = url;

        };
        xhr.send();
    },

    loadLocalStorage() {
        this.isAutoplay = (this.getItemLocalStorage.isAutoplay === undefined) ? this.isAutoplay : this.getItemLocalStorage.isAutoplay;
        this.isSpeed = (this.getItemLocalStorage.isSpeed === undefined) ? this.isSpeed : this.getItemLocalStorage.isSpeed;
        this.isCaptions = (this.getItemLocalStorage.isCaptions === undefined) ? this.isCaptions : this.getItemLocalStorage.isCaptions;
        this.isRandom = (this.getItemLocalStorage.isRandom === undefined) ? this.isRandom : this.getItemLocalStorage.isRandom;
        this.isRepeat = (this.getItemLocalStorage.isRepeat === undefined) ? this.isRepeat : this.getItemLocalStorage.isRepeat;
        this.isVolume = (this.getItemLocalStorage.isVolume === undefined) ? this.isVolume : this.getItemLocalStorage.isVolume;
        this.isCurrentTime = (this.getItemLocalStorage.isCurrentTime === undefined) ? this.isCurrentTime : this.getItemLocalStorage.isCurrentTime;
        this.isMaxPlayer = (this.getItemLocalStorage.isMaxPlayer === undefined) ? this.isMaxPlayer : this.getItemLocalStorage.isMaxPlayer;
        this.isCurrentIndex = (this.getItemLocalStorage.isCurrentIndex === undefined) ? this.isCurrentIndex : this.getItemLocalStorage.isCurrentIndex;
    },

    start() {
        this.renderPlaylistVideo();
        this.defineProperties()
        this.handleLoadVideoPlayer();
        this.handleEventsPlayer();
        this.loadLocalStorage()

        //Return Data LocalStorage

        video.currentTime = this.isCurrentTime;
        video.volume = this.isVolume / 100;
        video.playbackRate = this.isSpeed;
        autoplayCheck.dataset.autoplay = this.isAutoplay;
        repeatBtn.classList.toggle('isRepeat', this.isRepeat);
        randomBtn.classList.toggle('isRandom', this.isRandom);
        //player.classList.toggle("captions", this.isCaptions);

    }

};
appVideo.start();