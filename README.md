```markdown
# 💬 Contact Form to Telegram

Formulir kontak berbasis web yang mengirimkan pesan langsung ke akun atau grup Telegram menggunakan Bot API.

## ✨ Fitur
- Form input untuk nama, email, subjek, dan pesan
- Validasi input dasar (wajib diisi)
- Kirim pesan ke Telegram melalui Bot
- Tampilkan status pengiriman lewat `alert()` dan `console.log`
- Desain responsif & minimalis

## 🚀 Cara Penggunaan

1. **Clone repository ini**  
   ```bash
   git clone https://github.com/username/contact-form-telegram.git
   cd contact-form-telegram
   ```

2. **Buka file `script.js`** dan ubah:
   ```js
   const token = 'YOUR_BOT_TOKEN';     // ← Ganti dengan token bot Telegram kamu
   const chatId = 'YOUR_CHAT_ID';      // ← Ganti dengan chat ID kamu
   ```

3. **Jalankan di browser**  
   Buka `index.html` di browser untuk mulai menggunakan.

## 🛠️ Cara Mendapatkan Bot Token & Chat ID

### 1. Buat Bot
- Cari **@BotFather** di Telegram
- Kirim `/start`, lalu `/newbot`
- Ikuti instruksi dan salin **Token** yang diberikan

### 2. Dapatkan Chat ID
- Kirim pesan ke bot kamu
- Buka:  
  ```
  https://api.telegram.org/botYOUR_BOT_TOKEN/getUpdates
  ```
- Cari `chat.id` dari pesan yang dikirim

Made with ❤️ by [Your Name](https://github.com/mbotixtech)
```

---