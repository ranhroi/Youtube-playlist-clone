const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const grid = $('.grid')
const player = $('.player')
const mediaActive = $('.media')
const spinnerLoad = $('.video-spinner')
const video = $('.video')

const playing = $('.btn-toggle-play')
const nextBtn = $('.btn-next')
const prevBtn = $('.btn-prev')
const repeatBtn = $('.btn-repeat')
const randomBtn = $('.btn-random')
const videoProgress = $('.video-progress')
const volumedBtn = $('.btn-volume')
const volumeProgress = $('.volume-progress')
const timerCurrent = $('.timer-current')
const timerTotal = $('.timer-total')
const autoplayBtn = $('.btn-autoplay')
const toggleAutoplay = $('.btn-autoplay-toggle')
const subtitleBtn = $('.btn-subtitle')
const settingsBtn = $('.btn-settings')
const tracksLanguageList = $('.tracksLanguageList')
const playbackRateBtn = $('.playbackRate')
const speedLabel = $('.speedLabel>span')

const fullscreenBtn = $('.btn-full-screen')
const miniPlayerBtn = $('.btn-mini-player')
const mediumPlayerBtn = $('.btn-medium-player')
const settingBtn = $('.btn-setting')

const headerTitle = $('.header-title')
const playlist = $('.playlist')
const VIDEO_DATASET = "VIDEO_DATASET";
const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    isVolume: 0.7,
    isMute: false,
    isIndexTrack: 0,
    isMediumPlayer: false,
    isCaptionsMode: false,
    iAutoplay: false,
    isSpeed: 1.0,
    languages: { 'en': 'English', 'vi': 'Vietnamese', 'cn': 'Chinese', 'kr': 'Korean', 'jp': 'Japanese', 'th': 'Thailand', 'it': 'Italy' },
    getLocalStorage: JSON.parse(localStorage.getItem(VIDEO_DATASET)) || {},
    setLocalStorage(key, value) {
        this.getLocalStorage[key] = value;
        localStorage.setItem(VIDEO_DATASET, JSON.stringify(this.getLocalStorage))
    },
    videos: [{
            title: "Hate Thy Neighbor",
            url: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4",
            image: "https://image.tmdb.org/t/p/original/icw9JX8NzqhpbvOze0PydX0bahH.jpg",
            tracks: {
                vi: "https://www.nuevodevel.com/media/captions/steal_fr.vtt",
            }
        },
        {
            title: "Hate Thy Neighbor",
            url: "https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_1920_18MG.mp4",
            image: "https://image.tmdb.org/t/p/original/icw9JX8NzqhpbvOze0PydX0bahH.jpg",
            tracks: {
                vi: "https://www.nuevodevel.com/media/captions/steal_fr.vtt",
            }
        },
        {
            title: "Bloodmoon",
            url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
            image: "https://image.tmdb.org/t/p/original/9Iu6s8H3yfcWDJFCfpDp43YVPS1.jpg",
            tracks: {
                vi: "https://www.nuevodevel.com/media/captions/steal_fr.vtt",
            }
        },
        {
            title: "Satave",
            url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
            image: "https://image.tmdb.org/t/p/original/dpYtcxlK0WqvFoDtwMARdIRmgkt.jpg",
            tracks: {
                vi: "https://www.nuevodevel.com/media/captions/steal_fr.vtt",
            }
        },
        {
            title: "Dead Man's Revenge",
            url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
            image: "https://image.tmdb.org/t/p/original/jgHGbpauz0V7tSX3OCcDT6qlIlL.jpg",
            tracks: {
                vi: "",
            }
        },
        {
            title: "The Hills Run Red",
            url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
            image: "https://image.tmdb.org/t/p/original/gCJ1WohqiDTkefsBDYjeIwrvEuc.jpg",
            tracks: {
                vi: "",
            }
        },
    ],

    //Render Video to Home
    renderVideos() {
        const videos = this.videos.map((video, index) => {
            const track = Object.values(video.tracks)
            return `
                <article class="item ${this.currentIndex===index?"active":""}" data-index="${index}">
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
        });
        playlist.innerHTML = videos.join('')
    },
    defineProperties() {
        Object.defineProperty(this, 'currentVideo', {
            get() {
                return this.videos[this.currentIndex]
            }
        })
    },

    // Events Handle Video
    handleEventsVideo() {
        const $this = this;
        const captions = video.textTracks[this.isIndexTrack] ? video.textTracks[this.isIndexTrack] : [];
        captions.mode = "hidden"

        //Play vide
        video.onplay = () => {
            $this.isPlaying = true;
            mediaActive.classList.add('active')
        }


        //Pause Video
        video.onpause = () => {
            $this.isPlaying = false;
            mediaActive.classList.remove('active')
        }

        //Waiting Load Video
        video.onwaiting = () => {
            spinnerLoad.style.display = "block"
        }

        //Waiting Load Video
        video.oncanplay = () => {
            spinnerLoad.style.display = "none"
        }

        //Start Video
        video.onended = () => {
            if ($this.isRepeat) {
                video.play()
            } else if ($this.isRandom) {
                $this.toggleRandom()
                video.play()
            } else if ($this.isAutoplay) {
                $this.toggleNext()
                video.play()
            }

        }

        //Catch  Error Video
        video.onerror = () => {
            if ($this.isAutoplay) {
                $this.toggleNext()
                video.play()
            }
        }

        //CurrentTime & Duration
        video.ontimeupdate = () => {
            this.formatCurrentTime()
        }


        //ChangeTime Progress
        videoProgress.onchange = (e) => {
            const currentTimeChange = Math.round((video.duration / 100) * Number(e.target.value));
            video.currentTime = currentTimeChange
        }

        //Volume Change + localStorage
        volumeProgress.onchange = (e) => {
            video.volume = Number(e.target.value) / 100;
            let volumeLevel
            if (video.muted || video.volume === 0) {
                volumeProgress.value = 0
                volumeLevel = "muted"
            } else if (video.volume >= 0.5) {
                volumeLevel = "high"
            } else {
                volumeLevel = "low"
            }
            $this.setLocalStorage('isVolume', Number(e.target.value))
            mediaActive.dataset.volume = volumeLevel
        }

        //Muted toggle
        volumedBtn.onclick = (e) => {
            if (!e.target.closest('.set-volume')) {
                $this.toggleMuted()
            }
        }


        //Toggle play
        video.onclick = () => {
            if ($this.isPlaying) {
                video.pause()
            } else {
                video.play()
            }
        }

        playing.onclick = () => {
            if ($this.isPlaying) {
                video.pause()
            } else {
                video.play()
            }
        }


        //Click Next Video
        nextBtn.onclick = () => {
            if ($this.isRandom) {
                $this.toggleRandom()
            } else {
                $this.toggleNext()
            }
            video.play()
        }

        //Click Prev Video
        prevBtn.onclick = () => {
            if ($this.isRandom) {
                $this.toggleRandom()
            } else {
                $this.togglePrev()
            }
            video.play()
        }

        autoplayBtn.onclick = (e) => {
            $this.isAutoplay = !$this.isAutoplay;
            toggleAutoplay.dataset.autoplay = $this.isAutoplay
            $this.setLocalStorage('isAutoplay', $this.isAutoplay)
        }

        //Click ToggleSubtitle + localStorage
        subtitleBtn.onclick = () => {
            const toggleSubtitle = () => {
                $this.isCaptionsMode = captions.mode === "hidden"
                captions.mode = $this.isCaptionsMode ? "showing" : "hidden"
                $this.setLocalStorage('isCaptionsMode', $this.isCaptionsMode)
                subtitleBtn.classList.toggle("showing", $this.isCaptionsMode)
            }
            toggleSubtitle()
        }


        //Click medium Player
        miniPlayerBtn.onclick = () => {
            $this.toggleMiniPlayer()
            grid.classList.toggle("mini", !document.pictureInPictureElement)

        }

        //Click FullScreen + localStorage
        mediumPlayerBtn.onclick = () => {
            $this.isMediumPlayer = !$this.isMediumPlayer;
            grid.classList.toggle('medium', this.isMediumPlayer);
            $this.setLocalStorage('isMediumPlayer', $this.isMediumPlayer)

        }

        //Click FullScreen
        fullscreenBtn.onclick = () => {
            $this.toggleFullscreen()
            grid.classList.toggle("full-screen", !document.fullscreenElement)
        }


        //Click FullScreen
        video.ondblclick = (e) => {
            $this.toggleFullscreen(video)
        }


        // Repeat video
        repeatBtn.onclick = () => {
            $this.isRepeat = !$this.isRepeat;
            repeatBtn.classList.toggle('active')
            this.setLocalStorage('isRepeat', $this.isRepeat)
        }

        //Random video
        randomBtn.onclick = () => {
            $this.isRandom = !$this.isRandom;
            randomBtn.classList.toggle('active');
            $this.setLocalStorage('isRandom', $this.isRandom);
        }



        //Speed Video
        playbackRateBtn.onclick = (e) => {
            $this.changePlaybackSpeed(e)
        }


        //Cursor Pointer Video hidden mouse
        video.onmouseover = (e) => {
            setTimeout(() => {
                document.body.style.cursor = "none";
                window.onmousemove = (e) => {
                    document.body.style.cursor = "default";
                }
            }, 3000)
        }

        //Click video
        playlist.onclick = (e) => {
            const nodeIndex = e.target.closest('.item:not(.item.active)')
            if (nodeIndex || e.target.closest('.btn-option')) {
                $this.currentIndex = Number(nodeIndex.dataset.index)
                $this.isPlaying = true
                video.autoplay = true;
                video.load();
                $this.renderVideos()
                $this.loadCurrentVideo()
                $this.scrollTopActionPlaylist()
            }
        }
    },

    //Scroll Top Action Playlist
    scrollTopActionPlaylist() {
        setTimeout(() => {
            $(".item.active").scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            })
        }, 1000)
    },


    //Fuc Next Video
    toggleNext() {
        this.currentIndex++;
        if (this.currentIndex >= this.videos.length) {
            this.currentIndex = 0
        }
        video.autoplay = true;
        video.load()
        this.renderVideos()
        this.loadCurrentVideo()
        this.scrollTopActionPlaylist()
    },

    //Fuc Prev Video
    togglePrev() {
        this.currentIndex--;
        if (this.currentIndex < 0) {
            this.currentIndex = this.videos.length - 1
        }
        video.autoplay = true;
        video.load();
        this.renderVideos()
        this.loadCurrentVideo()
        this.scrollTopActionPlaylist()
    },

    //Random Video
    toggleRandom() {
        let index;
        do {
            index = Math.floor(Math.random() * this.videos.length)
        }
        while (index == this.currentIndex) {
            this.currentIndex = index
            this.renderVideos()
            this.loadCurrentVideo()
            this.scrollTopActionPlaylist();
        }

    },

    //Fuc Muted Video + LocalStorage
    toggleMuted() {
        video.muted = !video.muted
        let volumeLevel
        if (video.muted || this.isVolume === 0) {
            volumeProgress.value = 0
            volumeLevel = "muted"
        } else if (this.isVolume >= 0.5) {
            volumeProgress.value = this.isVolume
            volumeLevel = "high"
        } else {
            volumeProgress.value = this.isVolume
            volumeLevel = "low"
        }

        mediaActive.dataset.volume = volumeLevel
    },

    //Format Duration
    formatDuration() {
        const displayTotal = setInterval(() => {
            if (video.readyState > 0) {
                const hoursD = Math.floor(video.duration / 3600)
                const minutesD = Math.floor(video.duration / 60 % 60);
                const secondsD = Math.floor(video.duration % 60)
                const secondValueD = secondsD < 10 ? `:0${secondsD}` : `:${secondsD}`;
                const minuteValueD = (video.duration >= 600 && minutesD < 10) ? `0${minutesD}` : minutesD;
                const hoursValueD = hoursD > 0 ? `${hoursD}:` : '';
                timerTotal.textContent = `${hoursValueD+minuteValueD+secondValueD}`
                clearInterval(displayTotal)
            }
        })
    },

    //Format CurrentTime
    formatCurrentTime() {
        if (video.currentTime) {
            videoProgress.value = Math.round(100 * (video.currentTime / video.duration));
            const hours = Math.floor(video.currentTime / 3600);
            const minutes = Math.floor(video.currentTime / 60) % 60;
            const seconds = Math.floor(video.currentTime % 60)
            const secondValue = seconds < 10 ? `:0${seconds}` : `:${seconds}`;
            const minuteValue = (video.currentTime > 600 && minutes > 0) ? `${minutes}` : minutes;
            const hoursValue = hours > 0 ? `${hours}:` : ``;
            timerCurrent.textContent = `${hoursValue+minuteValue+secondValue}`
        }
    },

    // FullScreen Change the Browser
    toggleFullscreen() {
        if (document.fullscreenElement == null) {
            player.requestFullscreen()
        } else {
            document.exitFullscreen()
        }
    },


    //Toggle MiniPlayer
    toggleMiniPlayer() {
        if (document.pictureInPictureElement == null) {
            video.requestPictureInPicture()
        } else {
            document.exitPictureInPicture()
        }
    },


    changePlaybackSpeed(e) {
        if (e.target.closest('.speed-item')) {
            const speedElement = e.target.closest('.speed-item');
            const playBackSpeed = speedElement.dataset.speed;
            video.playbackRate = Number(playBackSpeed);
            speedLabel.textContent = playBackSpeed;
            this.setLocalStorage('isSpeed', Number(playBackSpeed))
        }
    },

    //load Tracks
    loadTracks(tracks) {
        let arrayKeysTrack = Object.keys(tracks ? tracks : []);
        let arrayValuesTrack = Object.values(tracks ? tracks : []);
        if (arrayValuesTrack.length > 0) {
            let displayTracks = '';
            let tracksListControl = '';
            arrayValuesTrack.forEach((value, index) => {
                if (value != '') {
                    displayTracks += `<track kind="captions" label="${this.languages[arrayKeysTrack[index]]}" srclang="${arrayKeysTrack[index]}" src="${value}"/>`;
                    tracksListControl += `<li class="track-item" data-track="${arrayKeysTrack[index]}">${this.languages[arrayKeysTrack[index]]}</li>`
                }
            })
            video.innerHTML = displayTracks
            tracksLanguageList.innerHTML = `
                            <label for="trackListChecked" class="trackListLabel">Language <span>VietNamese</span></label>
                                <input type="checkbox" name="" id="trackListChecked">
                                   <ul class="track-list">
                                      <label for="trackListChecked" class="trackListLabel">Language <span>VietNamese</span></label>
                                        <div class="OverflowYAuto">
                                        ${tracksListControl}
                                        </div>
                                    </ul>`
        } else {
            video.innerHTML = ''
            tracksLanguageList.remove(tracksLanguageList)
        }
        subtitleBtn.classList.toggle("action", arrayValuesTrack.length > 0)

        subtitleBtn.classList.toggle("showing", this.isCaptionsMode)

    },

    //Load current Video & load duration to timeTotal
    loadCurrentVideo() {

        headerTitle.innerText = this.currentVideo.title;
        video.poster = this.currentVideo.image;
        video.src = this.currentVideo.url;

        if (Object.values(this.currentVideo.tracks ? this.currentVideo.tracks : [])[0] != '') {
            this.loadTracks(this.currentVideo.tracks)
        } else {
            this.loadTracks([])
        }
        video.playbackRate = this.isSpeed;
        prevBtn.classList.toggle('active', this.currentIndex)
        this.formatDuration()
    },
    loadLocalStorage() {
        this.isAutoplay = (this.getLocalStorage.isAutoplay === undefined) ? this.isAutoplay : this.getLocalStorage.isAutoplay;
        this.isSpeed = (this.getLocalStorage.isSpeed === undefined) ? this.isSpeed : this.getLocalStorage.isSpeed;
        this.isMute = (this.getLocalStorage.isMute === undefined) ? this.isMute : this.getLocalStorage.isMute;
        this.isCaptionsMode = (this.getLocalStorage.isCaptionsMode === undefined) ? this.isCaptionsMode : this.getLocalStorage.isCaptionsMode;
        this.isRandom = (this.getLocalStorage.isRandom === undefined) ? this.isRandom : this.getLocalStorage.isRandom;
        this.isRepeat = (this.getLocalStorage.isRepeat === undefined) ? this.isRepeat : this.getLocalStorage.isRepeat;
        this.isVolume = (this.getLocalStorage.isVolume === undefined) ? this.isVolume : this.getLocalStorage.isVolume;
        this.isIndexTrack = (this.getLocalStorage.isIndexTrack === undefined) ? this.isIndexTrack : this.getLocalStorage.isIndexTrack;
        this.isMediumPlayer = (this.getLocalStorage.isMediumPlayer === undefined) ? this.isMediumPlayer : this.getLocalStorage.isMediumPlayer;
    },

    //run this Fuc
    start() {
        this.defineProperties();
        this.renderVideos();
        this.handleEventsVideo();
        this.loadCurrentVideo();
        this.loadLocalStorage();
        volumeProgress.value = this.isVolume;
        speedLabel.textContent = this.isSpeed;
        video.playbackRate = this.isSpeed;
        repeatBtn.classList.toggle('active', this.isRepeat);
        randomBtn.classList.toggle('active', this.isRandom);
        volumedBtn.classList.toggle('active', this.isMute);
        grid.classList.toggle('medium', this.isMediumPlayer);
        subtitleBtn.classList.toggle("showing", this.isCaptionsMode)
        toggleAutoplay.dataset.autoplay = this.isAutoplay

    }

};
app.start();