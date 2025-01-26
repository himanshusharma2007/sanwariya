import React from 'react';
import { Box, Typography, Avatar, Rating } from '@mui/material';

const testimonials = [
  {
    id: 1,
    name: "Aarav Patel",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 5,
    text: "The Panchmukhi Rudraksha Mala I purchased is truly divine. I can feel its positive energy enhancing my spiritual practices.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 5,
    text: "Sanwariya Handicraft's products are authentic and of the highest quality. The Crystal Shiva Lingam has become a centerpiece in my puja room.",
  },
  {
    id: 3,
    name: "Rahul Verma",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 4,
    text: "I'm impressed by the craftsmanship of the brass puja items. They add a touch of elegance to my daily rituals.",
  },
  {
    id: 4,
    name: "Ananya Gupta",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 5,
    text: "The Chakra Healing Bracelet is not only beautiful but I can truly feel its balancing effects. Highly recommended!",
  },
  {
    id: 5,
    name: "Vikram Singh",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 5,
    text: "The sandalwood incense sticks create such a peaceful atmosphere. Perfect for meditation and puja.",
  },
];

const TestimonialSlider = () => {
  const doubledTestimonials = [...testimonials, ...testimonials]; // Duplicate the testimonials for seamless looping

  return (
    <Box sx={{
      width: '100%',
      overflow: 'hidden',
      background: '#f8f5f0',
      padding: '32px 0',
      position: 'relative',
    }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ color: '#D4AF37', fontFamily: 'serif' }}>
        What Our Devotees Say
      </Typography>
      <Box
        className="marquee"
        sx={{
          display: 'flex',
          animation: 'marquee 20s linear infinite',
         
          width: 'calc(300px * 10)', // Adjust the width based on the total number of cards
        }}
      >
        {doubledTestimonials.map((testimonial, index) => (
          <Box
            key={`${testimonial.id}-${index}`}
            sx={{
              minWidth: 300,
              maxWidth: 300,
              margin: '0 16px',
              padding: '24px',
              cursor
              : 'pointer',
              borderRadius: '4px',
              backgroundColor: '#FFFFFF',
              boxShadow: '0 3px 5px rgba(0,0,0,0.2)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <Avatar
              src={testimonial.avatar}
              alt={testimonial.name}
              sx={{ width: 80, height: 80, marginBottom: 2 }}
            />
            <Typography variant="h6" gutterBottom sx={{ color: '#D4AF37' }}>
              {testimonial.name}
            </Typography>
            <Rating value={testimonial.rating} readOnly sx={{ marginBottom: 2 }} />
            <Typography variant="body2" sx={{ color: '#6F4E37', fontStyle: 'italic' }}>
              "{testimonial.text}"
            </Typography>
          </Box>
        ))}
      </Box>

      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .marquee {
            animation: marquee 20s linear infinite;
          }

          .marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </Box>
  );
};

export default TestimonialSlider;
