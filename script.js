const tulipContainer = document.getElementById('tulip-container');

// Create tulips
for (let i = 0; i < 8; i++) {
  const tulip = document.createElement('div');
  tulip.classList.add('tulip');
  tulipContainer.appendChild(tulip);
}
