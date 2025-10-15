import React from "react";

const BackgroundVideo = ({trailerMovie}) => {
    const videoId = trailerMovie?.trailer?.split("v=")[1];
      // Build the embed URL with autoplay, mute, loop
const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&modestbranding=1&rel=0&showinfo=0&disablekb=1`;
  console.log("embedUrl",embedUrl)
  return (
    <div className="w-full h-[60vh] md:h-[80vh] overflow-hidden">
      <iframe
        className="w-full h-full aspect-video object-cover"
        src={embedUrl}
        // title="Trailer"
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default BackgroundVideo;
