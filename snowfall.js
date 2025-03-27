// Create and animate snowflakes
function createSnowflakes() {
    const snowContainer = document.querySelector('.snow');
    const numberOfSnowflakes = 100; // You can adjust this number to make more or fewer snowflakes

    for (let i = 0; i < numberOfSnowflakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
        snowflake.style.animationDuration = Math.random() * 5 + 5 + 's'; // Random animation duration
        snowContainer.appendChild(snowflake);
    }
}

// Run the snowflake creation when the page loads
window.onload = createSnowflakes;
