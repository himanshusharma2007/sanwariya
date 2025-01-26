import React from 'react';
import { 
  Accordion, 
  AccordionSummary, 
  AccordionDetails, 
  Typography, 
  Box 
} from '@mui/material';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    question: "What materials are used in your religious artifacts?",
    answer: "We use a variety of high-quality materials, including pure brass, copper, silver, and gold-plated items. Our Rudraksha malas are sourced from Nepal, and our crystals are carefully selected for their purity and energy."
  },
  {
    question: "Are your products blessed or energized?",
    answer: "Yes, all our products are blessed by trained priests in accordance with Vedic traditions. Many items, such as our Rudraksha malas and crystal products, are also energized through specific rituals to enhance their spiritual properties."
  },
  {
    question: "How do I care for my brass and copper items?",
    answer: "To maintain the luster of brass and copper items, clean them regularly with a soft cloth. You can use a mixture of lemon juice and baking soda for deeper cleaning. Avoid using harsh chemicals. Apply a thin layer of coconut oil periodically to prevent tarnishing."
  },
  {
    question: "Do you offer customization for puja items?",
    answer: "Yes, we offer customization services for many of our puja items. This includes engraving names or specific mantras on items like puja thalis, adding gemstones to certain jewelry pieces, or creating bespoke puja sets. Please contact our customer service for more details."
  },
  {
    question: "What is the significance of the Rudraksha mala?",
    answer: "Rudraksha beads are sacred seeds associated with Lord Shiva. They are believed to have powerful spiritual and healing properties. Wearing or using a Rudraksha mala can help in meditation, reduce stress, and enhance spiritual growth. Different mukhi (faced) Rudraksha beads have various specific benefits."
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we offer international shipping to most countries. Shipping charges and delivery times vary based on the destination. You can find detailed information during checkout or contact our support team for assistance."
  },
  {
    question: "What is your return and exchange policy?",
    answer: "We accept returns or exchanges for unused and undamaged products within 14 days of delivery. Custom-made or personalized items are not eligible for return. For more details, refer to our return policy page or contact customer support."
  },
  {
    question: "How can I track my order?",
    answer: "Once your order is shipped, you will receive a tracking number via email or SMS. You can use this number to track your package on our website or the courier’s tracking portal."
  },
  {
    question: "Are your products eco-friendly?",
    answer: "Yes, we strive to use eco-friendly materials and sustainable practices in crafting our products. Our packaging is designed to be recyclable or biodegradable."
  },
  {
    question: "Can I get a discount on bulk purchases?",
    answer: "We offer discounts on bulk orders for temples, events, or special occasions. Please contact our sales team for more information on bulk pricing and delivery timelines."
  }
];

const FAQSection = () => {
  return (
    <Box sx={{
      maxWidth: '70vw',
      margin: '50px auto',
      padding: '40px 20px',
      background: 'linear-gradient(135deg, #FDF6EC, #FAD199, #E68A00)',
      borderRadius: '15px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      '@media (max-width: 600px)': {
        padding: '20px',
      },
    }}>
      <Typography 
        variant="h4" 
        align="center" 
        gutterBottom 
        sx={{
          color: '#6F4E37',
          fontFamily: 'serif',
          marginBottom: '30px',
          fontSize: { xs: '1.8rem', md: '2.5rem' },
        }}
      >
        Frequently Asked Questions
      </Typography>
      {faqData.map((faq, index) => (
        <Accordion 
          key={index} 
          sx={{
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            marginBottom: '10px',
            borderRadius: '10px !important',
            '&:before': {
              display: 'none',
            },
            '&.Mui-expanded': {
              margin: '10px 0',
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ChevronDown color="#D4AF37" />}
            sx={{
              '& .MuiAccordionSummary-content': {
                margin: '10px 0',
              },
              '&.Mui-expanded': {
                minHeight: '48px',
              },
            }}
          >
            <Typography sx={{ 
              color: '#6F4E37', 
              fontWeight: 'bold',
              fontSize: '1.1rem',
            }}>
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ 
              color: '#6F4E37', 
              fontSize: '0.95rem', 
              lineHeight: '1.6' 
            }}>
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQSection;
