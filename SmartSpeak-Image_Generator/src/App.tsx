import { useState } from 'react';
import './ImageDownloader.css'; // Import CSS file for styling

const ImageDownloader = () => {
  const [prompt, setPrompt] = useState('a dog in a space');
  const [width, setWidth] = useState(480);
  const [height, setHeight] = useState(480);
  const [seed, setSeed] = useState(42);
  const [model, setModel] = useState('model'); // Define your model here
  const [showImage, setShowImage] = useState(true); // State to control image visibility
  
  // const handleButtonClick = () => {
  //   setShowImage(true); // Show the image when the button is clicked
  // };

  // Construct the image URL using the state values
  const imageUrl = `https://pollinations.ai/p/${encodeURIComponent(prompt)}?width=${width}&height=${height}&seed=${seed}&model=${model}`;

  return (
    <div className="image-downloader-container">
      <h2 className="animated fadeInDown">SmartSpeak Image Generator</h2>
      <div className="form-group animated fadeInLeft">
        <label htmlFor="promptInput">Prompt:</label>
        <input
          type="text"
          id="promptInput"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
      </div>
      <div className="form-group animated fadeInRight">
        <label htmlFor="widthInput">Width:</label>
        <input
          type="number"
          id="widthInput"
          value={width}
          onChange={(e) => setWidth(parseInt(e.target.value))}
        />
      </div>
      <div className="form-group animated fadeInLeft">
        <label htmlFor="heightInput">Height:</label>
        <input
          type="number"
          id="heightInput"
          value={height}
          onChange={(e) => setHeight(parseInt(e.target.value))}
        />
      </div>
      <div className="form-group animated fadeInRight">
        <label htmlFor="seedInput">Seed:</label>
        <input
          type="number"
          id="seedInput"
          value={seed}
          onChange={(e) => setSeed(parseInt(e.target.value))}
        />
      </div>
      <div className="form-group animated fadeInLeft">
        <label htmlFor="modelInput">Model:</label>
        <input
          type="text"
          id="modelInput"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
      </div>
      {/* <button className="submit-button animated fadeInUp" onClick={handleButtonClick}>Generate Image</button> */}
      <div className={`image-container animated ${showImage ? 'fadeIn' : 'fadeOut'}`}>
        {showImage && <img className="image-preview" src={imageUrl} alt="Generated Image" />}
      </div>
    </div>
  );
};

export default ImageDownloader;
