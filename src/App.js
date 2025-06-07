import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Products from './pages/Products';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  IconButton,
  Dialog,
  DialogContent,
  TextField,
  Paper,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  CardActionArea,
  CardActions,
  Chip,
  Stack,
  Avatar,
  Fade,
  Zoom,
  Grow,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  LocationOn,
  Phone,
  Email,
  WhatsApp,
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  ArrowForward,
  Construction,
  Verified,
  Speed,
  Security,
  Search,
} from '@mui/icons-material';
import HexagonIcon from '@mui/icons-material/Hexagon';
import './App.css';

// Move all the content from AppContent into a new HomePage component
function HomePage() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const HEADER_HEIGHT = 72; // Approximate height of the fixed header

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleScrollToSection = (event, sectionId) => {
    event.preventDefault();
    // Handle the special case for the 'Home' section
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', '#home');
      return;
    }

    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop;
      // Subtract header height and ensure scroll position is not negative
      const scrollPosition = Math.max(0, offsetTop - HEADER_HEIGHT);
      window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
      window.history.pushState(null, '', `#${sectionId}`);
    }
  };

  const products = [
    {
      id: 1,
      name: "Type 1T Adhesive",
      description: "Versatile adhesive designed for regular sized ceramic tiles in dry areas and normal conditions.",
      features: [
        "Easy application",
        "Cost-effective solution",
        "20kg net weight",
        "Reliable performance"
      ],
      image: "/type_1t.png"
    },
    {
      id: 2,
      name: "Type 2/T Adhesive",
      description: "Advanced polymer enriched tile adhesive for medium format tiles and natural stone applications.",
      features: [
        "Suitable for ceramic tiles",
        "Interior & exterior use",
        "20kg net weight",
        "Export quality product"
      ],
      image: "/type_2t.png"
    },
    {
      id: 3,
      name: "Type 3/T Adhesive",
      description: "High-performance adhesive for natural stone, ceramic, and porcelain tiles in critical applications.",
      features: [
        "Fast setting formula",
        "Superior bonding strength",
        "20kg net weight",
        "Professional grade"
      ],
      image: "/type_3t.png"
    },
    {
      id: 4,
      name: "Type 3/TS1 Adhesive",
      description: "Highly advanced modified adhesive for all types of natural and artificial stone applications.",
      features: [
        "Maximum flexibility",
        "Weather resistant",
        "20kg net weight",
        "Premium quality"
      ],
      image: "/type_3ts.png"
    }
  ];

  const features = [
    {
      icon: <Construction sx={{ fontSize: 40, color: '#fff' }} />,
      title: "Premium Quality",
      description: "Manufactured with the finest materials for superior performance"
    },
    {
      icon: <Verified sx={{ fontSize: 40, color: '#fff' }} />,
      title: "Certified Products",
      description: "All products meet international quality standards"
    },
    {
      icon: <Speed sx={{ fontSize: 40, color: '#fff' }} />,
      title: "Fast Setting",
      description: "Quick-drying formula for efficient project completion"
    },
    {
      icon: <Security sx={{ fontSize: 40, color: '#fff' }} />,
      title: "Durable Bond",
      description: "Long-lasting adhesion for permanent installations"
    }
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        DURACRATE
      </Typography>
      <Divider />
      <List>
        {['Home', 'Products', 'About', 'Contact'].map((item) => (
          <ListItem key={item} component="a" href={`#${item.toLowerCase()}`} onClick={(event) => handleScrollToSection(event, item.toLowerCase())}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  // Slideshow state
  const slideImages = [
    '/SampleImg_1.jpg',
    '/SampleImg_2.jpg',
    '/SampleImg_3.jpg',
    '/SampleImg_4.jpg',
    '/SampleImg_5.jpg',
    '/SampleImg_6.jpg',
    '/SampleImg_7.jpg',
    '/SampleImg_8.jpg',
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 3500);
    return () => clearTimeout(timer);
  }, [currentSlide, slideImages.length]);
  const handlePrevSlide = (e) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + slideImages.length) % slideImages.length);
  };
  const handleNextSlide = (e) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % slideImages.length);
  };

  // Update the "Explore Our Products" button click handler
  const handleExploreProducts = () => {
    navigate('/products');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Header/Navbar - Modern White Contrast */}
      <AppBar
        position="fixed"
        sx={{
          background: '#fff',
          color: '#1e3c72',
          boxShadow: '0 2px 16px rgba(30,60,114,0.07)',
          borderBottom: '2px solid #e3eaf5',
          zIndex: 1201,
        }}
      >
        <Toolbar sx={{ minHeight: 72, px: { xs: 2, md: 6 } }}>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mr: 3 }}>
            <Box sx={{ width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={process.env.PUBLIC_URL + "/logo.png"} alt="Duracrate Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </Box>
            <Typography
              variant="h5"
              component="div"
              sx={{
                color: '#1e3c72',
                fontWeight: 800,
                letterSpacing: '1.5px',
                fontFamily: 'Segoe UI, sans-serif',
                fontSize: { xs: '1.2rem', md: '1.5rem' },
              }}
            >
              DURACRATE
            </Typography>
          </Box>
          {/* Nav */}
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 4, flexGrow: 1, justifyContent: 'center' }}>
              {['Home', 'Products', 'About', 'Contact'].map((item) => (
                <Button
                  key={item}
                  color="inherit"
                  href={`#${item.toLowerCase()}`}
                  onClick={(event) => handleScrollToSection(event, item.toLowerCase())}
                  sx={{
                    px: 2.5,
                    py: 1.2,
                    fontWeight: 700,
                    fontSize: '1.08rem',
                    letterSpacing: '0.5px',
                    background: 'transparent',
                    borderRadius: '8px',
                    color: '#1e3c72',
                    position: 'relative',
                    transition: 'all 0.2s',
                    '&:hover': {
                      color: '#00b4d8',
                      background: 'rgba(0,180,216,0.07)',
                    },
                    '&::after': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      left: 12,
                      right: 12,
                      bottom: 6,
                      height: 3,
                      borderRadius: 2,
                      background: 'linear-gradient(90deg,#00b4d8,#ff9100)',
                      opacity: 0,
                      transition: 'opacity 0.2s',
                    },
                    '&:hover::after': {
                      opacity: 1,
                    },
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>
          )}
          {/* Removed search button for cleaner look */}
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{
                color: '#00b4d8',
                ml: 'auto',
                '&:hover': {
                  backgroundColor: 'rgba(0, 180, 216, 0.1)',
                }
              }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            background: '#fff',
            color: '#1e3c72',
            minWidth: 220,
          }
        }}
      >
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', pt: 4 }}>
          <Typography variant="h6" sx={{ my: 2, fontWeight: 700, color: '#00b4d8' }}>
            DURACRATE
          </Typography>
          <Divider sx={{ background: 'rgba(0,180,216,0.15)' }} />
          <List>
            {['Home', 'Products', 'About', 'Contact'].map((item) => (
              <ListItem key={item} component="a" href={`#${item.toLowerCase()}`} onClick={(event) => handleScrollToSection(event, item.toLowerCase())} sx={{ justifyContent: 'center' }}>
                <ListItemText
                  primary={item}
                  primaryTypographyProps={{
                    sx: {
                      color: '#1e3c72',
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      letterSpacing: '0.5px',
                      textAlign: 'center',
                      '&:hover': { color: '#00b4d8' },
                    }
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: { xs: 300, md: 500 },
          mt: { xs: 9, md: 10 },
          mb: 0,
          overflow: 'hidden',
        }}
      >
        <img
          src={slideImages[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.85)',
            transition: 'all 0.7s cubic-bezier(0.4,0,0.2,1)',
          }}
        />
        {/* Slide navigation arrows */}
        <IconButton
          onClick={handlePrevSlide}
          sx={{
            position: 'absolute',
            top: '50%',
            left: 16,
            transform: 'translateY(-50%)',
            color: 'white',
            background: 'rgba(30,60,114,0.4)',
            '&:hover': { background: 'rgba(30,60,114,0.7)' },
            zIndex: 3,
            pointerEvents: 'auto',
          }}
          aria-label="Previous slide"
        >
          {'<'}
        </IconButton>
        <IconButton
          onClick={handleNextSlide}
          sx={{
            position: 'absolute',
            top: '50%',
            right: 16,
            transform: 'translateY(-50%)',
            color: 'white',
            background: 'rgba(30,60,114,0.4)',
            '&:hover': { background: 'rgba(30,60,114,0.7)' },
            zIndex: 3,
            pointerEvents: 'auto',
          }}
          aria-label="Next slide"
        >
          {'>'}
        </IconButton>
        {/* Dots */}
        <Box sx={{ position: 'absolute', bottom: 24, left: 0, width: '100%', display: 'flex', justifyContent: 'center', zIndex: 3 }}>
          {slideImages.map((_, idx) => (
            <Box
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              sx={{
                width: 12,
                height: 12,
                mx: 0.5,
                borderRadius: '50%',
                background: idx === currentSlide ? '#ff9100' : 'rgba(255,255,255,0.6)',
                border: idx === currentSlide ? '2px solid #fff' : 'none',
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: idx === currentSlide ? '0 0 6px #ff9100' : 'none',
                pointerEvents: 'auto',
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Hero Section Below Slideshow */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
          color: '#1e3c72',
          py: { xs: 7, md: 10 },
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <Container>
          <Fade in timeout={1000}>
            <Box>
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  mb: 2,
                  fontWeight: 800,
                  fontSize: { xs: '2.2rem', md: '3.5rem' },
                  letterSpacing: '1.5px',
                  color: '#1e3c72',
                  textShadow: '0 2px 8px rgba(0,0,0,0.07)',
                  fontFamily: 'Segoe UI, sans-serif',
                }}
              >
                Premium Construction Materials
              </Typography>
              <Typography 
                variant="h5" 
                sx={{ 
                  mb: 4, 
                  opacity: 0.92,
                  maxWidth: '700px',
                  mx: 'auto',
                  lineHeight: 1.6,
                  fontWeight: 500,
                  color: '#2a5298',
                }}
              >
                Professional Grade Tile Adhesives & Building Solutions for Every Project
              </Typography>
              <Button
                variant="contained"
                size="large"
                onClick={handleExploreProducts}
                endIcon={<ArrowForward />}
                sx={{
                  background: 'linear-gradient(45deg, #00b4d8, #ff9100)',
                  borderRadius: '50px',
                  px: 5,
                  py: 1.7,
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  textTransform: 'none',
                  boxShadow: '0 8px 32px rgba(0,180,216,0.10)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #ff9100, #00b4d8)',
                    transform: 'translateY(-3px)',
                    boxShadow: '0 12px 36px rgba(0,180,216,0.13)',
                  },
                }}
              >
                Explore Our Products
              </Button>
            </Box>
          </Fade>
        </Container>
      </Box>
      {/* Reference-Inspired Info Section (Grid background, 3 circles, animated construction theme) */}
      <Box
        sx={{
          position: 'relative',
          py: { xs: 7, md: 10 },
          px: { xs: 1, md: 0 },
          overflow: 'hidden',
        }}
      >
        {/* Animated SVG Blueprint/Construction Background */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            pointerEvents: 'none',
            opacity: 0.18,
          }}
        >
          <svg width="100%" height="100%" viewBox="0 0 1920 500" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ minHeight: 400 }}>
            {/* Blueprint grid lines */}
            <g stroke="#1976d2" strokeWidth="1" opacity="0.18">
              {Array.from({ length: 20 }).map((_, i) => (
                <line key={i} x1={i * 100} y1="0" x2={i * 100} y2="500" />
              ))}
              {Array.from({ length: 6 }).map((_, i) => (
                <line key={i+100} x1="0" y1={i * 100} x2="1920" y2={i * 100} />
              ))}
            </g>
            {/* Animated construction icons (helmet, brick, trowel) */}
            <g>
              <g style={{ animation: 'float1 6s ease-in-out infinite' }}>
                <circle cx="300" cy="120" r="22" fill="#fff" stroke="#1976d2" strokeWidth="2" />
                <text x="300" y="128" textAnchor="middle" fontSize="22" fill="#1976d2">🦺</text>
              </g>
              <g style={{ animation: 'float2 7s ease-in-out infinite' }}>
                <rect x="1600" y="320" width="44" height="22" rx="6" fill="#fff" stroke="#1976d2" strokeWidth="2" />
                <text x="1622" y="338" fontSize="22" fill="#1976d2">🧱</text>
              </g>
              <g style={{ animation: 'float3 8s ease-in-out infinite' }}>
                <circle cx="900" cy="400" r="18" fill="#fff" stroke="#1976d2" strokeWidth="2" />
                <text x="900" y="408" textAnchor="middle" fontSize="18" fill="#1976d2">🛠️</text>
              </g>
            </g>
            <style>{`
              @keyframes float1 { 0%{transform:translateY(0);} 50%{transform:translateY(-18px);} 100%{transform:translateY(0);} }
              @keyframes float2 { 0%{transform:translateY(0);} 50%{transform:translateY(-12px);} 100%{transform:translateY(0);} }
              @keyframes float3 { 0%{transform:translateY(0);} 50%{transform:translateY(-24px);} 100%{transform:translateY(0);} }
            `}</style>
          </svg>
        </Box>
        {/* Soft overlay for depth */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            background: 'linear-gradient(180deg, #fff 80%, #e3f2fd 100%)',
            opacity: 0.85,
            pointerEvents: 'none',
          }}
        />
        <Container sx={{ position: 'relative', zIndex: 2 }}>
          <Typography
            variant="h4"
            align="center"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: '#222',
              fontSize: { xs: '1.6rem', md: '2.3rem' },
            }}
          >
            Building your <Box component="span" sx={{ color: '#1976d2', fontWeight: 800 }}>dream home starts here with Duracrate</Box>
          </Typography>
          <Typography
            align="center"
            sx={{
              mb: 6,
              color: '#333',
              fontSize: { xs: '1.05rem', md: '1.18rem' },
              maxWidth: 900,
              mx: 'auto',
              fontWeight: 400,
            }}
          >
            By Creating high quality products and providing expert services, solutions & knowledge at each stage of the home building, we are your partners in this journey
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {[
              {
                img: process.env.PUBLIC_URL + './construction_consult_sample.png',
                title: 'Consultation for your home',
                desc: 'Set the right foundation to your homebuilding needs with the right tools and estimators',
              },
              {
                img: process.env.PUBLIC_URL + './building_home.jpg',
                title: 'Build your home',
                desc: 'Bring your vision to reality with our expert services and quality products',
              },
              {
                img: process.env.PUBLIC_URL + './beautify_home.jpg',
                title: 'Beautify your home',
                desc: 'Transform your home into a beautiful haven with our range of home beautification products',
              },
            ].map((item, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
                  <Box
                    sx={{
                      width: 260,
                      height: 260,
                      borderRadius: '50%',
                      overflow: 'hidden',
                      boxShadow: '0 12px 40px rgba(30,60,114,0.18)',
                      mb: 3,
                      background: '#eee',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0,
                      animation: `fadeIn 1s ${0.3 + idx * 0.2}s forwards`,
                    }}
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </Box>
                  <Typography
                    variant="h6"
                    align="center"
                    sx={{ color: '#7cb342', fontWeight: 700, mb: 1, fontSize: '1.25rem', opacity: 0, animation: `fadeIn 1s ${0.5 + idx * 0.2}s forwards` }}
                  >
                    {item.title}
                  </Typography>
                  <Typography align="center" sx={{ color: '#333', fontSize: '1.05rem', maxWidth: 320, opacity: 0, animation: `fadeIn 1s ${0.7 + idx * 0.2}s forwards` }}>
                    {item.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
        <style>{`
          @keyframes fadeIn { from { opacity: 0; transform: translateY(30px);} to { opacity: 1; transform: none; } }
        `}</style>
      </Box>

      {/* Features/USP Section - Modern Attractive Design */}
      <Box
        sx={{
          py: 10,
          background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative SVG background for extra polish */}
        <Box sx={{ position: 'absolute', top: -60, right: -120, zIndex: 0, opacity: 0.10 }}>
          <svg width="420" height="320" viewBox="0 0 420 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="210" cy="160" rx="210" ry="160" fill="#00b4d8" />
          </svg>
        </Box>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography
            variant="h4"
            align="center"
            sx={{
              fontWeight: 800,
              color: '#1e3c72',
              mb: 6,
              letterSpacing: '1px',
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            Why Choose Duracrate?
          </Typography>
          <Grid
            container
            spacing={{ xs: 3, md: 5 }}
            justifyContent="center"
            alignItems="stretch"
            sx={{
              maxWidth: 1000,
              mx: 'auto',
            }}
          >
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={6} lg={6} key={index} sx={{ display: 'flex' }}>
                <Box
                  sx={{
                    width: '100%',
                    minHeight: 260,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '28px',
                    background: '#fff',
                    boxShadow: '0 6px 32px rgba(30,60,114,0.10)',
                    border: '2.5px solid',
                    borderImage: 'linear-gradient(135deg, #00b4d8 0%, #ff9100 100%) 1',
                    p: { xs: 3, md: 4 },
                    m: 'auto',
                    transition: 'box-shadow 0.3s, transform 0.3s',
                    '&:hover': {
                      boxShadow: '0 16px 48px rgba(30,60,114,0.18)',
                      transform: 'translateY(-8px) scale(1.04)',
                      borderImage: 'linear-gradient(135deg, #ff9100 0%, #00b4d8 100%) 1',
                    },
                  }}
                >
                  {/* Icon with colored circle/gradient behind hexagon */}
                  <Box
                    sx={{
                      width: 90,
                      height: 90,
                      mb: 2.5,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #00b4d8 0%, #ff9100 100%)',
                      boxShadow: '0 2px 12px rgba(0,180,216,0.10)',
                      position: 'relative',
                    }}
                  >
                    <Box
                      sx={{
                        width: 68,
                        height: 68,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'linear-gradient(135deg, #00b4d8 0%, #ff9100 100%)',
                        clipPath: 'polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)',
                        boxShadow: '0 2px 8px rgba(0,180,216,0.10)',
                      }}
                    >
                      {React.cloneElement(feature.icon, { sx: { fontSize: 38, color: '#fff' } })}
                    </Box>
                  </Box>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, color: '#1e3c72', textAlign: 'center', mb: 1.2, fontSize: '1.25rem', letterSpacing: '0.5px' }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#4a5a6a', textAlign: 'center', fontSize: '1.08rem', fontWeight: 400, opacity: 0.92 }}>
                    {feature.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box 
        id="products" 
        sx={{ 
          py: 8, 
          background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '100px',
            background: 'linear-gradient(to bottom right, #1e3c72, #2a5298)',
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)',
          }
        }}
      >
        <Container>
          <Typography
            variant="h2"
            component="h2"
            align="center"
            sx={{ 
              mb: 6, 
              position: 'relative',
              fontWeight: 'bold',
              color: '#1e3c72',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 80,
                height: 4,
                background: 'linear-gradient(45deg, #00b4d8, #0077b6)',
                borderRadius: 2,
              }
            }}
          >
            Our Premium Product Range
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            gap: 3, 
            overflowX: 'auto',
            pb: 4,
            px: 1,
            position: 'relative',
            '&::-webkit-scrollbar': {
              height: '6px',
            },
            '&::-webkit-scrollbar-track': {
              background: '#f1f1f1',
              borderRadius: '3px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#00b4d8',
              borderRadius: '3px',
              '&:hover': {
                background: '#0077b6',
              },
            },
            scrollSnapType: 'x mandatory',
            '& > *': {
              scrollSnapAlign: 'start',
            }
          }}>
            {products.map((product, index) => (
              <Box
                key={product.id}
                sx={{
                  minWidth: { xs: '260px', sm: '300px' },
                  maxWidth: { xs: '260px', sm: '300px' },
                  flexShrink: 0,
                }}
              >
                <Grow in timeout={1000} style={{ transformOrigin: '0 0 0' }} {...(index > 0 ? { timeout: 1000 + index * 200 } : {})}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'all 0.3s ease',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
                      background: 'white',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        height: '280px',
                        background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23ffffff\' fill-opacity=\'0.05\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
                          opacity: 0.5,
                        }
                      }}
                    >
                      <img 
                        src={product.image} 
                        alt={product.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          position: 'relative',
                          zIndex: 2,
                        }}
                      />
                      {/* ISI Logo */}
                      <Box
                        component="img"
                        src={process.env.PUBLIC_URL + "/Isi.jpg"}
                        alt="ISI Certified"
                        sx={{
                          position: 'absolute',
                          top: 8,
                          left: 8,
                          width: 40,
                          height: 'auto',
                          zIndex: 3, // Above the product image
                          borderRadius: '4px',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                        }}
                      />
                    </Box>
                    <CardContent sx={{ flexGrow: 1, p: 2.5 }}>
                      <Typography 
                        gutterBottom 
                        variant="h6" 
                        component="h3"
                        sx={{ 
                          fontWeight: 'bold',
                          color: '#1e3c72',
                          mb: 1.5,
                          fontSize: '1.1rem'
                        }}
                      >
                        {product.name}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        color="text.secondary" 
                        paragraph
                        sx={{ 
                          mb: 2,
                          fontSize: '0.9rem',
                          lineHeight: 1.5
                        }}
                      >
                        {product.description}
                      </Typography>
                      <Stack spacing={1}>
                        {product.features.map((feature, index) => (
                          <Chip
                            key={index}
                            label={feature}
                            size="small"
                            sx={{
                              backgroundColor: 'rgba(0, 180, 216, 0.1)',
                              color: '#0077b6',
                              fontWeight: 500,
                              fontSize: '0.8rem',
                              height: '24px',
                              '&:hover': {
                                backgroundColor: 'rgba(0, 180, 216, 0.2)',
                              }
                            }}
                          />
                        ))}
                      </Stack>
                    </CardContent>
                  </Card>
                </Grow>
              </Box>
            ))}
            <Box
              sx={{
                minWidth: { xs: '260px', sm: '300px' },
                maxWidth: { xs: '260px', sm: '300px' },
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Button
                onClick={() => navigate('/products')}
                sx={{
                  width: '100%',
                  height: '100%',
                  minHeight: 400,
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
                  color: 'white',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  '&:hover': {
                    background: 'linear-gradient(135deg, #2a5298 0%, #1e3c72 100%)',
                    transform: 'translateY(-8px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  View All Products
                </Typography>
                <ArrowForward sx={{ fontSize: 40 }} />
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* About Section - Modern Premium Design */}
      <Box
        id="about"
        sx={{
          py: 10,
          background: 'linear-gradient(135deg, #e3f2fd 0%, #f8f9fa 100%)',
          color: '#1e3c72',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative SVG background shape */}
        <Box sx={{ position: 'absolute', top: -80, left: -120, zIndex: 0, opacity: 0.10 }}>
          <svg width="420" height="320" viewBox="0 0 420 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="210" cy="160" rx="210" ry="160" fill="#00b4d8" />
          </svg>
        </Box>
        <Container sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ mb: { xs: 4, md: 0 } }}>
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{
                    fontWeight: 800,
                    mb: 2,
                    color: '#1e3c72',
                    letterSpacing: '1px',
                  }}
                >
                  About Duracrate
                </Typography>
                <Typography variant="h6" sx={{ color: '#1976d2', fontWeight: 600, mb: 2 }}>
                  Trusted in Construction Materials
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: '1.13rem', opacity: 0.95, mb: 2 }}>
                  With years of expertise in the construction materials industry, Duracrate has established itself as a trusted name in premium tile adhesives and building solutions. We are committed to providing export-quality products that meet international standards.
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: '1.13rem', opacity: 0.95, mb: 3 }}>
                  Our advanced polymer-enriched formulations ensure superior bonding strength, durability, and reliability for every construction project. From residential applications to commercial developments, our products deliver consistent performance that professionals trust.
                </Typography>
                <Box component="ul" sx={{ pl: 2, mb: 0 }}>
                  <Box component="li" sx={{ display: 'flex', alignItems: 'center', mb: 1.2, color: '#1976d2', fontWeight: 600, fontSize: '1.08rem' }}>
                    <Verified sx={{ mr: 1, color: '#00b4d8' }} /> Certified & Export Quality
                  </Box>
                  <Box component="li" sx={{ display: 'flex', alignItems: 'center', mb: 1.2, color: '#1976d2', fontWeight: 600, fontSize: '1.08rem' }}>
                    <Speed sx={{ mr: 1, color: '#00b4d8' }} /> Fast Setting & Durable
                  </Box>
                  <Box component="li" sx={{ display: 'flex', alignItems: 'center', color: '#1976d2', fontWeight: 600, fontSize: '1.08rem' }}>
                    <Security sx={{ mr: 1, color: '#00b4d8' }} /> Reliable for All Projects
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  borderRadius: '32px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 32px rgba(30,60,114,0.10)',
                  position: 'relative',
                  maxWidth: 480,
                  mx: 'auto',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(135deg, #00b4d8 0%, #ff9100 100%)',
                    opacity: 0.08,
                    zIndex: 1,
                  }}
                />
                <img
                  src={process.env.PUBLIC_URL + "./construction_site.jpg"}
                  alt="Construction Site"
                  style={{
                    width: '100%',
                    height: 400,
                    objectFit: 'cover',
                    borderRadius: '32px',
                    position: 'relative',
                    zIndex: 2,
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Get In Touch - Two Column Modern Layout */}
      <Box
        id="contact"
        sx={{
          py: 10,
          background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container>
          <Grid container spacing={6} alignItems="stretch" sx={{ minHeight: { md: 420, xs: 'auto' } }}>
            {/* Contact Info */}
            <Grid item xs={12} md={5} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography variant="h5" gutterBottom sx={{ color: '#1e3c72', fontWeight: 'bold', mb: 3 }}>
                  Visit Us
                </Typography>
                <Stack spacing={3} sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar sx={{ bgcolor: '#e3f6fd', color: '#00b4d8', width: 44, height: 44 }}>
                      <LocationOn />
                    </Avatar>
                    <Typography sx={{ color: '#1e3c72', fontWeight: 500 }}>RS bonding solution, India</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar sx={{ bgcolor: '#e3f6fd', color: '#00b4d8', width: 44, height: 44 }}>
                      <Phone />
                    </Avatar>
                    <Typography sx={{ color: '#1e3c72', fontWeight: 500 }}>+91 93500 05847</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar sx={{ bgcolor: '#e3f6fd', color: '#00b4d8', width: 44, height: 44 }}>
                      <Email />
                    </Avatar>
                    <Typography sx={{ color: '#1e3c72', fontWeight: 500 }}>gargrishabh011@gmail.com</Typography>
                  </Box>
                </Stack>
                <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
                  <IconButton 
                    sx={{ 
                      color: '#1e3c72', 
                      bgcolor: '#e3f6fd', 
                      '&:hover': { 
                        bgcolor: '#b2eaff', 
                        color: '#00b4d8' 
                      }, 
                      transition: 'all 0.2s' 
                    }}
                    onClick={() => window.open('https://wa.me/919350005847', '_blank')}
                  >
                    <WhatsApp />
                  </IconButton>
                  <IconButton 
                    sx={{ 
                      color: '#1e3c72', 
                      bgcolor: '#e3f6fd', 
                      '&:hover': { 
                        bgcolor: '#b2eaff', 
                        color: '#00b4d8' 
                      }, 
                      transition: 'all 0.2s' 
                    }}
                    onClick={() => window.location.href = 'mailto:gargrishabh011@gmail.com'}
                  >
                    <Email />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
            {/* Contact Form */}
            <Grid item xs={12} md={7} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Box
                sx={{
                  p: { xs: 2, md: 4 },
                  borderRadius: '24px',
                  background: '#fff',
                  boxShadow: '0 4px 24px rgba(30,60,114,0.10)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  mt: { xs: 4, md: 0 },
                }}
              >
                <Typography variant="h5" gutterBottom sx={{ color: '#1e3c72', fontWeight: 'bold', mb: 2 }}>
                  Send us a Message
                </Typography>
                <Box component="form" noValidate sx={{ mt: 2 }}>
                  <TextField
                    fullWidth
                    label="Name"
                    variant="outlined"
                    margin="normal"
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '&:hover fieldset': {
                          borderColor: '#00b4d8',
                        },
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    margin="normal"
                    required
                    type="email"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '&:hover fieldset': {
                          borderColor: '#00b4d8',
                        },
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    variant="outlined"
                    margin="normal"
                    required
                    multiline
                    rows={4}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '&:hover fieldset': {
                          borderColor: '#00b4d8',
                        },
                      },
                    }}
                  />
                  <Button
                    variant="contained"
                    size="large"
                    fullWidth
                    endIcon={<ArrowForward />}
                    sx={{
                      mt: 3,
                      background: 'linear-gradient(45deg, #00b4d8, #0077b6)',
                      borderRadius: '50px',
                      py: 1.5,
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                      textTransform: 'none',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
                        background: 'linear-gradient(45deg, #0077b6, #00b4d8)',
                      },
                    }}
                  >
                    Send Message
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Footer - Modern White Contrast */}
      <Box
        component="footer"
        sx={{
          py: 6,
          px: 2,
          mt: 'auto',
          background: '#fff',
          color: '#1e3c72',
          borderTop: '2px solid #e3eaf5',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Accent bar */}
        <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 6, background: 'linear-gradient(90deg,#00b4d8,#ff9100)', opacity: 0.18 }} />
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center" justifyContent="space-between">
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <Box sx={{ width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={process.env.PUBLIC_URL + "/logo.png"} alt="Duracrate Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </Box>
                <Typography variant="h6" color="#00b4d8" sx={{ fontWeight: 'bold', fontSize: '1.3rem' }}>
                  Duracrate
                </Typography>
              </Box>
              <Typography variant="body1" color="#1e3c72" paragraph sx={{ mb: 2, opacity: 0.85 }}>
                Leading manufacturer of premium tile adhesives and construction materials. Quality products for professional results.
              </Typography>
              <Typography variant="body2" color="#1976d2" sx={{ fontWeight: 500 }}>
                IS 15477:2019 | CML 9100108608
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" color="#00b4d8" gutterBottom sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
                Quick Links
              </Typography>
              <Grid container spacing={2}>
                {['Home', 'Products', 'About', 'Contact'].map((item) => (
                  <Grid item xs={6} key={item}>
                    <Button
                      onClick={(event) => handleScrollToSection(event, item.toLowerCase())}
                      sx={{
                        color: '#1e3c72',
                        fontWeight: 600,
                        '&:hover': {
                          color: '#00b4d8',
                          transform: 'translateX(5px)',
                        },
                        transition: 'all 0.3s ease',
                        justifyContent: 'flex-start',
                        fontSize: '1rem',
                      }}
                    >
                      {item}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
          <Box sx={{ mt: 4, pt: 2, borderTop: '1px solid #e3eaf5', textAlign: 'center' }}>
            <Typography variant="body1" color="#1e3c72" sx={{ fontWeight: 500, opacity: 0.8 }}>
              © 2025 Duracrate. All rights reserved. | Premium Construction Materials
            </Typography>
          </Box>
        </Container>
      </Box>

      <Dialog
        open={Boolean(selectedImage)}
        onClose={() => setSelectedImage(null)}
        maxWidth="lg"
        fullWidth
      >
        <DialogContent sx={{ position: 'relative', p: 0 }}>
          <IconButton
            onClick={() => setSelectedImage(null)}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
              },
            }}
          >
            <CloseIcon />
          </IconButton>
          <img
            src={selectedImage}
            alt="Enlarged product"
            style={{ width: '100%', height: 'auto' }}
          />
        </DialogContent>
      </Dialog>

      {/* Floating Action Buttons for Mobile */}
      <Box
        sx={{
          display: { xs: 'flex', md: 'none' },
          position: 'fixed',
          left: 16,
          top: '50%',
          transform: 'translateY(-50%)',
          flexDirection: 'column',
          gap: 2,
          zIndex: 1000,
        }}
      >
        <IconButton
          onClick={() => window.open('https://wa.me/919350005847', '_blank')}
          sx={{
            bgcolor: '#25D366',
            color: 'white',
            width: 50,
            height: 50,
            boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)',
            '&:hover': {
              bgcolor: '#128C7E',
              transform: 'translateX(8px)',
            },
            transition: 'all 0.3s ease',
            borderRadius: '12px',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: -2,
              left: -2,
              right: -2,
              bottom: -2,
              background: 'linear-gradient(45deg, #25D366, #128C7E)',
              borderRadius: '14px',
              zIndex: -1,
              opacity: 0,
              transition: 'opacity 0.3s ease',
            },
            '&:hover::before': {
              opacity: 1,
            },
          }}
        >
          <WhatsApp sx={{ fontSize: 28 }} />
        </IconButton>
        <IconButton
          onClick={() => window.location.href = 'mailto:gargrishabh011@gmail.com'}
          sx={{
            bgcolor: '#00b4d8',
            color: 'white',
            width: 50,
            height: 50,
            boxShadow: '0 4px 12px rgba(0, 180, 216, 0.3)',
            '&:hover': {
              bgcolor: '#0077b6',
              transform: 'translateX(8px)',
            },
            transition: 'all 0.3s ease',
            borderRadius: '12px',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: -2,
              left: -2,
              right: -2,
              bottom: -2,
              background: 'linear-gradient(45deg, #00b4d8, #0077b6)',
              borderRadius: '14px',
              zIndex: -1,
              opacity: 0,
              transition: 'opacity 0.3s ease',
            },
            '&:hover::before': {
              opacity: 1,
            },
          }}
        >
          <Email sx={{ fontSize: 28 }} />
        </IconButton>
      </Box>
    </Box>
  );
}

// Main App component with routing
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;
