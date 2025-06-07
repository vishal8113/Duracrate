import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  Chip,
  Stack,
  Button,
  TextField,
  Paper,
} from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

// New JointFillerCalculator Component
function JointFillerCalculator() {
  const [feet, setFeet] = useState('');
  const [bagsNeeded, setBagsNeeded] = useState(0);
  const BAG_COVERAGE = 25; // 20kg bag covers 25 feet

  const handleCalculate = () => {
    const feetValue = parseFloat(feet);
    if (!isNaN(feetValue) && feetValue > 0) {
      setBagsNeeded(Math.ceil(feetValue / BAG_COVERAGE));
    } else {
      setBagsNeeded(0);
    }
  };

  return (
    <Box sx={{ my: 6, p: 4, background: '#fff', borderRadius: '16px', boxShadow: '0 8px 24px rgba(0,0,0,0.05)' }}>
      <Typography variant="h4" component="h2" align="center" sx={{ fontWeight: 700, color: '#1e3c72', mb: 3 }}>
        Joint Filler Coverage Calculator
      </Typography>
      <Typography align="center" color="text.secondary" sx={{ mb: 4 }}>
        Estimate the number of 20kg joint filler bags needed for your project.
      </Typography>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            label="Area in Square Feet (sq.ft)"
            variant="outlined"
            value={feet}
            onChange={(e) => setFeet(e.target.value)}
            type="number"
            inputProps={{ min: "0" }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '&:hover fieldset': {
                  borderColor: '#00b4d8',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#00b4d8',
                },
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Button
            variant="contained"
            size="large"
            fullWidth
            onClick={handleCalculate}
            sx={{
              background: 'linear-gradient(45deg, #00b4d8, #0077b6)',
              borderRadius: '50px',
              py: 1.5,
              fontSize: '1.05rem',
              fontWeight: 'bold',
              textTransform: 'none',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                background: 'linear-gradient(45deg, #0077b6, #00b4d8)',
              },
            }}
          >
            Calculate Bags Needed
          </Button>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 2, textAlign: 'center', background: '#e3f6fd', borderRadius: '12px' }}>
            <Typography variant="h6" sx={{ color: '#1e3c72', fontWeight: 600 }}>
              Estimated 20kg Bags:
            </Typography>
            <Typography variant="h4" sx={{ color: '#00b4d8', fontWeight: 'bold' }}>
              {bagsNeeded}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

const products = [
  {
    id: 1,
    name: "111 (Type 1/T) Thin Set Adhesive",
    description: "Factory made cementitious polymer modified adhesive for fixing ceramic / clay tiles of small format for interior use only. It is suitable for both floor and wall applications for dry areas over cementitious surface only. Ideal for use in green buildings.",
    features: [
      "Suitable for ceramic tiles",
      "Interior use only",
      "Dry areas only",
      "Green building compatible"
    ],
    image: "/type_1t.png",
    specifications: {
      "Compliance": "BIS 15477: 2019 - Type 1, EN 12004-C1 T",
      "Color": "Grey",
      "Pack size": "20kg",
      "Coverage": "45 to 55 sq.ft/20 kg bag at 3 mm bed thickness, 25 to 35 sq. ft/20 kg bag at 5 mm bed thickness"
    }
  },
  {
    id: 2,
    name: "211 (Type 2/T) Premium Wall & Floor Adhesive",
    description: "A high polymer modified thin set tile adhesive for fixing all types of ceramic & vitrified tiles upto 8 sq.ft. on wall & floors and small size natural stones on floors and wall over cementitious substrates for indoor dry & wet area applications only. For improved performance use with UAT 666 Admix.",
    features: [
      "High polymer modified",
      "For ceramic & vitrified tiles (up to 8 sq.ft)",
      "Small natural stones",
      "Indoor dry & wet areas",
      "Use with UAT 666 Admix"
    ],
    image: "/type_2t.png",
    specifications: {
      "Compliance": "BIS 15477:2019 - Type 2 T, EN 12004-C2 T",
      "Color": "Grey",
      "Pack size": "20kg",
      "Coverage": "45 to 55 sq.ft/20 kg bag at 3 mm bed thickness, 25 to 35 sq. ft/20 kg bag at 5 mm bed thickness"
    }
  },
  {
    id: 3,
    name: "311 (Type 3/T) Wall & Floor MFT Adhesive",
    description: "Multipurpose high-performance polymer modified fibre reinforced cementitious tile adhesive for installation of medium & large format ceramic / vitrified tiles / glass mosaics / terrazzo & natural stones upto 18 sq.ft. on floor and wall where nominal substrate movement is expected. A high-grade adhesive especially for commercial area, where floorings are prone to shocks due to heavy traffic. When used with Admix UAT 666, produces high strength adhesive that exceeds Indian as well as International standards. Ideal for green buildings.",
    features: [
      "Fibre reinforced",
      "For medium & large format tiles (up to 18 sq.ft)",
      "Glass mosaics, terrazzo, natural stones",
      "Commercial areas / heavy traffic",
      "Use with Admix UAT 666",
      "Exceeds Indian & Intl. standards",
      "Green building compatible"
    ],
    image: "/type_3t.png",
    specifications: {
      "Compliance": "BIS 15477:2019 - Type 3 T, EN 12004 C2 TE",
      "Color": "Grey & White",
      "Pack size": "20 kg",
      "Coverage": "45 to 55 sq.ft/20 kg bag at 3 mm bed thickness, 25 to 35 sq. ft/20 kg bag at 5 mm bed thickness"
    }
  },
  {
    id: 4,
    name: "411 (Type 3/TS1) Platinum Hi - Flex Adhesive",
    description: "Premium Highly flexible adhesive for installation of large format tiles/stones/slim tiles/glass mosaics upto 25 sq.ft. on floors and walls for indoor as well as outdoor areas especially in critical conditions, higher vertical heights and water submerged conditions. Highly fibre reinforced with water repellent properties, highly deformable adhesives makes it utmost choice for difficult applications subjected to deformations/ vibrations.",
    features: [
      "Highly flexible",
      "For large format tiles (up to 25 sq.ft)",
      "Stones, slim tiles, glass mosaics",
      "Indoor & outdoor / critical conditions",
      "Water repellent",
      "Highly deformable",
      "Resistant to deformation/vibrations"
    ],
    image: "/type_3ts.png",
    specifications: {
      "Compliance": "BIS 15477:2019 - Type 3 TS1, EN 12004-C2 TE S1",
      "Color": "Grey & White",
      "Pack size": "20 kg",
      "Coverage": "45 to 55 sq.ft/20 kg bag at 3 mm bed thickness, 25 to 35 sq. ft/20 kg bag at 5 mm bed thickness"
    }
  },
  {
    id: 5,
    name: "Duracrate Epoxy",
    description: "Epoxy Resin Based, High Performance Grout for Tiles & Stones. For 1mm-12mm Joints Width. Duracrate Epoxy is a 100% solid epoxy resin-based Stain resistant, chemical resistant and color fast grout for use with Ceramics, Vitrified tiles, Porcelain & Mosaics, Natural & Engineered stones for heavy duty application Due to its water-resistant properties Duracrate Epoxy, it is highly recommended for under water submerged applications. Excellent product for heavy traffic areas and resistance to abrasion and impact.",
    features: [
      "Stain and Chemical Resistant",
      "Color Fast",
      "Water Resistant",
      "Heavy Duty Applications",
      "Abrasion and Impact Resistant"
    ],
    image: "/exposy.png",
    specifications: {
      "Compliance": "EN 13888-RG, ANSI118.3",
      "Color": "Available in range of different colors (Refer shade card)",
      "Pack size": "1 kg and 5 kg pails (3 components)",
      "Coverage": "Varies with tile size and joint width"
    }
  },
  {
    id: 6,
    name: "Duracrate Grout",
    description: "Polymer modified Joint Filler for Tiles & Stone For 1mm-3mm Joint Width. A polymer modified cementitious tile grout with water resistant properties for all kinds of tiles & natural stones. This series is recommended for joints size 1 mm to 3 mm for indoor and outdoor applications for floors, walls & facades. Recommended for use with Grout Admix UAT 555 to get strong, hard, durable & colorfast joints.",
    features: [
      "Polymer Modified",
      "Water Resistant",
      "For 1mm-3mm Joints",
      "Indoor & Outdoor Use",
      "Use with Grout Admix UAT 555"
    ],
    image: "/grout.png",
    specifications: {
      "Compliance": "EN 13888 CGM (20) Series (1 kg) UAT SSS 1400 ML",
      "Colour": "Available in range of different colours (refer shade card)",
      "Pack size": "1kg Pouch",
      "Coverage": "Varies with tile size and joint width"
    }
  }
];

function Products() {
  const navigate = useNavigate();

  return (
    <Box sx={{ py: 8, background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)', minHeight: '100vh' }}>
      <Container>
        <Button
          startIcon={<ArrowBack />}
          onClick={() => navigate('/')}
          sx={{
            mb: 4,
            color: '#1e3c72',
            '&:hover': {
              backgroundColor: 'rgba(30,60,114,0.1)',
            },
          }}
        >
          Back to Home
        </Button>

        <Typography
          variant="h2"
          component="h1"
          sx={{
            mb: 6,
            fontWeight: 800,
            color: '#1e3c72',
            textAlign: 'center',
            fontSize: { xs: '2.5rem', md: '3.5rem' },
          }}
        >
          Our Products
        </Typography>

        {/* Joint Filler Calculator Section */}
        <JointFillerCalculator />

        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item xs={12} md={6} key={product.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: 'auto',
                    bgcolor: '#e9ecef',
                    position: 'relative',
                    overflow: 'hidden',
                    paddingTop: '75%',
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{
                      objectFit: 'contain',
                      zIndex: 2,
                      maxWidth: '100%',
                      height: 'auto',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      margin: 'auto',
                    }}
                  />
                  <Box
                    component="img"
                    src="/Isi.jpg"
                    alt="ISI Certified"
                    sx={{
                      position: 'absolute',
                      top: 16,
                      left: 16,
                      width: 48,
                      height: 'auto',
                      borderRadius: '4px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                      zIndex: 3,
                    }}
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography
                    variant="h5"
                    component="h2"
                    sx={{
                      fontWeight: 700,
                      color: '#1e3c72',
                      mb: 2,
                    }}
                  >
                    {product.name}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    paragraph
                    sx={{ mb: 3 }}
                  >
                    {product.description}
                  </Typography>
                  
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#1976d2',
                      fontWeight: 600,
                      mb: 2,
                    }}
                  >
                    Key Features
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 3 }}>
                    {product.features.map((feature, index) => (
                      <Chip
                        key={index}
                        label={feature}
                        sx={{
                          backgroundColor: 'rgba(0, 180, 216, 0.1)',
                          color: '#0077b6',
                          fontWeight: 500,
                          mb: 1,
                        }}
                      />
                    ))}
                  </Stack>

                  <Typography
                    variant="h6"
                    sx={{
                      color: '#1976d2',
                      fontWeight: 600,
                      mb: 2,
                    }}
                  >
                    Specifications
                  </Typography>
                  <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2 }}>
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <Box
                        key={key}
                        sx={{
                          p: 2,
                          borderRadius: '8px',
                          backgroundColor: 'rgba(0, 180, 216, 0.05)',
                        }}
                      >
                        <Typography
                          variant="subtitle2"
                          sx={{ color: '#1e3c72', fontWeight: 600, mb: 0.5 }}
                        >
                          {key}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {value}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Products; 