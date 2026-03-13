// ============================================
//  ELITEPICKS GH — MAIN JS
// ============================================

// ---- CONFIG: UPDATE THESE ----
const CONFIG = {
    whatsappNumber: '233XXXXXXXXX', // e.g. 233551234567
    momoNumber: '055 XXX XXXX',
    cryptoAddresses: {
        BTC: 'bc1q...your-btc-address-here',
        USDT: 'TYour...USDT-TRC20-address-here',
        ETH: '0x...your-eth-address-here'
    }
};

// ---- NAVBAR SCROLL EFFECT ----
const navbar = document.getElementById('navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        navbar.style.boxShadow = window.scrollY > 20
            ? '0 4px 24px rgba(0,0,0,0.4)'
            : 'none';
    });
}

// ---- MOBILE MENU ----
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
    });
    // Close when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => mobileMenu.classList.remove('open'));
    });
}

// ---- TODAY'S FREE PICKS ----
const todayPicks = [
    {
        league: 'Premier League',
        home: 'Arsenal',
        away: 'Chelsea',
        time: 'Today, 17:30 GMT',
        prediction: 'Home Win',
        odds: '1.75',
        status: 'live'
    },
    {
        league: 'La Liga',
        home: 'Barcelona',
        away: 'Atletico Madrid',
        time: 'Today, 19:00 GMT',
        prediction: 'Over 2.5',
        odds: '1.90',
        status: 'today'
    },
    {
        league: 'Bundesliga',
        home: 'Bayern Munich',
        away: 'Dortmund',
        time: 'Today, 16:30 GMT',
        prediction: 'BTTS',
        odds: '1.65',
        status: 'today'
    }
];

function renderPicks() {
    const grid = document.getElementById('picksGrid');
    if (!grid) return;

    grid.innerHTML = todayPicks.map(pick => `
        <div class="pick-card">
            <div class="pick-header">
                <span class="pick-league">${pick.league}</span>
                <span class="pick-status ${pick.status}">${pick.status === 'live' ? '🔴 LIVE' : '✅ TODAY'}</span>
            </div>
            <div class="pick-teams">
                <div class="pick-team">${pick.home}</div>
                <div class="pick-vs">VS</div>
                <div class="pick-team">${pick.away}</div>
            </div>
            <div class="pick-time"><i class="fas fa-clock"></i> ${pick.time}</div>
            <div class="pick-footer">
                <span class="pick-label">Prediction</span>
                <span class="pick-prediction">${pick.prediction} @ ${pick.odds}</span>
            </div>
        </div>
    `).join('');
}

renderPicks();

// ---- SCROLL ANIMATIONS ----
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
};
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.pick-card, .step, .testimonial, .price-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});
