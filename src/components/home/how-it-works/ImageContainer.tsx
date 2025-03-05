
import { useState } from 'react';
import FloatingChat from './FloatingChat';

interface ImageContainerProps {
  imageUrl: string;
  alt: string;
}

const ImageContainer = ({ imageUrl, alt }: ImageContainerProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-radial from-iaeva-purple/10 to-transparent rounded-3xl"></div>
      
      {!imageLoaded && (
        <div className="w-full h-80 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse rounded-3xl"></div>
      )}
      
      <img
        src={imageUrl}
        alt={alt}
        className={`w-full h-auto rounded-3xl shadow-soft object-cover z-10 relative ${!imageLoaded ? 'hidden' : ''}`}
        onLoad={() => setImageLoaded(true)}
        onError={() => {
          // Fallback to a placeholder if the image doesn't load
          setImageLoaded(false);
        }}
      />
      
      <FloatingChat />
    </div>
  );
};

export default ImageContainer;
