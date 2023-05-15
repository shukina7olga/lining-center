const videoInit = (selector) => {
    const videos = document.querySelectorAll(selector);

    if (videos.length > 0) {
        videos.forEach(video => {
            videoGenerate(video);
        })
    }
}

const videoGenerate = (video) => {
    const btn = video.querySelector('.video-block__button');
    const videoID = btn.dataset.videoId;
    const container = video.querySelector('.video-block__inner');

    btn.addEventListener('click', () => {
        const iframe = iframeGenerate(videoID);

        container.innerHTML = '';
        container.appendChild(iframe);
    });
}

const iframeGenerate = (videoID) => {
    const iframe = document.createElement('iframe');

    const src = `https://www.youtube.com/embed/${videoID}?rel=0&showinfo=0&autoplay=1`;

    iframe.setAttribute('src', src);
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('allowfullscreen', 'autoplay');
    iframe.classList.add('video-block__content'); // на случай если надо будет вставить свой клвсс со стилизацией

    return iframe;
}

videoInit('.video-block');