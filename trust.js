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




/* Gradient Trust Shield Badge */
.trust-badge-gradient {
  position: fixed;
  right: 25px;
  bottom: 25px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%); /* Trust green gradient */
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 28px;
  cursor: pointer;
  box-shadow: 
    0 4px 20px rgba(76, 175, 80, 0.3),
    0 6px 10px rgba(46, 125, 50, 0.2),
    inset 0 1px 1px rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
  z-index: 9999;
}

.trust-badge-gradient:hover {
  transform: translateY(-5px) scale(1.1);
  box-shadow: 
    0 8px 30px rgba(76, 175, 80, 0.4),
    0 10px 15px rgba(46, 125, 50, 0.3);
  animation: none;
}

.trust-badge-gradient::after {
  content: "🛡️";
  filter: drop-shadow(0 2px 3px rgba(0,0,0,0.3));
}

/* Trust pulse animation */
@keyframes trust-pulse {
  0% { box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.7); }
  70% { box-shadow: 0 0 0 12px rgba(76, 175, 80, 0); }
  100% { box-shadow: 0 0 0 0 rgba(76, 175, 80, 0); }
}

.trust-badge-gradient.pulse {
  animation: trust-pulse 2s infinite;
}

/* Blue Trust Badge */
.trust-badge-blue {
  position: fixed;
  right: 25px;
  bottom: 25px;
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: #2196F3; /* Trust blue */
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 28px;
  cursor: pointer;
  box-shadow: 
    0 2px 10px rgba(33, 150, 243, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  z-index: 9999;
  overflow: hidden;
}

.trust-badge-blue::before {
  content: "🛡️";
  position: relative;
  z-index: 2;
  filter: drop-shadow(0 1px 2px rgba(0,0,0,0.2));
}

.trust-badge-blue::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    to bottom right,
    rgba(255,255,255,0) 0%,
    rgba(255,255,255,0.3) 50%,
    rgba(255,255,255,0) 100%
  );
  transform: rotate(30deg);
  transition: all 0.6s ease;
}

.trust-badge-blue:hover {
  transform: translateY(-5px) rotate(5deg);
  box-shadow: 
    0 6px 20px rgba(33, 150, 243, 0.5),
    inset 0 1px 1px rgba(255, 255, 255, 0.3);
}

.trust-badge-blue:hover::after {
  left: 100%;
}

/* Trust colors used:
   - Green gradient (#4CAF50 to #2E7D32) for Design 1
   - Solid blue (#2196F3) for Design 2
   Both colors are commonly associated with trust and security
*/


.zanta-secure-trust-badge {
  position: fixed;
  bottom: 36px;
  left: 25px; /* or left: 25px if needed */
  width: 55px;
  height: 55px;
  background-color: #6aaae4; /* Flat blue */
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  z-index: 9999;
}

.zanta-secure-trust-badge:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
}

.zanta-secure-trust-shield-icon {
  width: 40px;
  height: 40px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29 36'%3E%3Cpath fill='%23FFF' fill-rule='evenodd' d='M14.588 0l.445.328c1.807 1.303 3.961 2.533 6.461 3.688 2.015.93 4.576 1.746 7.682 2.446 0 14.178-4.73 24.133-14.19 29.864l-.398.236C4.863 30.87 0 20.837 0 6.462c3.107-.7 5.668-1.516 7.682-2.446 2.709-1.251 5.01-2.59 6.906-4.016zm5.87 13.88a.75.75 0 00-.974.159l-5.475 6.625-3.005-2.997-.077-.067a.75.75 0 00-.983 1.13l4.172 4.16 6.525-7.895.06-.083a.75.75 0 00-.16-.973z'/%3E%3C/svg%3E");
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
    <span class="zanta-secure-trust-shield-icon"></span>
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
