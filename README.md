# ElitePicks GH — Website

Ghana's #1 sports prediction platform. Expert daily picks with MTN MoMo and crypto payments.

---

## 📁 File Structure

```
elitepicks/
├── index.html              ← Main homepage
├── results.html            ← Results/track record page
├── login.html              ← Member login
├── terms.html              ← Terms of use
├── privacy.html            ← Privacy policy
├── responsible-gambling.html
├── css/
│   └── style.css           ← All styles
├── js/
│   ├── main.js             ← Picks display, animations, nav
│   └── payment.js          ← MoMo + Crypto payment modal
└── images/
    ├── mtn-momo.svg
    ├── bitcoin.svg
    ├── usdt.svg
    └── ethereum.svg
```

---

## ⚙️ Setup — REQUIRED Before Going Live

Open `js/main.js` and update the `CONFIG` object at the top:

```js
const CONFIG = {
    whatsappNumber: '233XXXXXXXXX',  // Your full WhatsApp number with country code (no +)
    momoNumber: '055 XXX XXXX',      // Your MTN MoMo number
    cryptoAddresses: {
        BTC:  'bc1q...your-actual-btc-address',
        USDT: 'T...your-actual-usdt-trc20-address',
        ETH:  '0x...your-actual-eth-address'
    }
};
```

Also update:
- `index.html` → Contact section: WhatsApp number and Telegram link
- `index.html` → Footer: Email address and social media links
- `results.html` → Add/remove real match results from the `results` array in the `<script>` tag

---

## 💳 How Payments Work

### MTN Mobile Money
1. Customer selects a plan and clicks **Subscribe**
2. They see step-by-step MoMo instructions with your number
3. They pay, fill in their name, phone, and Transaction ID
4. Clicking **Confirm via WhatsApp** opens WhatsApp with a pre-filled message
5. You see the message, verify the transaction ID on MoMo, then add them to the VIP group

### Crypto (BTC / USDT / ETH)
1. Customer selects crypto and sees your wallet address + QR placeholder
2. They send the correct amount, fill in the form
3. WhatsApp message includes the transaction hash for you to verify on-chain
4. You verify → add them to VIP group

> 💡 **Tip:** For automatic crypto verification, consider integrating [NOWPayments](https://nowpayments.io) or [Binance Pay](https://pay.binance.com) in the future.

---

## 🚀 Deploy to GitHub Pages (Free Hosting)

1. Create a GitHub account at [github.com](https://github.com)
2. Create a new repository named `elitepicksgh` (or any name)
3. Upload all files maintaining the folder structure
4. Go to **Settings → Pages → Source: Deploy from branch → main → / (root)**
5. Your site will be live at: `https://yourusername.github.io/elitepicksgh`

### Custom Domain (e.g. elitepicksgh.com)
1. Buy domain from [Namecheap](https://namecheap.com) (~$10/year)
2. In GitHub Pages settings, add your custom domain
3. In Namecheap DNS, add a CNAME record pointing to `yourusername.github.io`

---

## ✏️ Updating Picks Daily

In `js/main.js`, find the `todayPicks` array and update it each morning:

```js
const todayPicks = [
    {
        league: 'Premier League',
        home: 'Arsenal',
        away: 'Chelsea',
        time: 'Today, 17:30 GMT',
        prediction: 'Home Win',
        odds: '1.75',
        status: 'today'   // 'today' or 'live'
    },
    // Add more picks...
];
```

---

## 📞 Support

Questions? Contact: support@elitepicksgh.com
