document.getElementById('yesBtn').addEventListener('click', function() {
    document.getElementById('heart').style.display = 'block';
    this.innerHTML = "You said yes! 💖";
    this.disabled = true;
    document.getElementById('noBtn').style.display = 'none';
});

document.getElementById('noBtn').addEventListener('click', function(e) {
    e.preventDefault();
    const maxX = window.innerWidth - this.clientWidth;
    const maxY = window.innerHeight - this.clientHeight;
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    this.style.left = newX + 'px';
    this.style.top = newY + 'px';

    let yesBtn = document.getElementById('yesBtn');
    yesBtn.style.fontSize = 'larger'; // Gradually increases size for emphasis
    yesBtn.textContent.includes('Please?') ?
        yesBtn.textContent = 'Pretty please? 🥺' :
        yesBtn.textContent = 'Please? 🥺';
});
