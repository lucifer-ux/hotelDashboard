import { useState } from "react";
import "./ImageUploadScreen.css"
import Navbar from "../../Components/Navbar/Navbar";

const ImageUploadScreen = () => {
    const [image, setImage] = useState<string | null>(null);
    const [isUploading, setIsUploading] = useState(false);
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        setIsUploading(true);
        const reader = new FileReader();
        reader.onloadend = () => {
          setImage(reader.result as string);
          setIsUploading(false);
        };
        reader.readAsDataURL(file);
      }
    };

  return (
    <>
    <Navbar/>
    <div className="navBarDivider">
     <div className="upload-container">
      <h2>Upload Profile Photo</h2>

      <label className="upload-box">
        <input
          type="file"
          accept="image/*"
          capture="environment"
          onChange={handleChange}
        />
        <span>Select or Take Photo</span>
      </label>

      {isUploading && <div className="loader">Uploading...</div>}

      {image && !isUploading && (
        <div className="preview">
          <img src={image} alt="Uploaded" />
          <p>Upload complete 🎉</p>
        </div>
      )}
    </div>
    </div>
    </>
  )
}

export default ImageUploadScreen