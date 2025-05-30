  const typingTextElement = document.getElementById('typing-text');
        const textToType = "espero que le guste jiji";
        let charIndex = 0;
        const typingSpeed = 150; 

        function type() {
            if (charIndex < textToType.length) {
                typingTextElement.textContent += textToType.charAt(charIndex);
                charIndex++;
                setTimeout(type, typingSpeed);
            } else {
                
                typingTextElement.style.borderRight = '2px solid #000000'; 
                typingTextElement.style.animation = 'blinkCursor 0.7s step-end infinite';
            }
        }
        setTimeout(() => {
            type();
        }, 500); 