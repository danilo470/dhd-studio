document.addEventListener('click', function(e) {
          // find the nearest <a> with data-copy
          const card = e.target.closest('div.copy-card');
          if (!card) return;           // not one of our copy-cards
          e.preventDefault();
      
          const textToCopy = card.dataset.copy;
          navigator.clipboard.writeText(textToCopy)
            .then(() => {
              // swap label to give feedback
              const labelEl = card.querySelector('.copy-label');
              if (!labelEl) return;
              const origText = labelEl.textContent;
              labelEl.textContent = 'COPIED!';
              setTimeout(() => labelEl.textContent = origText, 1500);
            })
            .catch(err => console.error('Failed to copy:', err));
        });




        document.addEventListener('DOMContentLoaded', function() {
          var navIcon = document.getElementById('nav-icon4');
          
          
        });