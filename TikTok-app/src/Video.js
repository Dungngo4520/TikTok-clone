import React, { useRef, useState } from 'react';
import "./Video.css";
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar'

function Video({ url, channel, description, song, likes, messages, shares }) {
    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    //play or pause video
    const handleVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    }
    return (
        <div className="video">
            <img className="tiktok_logo" src="https://upload.wikimedia.org/wikipedia/vi/thumb/a/a9/TikTok_logo.svg/640px-TikTok_logo.svg.png" alt="" />
            <video
                onClick={handleVideoPress}
                className="video_player"
                loop
                ref={videoRef}
                src={url}>
            </video>

            <VideoFooter
                channel={channel}
                description={description}
                song={song}
            />
            <VideoSidebar
                likes={likes}
                messages={messages}
                shares={shares}
            />
        </div>
    )
}

export default Video;
