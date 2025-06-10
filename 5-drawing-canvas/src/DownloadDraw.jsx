function DownloadDraw({ canvasRef }) {
   const canvas = canvasRef.current || "";
   const dataURL = canvas ? canvas.toDataURL("image/jpeg", 1.0) : "";

   console.log(dataURL);

   return (
      <button>
         <a href={dataURL} download="canvas-image.jpg">
            Download like image
         </a>
      </button>
   );
}
export default DownloadDraw;
