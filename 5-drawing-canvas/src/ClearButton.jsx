function ClearButton({ canvasRef }) {
   const clearCanvas = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      ctx.clearRect(0, 0, canvas.width, canvas.height);
   };

   return <button onClick={clearCanvas}>Clear</button>;
}
export default ClearButton;
