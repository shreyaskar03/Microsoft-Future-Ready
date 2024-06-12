document.addEventListener("DOMContentLoaded", () => {
    const getStartedBtn = document.getElementById('getStartedBtn');
    const learnMoreBtn = document.getElementById('learnMoreBtn');

    getStartedBtn.addEventListener('click', () => {
        const chatbotSection = document.getElementById('chatbot-section');
        chatbotSection.scrollIntoView({ behavior: 'smooth' });
    });

    learnMoreBtn.addEventListener('click', () => {
        console.log("Learn More button clicked");
        // Add functionality for "Learn More" button if needed
    });
});
