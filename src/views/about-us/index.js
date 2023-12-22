/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable import/no-unresolved */

'use client';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
// project imports
import Customization from 'layout/Customization';
import AppBar from 'components/ui-component/extended/AppBar';

import FooterSection from 'components/landingpage/FooterSection';
// import vr1 from '../../../public/assets/images/website_images/VR.jpg';
import './about.scss';
import '../styles.scss';

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

// =============================|| LANDING MAIN ||============================= //

const Index = () => {
  const theme = useTheme();

  return (
    <>
      {/* 1. header and hero section */}
      <HeaderWrapper id="ourwork">
        <AppBar />
      </HeaderWrapper>
      <SectionWrapper sx={{ bgcolor: theme.palette.mode === 'dark' ? 'background.default' : 'dark.900', pb: 0 }}>
        <div className="about-us-container01">
          <div className="about-us-container02">
            <div className="about-us-container03">
              <div className="about-us-container04">
                <section className="about-us-container05">
                  <div className="about-us-container06">
                    <div className="about-us-container07">
                      <span className="about-us-text colortexter">Transform Your Vision into Stark Reality</span>
                      <span className="about-us-text01">
                        We have a team of experts skilled in crafting and delivering endearing gaming solutions. We offer game development
                        services at their best.
                      </span>
                    </div>
                  </div>
                  <div className="about-us-container08">
                    <img alt="image" src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg" className="about-us-image" />
                  </div>
                </section>
              </div>
            </div>
            <section className="about-us-container09">
              <div className="about-us-container10">
                <div className="about-us-container11">
                  <div className="about-us-container12">
                    <svg viewBox="0 0 804.5714285714286 1024" className="about-us-icon">
                      <path d="M741.714 755.429c0 14.286-5.714 28.571-16 38.857l-77.714 77.714c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-168-168-168 168c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-77.714-77.714c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l168-168-168-168c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168 168-168c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857s-5.714 28.571-16 38.857l-168 168 168 168c10.286 10.286 16 24.571 16 38.857z" />
                    </svg>
                    <svg viewBox="0 0 877.7142857142857 1024" className="about-us-icon02">
                      <path d="M438.857 201.143c-171.429 0-310.857 139.429-310.857 310.857s139.429 310.857 310.857 310.857 310.857-139.429 310.857-310.857-139.429-310.857-310.857-310.857zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857v0c242.286 0 438.857 196.571 438.857 438.857z" />
                    </svg>
                    <svg viewBox="0 0 1024 1024" className="about-us-icon04">
                      <path d="M475.648 186.624c3.115-5.248 7.893-10.325 14.251-14.165 10.069-6.101 21.589-7.595 32.256-4.949s20.224 9.216 26.197 19.115l361.216 603.008c3.285 5.589 5.461 12.715 5.547 20.565 0.128 11.776-4.48 22.443-12.16 30.293s-18.261 12.715-29.568 12.843h-722.645c-6.485-0.043-13.696-1.749-20.523-5.717-10.197-5.888-17.024-15.317-19.883-25.899s-1.621-22.144 3.925-31.787zM402.432 142.763l-361.387 603.307c-18.005 31.189-21.589 66.133-13.141 97.707s29.013 60.075 59.648 77.739c19.797 11.435 41.643 17.067 62.933 17.152h722.901c35.797-0.384 67.712-15.104 90.581-38.485s36.864-55.595 36.48-90.923c-0.256-22.869-6.528-44.544-17.323-62.891l-361.557-603.605c-18.432-30.421-47.36-50.389-79.104-58.155s-66.603-3.456-96.811 14.891c-18.304 11.093-33.067 26.24-43.179 43.264z" />
                    </svg>
                    <svg viewBox="0 0 1024 1024" className="about-us-icon06">
                      <path d="M768 768v-512h-512v512h512zM768 170q34 0 60 26t26 60v512q0 34-26 60t-60 26h-512q-34 0-60-26t-26-60v-512q0-34 26-60t60-26h512z" />
                    </svg>
                  </div>
                  <div className="about-us-container13">
                    <img alt="image" src="https://iili.io/HEpIRVI.jpg" className="about-us-image1" />
                  </div>
                </div>
                <div className="about-us-container14">
                  <span className="about-us-text02 colortexter">Who We Are</span>
                  <span className="about-us-text03 texter">
                    Realizing the enormous potential in the gaming industry, we at WebMobril Gaming Studioz encourage people to come forward
                    with their ideas that we can turn into action. We create the most immersive and awe-inspiring games customized to the
                    specific requirements of our clients across the globe. We strive to provide avant-garde gaming solutions to every
                    client. For this, we have got the best squad of designers, developers and strategists at work, well adapted and trained
                    with evolving technologies.
                  </span>
                </div>
              </div>
              <div className="about-us-container15">
                <div className="about-us-container16">
                  <span className="about-us-text04 colortexter pc40">Who We Are</span>
                  <span className="about-us-text05 texter">
                    Realizing the enormous potential in the gaming industry, we at WebMobril Gaming Studioz encourage people to come forward
                    with their ideas that we can turn into action. We create the most immersive and awe-inspiring games customized to the
                    specific requirements of our clients across the globe. We strive to provide avant-garde gaming solutions to every
                    client. For this, we have got the best squad of designers, developers and strategists at work, well adapted and trained
                    with evolving technologies.
                  </span>
                </div>
                <div className="about-us-container17">
                  <div className="about-us-container18">
                    <svg viewBox="0 0 804.5714285714286 1024" className="about-us-icon08">
                      <path d="M741.714 755.429c0 14.286-5.714 28.571-16 38.857l-77.714 77.714c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-168-168-168 168c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-77.714-77.714c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l168-168-168-168c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168 168-168c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857s-5.714 28.571-16 38.857l-168 168 168 168c10.286 10.286 16 24.571 16 38.857z" />
                    </svg>
                    <svg viewBox="0 0 877.7142857142857 1024" className="about-us-icon10">
                      <path d="M438.857 201.143c-171.429 0-310.857 139.429-310.857 310.857s139.429 310.857 310.857 310.857 310.857-139.429 310.857-310.857-139.429-310.857-310.857-310.857zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857v0c242.286 0 438.857 196.571 438.857 438.857z" />
                    </svg>
                    <svg viewBox="0 0 1024 1024" className="about-us-icon12">
                      <path d="M475.648 186.624c3.115-5.248 7.893-10.325 14.251-14.165 10.069-6.101 21.589-7.595 32.256-4.949s20.224 9.216 26.197 19.115l361.216 603.008c3.285 5.589 5.461 12.715 5.547 20.565 0.128 11.776-4.48 22.443-12.16 30.293s-18.261 12.715-29.568 12.843h-722.645c-6.485-0.043-13.696-1.749-20.523-5.717-10.197-5.888-17.024-15.317-19.883-25.899s-1.621-22.144 3.925-31.787zM402.432 142.763l-361.387 603.307c-18.005 31.189-21.589 66.133-13.141 97.707s29.013 60.075 59.648 77.739c19.797 11.435 41.643 17.067 62.933 17.152h722.901c35.797-0.384 67.712-15.104 90.581-38.485s36.864-55.595 36.48-90.923c-0.256-22.869-6.528-44.544-17.323-62.891l-361.557-603.605c-18.432-30.421-47.36-50.389-79.104-58.155s-66.603-3.456-96.811 14.891c-18.304 11.093-33.067 26.24-43.179 43.264z" />
                    </svg>
                    <svg viewBox="0 0 1024 1024" className="about-us-icon14">
                      <path d="M768 768v-512h-512v512h512zM768 170q34 0 60 26t26 60v512q0 34-26 60t-60 26h-512q-34 0-60-26t-26-60v-512q0-34 26-60t60-26h512z" />
                    </svg>
                  </div>
                  <div className="about-us-container19">
                    <img alt="image" src="https://iili.io/HEpIRVI.jpg" className="about-us-image2" />
                  </div>
                </div>
              </div>
              <div className="about-us-container20">
                <div className="about-us-container21">
                  <span className="about-us-text06 colortexter pc40">What We Do</span>
                  <span className="about-us-text07 texter">
                    We are one of the fastest growing game development companies supporting multiplatform games across the vast expanse of
                    Mobile, PC, Web and Console gaming. We have pioneered game development with expertise in Augmented Reality (AR), Virtual
                    Reality (VR), Unity, Blockchain, development frameworks, UI/UX, NFT, Metaverse, etc.
                  </span>
                </div>
                <div className="about-us-container22">
                  <div className="about-us-container23">
                    <svg viewBox="0 0 804.5714285714286 1024" className="about-us-icon16">
                      <path d="M741.714 755.429c0 14.286-5.714 28.571-16 38.857l-77.714 77.714c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-168-168-168 168c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-77.714-77.714c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l168-168-168-168c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168 168-168c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857s-5.714 28.571-16 38.857l-168 168 168 168c10.286 10.286 16 24.571 16 38.857z" />
                    </svg>
                    <svg viewBox="0 0 877.7142857142857 1024" className="about-us-icon18">
                      <path d="M438.857 201.143c-171.429 0-310.857 139.429-310.857 310.857s139.429 310.857 310.857 310.857 310.857-139.429 310.857-310.857-139.429-310.857-310.857-310.857zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857v0c242.286 0 438.857 196.571 438.857 438.857z" />
                    </svg>
                    <svg viewBox="0 0 1024 1024" className="about-us-icon20">
                      <path d="M475.648 186.624c3.115-5.248 7.893-10.325 14.251-14.165 10.069-6.101 21.589-7.595 32.256-4.949s20.224 9.216 26.197 19.115l361.216 603.008c3.285 5.589 5.461 12.715 5.547 20.565 0.128 11.776-4.48 22.443-12.16 30.293s-18.261 12.715-29.568 12.843h-722.645c-6.485-0.043-13.696-1.749-20.523-5.717-10.197-5.888-17.024-15.317-19.883-25.899s-1.621-22.144 3.925-31.787zM402.432 142.763l-361.387 603.307c-18.005 31.189-21.589 66.133-13.141 97.707s29.013 60.075 59.648 77.739c19.797 11.435 41.643 17.067 62.933 17.152h722.901c35.797-0.384 67.712-15.104 90.581-38.485s36.864-55.595 36.48-90.923c-0.256-22.869-6.528-44.544-17.323-62.891l-361.557-603.605c-18.432-30.421-47.36-50.389-79.104-58.155s-66.603-3.456-96.811 14.891c-18.304 11.093-33.067 26.24-43.179 43.264z" />
                    </svg>
                    <svg viewBox="0 0 1024 1024" className="about-us-icon22">
                      <path d="M768 768v-512h-512v512h512zM768 170q34 0 60 26t26 60v512q0 34-26 60t-60 26h-512q-34 0-60-26t-26-60v-512q0-34 26-60t60-26h512z" />
                    </svg>
                  </div>
                  <div className="about-us-container24">
                    <img alt="image" src="https://iili.io/HEpzW3g.jpg" className="about-us-image3" />
                  </div>
                </div>
              </div>
            </section>
            <section className="about-us-container25">
              <div className="about-us-container26">
                {/* <div className="about-us-container27">
                <span className="about-us-text08 colortexter pc40">
                  Our Vision
                </span>
                <span className="about-us-text09">
                  <span className="about-us-text10 texter">
                    To provide top-of-the-line gaming solutions to every client
                    that are backed by disruptive and robust technologies. We
                    are committed to creating a perfect balance between
                    cutting-edge technologies and our expertise, with the
                    objective of adding value to the life of customers.
                  </span>
                  <br className="about-us-text11"></br>
                  <span className="about-us-text12 texter">
                    For employees, we are establishing WebMobril Gaming Studioz
                    as an ideal workplace by promoting a clear and transparent
                    process for decision-making and conducting workshops to
                    upgrade to support their skill development
                  </span>
                </span>
              </div> */}
                <div className="about-us-container21m">
                  <span className="about-us-text06 colortexter pc40">Our Vision</span>
                  <span className="about-us-text07 texter">
                    To provide top-of-the-line gaming solutions to every client that are backed by disruptive and robust technologies. We
                    are committed to creating a perfect balance between cutting-edge technologies and our expertise, with the objective of
                    adding value to the life of customers.
                  </span>
                  <span className="about-us-text07 texter">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;For employees, we are establishing WebMobril
                    Gaming Studioz as an ideal workplace by promoting a clear and transparent process for decision-making and conducting
                    workshops to upgrade to support their skill development
                  </span>
                </div>
                <div className="about-us-container28">
                  <img alt="image" src="/assets/images/aboutus_image2-1500w.png" loading="eager" className="about-us-image4" id="object1" />
                </div>
              </div>
              <div className="about-us-container29">
                <div className="about-us-container30">
                  <img alt="image" src="/assets/images/aboutus_image3-1500w.png" loading="eager" className="about-us-image5" />
                </div>
                <div className="about-us-container14">
                  <span className="about-us-text02 colortexter">Our Mission</span>
                  <span className="about-us-text03 texter">
                    To redefine the gaming industry by delivering value-driven and ground-breaking gaming solutions to our customers, which
                    give them a competitive edge. Our mission is to add a constant value to our stakeholders.
                  </span>
                  <span className="about-us-text03 texter">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We are focused on creating an environment for
                    our employees that supports new ideas and encourages experiments to innovate new things.
                  </span>
                </div>
                {/* <div className="about-us-container31">
                <span className="about-us-text13 colortexter">Our Mission2</span>
                <span className="about-us-text14">
                  <span>
                    To redefine the gaming industry by delivering value-driven
                    and ground-breaking gaming solutions to our customers, which
                    give them a competitive edge. Our mission is to add a
                    constant value to our stakeholders.
                  </span>
                  <br className="about-us-text16"></br>
                  <span>
                    We are focused on creating an environment for our employees
                    that supports new ideas and encourages experiments to
                    innovate new things.
                  </span>
                </span>
              </div> */}
              </div>
              <div className="about-us-container32">
                <div className="about-us-container33">
                  <span className="about-us-text18 colortexter pc40">Our Mission</span>
                  <span className="about-us-text19 texter">
                    <span>
                      To redefine the gaming industry by delivering value-driven and ground-breaking gaming solutions to our customers,
                      which give them a competitive edge. Our mission is to add a constant value to our stakeholders.
                    </span>
                    <br className="about-us-text21" />
                    <span>
                      We are focused on creating an environment for our employees that supports new ideas and encourages experiments to
                      innovate new things.
                    </span>
                  </span>
                </div>
                <div className="about-us-container34">
                  <img alt="image" src="/assets/images/aboutus_image3-1500w.png" loading="eager" className="about-us-image6" />
                </div>
              </div>
            </section>
            <section className="about-us-container35">
              <div className="about-us-container36">
                <span className="about-us-text23 colortexter px35">
                  We have delivered 200+ exceptional and exemplary games and counting.
                </span>
              </div>
              <div className="about-us-container36">
                <span className="about-us-text23 colortexter px35">Our Offices</span>
              </div>
              <div className="about-us-container37" style={{ paddingBottom: 100 }}>
                <div className="about-us-container38">
                  <div className="about-us-container39 imagezoomer">
                    <div className="about-us-container40">
                      <div className="about-us-container41">
                        <span className="about-us-text24">Bengaluru, India</span>
                        <span className="about-us-text25">IND- Novel MSR Park, 93/9, Marathahalli | Bengaluru, Karnataka | 560037</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="about-us-container42">
                  <div className="about-us-container43 imagezoomer">
                    <div className="about-us-container44">
                      <div className="about-us-container45">
                        <span className="about-us-text26">Chandigarh, India</span>
                        <span className="about-us-text27">IND- 08th Floor, World Tech 67 ITC 10, Sector 67| Mohali | Punjab | 160062</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="about-us-container46">
                  <div className="about-us-container47 imagezoomer">
                    <div className="about-us-container48">
                      <div className="about-us-container49">
                        <span className="about-us-text28">Indore, India</span>
                        <span className="about-us-text29">IND- # 301, 3rd Floor, Apollo Premier, Vijay Nagar I Indore, MP I 452010</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="about-us-container50">
                  <div className="about-us-container51 imagezoomer">
                    <div className="about-us-container52">
                      <div className="about-us-container53">
                        <span className="about-us-text30">Noida, India</span>
                        <span className="about-us-text31">G-18, Sector-63, Noida (Delhi-NCR), PIN: 201301, India</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="about-us-container54">
                  <div className="about-us-container55 imagezoomer">
                    <div className="about-us-container56">
                      <div className="about-us-container57">
                        <span className="about-us-text32">Delaware, USA</span>
                        <span className="about-us-text33">USA - 8 The Green, Suite A, Dover Delaware 19901</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* <section className="about-us-container35">
            <div className="about-us-container36">
              <span className="about-us-text23 colortexter px35">
                Our Teams
              </span>
            </div>
            <div className="about-us-container37">
              {teams.map((team) => {
                return (
                  <>
                    <div className="about-us-container38">
                      <div
                        className="about-us-container-teams imagezoomer"
                        style={{
                          backgroundImage: `url(${process.env.REACT_APP_URL}${team.picture})`,
                        }}
                      >
                        <div className="about-us-container40">
                          <div className="about-us-container41">
                            <span className="about-us-text24">
                              {team.name}
                            </span>
                            <span className="about-us-text25">
                              {team.designation}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </section> */}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper sx={{ bgcolor: theme.palette.mode === 'dark' ? 'background.default' : 'dark.900', pb: 0 }}>
        <FooterSection />
      </SectionWrapper>
      <Customization />
    </>
  );
};

export default Index;
