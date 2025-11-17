document.addEventListener('DOMContentLoaded', () => {
  // ===== TYPEWRITER EFFECT =====
  const textArray = ["Web Developer", "Designer", "Tech Student", "IT Student"];
  let index = 0, charIndex = 0;
  const typingSpan = document.querySelector(".typing-text span");

  if (!typingSpan) return; // Exit if element not found

  function type() {
    if (charIndex < textArray[index].length) {
      typingSpan.textContent += textArray[index].charAt(charIndex);
      charIndex++;
      setTimeout(type, 90);
    } else {
      setTimeout(erase, 1300);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typingSpan.textContent = textArray[index].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, 60);
    } else {
      index = (index + 1) % textArray.length;
      setTimeout(type, 200);
    }
  }

  type();
});

// Prevent scrolling during splash
document.body.style.overflow = "hidden";

setTimeout(() => {
  document.body.style.overflow = "auto";
}, 1500); // same as animation time
