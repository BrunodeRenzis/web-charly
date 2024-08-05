document.addEventListener('click', function(event) {
    if (event.target.id === 'close') {
      window.location.href = '#';
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      window.location.href = '#';
    }
  });