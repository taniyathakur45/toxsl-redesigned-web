import React, { useState, useEffect } from 'react';
import '../styles/HomePage.css';

const App = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'services', 'portfolio', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  // Navigation items
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  // Services data
  const services = [
    {
      icon: '📱',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.',
      features: ['iOS Development', 'Android Development', 'React Native', 'Flutter'],
      color: '#3B82F6'
    },
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Scalable, high-performance web applications using cutting-edge technologies and frameworks.',
      features: ['React.js', 'Node.js', 'Python/Django', 'PHP/Laravel'],
      color: '#10B981'
    },
    {
      icon: '🤖',
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions that leverage AI to automate processes and gain valuable insights.',
      features: ['Predictive Analytics', 'NLP', 'Computer Vision', 'Chatbots'],
      color: '#8B5CF6'
    },
    {
      icon: '🌐',
      title: 'IoT Solutions',
      description: 'Connected device solutions that bridge the physical and digital worlds seamlessly.',
      features: ['Smart Home', 'Industrial IoT', 'Wearables', 'Sensor Integration'],
      color: '#F59E0B'
    },
    {
      icon: '🔧',
      title: 'Automated Testing',
      description: 'Comprehensive testing services ensuring reliable, bug-free software delivery.',
      features: ['Unit Testing', 'Integration Testing', 'E2E Testing', 'Performance Testing'],
      color: '#EF4444'
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that create memorable user experiences.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design'],
      color: '#EC4899'
    }
  ];

  // Portfolio projects
  const portfolioProjects = [
    {
      title: 'Healthcare App',
      category: 'Mobile Development',
      image: '🏥',
      description: 'Revolutionary telemedicine platform connecting patients with healthcare providers.',
      technologies: ['React Native', 'Node.js', 'MongoDB']
    },
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      image: '🛒',
      description: 'Scalable online marketplace with AI-powered recommendations.',
      technologies: ['Next.js', 'Python', 'PostgreSQL']
    },
    {
      title: 'Smart Home Solution',
      category: 'IoT',
      image: '🏠',
      description: 'Centralized control system for smart home devices.',
      technologies: ['MQTT', 'React', 'AWS IoT']
    },
    {
      title: 'AI Analytics Dashboard',
      category: 'AI/ML',
      image: '📊',
      description: 'Real-time business intelligence platform with predictive analytics.',
      technologies: ['TensorFlow', 'Vue.js', 'Django']
    }
  ];

  // Stats data
  const stats = [
    { number: '14+', label: 'Years in Business', icon: '🎯' },
    { number: '300+', label: 'Team Members', icon: '👥' },
    { number: '2500+', label: 'Clients Worldwide', icon: '🌍' },
    { number: '5000+', label: 'Projects Delivered', icon: '✅' }
  ];

  // Testimonials
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'toXSL transformed our business with their innovative solutions. Their team is professional, responsive, and truly cares about delivering excellence.',
      rating: 5,
      image: '👩💼'
    },
    {
      name: 'Michael Chen',
      role: 'CTO, Global Retail',
      content: 'The best development partner we\'ve ever worked with. Their technical expertise and agile approach helped us launch ahead of schedule.',
      rating: 5,
      image: '👨💼'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Product Manager, HealthTech',
      content: 'Outstanding quality and attention to detail. The mobile app they built for us has received rave reviews from our users.',
      rating: 5,
      image: '👩⚕️'
    }
  ];

  // Technology stack
  const technologies = {
    'Frontend': ['React', 'Vue.js', 'Angular', 'Next.js'],
    'Backend': ['Node.js', 'Python', 'Java', 'PHP'],
    'Mobile': ['React Native', 'Flutter', 'Swift', 'Kotlin'],
    'Cloud': ['AWS', 'Azure', 'Google Cloud', 'Docker'],
    'Database': ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'],
    'AI/ML': ['TensorFlow', 'PyTorch', 'OpenAI', 'LangChain']
  };

  // Industries we serve
  const industries = [
    { name: 'Healthcare', icon: '🏥', description: 'HIPAA-compliant solutions' },
    { name: 'Fintech', icon: '💰', description: 'Secure payment systems' },
    { name: 'E-Commerce', icon: '🛍️', description: 'Scalable marketplaces' },
    { name: 'Education', icon: '📚', description: 'E-learning platforms' },
    { name: 'Real Estate', icon: '🏢', description: 'Property management' },
    { name: 'Logistics', icon: '🚚', description: 'Supply chain solutions' }
  ];

  return (
    <div className="app">
      {/* Navigation Bar */}
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo" onClick={() => scrollToSection('home')}>
            <span className='logo-part-1'>to</span><span className='logo-part-2'>XSL</span>
          </div>
          
          <div className={`nav-menu ${isMobileMenuOpen ? 'nav-menu-active' : ''}`}>
            {navItems.map(item => (
              <button
                key={item.id}
                className={`nav-link ${activeSection === item.id ? 'nav-link-active' : ''}`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            ))}
            <button className="btn-outline" onClick={() => scrollToSection('contact')}>
              Request a Quote
            </button>
            <button className="btn-primary" onClick={() => scrollToSection('contact')}>
              Book a Meeting
            </button>
          </div>
          
          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="hamburger"></span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-badge">
                <span className="badge-pulse"></span>
                <span>Hi there! We are here to help you!</span>
              </div>
              <h1 className="hero-title">
                Empowering
                <span className="gradient-text"> Mobile & Web</span>
                <br />
                Innovation
              </h1>
              <p className="hero-description">
                A leading mobile and web development company creating seamless, user-friendly 
                applications that drive engagement and streamline business operations globally.
              </p>
              <div className="hero-buttons">
                <button className="btn-primary btn-large" onClick={() => scrollToSection('contact')}>
                  Start Your Project
                  <span className="btn-arrow">→</span>
                </button>
                <div className="reviews">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="star">★</span>
                    ))}
                  </div>
                  <span className="review-text">5 Star Reviews on Clutch & Upwork</span>
                </div>
              </div>
            </div>
            
            <div className="hero-stats">
              <div className="stats-card">
                <div className="stats-card-header">
                  <span className="online-dot"></span>
                  <span className="online-text">We are online</span>
                  <button className="book-link">Book a meeting →</button>
                </div>
                <p className="stats-card-text">Typically replies in a few minutes</p>
                <button className="btn-primary btn-block">Request a Quote</button>
                <div className="trust-badges">
                  <span className="badge">⭐ 5 Star Clutch Reviews</span>
                  <span className="badge">⭐ 5 Star Upwork Reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">What We Do</span>
            <h2 className="section-title">
              Advanced IT Services
              <br />
              <span className="gradient-text">Empowering Your Brand</span>
            </h2>
            <p className="section-subtitle">
              Transforming business with custom software solutions, driven by innovation. 
              Our services drive digital transformation and enhance revenue.
            </p>
          </div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="service-icon" style={{ backgroundColor: `${service.color}15` }}>
                  <span style={{ fontSize: '2rem' }}>{service.icon}</span>
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-features">
                  {service.features.map((feature, idx) => (
                    <span key={idx} className="feature-tag">{feature}</span>
                  ))}
                </div>
                <button className="service-link">
                  Learn More
                  <span className="link-arrow">→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agile Process Section */}
      <section className="agile-section">
        <div className="container">
          <div className="agile-content">
            <div className="agile-badge">Our Process</div>
            <h2 className="agile-title">
              Reshape Business With Our
              <br />
              <span className="gradient-text">Agile Development Process</span>
            </h2>
            <div className="agile-features">
              <div className="agile-feature">
                <div className="feature-number">01</div>
                <h3>Discovery & Planning</h3>
                <p>Understanding your vision and mapping out the perfect strategy</p>
              </div>
              <div className="agile-feature">
                <div className="feature-number">02</div>
                <h3>Agile Development</h3>
                <p>Iterative development with continuous feedback and improvement</p>
              </div>
              <div className="agile-feature">
                <div className="feature-number">03</div>
                <h3>Faster Time-to-Market</h3>
                <p>Breaking down development into smaller iterations for quick delivery</p>
              </div>
              <div className="agile-feature">
                <div className="feature-number">04</div>
                <h3>Continuous Support</h3>
                <p>Ongoing maintenance and optimization for long-term success</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Work</span>
            <h2 className="section-title">
              Excellence in Every Project
              <br />
              <span className="gradient-text">Client Success Stories</span>
            </h2>
            <p className="section-subtitle">
              Explore our diverse portfolio showcasing innovative web, mobile, and software 
              solutions crafted for global clients.
            </p>
          </div>
          
          <div className="portfolio-grid">
            {portfolioProjects.map((project, index) => (
              <div key={index} className="portfolio-card">
                <div className="portfolio-image">{project.image}</div>
                <div className="portfolio-content">
                  <span className="portfolio-category">{project.category}</span>
                  <h3 className="portfolio-title">{project.title}</h3>
                  <p className="portfolio-description">{project.description}</p>
                  <div className="portfolio-tech">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                  <button className="portfolio-link">
                    View Case Study →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="industries-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Industries We Serve</span>
            <h2 className="section-title">
              Tailored Software,
              <br />
              <span className="gradient-text">Real Business Impact</span>
            </h2>
            <p className="section-subtitle">
              Customized solutions that drive efficiency, innovation, and growth across diverse sectors.
            </p>
          </div>
          
          <div className="industries-grid">
            {industries.map((industry, index) => (
              <div key={index} className="industry-card">
                <div className="industry-icon">{industry.icon}</div>
                <h3 className="industry-name">{industry.name}</h3>
                <p className="industry-description">{industry.description}</p>
                <button className="industry-link">Learn More →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Revolution Section */}
      <section className="ai-revolution">
        <div className="container">
          <div className="ai-grid">
            <div className="ai-content">
              <div className="ai-badge">AI-Powered Solutions</div>
              <h2 className="ai-title">
                Bring Digital Revolution With
                <br />
                <span className="gradient-text">Artificial Intelligence</span>
              </h2>
              <div className="ai-features">
                {[
                  'Build precise, scalable solutions for real-world challenges',
                  'Fast, high-quality releases with Agile development',
                  'Stay ahead with AI tools and modern frameworks',
                  'Adaptive solutions that grow with your business'
                ].map((feature, index) => (
                  <div key={index} className="ai-feature-item">
                    <span className="ai-check">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <button className="btn-primary" onClick={() => scrollToSection('contact')}>
                Start Your AI Journey →
              </button>
            </div>
            
            <div className="ai-stats">
              <div className="ai-stat-card">
                <div className="ai-stat-number">98%</div>
                <div className="ai-stat-label">Client Satisfaction</div>
              </div>
              <div className="ai-stat-card">
                <div className="ai-stat-number">500+</div>
                <div className="ai-stat-label">AI Projects Delivered</div>
              </div>
              <div className="ai-stat-card">
                <div className="ai-stat-number">24/7</div>
                <div className="ai-stat-label">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="technology-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Tech Stack</span>
            <h2 className="section-title">
              Advanced Technologies
              <br />
              <span className="gradient-text">Comprehensive Technology Stack</span>
            </h2>
            <p className="section-subtitle">
              Following agile methods to ensure fast development with cutting-edge technologies.
            </p>
          </div>
          
          <div className="tech-stack-grid">
            {Object.entries(technologies).map(([category, items], index) => (
              <div key={index} className="tech-category">
                <h3 className="tech-category-title">{category}</h3>
                <div className="tech-items">
                  {items.map((item, idx) => (
                    <span key={idx} className="tech-item">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Testimonials</span>
            <h2 className="section-title">
              What Our Clients Say
              <br />
              <span className="gradient-text">Trusted by Leading Brands</span>
            </h2>
          </div>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-image">{testimonial.image}</div>
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star-filled">★</span>
                  ))}
                </div>
                <p className="testimonial-content">"{testimonial.content}"</p>
                <h4 className="testimonial-name">{testimonial.name}</h4>
                <p className="testimonial-role">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-badge">Get In Touch</div>
              <h2 className="contact-title">
                Let's Bring Your
                <br />
                <span className="gradient-text">Vision to Life</span>
              </h2>
              <p className="contact-description">
                Ready to start your next project? Our team of experts is here to help you 
                transform your ideas into reality.
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <div>
                    <strong>Email Us</strong>
                    <p>info@toxsl.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <div>
                    <strong>Call Us</strong>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <div>
                    <strong>Visit Us</strong>
                    <p>123 Innovation Drive, Tech Valley, CA 94043</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-form">
              <form className="form">
                <div className="form-group">
                  <input type="text" placeholder="Your Name" className="form-input" />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Email Address" className="form-input" />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Phone Number" className="form-input" />
                </div>
                <div className="form-group">
                  <select className="form-input">
                    <option>Select Service</option>
                    <option>Mobile App Development</option>
                    <option>Web Development</option>
                    <option>AI/ML Solutions</option>
                    <option>IoT Development</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea rows="5" placeholder="Tell us about your project" className="form-input"></textarea>
                </div>
                <button type="submit" className="btn-primary btn-block">
                  Send Message →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-about">
              <div className="footer-logo">toXSL</div>
              <p>Empowering businesses through innovative mobile and web solutions since 2010.</p>
              <div className="social-links">
                <a href="#" className="social-link">📘</a>
                <a href="#" className="social-link">🐦</a>
                <a href="#" className="social-link">📷</a>
                <a href="#" className="social-link">💼</a>
              </div>
            </div>
            
            <div className="footer-links">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>
            
            <div className="footer-links">
              <h4>Services</h4>
              <ul>
                <li><a href="#">Mobile Development</a></li>
                <li><a href="#">Web Development</a></li>
                <li><a href="#">AI Solutions</a></li>
                <li><a href="#">IoT Services</a></li>
                <li><a href="#">Cloud Solutions</a></li>
              </ul>
            </div>
            
            <div className="footer-newsletter">
              <h4>Newsletter</h4>
              <p>Subscribe to get updates on latest tech trends</p>
              <form className="newsletter-form">
                <input type="email" placeholder="Your email" />
                <button type="submit">→</button>
              </form>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© 2024 toXSL. All rights reserved. | Privacy Policies | Terms of Service</p>
          </div>
        </div>
      </footer>

      {/* Floating Chat Button */}
      <button className="chat-button" onClick={() => setIsChatOpen(!isChatOpen)}>
        💬
      </button>
      
      {isChatOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <h3>Chat with us</h3>
            <button onClick={() => setIsChatOpen(false)}>✕</button>
          </div>
          <div className="chat-messages">
            <div className="chat-message bot">
              Hello! 👋 How can we help you today?
            </div>
          </div>
          <div className="chat-input">
            <input type="text" placeholder="Type your message..." />
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;