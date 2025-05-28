import { useEffect, useState } from 'react';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      // Reset active tab when scrolling back up
      if (window.scrollY <= window.innerHeight * 2) {
        setActiveTab(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const TABS = ['ABOUT', 'PROJECTS', 'EXPERIENCE', 'CONTACT'];

  return (
    <div style={{ 
      height: '500vh',
      backgroundColor: '#000',
      margin: 0,
      padding: 0,
      overflowX: 'hidden',
    }}>
      {/* Sky Layer */}
      <div
        style={{
          position: 'fixed',
          width: '100%',
          height: '100vh',
          backgroundImage: 'url(/cole_sky.png)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center bottom',
          zIndex: 1,
          transform: `translateY(${scrollY * 0.2}px)`,
          willChange: 'transform'
        }}
      />

      {/* Center Buildings Layer */}
      <div
        style={{
          position: 'fixed',
          width: '100%',
          height: '100vh',
          backgroundImage: 'url(/Cole_center_buildings.png)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center bottom',
          zIndex: 2,
          transform: `translateY(${scrollY * 0.4}px)`,
          willChange: 'transform'
        }}
      />

      {/* Left Buildings Layer */}
      <div
        style={{
          position: 'fixed',
          width: '100%',
          height: '100vh',
          backgroundImage: 'url(/Cole_left_front_buildings.png)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center bottom',
          zIndex: 3,
          transform: `translateY(${scrollY * 0.6}px)`,
          willChange: 'transform'
        }}
      />

      {/* Right Buildings Layer */}
      <div
        style={{
          position: 'fixed',
          width: '100%',
          height: '100vh',
          backgroundImage: 'url(/Cole_right_front_buildings.png)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center bottom',
          zIndex: 4,
          transform: `translateY(${scrollY * 0.8}px)`,
          willChange: 'transform'
        }}
      />

      {/* Navigation Tabs */}
      <div
        style={{
          position: 'fixed',
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '2rem',
          zIndex: 5,
          opacity: scrollY > window.innerHeight * 2 ? 1 : 0,
          transition: 'opacity 1s ease, transform 0.5s ease',
        }}
      >
        <div style={{ position: 'relative', display: 'flex', gap: '2rem' }}>
          {TABS.map((tab) => (
            <div
              key={tab}
              onClick={() => setActiveTab(activeTab === tab ? null : tab)}
              style={{
                padding: '1rem 2rem',
                color: 'white',
                fontSize: '1.5rem',
                fontFamily: 'Orbitron, sans-serif',
                fontWeight: 'bold',
                letterSpacing: '0.1em',
                cursor: 'pointer',
                textShadow: `
                  0 0 10px rgba(255, 255, 255, 0.8),
                  0 0 20px rgba(255, 255, 255, 0.5),
                  0 0 30px rgba(255, 107, 0, 0.7),
                  0 0 40px rgba(255, 107, 0, 0.4)
                `,
                animation: 'glow 2s ease-in-out infinite alternate',
                transition: 'all 0.3s ease',
                transform: activeTab === tab ? 'scale(1.1)' : 'scale(1)',
                position: 'relative',
                opacity: activeTab === null || activeTab === tab ? 1 : 0.5,
              }}
            >
              {tab}
              {/* Active tab indicator */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '0.5rem',
                  left: '50%',
                  width: activeTab === tab ? '100%' : '0%',
                  height: '2px',
                  backgroundColor: '#FF6B00',
                  transition: 'all 0.3s ease',
                  transform: 'translateX(-50%)',
                  boxShadow: '0 0 10px #FF6B00',
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Name Title */}
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#fff',
          zIndex: 3,
          opacity: scrollY > window.innerHeight * 2 && !activeTab ? 1 : 0,
          transition: 'opacity 0.5s ease'
        }}
      >
        <h1 
          className="text-8xl font-bold tracking-wider text-center text-white drop-shadow-2xl"
          style={{
            textShadow: '0 0 20px rgba(255, 107, 0, 0.7)',
            fontFamily: 'Orbitron, sans-serif',
            transition: 'opacity 0.3s ease-out'
          }}
        >
          COLE<br/>TERNULLO
        </h1>
      </div>

      {/* Content Container */}
      <div
        style={{
          position: 'fixed',
          top: '25%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80%',
          opacity: activeTab ? 1 : 0,
          transition: 'opacity 0.5s ease',
          zIndex: 5,
          pointerEvents: activeTab ? 'auto' : 'none',
        }}
      >
        <div
          style={{
            opacity: 1,
            transform: 'translateY(0)',
            transition: 'all 0.5s ease',
          }}
        >
          {activeTab === 'ABOUT' && (
            <div style={{ 
              color: 'white', 
              fontFamily: 'Orbitron, sans-serif',
              fontSize: '1.2rem',
              lineHeight: '1.8',
              maxWidth: '1000px',
              margin: '0 auto',
              padding: '2rem',
              height: '75vh',
              overflowY: 'auto',
              scrollbarWidth: 'thin',
              scrollbarColor: '#FF6B00 transparent'
            }}>
              <h2 style={{ 
                fontSize: '3rem', 
                marginBottom: '2rem',
                textAlign: 'center'
              }}>About Me</h2>
              
              <div style={{
                display: 'flex',
                flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
                gap: '2rem',
                alignItems: 'stretch',
                backgroundColor: 'rgba(255, 107, 0, 0.1)',
                padding: '2rem',
                borderRadius: '10px',
                border: '1px solid rgba(255, 107, 0, 0.3)',
                marginBottom: '2rem',
              }}>
                {/* Profile Picture Container */}
                <div style={{
                  flex: '0 0 auto',
                  width: window.innerWidth <= 768 ? '100%' : '400px',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  border: '2px solid rgba(255, 107, 0, 0.5)',
                  boxShadow: '0 0 20px rgba(255, 107, 0, 0.3)',
                }}>
                  <img 
                    src="/assets/CDT-Profile-Pic.jpg"
                    alt="Profile Picture"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>

                {/* Text Content */}
                <div style={{
                  flex: '1',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}>
                  <p style={{
                    fontSize: '1.2rem',
                    color: 'rgba(255,255,255,0.9)',
                    lineHeight: '1.8',
                    textAlign: 'left'
                  }}>
                    I'm a Computer Science student at University College Dublin with a passion for creating meaningful software that makes a difference. My focus lies in developing accessible, user-centered applications that solve real-world challenges.

                    Whether it's crafting educational games for children or building inclusive apps for users with disabilities, I thrive on projects that combine technical innovation with social impact. I enjoy working with Unity, mobile development, and exploring new technologies that can enhance user experiences.

                    When I'm not coding, you'll find me collaborating with teams, learning about accessibility design, and finding creative ways to make technology more inclusive for everyone.
                  </p>
                </div>
              </div>

              {/* Custom scrollbar styling */}
              <style>
                {`
                  div::-webkit-scrollbar {
                    width: 8px;
                  }
                  div::-webkit-scrollbar-track {
                    background: transparent;
                  }
                  div::-webkit-scrollbar-thumb {
                    background-color: #FF6B00;
                    border-radius: 4px;
                  }
                  div::-webkit-scrollbar-thumb:hover {
                    background-color: #FF8533;
                  }
                `}
              </style>
            </div>
          )}
          {activeTab === 'PROJECTS' && (
            <div style={{ 
              color: 'white', 
              fontFamily: 'Orbitron, sans-serif',
              textAlign: 'center',
              fontSize: '1.2rem',
              lineHeight: '1.6',
              maxWidth: '900px',
              margin: '0 auto',
              padding: '2rem',
              height: 'auto',
              maxHeight: '75vh',
              overflowY: 'auto',
              scrollbarWidth: 'thin',
              scrollbarColor: '#FF6B00 transparent'
            }}>
              <h2 style={{ 
                fontSize: '3rem', 
                marginBottom: '3rem',
                textAlign: 'center'
              }}>Projects</h2>

              {/* Hide-A-Ace Project Card */}
              <div style={{
                backgroundColor: 'rgba(255, 107, 0, 0.1)',
                borderRadius: '15px',
                padding: '2rem',
                marginBottom: '2rem',
                border: '1px solid rgba(255, 107, 0, 0.3)',
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem'
              }}>
                {/* Image Container */}
                <div style={{
                  width: '100%',
                  height: '300px',
                  backgroundColor: 'rgba(0, 0, 0, 0.2)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden'
                }}>
                  <img 
                    src="/assets/hide-a-ace-title.png"
                    alt="Hide-A-Ace Game Title"
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain'
                    }}
                  />
                </div>

                {/* Project Title */}
                <h3 style={{
                  fontSize: '2.5rem',
                  color: '#FF6B00',
                  marginBottom: '1rem'
                }}>
                  Hide-A-Ace
                </h3>

                {/* Project Description */}
                <p style={{
                  fontSize: '1.2rem',
                  color: 'rgba(255,255,255,0.9)',
                  lineHeight: '1.8',
                  textAlign: 'left',
                  marginBottom: '2rem'
                }}>
                  Hide-A-Ace is an educational mobile game aimed at helping young children learn colors through fun, interactive gameplay. 
                  Created using Unity and C#, the game emphasizes accessibility and user-friendly design, providing an engaging experience 
                  for early learners. Collaborated with a cross-functional team to ensure the app met educational goals and usability 
                  standards, earning positive feedback from both parents and educators.
                </p>

                {/* Technologies Used */}
                <div style={{
                  display: 'flex',
                  gap: '1rem',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  marginBottom: '2rem'
                }}>
                  {['Unity', 'C#', 'Mobile Development', 'Educational Design'].map((tech) => (
                    <span key={tech} style={{
                      backgroundColor: 'rgba(255, 107, 0, 0.2)',
                      padding: '0.5rem 1rem',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      color: 'white'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* App Store Link */}
                <a 
                  href="https://iphone.apkpure.com/app/hideaace/com.dreamfoundrygames.hide-a-ace"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    backgroundColor: '#FF6B00',
                    color: 'white',
                    padding: '1rem 2rem',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    justifyContent: 'center',
                    maxWidth: '250px',
                    margin: '0 auto'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#FF8533';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#FF6B00';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                  Download on App Store
                </a>
              </div>

              {/* MoonPaws Project Card */}
              <div style={{
                backgroundColor: 'rgba(255, 107, 0, 0.1)',
                borderRadius: '15px',
                padding: '2rem',
                marginBottom: '2rem',
                border: '1px solid rgba(255, 107, 0, 0.3)',
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem'
              }}>
                {/* Image Container */}
                <div style={{
                  width: '100%',
                  height: '300px',
                  backgroundColor: 'rgba(0, 0, 0, 0.2)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden'
                }}>
                  <img 
                    src="/assets/moonpaws.png"
                    alt="MoonPaws App"
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain'
                    }}
                  />
                </div>

                {/* Project Title */}
                <h3 style={{
                  fontSize: '2.5rem',
                  color: '#FF6B00',
                  marginBottom: '1rem'
                }}>
                  MoonPaws
                </h3>

                {/* Project Description */}
                <p style={{
                  fontSize: '1.2rem',
                  color: 'rgba(255,255,255,0.9)',
                  lineHeight: '1.8',
                  textAlign: 'left',
                  marginBottom: '2rem'
                }}>
                  Led the design and integration of accessibility features for MoonPaws, a mobile app developed for blind 
                  and visually impaired users. Collaborated with deaf and blind testers to evaluate feature effectiveness 
                  and ensure an inclusive user experience. Worked within an agile team environment, contributing to sprint 
                  planning and feature implementation. Focused on creating and refining accessibility solutions ahead of 
                  the app's planned launch.
                </p>

                {/* Technologies Used */}
                <div style={{
                  display: 'flex',
                  gap: '1rem',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  marginBottom: '2rem'
                }}>
                  {['Unity', 'C#', 'Accessibility Design', 'Mobile Development', 'Agile'].map((tech) => (
                    <span key={tech} style={{
                      backgroundColor: 'rgba(255, 107, 0, 0.2)',
                      padding: '0.5rem 1rem',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      color: 'white'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Coming Soon Badge */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: 'rgba(255, 107, 0, 0.2)',
                  color: 'white',
                  padding: '1rem 2rem',
                  borderRadius: '8px',
                  justifyContent: 'center',
                  maxWidth: '250px',
                  margin: '0 auto',
                  border: '1px solid rgba(255, 107, 0, 0.3)'
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  Coming Soon
                </div>
              </div>

              {/* Custom scrollbar styling */}
              <style>
                {`
                  div::-webkit-scrollbar {
                    width: 8px;
                  }
                  div::-webkit-scrollbar-track {
                    background: transparent;
                  }
                  div::-webkit-scrollbar-thumb {
                    background-color: #FF6B00;
                    border-radius: 4px;
                  }
                  div::-webkit-scrollbar-thumb:hover {
                    background-color: #FF8533;
                  }
                `}
              </style>
            </div>
          )}
          {activeTab === 'EXPERIENCE' && (
            <div style={{ 
              color: 'white', 
              fontFamily: 'Orbitron, sans-serif',
              textAlign: 'left',
              fontSize: '1.2rem',
              lineHeight: '1.6',
              maxWidth: '800px',
              margin: '0 auto',
              padding: '2rem',
              height: 'auto',
              maxHeight: '75vh',
              overflowY: 'auto',
              scrollbarWidth: 'thin',
              scrollbarColor: '#FF6B00 transparent',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem'
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
                paddingBottom: '4rem' // Extra padding at bottom for scrolling
              }}>
                <h2 style={{ 
                  fontSize: '3rem', 
                  marginBottom: '1rem',
                  textAlign: 'center'
                }}>Experience</h2>

                <div style={{
                  backgroundColor: 'rgba(255, 107, 0, 0.1)',
                  padding: '2rem',
                  borderRadius: '10px',
                  border: '1px solid rgba(255, 107, 0, 0.3)'
                }}>
                  <p style={{
                    fontSize: '1.2rem',
                    color: 'rgba(255,255,255,0.9)',
                    lineHeight: '1.8'
                  }}>
                    Hardworking and highly motivated Computer Science student with hands-on software development experience,
                    eager to contribute technical expertise in software engineering. Proven ability to adapt quickly and work
                    effectively both independently and as part of a team. Passionate about developing impactful, scalable software
                    solutions with a focus on user-centered design and accessibility. Committed to using innovative technologies to
                    solve real-world challenges.
                  </p>
                </div>

                <a 
                  href="/assets/resume.pdf" 
                  target="_blank"
                  style={{
                    display: 'inline-block',
                    padding: '1rem 2rem',
                    backgroundColor: '#FF6B00',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '5px',
                    textAlign: 'center',
                    width: '100%',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    boxShadow: '0 0 10px rgba(255, 107, 0, 0.4)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#FF8533';
                    e.currentTarget.style.boxShadow = '0 0 15px rgba(255, 107, 0, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#FF6B00';
                    e.currentTarget.style.boxShadow = '0 0 10px rgba(255, 107, 0, 0.4)';
                  }}
                >
                  Download Full Resume
                </a>

                {/* Experience Entries */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                  <div>
                    <h3 style={{ 
                      fontSize: '1.8rem', 
                      color: '#FF6B00',
                      marginBottom: '1rem'
                    }}>
                      Software Developer
                    </h3>
                    <h4 style={{ 
                      fontSize: '1.4rem',
                      marginBottom: '1.5rem',
                      color: 'rgba(255,255,255,0.9)'
                    }}>
                      DreamFoundryGames - Pittsburgh, PA | May 2024 - September 2025
                    </h4>
                    <ul style={{ 
                      listStyleType: 'disc',
                      paddingLeft: '1.5rem',
                      color: 'rgba(255,255,255,0.8)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1rem'
                    }}>
                      <li>Developed and implemented accessibility features for a mobile application, ensuring usability for visually impaired users, which contributed to a 30% increase in accessibility</li>
                      <li>Conducted usability testing and analysis, identifying areas for improvement and delivering enhanced user experiences</li>
                      <li>Collaborated closely with a cross-functional team, participating in agile sprints to meet technical goals and project timelines</li>
                      <li>Launched the MoonPaws app, incorporating accessibility features, on the Apple App Store and Google Play Store</li>
                    </ul>
                  </div>

                  <div>
                    <h3 style={{ 
                      fontSize: '1.8rem', 
                      color: '#FF6B00',
                      marginBottom: '1rem'
                    }}>
                      Software Developer Intern I
                    </h3>
                    <h4 style={{ 
                      fontSize: '1.4rem',
                      marginBottom: '1.5rem',
                      color: 'rgba(255,255,255,0.9)'
                    }}>
                      DreamFoundryGames - Pittsburgh, PA | September 2022 - February 2023
                    </h4>
                    <ul style={{ 
                      listStyleType: 'disc',
                      paddingLeft: '1.5rem',
                      color: 'rgba(255,255,255,0.8)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1rem'
                    }}>
                      <li>Developed and maintained an e-commerce platform, improving system performance and customer satisfaction through optimized system design</li>
                      <li>Designed and launched the Hide-A-Ace educational mobile app, focusing on user engagement and accessibility for children</li>
                      <li>Created educational games using Unity, showcasing proficiency in game development and user-focused design</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Custom scrollbar styling */}
              <style>
                {`
                  div::-webkit-scrollbar {
                    width: 8px;
                  }
                  div::-webkit-scrollbar-track {
                    background: transparent;
                  }
                  div::-webkit-scrollbar-thumb {
                    background-color: #FF6B00;
                    border-radius: 4px;
                  }
                  div::-webkit-scrollbar-thumb:hover {
                    background-color: #FF8533;
                  }
                `}
              </style>
            </div>
          )}
          {activeTab === 'CONTACT' && (
            <div style={{ 
              color: 'white', 
              fontFamily: 'Orbitron, sans-serif',
              textAlign: 'center',
              fontSize: '1.5rem',
              lineHeight: '2',
              maxWidth: '800px',
              margin: '0 auto',
              padding: '2rem'
            }}>
              <h2 style={{ fontSize: '3rem', marginBottom: '3rem' }}>Contact</h2>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
                alignItems: 'center'
              }}>
                <a 
                  href="mailto:cternullo2229@gmail.com"
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1rem 2rem',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 107, 0, 0.1)',
                    border: '1px solid rgba(255, 107, 0, 0.3)',
                    transition: 'all 0.3s ease',
                    width: '100%',
                    maxWidth: '500px',
                    justifyContent: 'center'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 107, 0, 0.2)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 107, 0, 0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  cternullo2229@gmail.com
                </a>

                <a 
                  href="https://www.linkedin.com/in/cole-ternullo-1026a4290"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1rem 2rem',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 107, 0, 0.1)',
                    border: '1px solid rgba(255, 107, 0, 0.3)',
                    transition: 'all 0.3s ease',
                    width: '100%',
                    maxWidth: '500px',
                    justifyContent: 'center'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 107, 0, 0.2)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 107, 0, 0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                  LinkedIn
                </a>

                <a 
                  href="https://github.com/cternullo"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1rem 2rem',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 107, 0, 0.1)',
                    border: '1px solid rgba(255, 107, 0, 0.3)',
                    transition: 'all 0.3s ease',
                    width: '100%',
                    maxWidth: '500px',
                    justifyContent: 'center'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 107, 0, 0.2)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 107, 0, 0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
