// Secure Trust Badge Floating Widget - Updated Content
// Brand colors: #667eea to #764ba2 gradient

// Create and append secure trust badge styles
const zantaSecureTrustStyle = document.createElement('style');
zantaSecureTrustStyle.textContent = `
  @keyframes zanta-secure-trust-float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-8px); }
  }

  @keyframes zanta-secure-trust-pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
  }

  @keyframes zanta-secure-trust-shine {
      0% { left: -100%; }
      100% { left: 100%; }
  }

  @keyframes zanta-secure-trust-shine-interval {
      0% { left: -100%; }
      8% { left: 100%; }
      100% { left: 100%; }
  }

  @keyframes zanta-secure-trust-scale-in {
      from {
          opacity: 0;
          transform: translate(-50%, -50%) scale(0.8);
      }
      to {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
      }
  }

  @keyframes zanta-secure-trust-scale-out {
      from {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
      }
      to {
          opacity: 0;
          transform: translate(-50%, -50%) scale(0.8);
      }
  }

  @keyframes zanta-secure-trust-bounce-in {
      from {
          opacity: 0;
          transform: translateY(20px);
      }
      to {
          opacity: 1;
          transform: translateY(0);
      }
  }

  .zanta-secure-trust-widget-container {
      position: fixed;
      left: 20px;
      bottom: 20px;
      z-index: 9998;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }

  .zanta-secure-trust-badge {
      position: relative;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: 2px solid rgba(255, 255, 255, 0.3);
      padding: 12px 16px;
      border-radius: 50px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 
          0 8px 32px rgba(102, 126, 234, 0.3),
          0 4px 16px rgba(118, 75, 162, 0.2);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      animation: 
          zanta-secure-trust-float 4s ease-in-out infinite,
          zanta-secure-trust-pulse 2s ease-in-out infinite 2s;
      overflow: hidden;
      backdrop-filter: blur(10px);
      font-weight: 600;
      font-size: 14px;
      gap: 8px;
  }

  .zanta-secure-trust-badge::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
          90deg,
          transparent,
          rgba(255, 255, 255, 0.4),
          transparent
      );
      animation: zanta-secure-trust-shine-interval 10s ease-in-out infinite;
      pointer-events: none;
  }

  .zanta-secure-trust-badge:hover {
      transform: translateY(-4px) scale(1.05);
      box-shadow: 
          0 12px 40px rgba(102, 126, 234, 0.4),
          0 6px 20px rgba(118, 75, 162, 0.3);
      animation-play-state: paused;
  }

  .zanta-secure-trust-badge:hover::before {
      animation: zanta-secure-trust-shine 1s ease-out;
  }

  .zanta-secure-trust-shield-icon {
      font-size: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
  }

  .zanta-secure-trust-content-container {
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 500px;
      max-height: 600px;
      background: rgba(255, 255, 255, 0.98);
      backdrop-filter: blur(30px);
      border-radius: 24px;
      box-shadow: 
          0 32px 100px rgba(0, 0, 0, 0.25),
          0 16px 40px rgba(102, 126, 234, 0.15),
          inset 0 1px 0 rgba(255, 255, 255, 0.6);
      border: 1px solid rgba(255, 255, 255, 0.5);
      display: none;
      overflow: hidden;
      animation: zanta-secure-trust-scale-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .zanta-secure-trust-content-container.zanta-secure-trust-closing {
      animation: zanta-secure-trust-scale-out 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .zanta-secure-trust-header-main {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 32px 24px 24px 24px;
      text-align: center;
      position: relative;
      border-radius: 24px 24px 0 0;
  }

  .zanta-secure-close-button-main {
      position: absolute;
      top: 20px;
      right: 20px;
      background: rgba(255, 255, 255, 0.2);
      border: none;
      border-radius: 12px;
      width: 40px;
      height: 40px;
      color: white;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22px;
      font-weight: 300;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      line-height: 1;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.3);
  }

  .zanta-secure-close-button-main:hover {
      background: rgba(255, 255, 255, 0.3);
      transform: scale(1.1);
      border-color: rgba(255, 255, 255, 0.5);
  }

  .zanta-secure-close-button-main:active {
      transform: scale(0.95);
  }

  .zanta-secure-trust-title-main {
      font-size: 28px;
      font-weight: 800;
      margin: 0 0 12px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      animation: zanta-secure-trust-bounce-in 0.8s ease-out 0.2s both;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .zanta-secure-trust-subtitle-main {
      font-size: 16px;
      opacity: 0.95;
      margin: 0;
      line-height: 1.6;
      animation: zanta-secure-trust-bounce-in 0.8s ease-out 0.4s both;
      font-weight: 400;
  }

  .zanta-secure-trust-content-main {
      padding: 32px;
      background: linear-gradient(to bottom right, #f8fafc, #f1f5f9);
  }

  .zanta-secure-trust-description {
      font-size: 17px;
      color: #374151;
      line-height: 1.7;
      margin-bottom: 28px;
      animation: zanta-secure-trust-bounce-in 0.8s ease-out 0.1s both;
      font-weight: 400;
  }

  .zanta-secure-trust-links {
      display: flex;
      flex-direction: column;
      gap: 16px;
      animation: zanta-secure-trust-bounce-in 0.8s ease-out 0.2s both;
  }

  .zanta-secure-trust-link {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      padding: 16px 20px;
      background: rgba(102, 126, 234, 0.08);
      border: 2px solid rgba(102, 126, 234, 0.15);
      border-radius: 16px;
      color: #667eea;
      text-decoration: none;
      font-weight: 600;
      font-size: 15px;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;
      backdrop-filter: blur(10px);
  }

  .zanta-secure-trust-link::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
          90deg,
          transparent,
          rgba(102, 126, 234, 0.08),
          transparent
      );
      transition: left 0.8s ease;
  }

  .zanta-secure-trust-link:hover::before {
      left: 100%;
  }

  .zanta-secure-trust-link:hover {
      background: rgba(102, 126, 234, 0.12);
      border-color: rgba(102, 126, 234, 0.25);
      transform: translateY(-3px);
      box-shadow: 0 8px 30px rgba(102, 126, 234, 0.2);
  }

  .zanta-secure-trust-link:active {
      transform: translateY(-1px);
  }

  .zanta-secure-trust-link-icon {
      font-size: 18px;
  }

  /* Mobile optimizations */
  @media (max-width: 768px) {
      .zanta-secure-trust-widget-container {
          left: 15px;
          bottom: 15px;
      }
      
      .zanta-secure-trust-badge {
          padding: 10px 14px;
          font-size: 13px;
      }
      
      .zanta-secure-trust-shield-icon {
          font-size: 16px;
      }
      
      .zanta-secure-trust-content-container {
          width: calc(100vw - 40px);
          max-width: 450px;
          max-height: 90vh;
      }
      
      .zanta-secure-trust-content-main {
          padding: 24px;
      }
      
      .zanta-secure-trust-header-main {
          padding: 24px 20px 20px 20px;
      }
      
      .zanta-secure-trust-title-main {
          font-size: 24px;
      }
  }

  /* Dark mode support */
  @media (prefers-color-scheme: dark) {
      .zanta-secure-trust-content-container {
          background: rgba(31, 41, 55, 0.97);
          border: 1px solid rgba(75, 85, 99, 0.4);
      }
      
      .zanta-secure-trust-content-main {
          background: linear-gradient(to bottom right, #1f2937, #111827);
      }
      
      .zanta-secure-trust-description {
          color: #e5e7eb;
      }
      
      .zanta-secure-trust-link {
          background: rgba(102, 126, 234, 0.2);
          border-color: rgba(102, 126, 234, 0.3);
          color: #a5b4fc;
      }
      
      .zanta-secure-trust-link:hover {
          background: rgba(102, 126, 234, 0.3);
          border-color: rgba(102, 126, 234, 0.4);
      }
  }

  /* Reduced motion for accessibility */
  @media (prefers-reduced-motion: reduce) {
      .zanta-secure-trust-badge {
          animation: none;
      }
      
      .zanta-secure-trust-widget-container * {
          animation-duration: 0.1s !important;
          transition-duration: 0.1s !important;
      }
  }
`;
document.head.appendChild(zantaSecureTrustStyle);

// Create secure trust badge widget structure
const zantaSecureTrustContainer = document.createElement('div');
zantaSecureTrustContainer.className = 'zanta-secure-trust-widget-container';

// Secure trust badge (floating button)
const zantaSecureTrustBadge = document.createElement('div');
zantaSecureTrustBadge.className = 'zanta-secure-trust-badge';
zantaSecureTrustBadge.innerHTML = `
    <span class="zanta-secure-trust-shield-icon">🛡️</span>
    <span>Trust & Safety</span>
`;

// Content container
const zantaSecureTrustContentContainer = document.createElement('div');
zantaSecureTrustContentContainer.className = 'zanta-secure-trust-content-container';

// Header
const zantaSecureTrustHeaderMain = document.createElement('div');
zantaSecureTrustHeaderMain.className = 'zanta-secure-trust-header-main';
zantaSecureTrustHeaderMain.innerHTML = `
    <button class="zanta-secure-close-button-main" aria-label="Close trust information">×</button>
    <h2 class="zanta-secure-trust-title-main">
        <span class="zanta-secure-trust-shield-icon">🛡️</span>
        We've got your back.
    </h2>
    <p class="zanta-secure-trust-subtitle-main">Your security and privacy are our top priorities</p>
`;

// Content
const zantaSecureTrustContentMain = document.createElement('div');
zantaSecureTrustContentMain.className = 'zanta-secure-trust-content-main';
zantaSecureTrustContentMain.innerHTML = `
    <div class="zanta-secure-trust-description">
        Our Host Guarantee gives you peace of mind if things go wrong, and your data is protected under our Privacy Policy.
    </div>
    
    <div class="zanta-secure-trust-links">
        <a href="https://rentabout.com/host-guarantee/?from=%2Fdashboard%2Flistings%2Fadd%2F" 
           class="zanta-secure-trust-link" 
           target="_blank" 
           rel="noopener">
            <span class="zanta-secure-trust-link-icon">🔒</span>
            Find out more → Host Guarantee
        </a>
        
        <a href="https://rentabout.com/privacy-policy/?from=%2Fhost-guarantee%2F%3Ffrom%3D%252Fdashboard%252Flistings%252Fadd%252F" 
           class="zanta-secure-trust-link" 
           target="_blank" 
           rel="noopener">
            <span class="zanta-secure-trust-link-icon">📜</span>
            Privacy Policy → Privacy Policy
        </a>
    </div>
`;

// Assemble the widget
zantaSecureTrustContentContainer.appendChild(zantaSecureTrustHeaderMain);
zantaSecureTrustContentContainer.appendChild(zantaSecureTrustContentMain);
zantaSecureTrustContainer.appendChild(zantaSecureTrustBadge);
zantaSecureTrustContainer.appendChild(zantaSecureTrustContentContainer);

// State management
let isZantaSecureTrustContentOpen = false;

// Toggle content function
function toggleZantaSecureTrustContent() {
    if (isZantaSecureTrustContentOpen) {
        // Close content
        zantaSecureTrustContentContainer.classList.add('zanta-secure-trust-closing');
        setTimeout(() => {
            zantaSecureTrustContentContainer.style.display = 'none';
            zantaSecureTrustContentContainer.classList.remove('zanta-secure-trust-closing');
        }, 300);
        zantaSecureTrustBadge.setAttribute('aria-expanded', 'false');
    } else {
        // Open content
        zantaSecureTrustContentContainer.style.display = 'block';
        zantaSecureTrustBadge.setAttribute('aria-expanded', 'true');
    }
    isZantaSecureTrustContentOpen = !isZantaSecureTrustContentOpen;
}

// Event listeners
zantaSecureTrustBadge.addEventListener('click', toggleZantaSecureTrustContent);

// Close button
const zantaSecureCloseBtnMain = zantaSecureTrustHeaderMain.querySelector('.zanta-secure-close-button-main');
zantaSecureCloseBtnMain.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleZantaSecureTrustContent();
});

// Close on outside click
document.addEventListener('click', (e) => {
    if (isZantaSecureTrustContentOpen && !zantaSecureTrustContainer.contains(e.target)) {
        toggleZantaSecureTrustContent();
    }
});

// Close on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isZantaSecureTrustContentOpen) {
        toggleZantaSecureTrustContent();
    }
});

// Append to body
document.body.appendChild(zantaSecureTrustContainer);

// Initial fade-in animation
zantaSecureTrustContainer.style.opacity = '0';
setTimeout(() => {
    zantaSecureTrustContainer.style.transition = 'opacity 0.6s ease-out';
    zantaSecureTrustContainer.style.opacity = '1';
}, 200);
