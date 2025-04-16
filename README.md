# 💬 Contact Form to Telegram
![image](https://github.com/user-attachments/assets/ad886f76-b5a8-4091-adeb-b4813bd07631)

A web-based contact form that sends messages directly to a Telegram account or group using the Bot API.

## ✨ Features
- Input fields for name, email, subject, and message  
- Basic input validation (required fields)  
- Send messages to Telegram via Bot  
- Show submission status via `alert()`  
- Responsive & minimalist design  

## 🚀 How to Use

1. **Clone this repository**  
   ```bash
   git clone https://github.com/username/contact-form-telegram.git
   cd contact-form-telegram
   ```

2. **Open `script.js`** and update:
   ```js
   const token = 'YOUR_BOT_TOKEN';     // ← Replace with your Telegram bot token
   const chatId = 'YOUR_CHAT_ID';      // ← Replace with your chat ID
   ```

3. **Run in your browser**  
   Open `index.html` in a browser to start using it.

## 🛠️ How to Get Bot Token & Chat ID

### 1. Create a Bot
- Search for **@BotFather** on Telegram  
- Send `/start`, then `/newbot`  
- Follow the instructions and copy the **Token** provided

### 2. Get Your Chat ID
- Send a message to your bot  
- Open:  
  ```
  https://api.telegram.org/botYOUR_BOT_TOKEN/getUpdates
  ```
- Find the `chat.id` from the message you sent

Made with ❤️ by [MbotixTech](https://github.com/mbotixtech)
