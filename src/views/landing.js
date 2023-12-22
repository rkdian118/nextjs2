/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/inline-script-id */
/* eslint-disable import/no-unresolved */

'use client';

// material-ui
import { useTheme, styled } from '@mui/material/styles';

// project imports
import Customization from 'layout/Customization';
import AppBar from 'components/ui-component/extended/AppBar';
import { Grid } from '@mui/material';

import CustomizeSection from 'components/landingpage/CustomizeSection';
import FeatureSection from 'components/landingpage/FeatureSection';
import FooterSection from 'components/landingpage/FooterSection';
import Box from '@mui/material/Box';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './home.scss';
import './styles.scss';

const HeaderWrapper = styled('div')(({ theme }) => ({
  paddingTop: 30,
  overflowX: 'hidden',
  overflowY: 'clip',
  background:
    theme.palette.mode === 'dark'
      ? theme.palette.background.default
      : `linear-gradient(360deg, ${theme.palette.grey[100]} 1.09%, ${theme.palette.background.paper} 100%)`,
  [theme.breakpoints.down('md')]: {}
}));

const SectionWrapper = styled('div')({
  paddingTop: 50,
  paddingBottom: 50
});

const StyledSlide = styled(Box)({
  width: '100%',
  height: '100%',
  margin: '0 auto',
  border: '2px solid $ccc',
  backgroundPosition: 'center center',
  // backgroundImage: url('/assets/images/home/b1.png'),
  transition: 'all 1s ease-out 0s',
  backgroundSize: '100% 100%'
});

const StyledContainer = styled('div')({
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto'
});
// =============================|| LANDING MAIN ||============================= //

const Landing = () => {
  const theme = useTheme();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const slides = ['/assets/images/home/b1.png', '/assets/images/home/b2.png', '/assets/images/home/b3.jpg'];

  const images = slides.map((image, index) => (
    <StyledSlide key={index}>
      <img src={image} width="100%" height="520vh !important" alt={`Slide ${index + 1}`} />
    </StyledSlide>
  ));

  return (
    <>
      {/* 1. header and hero section */}
      <HeaderWrapper id="home">
        <AppBar />
        {/* <HeaderSection /> */}
      </HeaderWrapper>

      {/* 4. Developer Experience section */}
      <SectionWrapper
        sx={{
          bgcolor: theme.palette.mode === 'dark' ? 'background.default' : 'grey.100',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <div className="home-container">
          <section className="home-slider FadeInUp">
            <div className="home-container01">
              {/* slider */}
              <div className="slider_container">
                <StyledContainer>
                  <Grid container justifyContent="center">
                    <Grid item xs={12} sm={10} md={8} lg={12}>
                      <Slider {...settings}>{images}</Slider>
                    </Grid>
                  </Grid>
                </StyledContainer>
              </div>
              {/* slider */}
            </div>
          </section>
          <section className="home-section">
            <div className="home-container02">
              <h2 className="home-text colortexter">GAMES LIKE NEVER BEFORE</h2>
              <div
                className="home-features"
                style={{
                  borderBottom: '4px solid #80ff44'
                  // textUnderlineOffset: '8px'
                }}
              >
                <header className="feature feature-active home-feature">
                  <h3 className="home-text01">
                    <span>DREAM</span>
                    {/* <br /> */}
                  </h3>
                </header>
                <header className="feature feature-active2 home-feature1">
                  <h3 className="home-text04">BUILD</h3>
                </header>
                <header className="feature feature-active3 home-feature2">
                  <h3 className="home-text05">REPEAT</h3>
                </header>
              </div>
              <div className="home-note">
                <div className="home-content">
                  <main className="home-main">
                    <h2 className="home-heading h2er">Next-Gen Gaming Starts with WebMobril Gaming Studioz</h2>
                    <p className="home-paragraph texter">
                      WebMobril Gaming Studioz is an award-winning and globally recognized game development company that brings vast
                      expertise to build &amp; scale your vision through the most comprehensive solutions that guarantee the best user
                      experience for gamers. We offer state-of-the-art gaming solutions developed using leading-edge technologies like
                      AR/VR, NFT, 2D/3D, etc.
                    </p>
                  </main>
                </div>
                <div className="home-container03">
                  <div className="home-container04" />
                </div>
              </div>
            </div>
          </section>
          <div className={`showreel-container `}>
            <div className="showreel-container1">
              <video
                src="https://webmobril.com/wmgamingstudioz/GameShowreel.mp4"
                controls
                loop
                // autoPlay
                preload="metadata"
                className="showreel-video"
              ></video>
            </div>
          </div>
          <section className="home-section01">
            <div className="home-container05">
              <header className="home-header">
                <h2 className="home-text06 colortexter Heading h2er">Our Core Game Development Services.</h2>
                <span className="home-text07 texter">
                  Game development for us means creating an immersive and alluring life beyond simply designing and coding. We are an
                  overarching service provider for game development, where we ensure a perfect blend of creativity and technical skills to
                  formulate highly engaging games.
                </span>
              </header>
              <section className="home-note1">
                <div className="home-container06" />
                <div className="home-content1">
                  <div className="home-main1">
                    <div className="home-caption">
                      <span
                        className="home-section02 section-head colortexter colortext gtw"
                        style={{ fontSize: '20px', fontWeight: '700' }}
                      >
                        dedicated team
                      </span>
                    </div>
                    <div className="home-heading01">
                      <h2 className="section-heading H2 h2er wtg">Game Development</h2>
                      <p className="home-paragraph1 section-description texter" style={{ fontSize: '20px' }}>
                        We offer a comprehensive range of game development services using bleeding-edge technologies, toolsets and expertise
                        to offer lifelike experiences across multiple platforms like Mobile, PC, Web and Console.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <section className="home-note2">
                <div className="home-container07" />
                <div className="home-content2">
                  <main className="home-main2">
                    <header className="home-caption1">
                      <span className="home-section03 section-head texter gtw" style={{ fontSize: '20px', fontWeight: '700' }}>
                        New style
                      </span>
                    </header>
                    <main className="home-heading03">
                      <header className="home-header1">
                        <h2 className="section-heading H2 h2er wtg">Virtual Gaming</h2>
                        <p className="home-paragraph2 section-description texter" style={{ fontSize: '20px' }}>
                          We bring a highly immersive experience for gamers through interactive and exhilarating games encompassing striking
                          visuals and realistic features. We combine innovation and creativity to offer effective AR/VR/MR games.
                        </p>
                      </header>
                    </main>
                  </main>
                </div>
              </section>
              <section className="home-note3">
                <div className="home-container08" />
                <div className="home-content3">
                  <div className="home-main3">
                    <div className="home-caption2">
                      <span className="home-section04 section-head texter gtw" style={{ fontSize: '20px', fontWeight: '700' }}>
                        everything included
                      </span>
                    </div>
                    <div className="home-heading05">
                      <h2 className="section-heading H2 h2er wtg">Art, Design &amp; Animation</h2>
                      <p className="home-paragraph3 section-description texter" style={{ fontSize: '20px' }}>
                        We have professional acumen in 2D and 3D designing that makes us the most preferred name in the industry for
                        aesthetic and artistic characters and features designing.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <section className="home-note4">
                <div className="home-container09" />
                <div className="home-content4">
                  <main className="home-main4">
                    <header className="home-caption3">
                      <span className="home-section05 section-head texter gtw" style={{ fontSize: '20px', fontWeight: '700' }}>
                        more
                      </span>
                    </header>
                    <main className="home-heading07">
                      <header className="home-header2">
                        <h2 className="H2 section-heading h2er wtg">Outstaffing</h2>
                        <p className="home-paragraph4 section-description texter" style={{ fontSize: '20px' }}>
                          Need outsourcing services for game art creation or development? We can help you hire highly skilled game
                          developers, designers or animators fully dedicated to your project.
                        </p>
                      </header>
                    </main>
                  </main>
                </div>
              </section>
            </div>
          </section>
          <section className="home-section06">
            <div className="home-container10">
              <div
                className="home-card cursor_pointer"
                style={{
                  border: '5px solid',
                  borderImage: 'url(https://media.tenor.com/lveDtTE8Ek8AAAAM/rainbow-swirls-relaxing.gif) 1 stretch'
                }}
              >
                <div className="home-container11">
                  <span className="home-text08 colortexter">
                    <span className="h1er">150+</span>
                    <br />
                  </span>
                </div>
                <div className="home-container12">
                  <span className="home-text11 colortexter">Game deployed</span>
                </div>
              </div>
              <div
                className="home-card1 cursor_pointer"
                style={{
                  border: '5px solid',
                  borderImage: 'url(https://media.tenor.com/lveDtTE8Ek8AAAAM/rainbow-swirls-relaxing.gif) 1 stretch'
                }}
              >
                <div className="home-container13">
                  <span className="home-text12 colortexter">
                    <span className="h1er">200+</span>
                    <br />
                  </span>
                </div>
                <div className="home-container14">
                  <span className="home-text15 colortexter">Game Delivered</span>
                </div>
              </div>
              <div
                className="home-card2 cursor_pointer"
                style={{
                  border: '5px solid',
                  borderImage: 'url(https://media.tenor.com/lveDtTE8Ek8AAAAM/rainbow-swirls-relaxing.gif) 1 stretch'
                }}
              >
                <div className="home-container15">
                  <span className="home-text16 colortexter">
                    <span className="h1er">100M+</span>
                    <br />
                  </span>
                </div>
                <div className="home-container16">
                  <span className="home-text19 colortexter">revenue added</span>
                </div>
              </div>
              <div
                className="home-card3 cursor_pointer"
                style={{
                  border: '5px solid',
                  borderImage: 'url(https://media.tenor.com/lveDtTE8Ek8AAAAM/rainbow-swirls-relaxing.gif) 1 stretch'
                }}
              >
                <div className="home-container17">
                  <span className="home-text20 colortexter">
                    <span className="h1er">96%</span>
                    <br />
                  </span>
                </div>
                <div className="home-container18">
                  <span className="home-text23 colortexter">customer satisfaction</span>
                </div>
              </div>
            </div>
          </section>
          {/* <OurApps rootClassName="our-apps-root-class-name"></OurApps> */}
          <div className="worked-container">
            <div className="transparent">
              <span className="Heading colortexter h2er span1">Top Notch Companies We Worked For</span>
              <div className="grider">
                <img
                  className="com-root-class-name1"
                  src="/assets/images/home/Companies/i (4).png"
                  width="250px"
                  height="250px"
                  style={{
                    border: '5px solid',
                    borderImage: 'url(https://media.tenor.com/lveDtTE8Ek8AAAAM/rainbow-swirls-relaxing.gif) 1 stretch'
                  }}
                />
                <img
                  className="com-root-class-name4"
                  src="/assets/images/home/Companies/i (1).png"
                  width="250px"
                  height="250px"
                  style={{
                    border: '5px solid',
                    borderImage: 'url(https://media.tenor.com/lveDtTE8Ek8AAAAM/rainbow-swirls-relaxing.gif) 1 stretch'
                  }}
                />
                <img
                  className="com-root-class-name3"
                  src="/assets/images/home/Companies/i (2).png"
                  width="250px"
                  height="250px"
                  style={{
                    border: '5px solid',
                    borderImage: 'url(https://media.tenor.com/lveDtTE8Ek8AAAAM/rainbow-swirls-relaxing.gif) 1 stretch'
                  }}
                />
                <img
                  className="com-root-class-name2"
                  src="/assets/images/home/Companies/i (3).png"
                  width="250px"
                  height="250px"
                  style={{
                    border: '5px solid',
                    borderImage: 'url(https://media.tenor.com/lveDtTE8Ek8AAAAM/rainbow-swirls-relaxing.gif) 1 stretch'
                  }}
                />
                <img
                  className="com-root-class-name15"
                  src="/assets/images/home/Companies/i (5).png"
                  width="250px"
                  height="250px"
                  style={{
                    border: '5px solid',
                    borderImage: 'url(https://media.tenor.com/lveDtTE8Ek8AAAAM/rainbow-swirls-relaxing.gif) 1 stretch'
                  }}
                />
                <img
                  className="com-root-class-name14"
                  src="/assets/images/home/Companies/i (6).png"
                  width="250px"
                  height="250px"
                  style={{
                    border: '5px solid',
                    borderImage: 'url(https://media.tenor.com/lveDtTE8Ek8AAAAM/rainbow-swirls-relaxing.gif) 1 stretch'
                  }}
                />
                <img
                  className="com-root-class-name13"
                  src="/assets/images/home/Companies/i (7).png"
                  width="250px"
                  height="250px"
                  style={{
                    border: '5px solid',
                    borderImage: 'url(https://media.tenor.com/lveDtTE8Ek8AAAAM/rainbow-swirls-relaxing.gif) 1 stretch'
                  }}
                />
                <div
                  className="last_div colortexter border-image"
                  style={{
                    border: '5px solid',
                    borderImage: 'url(https://media.tenor.com/lveDtTE8Ek8AAAAM/rainbow-swirls-relaxing.gif) 1 stretch'
                  }}
                >
                  <span>+100</span>
                </div>
              </div>
            </div>
          </div>

          <div className="home-container19">
            <div className="home-container20">
              <section className="home-section07">
                <div className="home-cube">
                  <div className="home-top side" />
                  <div className="home-front side" />
                  <div className="home-left side" />
                </div>
                <main
                  id="color-border"
                  className="home-banner"
                  style={{
                    border: '5px solid',
                    borderImage: 'url(https://media.tenor.com/lveDtTE8Ek8AAAAM/rainbow-swirls-relaxing.gif) 1 stretch'
                  }}
                >
                  <div className="home-container21">
                    <div className="home-header3">
                      <h2 className="home-heading09 Heading section-heading1 px30">Let&apos;s Have a Deal</h2>
                      <p className="home-description section-description texter" style={{ maxWidth: '700px' }}>
                        Let’s work together to win the race in creating fascinating games
                      </p>
                    </div>
                  </div>
                </main>
              </section>
              <section className="home-award-section">
                <div className="home-container22">
                  <div className="home-container23">
                    <span className="home-text24 Heading colortext colortexter">
                      <span className="px30">Prominent Business Awards &amp; Recognitions</span>
                    </span>
                  </div>
                  <div className="home-award-grid">
                    <div className="home-container24">
                      <div
                        className="home-container25"
                        style={{
                          border: '5px solid',
                          borderImage: 'url(https://media.tenor.com/lveDtTE8Ek8AAAAM/rainbow-swirls-relaxing.gif) 1 stretch'
                        }}
                      >
                        <span className="home-text28 px30">Business Connect</span>
                        <span className="home-text29 h2erc">Fastest Growing Game App Development Company</span>
                      </div>
                    </div>
                    <div className="home-container26">
                      <div
                        className="home-container27"
                        style={{
                          border: '5px solid',
                          borderImage: 'url(https://media.tenor.com/lveDtTE8Ek8AAAAM/rainbow-swirls-relaxing.gif) 1 stretch'
                        }}
                      >
                        <span className="home-text30 px30">Edu Excellence Awards</span>
                        <span className="home-text31 h2erc">Best App Development Company</span>
                      </div>
                    </div>
                    <div className="home-container28">
                      <div
                        className="home-container29"
                        style={{
                          border: '5px solid',
                          borderImage: 'url(https://media.tenor.com/lveDtTE8Ek8AAAAM/rainbow-swirls-relaxing.gif) 1 stretch'
                        }}
                      >
                        <span className="home-text32 px30">Small Business Award</span>
                        <span className="home-text33 h2erc">Rising Young Entrepreneur of the Year</span>
                      </div>
                    </div>
                    <div className="home-container30">
                      <div
                        className="home-container31"
                        style={{
                          border: '5px solid',
                          borderImage: 'url(https://media.tenor.com/lveDtTE8Ek8AAAAM/rainbow-swirls-relaxing.gif) 1 stretch'
                        }}
                      >
                        <span className="home-text34 px30">BGIAA</span>
                        <span className="home-text35 h2erc">Business Global Icon Achiever Award</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="home-section08">
                <div className="home-cube1">
                  <div className="home-top1 side" />
                  <div className="home-front1 side" />
                  <div className="home-left1 side" />
                </div>
                <main className="home-pricing">
                  <header className="home-header4">
                    <header className="home-left2">
                      <h2 className="home-heading10 Heading colortexter colortext px28">Start small, think big</h2>
                    </header>
                    <div className="home-right">
                      <p className="home-paragraph5 section-description">
                        <span className="px15">Every project is prority for us weather it&apos;s small or big,</span>
                        <br />
                        <span className="px15">tell us your idea and we&apos;ll make it reality.</span>
                        <br />
                      </p>
                    </div>
                  </header>
                </main>
              </section>
            </div>

            {/* Client feedbacks */}

            <section className="client-feedback-old-section">
              <div className="client-feedback-old-container">
                <header className="client-feedback-old-header">
                  <header className="client-feedback-old-left">
                    <h2 className="Heading colortexter colortext px30">What clients say about us</h2>
                  </header>
                  <div className="client-feedback-old-right">
                    <p className="section-description Content colortexter texter" style={{ textAlign: 'center' }}>
                      Gaining a competitive edge through our customer centric approach and delivering exemplary games, we have managed to
                      build a strong clientele relationship.
                    </p>
                  </div>
                </header>
                <main className="client-feedback-old-cards" style={{ lineHeight: '0rem' }}>
                  <div className="client-feedback-old-container1">
                    <section className="review-card">
                      <div className="review-stars">
                        <svg viewBox="0 0 1024 1024" className="review-icon">
                          <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z" className=""></path>
                        </svg>
                        <svg viewBox="0 0 1024 1024" className="review-icon02">
                          <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z" className=""></path>
                        </svg>
                        <svg viewBox="0 0 1024 1024" className="review-icon04">
                          <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z" className=""></path>
                        </svg>
                        <svg viewBox="0 0 1024 1024" className="review-icon06">
                          <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z" className=""></path>
                        </svg>
                        <svg viewBox="0 0 1024 1024" className="review-icon08">
                          <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z" className=""></path>
                        </svg>
                      </div>
                      <main className="review-content">
                        <p className="review-quote texter">
                          I am very pleased with their performance, particularly their initiative and creativity. They are a steady source
                          of good ideas to build site traffic and are clear as to my role and their&apos;s. They generally do most of the
                          work themselves.
                        </p>
                        <div className="review-author">
                          <div className="review-details">
                            <h1 className="review-author1">Gavin Ashworth</h1>
                            <label className="review-position">Chief Executive Officer</label>
                          </div>
                        </div>
                      </main>
                    </section>
                    <section className="review-card">
                      <div className="review-stars">
                        <svg viewBox="0 0 1024 1024" className="review-icon">
                          <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z" className=""></path>
                        </svg>
                        <svg viewBox="0 0 1024 1024" className="review-icon02">
                          <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z" className=""></path>
                        </svg>
                        <svg viewBox="0 0 1024 1024" className="review-icon04">
                          <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z" className=""></path>
                        </svg>
                        <svg viewBox="0 0 1024 1024" className="review-icon06">
                          <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z" className=""></path>
                        </svg>
                        <svg viewBox="0 0 1024 1024" className="review-icon08">
                          <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z" className=""></path>
                        </svg>
                      </div>
                      <main className="review-content">
                        <p className="review-quote texter">
                          The experience with them is awesome and have a good rapport. The entire team is highly responsive, reliable as
                          well as hardworking. The team is extremely skilled at web design and creation. The development team was punctual
                          and charged affordable rates.
                        </p>
                        <div className="review-author">
                          <div className="review-details">
                            <h1 className="review-author1">Gramey</h1>
                            <label className="review-position"></label>
                          </div>
                        </div>
                      </main>
                    </section>
                    <section className="review-card">
                      <div className="review-stars">
                        <svg viewBox="0 0 1024 1024" className="review-icon">
                          <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z" className=""></path>
                        </svg>
                        <svg viewBox="0 0 1024 1024" className="review-icon02">
                          <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z" className=""></path>
                        </svg>
                        <svg viewBox="0 0 1024 1024" className="review-icon04">
                          <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z" className=""></path>
                        </svg>
                        <svg viewBox="0 0 1024 1024" className="review-icon06">
                          <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z" className=""></path>
                        </svg>
                        <svg viewBox="0 0 1024 1024" className="review-icon08">
                          <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z" className=""></path>
                        </svg>
                      </div>
                      <main className="review-content">
                        <p className="review-quote texter">
                          It was a challenging project and while we didn&apos;t get everything in, The team did a good job and was
                          responsive. Very happy with their commitment to making sure we released and staying up late and over the weekend.
                          That&apos;s the sign of a great partnership.
                        </p>
                        <div className="review-author">
                          <div className="review-details">
                            <h1 className="review-author1">Brent McKendry</h1>
                            <label className="review-position">CEO at FINCO TECHNOLOGY</label>
                          </div>
                        </div>
                      </main>
                    </section>
                  </div>
                  <div className="client-feedback-old-container2">
                    <section className="review-card">
                      <div className="review-stars">
                        <svg viewBox="0 0 1024 1024" className="review-icon">
                          <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z" className=""></path>
                        </svg>
                        <svg viewBox="0 0 1024 1024" className="review-icon02">
                          <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z" className=""></path>
                        </svg>
                        <svg viewBox="0 0 1024 1024" className="review-icon04">
                          <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z" className=""></path>
                        </svg>
                        <svg viewBox="0 0 1024 1024" className="review-icon06">
                          <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z" className=""></path>
                        </svg>
                        <svg viewBox="0 0 1024 1024" className="review-icon08">
                          <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z" className=""></path>
                        </svg>
                      </div>
                      <main className="review-content">
                        <p className="review-quote texter">
                          We have worked with Webmobril since 2017. Yes, we have our ups and downs. They never fail to give their utmost
                          best. They are attentive to my needs and go the extra mile at no additional cost. They are committed to improving
                          their service and very open to receiving feedback. It has been an amazing journey.
                        </p>
                        <div className="review-author">
                          <div className="review-details">
                            <h1 className="review-author1">Ben Koh</h1>
                            <label className="review-position">Founder &amp; Managing Director</label>
                          </div>
                        </div>
                      </main>
                    </section>
                    <section className="review-card">
                      <div className="review-stars">
                        <svg viewBox="0 0 1024 1024" className="review-icon">
                          <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z" className=""></path>
                        </svg>
                        <svg viewBox="0 0 1024 1024" className="review-icon02">
                          <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z" className=""></path>
                        </svg>
                        <svg viewBox="0 0 1024 1024" className="review-icon04">
                          <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z" className=""></path>
                        </svg>
                        <svg viewBox="0 0 1024 1024" className="review-icon06">
                          <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z" className=""></path>
                        </svg>
                        <svg viewBox="0 0 1024 1024" className="review-icon08">
                          <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z" className=""></path>
                        </svg>
                      </div>
                      <main className="review-content">
                        <p className="review-quote texter">
                          WebMobril has done an amazing job on the creation Of my computer platform. My knees were very specific and I
                          didn’t know if I could find programmers that could program the nuance I needed in my platform but WebMobril pulled
                          it off with flying colors. Being a programmer myself I was able to appreciate the challenge I gave the team at
                          webmobril. They were able to understand exactly what I needed and then delivered it with a minimum of oversight.
                        </p>
                        <div className="review-author">
                          <div className="review-details">
                            <h1 className="review-author1">John Alexander</h1>
                            <label className="review-position">Author, Real Estate Investor, Real Estate Trainer</label>
                          </div>
                        </div>
                      </main>
                    </section>
                  </div>
                  <div className="client-feedback-old-container2">
                    <section className="review-card">
                      <div className="review-stars">
                        <svg viewBox="0 0 1024 1024" className="review-icon">
                          <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z" className=""></path>
                        </svg>
                        <svg viewBox="0 0 1024 1024" className="review-icon02">
                          <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z" className=""></path>
                        </svg>
                        <svg viewBox="0 0 1024 1024" className="review-icon04">
                          <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z" className=""></path>
                        </svg>
                        <svg viewBox="0 0 1024 1024" className="review-icon06">
                          <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z" className=""></path>
                        </svg>
                        <svg viewBox="0 0 1024 1024" className="review-icon08">
                          <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z" className=""></path>
                        </svg>
                      </div>
                      <main className="review-content">
                        <p className="review-quote texter">
                          Thank you for bringing my app to existence with your patience, understanding, and resourcefulness. In the
                          beginning, I have doubts as to whether this is feasible after all, we are continents apart and can only meet and
                          talk over the internet. But step by step, an idea becomes a fun game app available both in the Apple App Store and
                          Google Play Store. Swaraj, thank you for using your technical skill to manage moving musical notes.
                        </p>
                        <div className="review-author">
                          <div className="review-details">
                            <h1 className="review-author1">Amanda Pi</h1>
                            <label className="review-position">Founder</label>
                          </div>
                        </div>
                      </main>
                    </section>
                    <section className="review-card">
                      <div className="review-stars">
                        <svg viewBox="0 0 1024 1024" className="review-icon">
                          <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z" className=""></path>
                        </svg>
                        <svg viewBox="0 0 1024 1024" className="review-icon02">
                          <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z" className=""></path>
                        </svg>
                        <svg viewBox="0 0 1024 1024" className="review-icon04">
                          <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z" className=""></path>
                        </svg>
                        <svg viewBox="0 0 1024 1024" className="review-icon06">
                          <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z" className=""></path>
                        </svg>
                        <svg viewBox="0 0 1024 1024" className="review-icon08">
                          <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z" className=""></path>
                        </svg>
                      </div>
                      <main className="review-content">
                        <p className="review-quote texter">
                          Swaraj has a team of great young developers. In each conversation, they were very enthusiastic and eager to help
                          build a good product. They exceeded expectations in the amount of work done. They sometimes needed reminders on
                          the timelines for deliveries, but all work was completed. The only reason we did not give 5 stars is that we would
                          have preferred them to be more proactive in fixing bugs. However, all bugs were fixed when externally prompted. We
                          work with them again on future projects.
                        </p>
                        <div className="review-author">
                          <div className="review-details">
                            <h1 className="review-author1">Oxford VR</h1>
                            <label className="review-position">CEO</label>
                          </div>
                        </div>
                      </main>
                    </section>
                  </div>
                  {/* <div className="client-feedback-old-container3"></div> */}
                </main>
                <div className="client-feedback-old-view-more">
                  <p className="client-feedback-old-text">View more</p>
                </div>
              </div>
            </section>

            <section className="home-section09">
              <div className="home-container32">
                <header className="home-header5">
                  <h2 className="home-heading11 Heading section-heading1 px30">OUR TECH PARTNERS</h2>
                </header>
                <main className="home-cards">
                  <img
                    src="/assets/images/home/CompanyCards/0.png"
                    className="company-card-root-class-name"
                    width={261}
                    height={133}
                    style={{ objectFit: 'contain', border: '2px solid #ccc', background: '#fff', borderRadius: '10px' }}
                  />
                  <img
                    src="/assets/images/home/CompanyCards/1.png"
                    className="company-card-root-class-name1"
                    width={261}
                    height={133}
                    style={{ objectFit: 'contain', border: '2px solid #ccc', background: '#fff', borderRadius: '10px' }}
                  />
                  <img
                    src="/assets/images/home/CompanyCards/2.png"
                    className="company-card-root-class-name2"
                    width={261}
                    height={133}
                    style={{ objectFit: 'contain', border: '2px solid #ccc', background: '#fff', borderRadius: '10px' }}
                  />
                  <img
                    src="/assets/images/home/CompanyCards/3.jfif"
                    className="company-card-root-class-name3"
                    width={261}
                    height={133}
                    style={{ objectFit: 'contain', border: '2px solid #ccc', background: '#fff', borderRadius: '10px' }}
                  />
                  <img
                    src="/assets/images/home/CompanyCards/4.png"
                    className="company-card-root-class-name4"
                    width={261}
                    height={133}
                    style={{ objectFit: 'contain', border: '2px solid #ccc', background: '#fff', borderRadius: '10px' }}
                  />
                  <img
                    src="/assets/images/home/CompanyCards/5.png"
                    className="company-card-root-class-name5"
                    width={261}
                    height={133}
                    style={{ objectFit: 'contain', border: '2px solid #ccc', background: '#fff', borderRadius: '10px' }}
                  />
                  <img
                    src="/assets/images/home/CompanyCards/6.png"
                    className="company-card-root-class-name6"
                    width={261}
                    height={133}
                    style={{ objectFit: 'contain', border: '2px solid #ccc', background: '#fff', borderRadius: '10px' }}
                  />
                  <img
                    src="/assets/images/home/CompanyCards/7.jpg"
                    className="company-card-root-class-name7"
                    width={261}
                    height={133}
                    style={{ objectFit: 'contain', border: '2px solid #ccc', background: '#fff', borderRadius: '10px' }}
                  />
                  <div className="home-container33">
                    <span className="home-text40 colortexter">And More...</span>
                  </div>
                </main>
              </div>
            </section>
            <section className="home-section10">
              <div className="home-container34">
                <main className="home-content5">
                  <header className="home-header6">
                    <h2 className="home-heading12 Heading section-heading1 px28">Think Game, Think WebMobril Gaming Studioz.</h2>
                    <span className="home-text41 px15">We have delivered 200+ exceptional and exemplary games and counting.</span>
                  </header>
                </main>
              </div>
            </section>
          </div>
        </div>
      </SectionWrapper>

      {/* footer section */}
      <SectionWrapper sx={{ bgcolor: theme.palette.mode === 'dark' ? 'background.default' : 'dark.900', pb: 0 }}>
        <FooterSection />
      </SectionWrapper>
      <Customization />
    </>
  );
};

export default Landing;
