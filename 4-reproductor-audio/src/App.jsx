import { useEffect, useRef, useState } from "react";
import { audioFiles } from "./audioFiles";
import "../src/App.css";

function App() {
   const [songs, setSongs] = useState(audioFiles);
   const [songIndex, setSongIndex] = useState(0);
   const [isPlaying, setIsPlaying] = useState(false);
   const [progress, setProgress] = useState(0);
   const [volume, setVolume] = useState(100);
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

   const handleVolumeUpdate = () => {
      setVolume(audioRef.current.volume * 100);
   };

   const handleVolumeChange = (e) => {
      const currentVolume = e.target.value / 100;
      audioRef.current.volume = currentVolume;
   };

   const handleNext = () => {
      if (songIndex === songs.length - 1) {
         setSongIndex(0);
      } else {
         setSongIndex(songIndex + 1);
      }
   };

   const handlePrev = () => {
      if (songIndex === 0) {
         setSongIndex(songs.length - 1);
      } else {
         setSongIndex(songIndex - 1);
      }
   };

   const handleFavorite = () => {
      const newSongs = songs.map((song) => {
         if (song.url === songs[songIndex].url) {
            console.log(song);
            return {
               ...song,
               favorites: song?.favorites ? false : true,
            };
         } else {
            return song;
         }
      });
      setSongs(newSongs);
   };

   return (
      <div className="audio-player">
         <audio
            src={songs[songIndex]?.url}
            ref={audioRef}
            onTimeUpdate={handleTimeUpdate}
            onVolumeChange={handleVolumeUpdate}
         />
         <article className="player-info">
            <h2>{songs[songIndex]?.name}</h2>

            <input
               type="range"
               value={progress || 0}
               min="0"
               max="100"
               onChange={handleProgress}
            />

            <div className="info-controls">
               <button onClick={handleFavorite}>
                  {songs[songIndex].favorites ? "♥️" : "🤍"}
               </button>
               <label htmlFor="">
                  🔊
                  <input
                     type="range"
                     min="0"
                     max="100"
                     value={volume || 100}
                     onChange={handleVolumeChange}
                  />
               </label>
            </div>
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
