//For Home section
document.addEventListener("DOMContentLoaded", () => {
    const introBox = document.querySelector(".intro-box");
    const profilePic = document.querySelector(".profile-pic");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          introBox.classList.remove("drop-in");
          profilePic.classList.remove("drop-in");
  
          // Force reflow to re-trigger animation
          void introBox.offsetWidth;
          void profilePic.offsetWidth;
  
          introBox.classList.add("drop-in");
          profilePic.classList.add("drop-in");
        } else {
          introBox.classList.remove("drop-in");
          profilePic.classList.remove("drop-in");
        }
      });
    }, {
      threshold: 0.5
    });
  
    observer.observe(document.querySelector("#home"));
  });
  


// For Projects section
const projectCards = document.querySelectorAll('.project-card');
const projectTitle = document.getElementById('project-title');

const projectsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Animate the title first
      projectTitle.style.opacity = '1'; 
      projectTitle.style.transform = 'translateY(0)';

      // Animate project cards one by one
      projectCards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add('visible');
        }, index * 300);
      });
    } else {
      projectTitle.style.opacity = '0';
      projectTitle.style.transform = 'translateY(30px)';
      projectCards.forEach(card => card.classList.remove('visible'));
    }
  });
}, { threshold: 0.3 });

projectsObserver.observe(document.getElementById('projects'));


//for Skill Section 
function animateSkills() {
    const skills = document.querySelectorAll(".skill");
    const container = document.querySelector(".skills-scatter");
  
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
  
    skills.forEach(skill => {
      const finalTopPercent = parseFloat(skill.style.top);
      const finalLeftPercent = parseFloat(skill.style.left);
  
      const finalX = (finalLeftPercent / 100) * containerWidth;
      const finalY = (finalTopPercent / 100) * containerHeight;
  
      const directions = ["top", "bottom", "left", "right"];
      const dir = directions[Math.floor(Math.random() * directions.length)];
  
      let startX, startY;
  
      switch (dir) {
        case "top":
          startX = Math.random() * containerWidth;
          startY = -100;
          break;
        case "bottom":
          startX = Math.random() * containerWidth;
          startY = containerHeight + 100;
          break;
        case "left":
          startX = -200;
          startY = Math.random() * containerHeight;
          break;
        case "right":
          startX = containerWidth + 200;
          startY = Math.random() * containerHeight;
          break;
      }
  
      // Reset styles to start fresh on every animation trigger
      skill.style.transition = 'none'; 
      skill.style.transform = `translate(${startX - finalX}px, ${startY - finalY}px) rotate(${(Math.random() - 0.5) * 60}deg)`;
      skill.style.opacity = "0";
      skill.classList.remove("entered");
  
      // Force reflow
      skill.offsetHeight;
  
      // Animate to final position
      setTimeout(() => {
        skill.style.transition = '';  // reset transition so CSS class animates normally
        skill.classList.add("entered");
        skill.style.opacity = "1";
      }, 100 + Math.random() * 1000);
    });
  }
  
  // Run animation once on load
  window.addEventListener("load", () => {
    animateSkills();
  });
  
  // Create observer for the skills section
  const skillsSection = document.getElementById('skills');
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateSkills();
      }
    });
  }, { threshold: 0.5 });  
  
  observer.observe(skillsSection);



  