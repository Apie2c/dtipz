// ============================================
//  ELITEPICKS GH — PAYMENT JS
// ============================================

// CONFIG is defined in main.js — share the same file or copy values here if needed

let currentPlan = { key: '', label: '' };
let activeCrypto = 'BTC';

// ---- OPEN/CLOSE MODAL ----
function openPayment(planKey, planLabel) {
    currentPlan = { key: planKey, label: planLabel };
    document.getElementById('modalSub').textContent =
        planKey.charAt(0).toUpperCase() + planKey.slice(1) + ' Plan — ' + planLabel;
    document.getElementById('momoRef').textContent = 'EP-' + planKey.toUpperCase();
    document.getElementById('momoNumber').textContent = CONFIG.momoNumber;
    updateCryptoAddress('BTC');
    document.getElementById('paymentModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePayment() {
    document.getElementById('paymentModal').classList.remove('active');
    document.body.style.overflow = '';
}

// Close on overlay click
document.getElementById('paymentModal').addEventListener('click', function (e) {
    if (e.target === this) closePayment();
});

// Close on Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closePayment();
});

// ---- TABS ----
function switchTab(tab) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.pay-tab').forEach(t => t.classList.remove('active'));
    document.getElementById('tab-' + tab).classList.add('active');
    const tabs = document.querySelectorAll('.pay-tab');
    const idx = tab === 'momo' ? 0 : 1;
    tabs[idx].classList.add('active');
}

// ---- CRYPTO ----
function selectCrypto(coin) {
    activeCrypto = coin;
    document.querySelectorAll('.crypto-btn').forEach(b => b.classList.remove('active'));
    event.currentTarget.classList.add('active');
    updateCryptoAddress(coin);
}

function updateCryptoAddress(coin) {
    document.getElementById('cryptoCoin').textContent = coin;
    document.getElementById('cryptoAddress').textContent = CONFIG.cryptoAddresses[coin];
}

function copyAddress() {
    const addr = CONFIG.cryptoAddresses[activeCrypto];
    navigator.clipboard.writeText(addr).then(() => {
        const btn = document.querySelector('.btn-copy');
        const orig = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        btn.style.color = 'var(--green)';
        setTimeout(() => {
            btn.innerHTML = orig;
            btn.style.color = '';
        }, 2000);
    });
}

// ---- SUBMIT MOMO ----
function submitMomo() {
    const name = document.getElementById('momoName').value.trim();
    const phone = document.getElementById('momoPhone').value.trim();
    const txn = document.getElementById('momoTxn').value.trim();

    if (!name || !phone || !txn) {
        alert('Please fill in all fields before confirming.');
        return;
    }

    const message = encodeURIComponent(
        `Hi ElitePicks! I just paid for the *${currentPlan.key.toUpperCase()} plan (${currentPlan.label})* via MTN MoMo.\n\n` +
        `👤 Name: ${name}\n` +
        `📞 Phone: ${phone}\n` +
        `🧾 MoMo Transaction ID: ${txn}\n\n` +
        `Please activate my VIP access. Thank you! 🙏`
    );

    window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${message}`, '_blank');
    closePayment();
}

// ---- SUBMIT CRYPTO ----
function submitCrypto() {
    const name = document.getElementById('cryptoName').value.trim();
    const phone = document.getElementById('cryptoPhone').value.trim();
    const txn = document.getElementById('cryptoTxn').value.trim();

    if (!name || !phone || !txn) {
        alert('Please fill in all fields before confirming.');
        return;
    }

    const message = encodeURIComponent(
        `Hi ElitePicks! I just paid for the *${currentPlan.key.toUpperCase()} plan (${currentPlan.label})* via *${activeCrypto}*.\n\n` +
        `👤 Name: ${name}\n` +
        `📞 WhatsApp: ${phone}\n` +
        `🔗 Transaction Hash: ${txn}\n\n` +
        `Please activate my VIP access. Thank you! 🙏`
    );

    window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${message}`, '_blank');
    closePayment();
}
