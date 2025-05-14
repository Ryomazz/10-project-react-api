import { useEffect, useRef, useState } from "react";
import { audioFiles } from "./audioFiles";
import "../src/assets/Cancion (1).mp3";

function App() {
   const [songIndex, setSongIndex] = useState(0);
   const [isPlaying, setIsPlaying] = useState(false);
   const [progress, setProgress] = useState(0);
   const audioRef = useRef(null);

   useEffect(() => {
      setProgress(0);
      audioRef.current.play();
      audioRef.current.currentTime = 0;
      console.log(progress);
   }, [songIndex]);

   const handlePlayPause = () => {
      if (isPlaying) {
         setIsPlaying(false);
         audioRef.current.pause();
      } else {
         setIsPlaying(true);
         audioRef.current.play();
      }
   };

   const handleTimeUpdate = () => {
      const currentTime = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      setProgress((currentTime / duration) * 100);
   };

   const handleProgress = (e) => {
      const currentProgress =
         (e.target.value / 100) * audioRef.current.duration;
      audioRef.current.currentTime = currentProgress;
   };

   const handleNext = () => {
      if (songIndex === audioFiles.length - 1) {
         setSongIndex(0);
      } else {
         setSongIndex(songIndex + 1);
      }
   };

   const handlePrev = () => {
      if (songIndex === 0) {
         setSongIndex(audioFiles.length - 1);
      } else {
         setSongIndex(songIndex - 1);
      }
   };

   return (
      <div className="audio-player">
         <audio
            src={audioFiles[songIndex]?.url}
            ref={audioRef}
            onTimeUpdate={handleTimeUpdate}
         />
         <article className="player-info">
            <h2>{audioFiles[songIndex]?.name}</h2>
            <input
               type="range"
               value={progress || 0}
               min="0"
               max="100"
               onChange={handleProgress}
            />
         </article>
         <article className="player-controls">
            <button onClick={handlePrev}>⏪</button>
            <button onClick={handlePlayPause}>⏯️</button>
            <button onClick={handleNext}>⏩</button>
         </article>
      </div>
   );
}
export default App;
