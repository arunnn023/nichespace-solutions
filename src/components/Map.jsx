import React from 'react';
import { useOfficeLocation } from '../hooks/useOfficeLocation';
import { createOfficeMap } from '../utils/createOfficeMap';
import { motion } from 'framer-motion';


const Map = () => {
  const officeMap = useOfficeLocation();

  const mapUrl = officeMap.get('mapUrl');
  const title = officeMap.get('title');

  return (
    <motion.div
    
    initial={{opacity:0, x:200}}
     transition={{duration: 1}}
     whileInView={{opacity: 1, x:0}}
     viewport={{once:true}} 
    id="map" className="relative w-full h-[400px] rounded-lg overflow-hidden border border-border">
      {mapUrl && (
        <iframe
          src="https://www.google.com/maps?q=17.4861716,78.3895342&hl=en&z=16&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title={title}
          className="grayscale hover:grayscale-0 transition-all duration-500"
        />
      )}
    </motion.div>
  );
};

export default Map;


