import { useEffect, useRef, useState } from "react";
import { audioFiles } from "./audioFiles";
import "../src/assets/Cancion (1).mp3";

function App() {
   const [songIndex, setSongIndex] = useState(0);
   const [isPlaying, setIsPlaying] = useState(false);
   const [progress, setProgress] = useState(0);
   const audioRef = useRef(null);

   const handlePlayPause = () => {
      if (isPlaying) {
         setIsPlaying(false);
         audioRef.current.pause();
      } else {
         setIsPlaying(true);
         audioRef.current.play();
      }
   };

   const handleProgress = (e) => {
      const currentProgress =
         (e.target.value / 100) * audioRef.current.duration;
      audioRef.current.currentTime = currentProgress;
   };

   const handleTimeUpdate = () => {
      const currentTime = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      setProgress((currentTime / duration) * 100);
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
               value={progress}
               min="0"
               max="100"
               onChange={handleProgress}
            />
         </article>
         <article className="player-controls">
            <button>⏪</button>
            <button onClick={handlePlayPause}>⏯️</button>
            <button>⏩</button>
         </article>
      </div>
   );
}
export default App;
