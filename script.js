const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const mainImg = document.querySelector('img');
const mainHeading = document.querySelector('h1');
const subtext = document.querySelector('p');

const cuteCatImg = "stickers/cute_cat.png";
const thinkAgainImg = "stickers/think_again_bear.png";

const pleadingSoulImg = "stickers/pleading_bear_soul.png"; // Placeholder for now
const comfortingCatsImg = "stickers/comforting_cats.png";

let noClickCount = 0;

// Handle "No" button click
noBtn.addEventListener('click', () => {
    noClickCount++;

    if (noClickCount === 1) {
        // State 1: Think again
        mainImg.src = thinkAgainImg;
        mainHeading.innerHTML = "Please think again! 🙄";
        subtext.innerHTML = "unknown, itni jaldi na matt bolo 😪";
        
        // Reset button position if needed
        noBtn.style.position = 'static';
        noBtn.style.transform = 'none';
    } else if (noClickCount === 2) {
        // State 2: Soch lo (new state)
        mainImg.src = pleadingSoulImg; 
        mainHeading.innerHTML = "Ek aur baar Soch lo! 😣"; 
        subtext.innerHTML = "unknown kyu aisa kar rahi ho Pls Maan jao🥺";
        
        // Reset button position
        noBtn.style.position = 'static';
        noBtn.style.transform = 'none';
    } else if (noClickCount === 3) {
        // State 3: Comforting (new state)
        mainImg.src = comfortingCatsImg;
        mainHeading.innerHTML = "unknown pls Man jao na! Kitna code likh waogi 😭";
        subtext.innerHTML = "bhut glt baat hai yrr 😭";
        
        // Reset button position
        noBtn.style.position = 'static';
        noBtn.style.transform = 'none';
    } else {
        // State 4: Run away
        runAway();
    }
});

function runAway() {
    // Add some padding so it doesn't touch the very edge
    const padding = 20; 
    const maxX = window.innerWidth - noBtn.clientWidth - padding;
    const maxY = window.innerHeight - noBtn.clientHeight - padding;

    // Ensure we don't return negative values if screen is small
    const safeMaxX = Math.max(0, maxX);
    const safeMaxY = Math.max(0, maxY);

    const randomX = Math.floor(Math.random() * safeMaxX) + padding / 2;
    const randomY = Math.floor(Math.random() * safeMaxY) + padding / 2;

    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    noBtn.style.zIndex = '1000'; // Ensure it stays on top
}

// "No" button run away logic - ONLY after the third "Comforting" warning changes
noBtn.addEventListener('mouseover', () => {
    if (noClickCount >= 3) {
        runAway();
    }
});

const loveCatsImg = "stickers/love_cats.png";

// "Yes" button click
yesBtn.addEventListener('click', () => {
    mainImg.src = loveCatsImg;
    mainHeading.innerHTML = "I knew it! unknown Loves me a lot 😘";
    subtext.innerHTML = ""; // Clear subtext or set to something else if desired
    noBtn.style.display = 'none';
    yesBtn.style.display = 'none';
    
    // Optional: confetti or more hearts could be added here
    createHearts();
});

function createHearts() {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = '100vh';
        heart.style.fontSize = Math.random() * 20 + 20 + 'px';
        heart.style.animation = 'floatUp 4s linear forwards';
        
        // Inline style for animation since we can't easily append to CSS file dynamically without more code
        // But better to add keyframes to CSS
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 4000);
    }, 300);
}
