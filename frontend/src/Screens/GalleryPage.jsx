import React from 'react';
import { Box, Typography, Grid, Fade } from '@mui/material';
import { motion } from 'framer-motion';

// Assume these are imported from your assets
const galleryImages = [
  "/path/to/image1.webp",
  "/path/to/image2.webp",
  "/path/to/image3.webp",
  "/path/to/image4.webp",
  "/path/to/image5.webp",
  "/path/to/image6.webp",
  "/path/to/image7.webp",
  "/path/to/image8.webp"
];

const videoSrc = "../assets/199081-909564668_small.mp4";

const GalleryPage = () => {
  return (
    <Box sx={{ 
      backgroundColor: '#0A0A0A', 
      color: '#FFFFFF', 
      py: { xs: 4, md: 8 },
      px: { xs: 2, md: 6 }
    }}>
      <Typography 
        variant="h2" 
        sx={{ 
          textAlign: 'center', 
          mb: 6, 
          fontFamily: 'Playfair Display, serif',
          color: '#E0E0E0',
          letterSpacing: 2
        }}
      >
        Sacred Moments
      </Typography>

      <Grid container spacing={4}>
        {/* Left Column with Video */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Box 
              sx={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: 3,
                boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
              }}
            >
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                src={videoSrc}
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                }}
                poster="/path/to/video-poster.jpg"
              />
              <Box 
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                  p: 2,
                  color: 'white'
                }}
              >
                <Typography variant="subtitle1">
                  Moments in Motion
                </Typography>
              </Box>
            </Box>
          </motion.div>
        </Grid>

        {/* Right Column with Image Grid */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            {galleryImages.map((img, index) => (
              <Grid item xs={4} key={index}>
                <Fade in={true} timeout={1000 + index * 200}>
                  <motion.div
                    whileHover={{ 
                      scale: 1.05, 
                      transition: { duration: 0.3 } 
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Box
                      component="img"
                      src={img}
                      alt={`Gallery Image ${index + 1}`}
                      sx={{
                        width: '100%',
                        height: 250,
                        objectFit: 'cover',
                        borderRadius: 2,
                        boxShadow: '0 6px 12px rgba(0,0,0,0.2)',
                        filter: 'brightness(0.9) contrast(1.1)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          filter: 'brightness(1.1) contrast(1.2)',
                        }
                      }}
                    />
                  </motion.div>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GalleryPage;