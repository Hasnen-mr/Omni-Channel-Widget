// Floating Feedback Widget - Modern Design with Animations
// Note: Add your form submission endpoint URL

// Create and append modern styles
const feedbackStyle = document.createElement('style');
feedbackStyle.textContent = `
  @keyframes gentleShake {
      0%, 100% { transform: translateY(-50%) rotate(-90deg) translateX(0); }
      25% { transform: translateY(-50%) rotate(-90deg) translateX(-2px); }
      75% { transform: translateY(-50%) rotate(-90deg) translateX(2px); }
  }

  @keyframes pulse {
      0%, 100% { transform: translateY(-50%) rotate(-90deg) scale(1); }
      50% { transform: translateY(-50%) rotate(-90deg) scale(1.05); }
  }

  @keyframes fadeInSlide {
      from {
          opacity: 0;
          transform: translateY(-50%) scale(0.9);
      }
      to {
          opacity: 1;
          transform: translateY(-50%) scale(1);
      }
  }

  @keyframes fadeOutSlide {
      from {
          opacity: 1;
          transform: translateY(-50%) scale(1);
      }
      to {
          opacity: 0;
          transform: translateY(-50%) scale(0.9);
      }
  }

  @keyframes slideUp {
      from {
          opacity: 0;
          transform: translateY(20px);
      }
      to {
          opacity: 1;
          transform: translateY(0);
      }
  }

  .feedback-widget-container {
      position: fixed;
      right: 0;
      top: 40%;
      transform: translateY(-50%);
      z-index: 9999;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }

  .feedback-tab {
      position: absolute;
      right: 15px;
      top: 50%;
      transform: translateY(-50%) rotate(-90deg);
      transform-origin: right center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 12px 20px;
      border: none;
      border-radius: 8px 8px 0 0;
      cursor: pointer;
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 1px;
      text-transform: uppercase;
      box-shadow: 
          -4px 0 20px rgba(0, 0, 0, 0.15),
          -2px 0 10px rgba(0, 0, 0, 0.1);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      animation: gentleShake 3s ease-in-out infinite;
      white-space: nowrap;
  }

  .feedback-tab:hover {
      background: linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%);
      animation: pulse 1s ease-in-out infinite;
      box-shadow: 
          -6px 0 25px rgba(0, 0, 0, 0.2),
          -3px 0 15px rgba(0, 0, 0, 0.15);
  }

  .feedback-form-container {
      position: fixed;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
      width: 400px;
      max-height: 80vh;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(20px);
      border-radius: 16px;
      box-shadow: 
          0 20px 60px rgba(0, 0, 0, 0.15),
          0 8px 25px rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      display: none;
      overflow: hidden;
      animation: fadeInSlide 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .feedback-form-container.closing {
      animation: fadeOutSlide 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .feedback-header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 24px;
      text-align: center;
      position: relative;
  }

  .feedback-title {
      font-size: 24px;
      font-weight: 700;
      margin: 0 0 8px 0;
      animation: slideUp 0.6s ease-out 0.2s both;
  }

  .feedback-subtitle {
      font-size: 16px;
      opacity: 0.9;
      margin: 0;
      line-height: 1.5;
      animation: slideUp 0.6s ease-out 0.4s both;
  }

  .close-btn {
      position: absolute;
      top: 20px;
      right: 20px;
      background: rgba(255, 255, 255, 0.3);
      border: none;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      color: white;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      font-weight: bold;
      transition: all 0.3s ease;
      line-height: 1;
  }

  .close-btn:hover {
      background: rgba(255, 255, 255, 0.4);
      transform: scale(1.1);
  }

  .feedback-form {
      padding: 32px 24px;
      overflow-y: auto;
      max-height: calc(90vh - 120px);
  }

  .form-group {
      margin-bottom: 24px;
      animation: slideUp 0.6s ease-out both;
  }

  .form-group:nth-child(1) { animation-delay: 0.1s; }
  .form-group:nth-child(2) { animation-delay: 0.2s; }
  .form-group:nth-child(3) { animation-delay: 0.3s; }
  .form-group:nth-child(4) { animation-delay: 0.4s; }

  .form-label {
      display: block;
      font-size: 14px;
      font-weight: 600;
      color: #374151;
      margin-bottom: 8px;
  }

  .form-input, .form-textarea {
      width: 100%;
      padding: 12px 16px;
      border: 2px solid #e5e7eb;
      border-radius: 12px;
      font-size: 16px;
      transition: all 0.3s ease;
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(10px);
      box-sizing: border-box;
  }

  .form-input:focus, .form-textarea:focus {
      outline: none;
      border-color: #667eea;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
      background: rgba(255, 255, 255, 0.95);
  }

  .form-textarea {
      resize: vertical;
      min-height: 120px;
      font-family: inherit;
  }

  .optional-fields {
      background: rgba(102, 126, 234, 0.05);
      padding: 20px;
      border-radius: 12px;
      margin-top: 24px;
  }

  .optional-heading {
      font-size: 14px;
      font-weight: 600;
      color: #667eea;
      margin: 0 0 16px 0;
      text-align: center;
  }

  .submit-btn {
      width: 100%;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      padding: 16px;
      border-radius: 12px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;
      margin-top: 24px;
  }

  .submit-btn::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
      transition: left 0.6s;
  }

  .submit-btn:hover::before {
      left: 100%;
  }

  .submit-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
  }

  .submit-btn:active {
      transform: translateY(0);
  }

  .submit-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      transform: none;
  }

  .success-message {
      text-align: center;
      padding: 40px 24px;
      animation: slideUp 0.6s ease-out;
  }

  .success-icon {
      font-size: 48px;
      color: #10b981;
      margin-bottom: 16px;
      animation: pulse 1s ease-in-out;
  }

  .success-text {
      font-size: 18px;
      font-weight: 600;
      color: #374151;
      margin: 0 0 8px 0;
  }

  .success-subtext {
      font-size: 14px;
      color: #6b7280;
      margin: 0;
  }

  /* Mobile optimizations */
  @media (max-width: 768px) {
      .feedback-widget-container {
          right: 0;
      }
      
      .feedback-tab {
          right: 0;
          padding: 10px 16px;
          font-size: 12px;
      }
      
      .feedback-form-container {
          width: calc(100vw - 40px);
          max-width: 380px;
          right: 20px;
          max-height: 85vh;
      }
  }

  /* Dark mode support */
  @media (prefers-color-scheme: dark) {
      .feedback-form-container {
          background: rgba(31, 41, 55, 0.95);
          border: 1px solid rgba(75, 85, 99, 0.3);
      }
      
      .form-label {
          color: #e5e7eb;
      }
      
      .form-input, .form-textarea {
          background: rgba(55, 65, 81, 0.8);
          border-color: #4b5563;
          color: #e5e7eb;
      }
      
      .success-text {
          color: #e5e7eb;
      }
  }

  /* Reduced motion for accessibility */
  @media (prefers-reduced-motion: reduce) {
      .feedback-tab {
          animation: none;
      }
      
      * {
          animation-duration: 0.1s !important;
          transition-duration: 0.1s !important;
      }
  }

  .feedback-form {
    padding: 32px 24px;
    overflow-y: auto;
    max-height: calc(90vh - 120px);
    background: linear-gradient(to bottom right, #f8fafc, #f1f5f9);
    border-radius: 0 0 16px 16px;
}

.form-group {
    margin-bottom: 20px;
    animation: slideUp 0.5s ease-out both;
}

.form-label {
    display: block;
    font-size: 14px;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 6px;
}

.form-input,
.form-textarea {
    width: 100%;
    padding: 12px 14px;
    border: 1px solid #d1d5db;
    border-radius: 10px;
    font-size: 15px;
    background: #ffffff;
    box-shadow: inset 0 1px 2px rgba(0,0,0,0.03);
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.form-input:focus,
.form-textarea:focus {
    outline: none;
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
}

.form-textarea {
    resize: vertical;
    min-height: 100px;
}

.submit-btn {
    width: 100%;
    background: linear-gradient(135deg, #6366f1, #7c3aed);
    color: white;
    padding: 14px;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    transition: background 0.3s ease, transform 0.2s ease;
    position: relative;
    overflow: hidden;
}

.submit-btn:hover {
    background: linear-gradient(135deg, #4f46e5, #6d28d9);
    transform: translateY(-1px);
    box-shadow: 0 6px 18px rgba(99, 102, 241, 0.25);
}

.submit-btn:active {
    transform: translateY(0);
}

@keyframes gentleShake {
    0%, 100% { transform: translateY(-50%) rotate(-90deg) translateX(0); }
    25% { transform: translateY(-50%) rotate(-90deg) translateX(-2px); }
    75% { transform: translateY(-50%) rotate(-90deg) translateX(2px); }
}

@keyframes pulse {
    0%, 100% { transform: translateY(-50%) rotate(-90deg) scale(1); }
    50% { transform: translateY(-50%) rotate(-90deg) scale(1.05); }
}

@keyframes fadeInSlide {
    from {
        opacity: 0;
        transform: translateY(-50%) scale(0.9);
    }
    to {
        opacity: 1;
        transform: translateY(-50%) scale(1);
    }
}

@keyframes fadeOutSlide {
    from {
        opacity: 1;
        transform: translateY(-50%) scale(1);
    }
    to {
        opacity: 0;
        transform: translateY(-50%) scale(0.9);
    }
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(15px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.feedback-widget-container {
    position: fixed;
    right: 0;
    top: 40%;
    transform: translateY(-50%);
    z-index: 9999;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.feedback-tab {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%) rotate(-90deg);
    transform-origin: right center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 10px 16px;
    border: none;
    border-radius: 6px 6px 0 0;
    cursor: pointer;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    box-shadow: 
        -4px 0 20px rgba(0, 0, 0, 0.15),
        -2px 0 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    animation: gentleShake 3s ease-in-out infinite;
    white-space: nowrap;
}

.feedback-tab:hover {
    background: linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%);
    animation: pulse 1s ease-in-out infinite;
    box-shadow: 
        -6px 0 25px rgba(0, 0, 0, 0.2),
        -3px 0 15px rgba(0, 0, 0, 0.15);
}

.feedback-tab svg {
    width: 16px;
    height: 16px;
    margin-right: 8px;
    vertical-align: middle;
    fill: currentColor;
}


.feedback-form-container {
    position: fixed;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    width: 320px;
    height: 480px;
    background: rgba(255, 255, 255, 0.96);
    backdrop-filter: blur(20px);
    border-radius: 12px;
    box-shadow: 
        0 15px 40px rgba(0, 0, 0, 0.12),
        0 6px 20px rgba(0, 0, 0, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.3);
    display: none;
    overflow: hidden;
    animation: fadeInSlide 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.feedback-form-container.closing {
    animation: fadeOutSlide 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.feedback-header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 16px;
    text-align: center;
    position: relative;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.feedback-title {
    font-size: 18px;
    font-weight: 700;
    margin: 0 0 4px 0;
    animation: slideUp 0.5s ease-out 0.1s both;
}

.feedback-subtitle {
    font-size: 12px;
    opacity: 0.9;
    margin: 0;
    line-height: 1.4;
    animation: slideUp 0.5s ease-out 0.2s both;
}

.close-btn {
    position: absolute;
    top: 12px;
    right: 12px;
    background: rgba(255, 255, 255, 0.2);
    border: none;
    border-radius: 50%;
    width: 28px;
    height: 28px;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: bold;
    transition: all 0.3s ease;
    line-height: 1;
}

.close-btn:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
}

.feedback-form {
    padding: 16px;
    height: 380px;
    display: flex;
    flex-direction: column;
    background: linear-gradient(to bottom right, #f8fafc, #f1f5f9);
}

.form-group {
    margin-bottom: 14px;
    animation: slideUp 0.4s ease-out both;
}

.form-group:nth-child(1) { animation-delay: 0.1s; }
.form-group:nth-child(2) { animation-delay: 0.15s; }
.form-group:nth-child(3) { animation-delay: 0.2s; }

.form-label {
    display: block;
    font-size: 12px;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 4px;
}

.form-input,
.form-textarea {
    width: 100%;
    padding: 8px 10px;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    font-size: 13px;
    background: #ffffff;
    box-shadow: inset 0 1px 2px rgba(0,0,0,0.03);
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
    box-sizing: border-box;
}

.form-input:focus,
.form-textarea:focus {
    outline: none;
    border-color: #6366f1;
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
}

.form-textarea {
    resize: none;
    min-height: 80px;
    max-height: 80px;
    overflow-y: auto;
    font-family: inherit;
    flex: 1;
}

.optional-fields {
    background: rgba(102, 126, 234, 0.05);
    padding: 12px;
    border-radius: 8px;
    margin-top: 8px;
}

.optional-heading {
    font-size: 11px;
    font-weight: 600;
    color: #667eea;
    margin: 0 0 8px 0;
    text-align: center;
}

.submit-btn {
    width: 100%;
    background: linear-gradient(135deg, #6366f1, #7c3aed);
    color: white;
    padding: 10px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    transition: background 0.3s ease, transform 0.2s ease;
    position: relative;
    overflow: hidden;
    margin-top: 12px;
}

.submit-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.6s;
}

.submit-btn:hover::before {
    left: 100%;
}

.submit-btn:hover {
    background: linear-gradient(135deg, #4f46e5, #6d28d9);
    transform: translateY(-1px);
    box-shadow: 0 4px 15px rgba(99, 102, 241, 0.25);
}

.submit-btn:active {
    transform: translateY(0);
}

.submit-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
}

.success-message {
    text-align: center;
    padding: 30px 16px;
    animation: slideUp 0.5s ease-out;
    height: 380px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.success-icon {
    font-size: 40px;
    color: #10b981;
    margin-bottom: 12px;
    animation: pulse 1s ease-in-out;
}

.success-text {
    font-size: 16px;
    font-weight: 600;
    color: #374151;
    margin: 0 0 6px 0;
}

.success-subtext {
    font-size: 12px;
    color: #6b7280;
    margin: 0;
    line-height: 1.4;
}

/* Mobile optimizations */
@media (max-width: 768px) {
    .feedback-widget-container {
        right: 0;
    }
    
    .feedback-tab {
        right: 10px;
        padding: 8px 12px;
        font-size: 11px;
    }
    
    .feedback-form-container {
        width: calc(100vw - 30px);
        max-width: 300px;
        right: 15px;
        height: 450px;
    }
    
    .feedback-form {
        height: 350px;
    }
    
    .success-message {
        height: 350px;
    }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
    .feedback-form-container {
        background: rgba(31, 41, 55, 0.96);
        border: 1px solid rgba(75, 85, 99, 0.4);
    }
    
    .feedback-form {
        background: linear-gradient(to bottom right, #1f2937, #111827);
    }
    
    .form-label {
        color: #e5e7eb;
    }
    
    .form-input, .form-textarea {
        background: rgba(55, 65, 81, 0.8);
        border-color: #4b5563;
        color: #e5e7eb;
    }
    
    .success-text {
        color: #e5e7eb;
    }
    
    .optional-fields {
        background: rgba(102, 126, 234, 0.1);
    }
}

/* Reduced motion for accessibility */
@media (prefers-reduced-motion: reduce) {
    .feedback-tab {
        animation: none;
    }
    
    * {
        animation-duration: 0.1s !important;
        transition-duration: 0.1s !important;
    }
}
    

`;
document.head.appendChild(feedbackStyle);

// Create feedback widget structure
const feedbackContainer = document.createElement('div');
feedbackContainer.className = 'feedback-widget-container';

// Feedback tab (floating button)
const feedbackTab = document.createElement('button');
feedbackTab.className = 'feedback-tab';
feedbackTab.textContent = 'Feedback';
feedbackTab.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M2 4a2 2 0 012-2h16a2 2 0 012 2v1.2l-10 6.25L2 5.2V4zm0 3.48l9.56 5.98a1 1 0 001.1 0L22 7.48V20a2 2 0 01-2 2H4a2 2 0 01-2-2V7.48z"/>
  </svg>
  Feedback
`;

feedbackTab.setAttribute('aria-label', 'Open feedback form');

// Form container
const formContainer = document.createElement('div');
formContainer.className = 'feedback-form-container';

// Header
const header = document.createElement('div');
header.className = 'feedback-header';
header.innerHTML = `
    <button class="close-btn" aria-label="Close feedback form">×</button>
    <h2 class="feedback-title">Tell us what you think!</h2>
    <p class="feedback-subtitle">Help us make RentAbout better for you!<br>Whether you loved something or found a bug, we're all ears.</p>
`;

// Form
const form = document.createElement('form');
form.className = 'feedback-form';
form.innerHTML = `
    <div class="form-group">
        <label class="form-label" for="feedback-message">Tell us more *</label>
        <textarea 
            class="form-textarea" 
            id="feedback-message" 
            name="message" 
            required 
            placeholder="Share your thoughts, suggestions, or report any issues you've encountered..."
        ></textarea>
    </div>
    
    <div class="optional-fields">
        <div class="form-group">
            <label class="form-label" for="feedback-name">Name</label>
            <input 
                type="text" 
                class="form-input" 
                id="feedback-name" 
                name="name" 
                placeholder="Your name"
            >
        </div>
        
        <div class="form-group">
            <label class="form-label" for="feedback-email">Email Address</label>
            <input 
                type="email" 
                class="form-input" 
                id="feedback-email" 
                name="email" 
                placeholder="your.email@example.com"
            >
        </div>
    </div>
    
    <button type="submit" class="submit-btn">
        Send Feedback
    </button>
`;

// Success message (hidden initially)
const successMessage = document.createElement('div');
successMessage.className = 'success-message';
successMessage.style.display = 'none';
successMessage.innerHTML = `
    <div class="success-icon">✅</div>
    <h3 class="success-text">Thank you for your feedback!</h3>
    <p class="success-subtext">We've received your message and will get back to you soon.</p>
`;

// Assemble the widget
formContainer.appendChild(header);
formContainer.appendChild(form);
formContainer.appendChild(successMessage);
feedbackContainer.appendChild(feedbackTab);
feedbackContainer.appendChild(formContainer);

// State management
let isFormOpen = false;

// Toggle form function
function toggleFeedbackForm() {
    if (isFormOpen) {
        // Close form
        formContainer.classList.add('closing');
        setTimeout(() => {
            formContainer.style.display = 'none';
            formContainer.classList.remove('closing');
        }, 400);
        feedbackTab.setAttribute('aria-expanded', 'false');
    } else {
        // Open form
        formContainer.style.display = 'block';
        feedbackTab.setAttribute('aria-expanded', 'true');
        
        // Focus on textarea after animation
        setTimeout(() => {
            document.getElementById('feedback-message').focus();
        }, 500);
    }
    isFormOpen = !isFormOpen;
}

// Event listeners
feedbackTab.addEventListener('click', toggleFeedbackForm);

// Close button
const closeBtn = header.querySelector('.close-btn');
closeBtn.addEventListener('click', toggleFeedbackForm);

// Close on outside click
document.addEventListener('click', (e) => {
    if (isFormOpen && !feedbackContainer.contains(e.target)) {
        toggleFeedbackForm();
    }
});

// Close on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isFormOpen) {
        toggleFeedbackForm();
    }
});

// Form submission
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitBtn = form.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    
    // Get form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    try {
        // Replace with your actual form submission endpoint
        const response = await fetch('https://api-selina.d.yeducoders.com/submitfeedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        
        if (response.ok) {
            // Show success message
            form.style.display = 'none';
            successMessage.style.display = 'block';
            
            // Auto-close after 3 seconds
            setTimeout(() => {
                toggleFeedbackForm();
                
                // Reset form after closing
                setTimeout(() => {
                    form.reset();
                    form.style.display = 'block';
                    successMessage.style.display = 'none';
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalText;
                }, 500);
            }, 3000);
        } else {
            throw new Error('Failed to submit feedback');
        }
    } catch (error) {
        console.error('Error submitting feedback:', error);
        alert('Sorry, there was an error submitting your feedback. Please try again.');
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
    }
});

// Append to body
document.body.appendChild(feedbackContainer);

// Initial fade-in animation
feedbackContainer.style.opacity = '0';
setTimeout(() => {
    feedbackContainer.style.transition = 'opacity 0.6s ease-out';
    feedbackContainer.style.opacity = '1';
}, 100);
