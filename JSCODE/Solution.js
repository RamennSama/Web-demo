

function toggleSolution(card) {
    card.classList.toggle("open");
  }

  function toggleSection(element) {
    var content = element.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
      document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightElement(block);
      });
    }
  }
  document.querySelectorAll('.sidebar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });


  function copyCode(button) {
    let codeBlock = button.nextElementSibling.querySelector("code");
    let text = codeBlock.innerText;
    
    navigator.clipboard.writeText(text).then(() => {
      button.innerText = "✅ Copied!";
      setTimeout(() => button.innerText = "📋 Copy", 2000);
    }).catch(err => {
      console.error("Copy failed", err);
    });
  }

  
  
  