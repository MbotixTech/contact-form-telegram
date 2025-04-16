const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = this.querySelector('input[placeholder="Your Name"]').value;
        const email = this.querySelector('input[placeholder="Your Email"]').value;
        const subject = this.querySelector('input[placeholder="Subject"]').value;
        const message = this.querySelector('textarea[placeholder="Your Message"]').value;

        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        const token = 'YOUR_BOT_TOKEN'; // ← Replace with your Telegram bot token
        const chatId = 'YOUR_CHAT_ID'; // ← Replace with your chat ID
        const telegramMessage = `Pesan dari ${name} (${email})\n\nSubjek: ${subject}\nPesan: ${message}`;
        
        fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: chatId,
                text: telegramMessage,
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                alert('Your message has been sent!');
            } else {
                alert('Failed to send the message. Try again later.');
            }
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        })
        .catch(error => {
            alert('An error occurred while sending the message.');
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        });
    });
}
