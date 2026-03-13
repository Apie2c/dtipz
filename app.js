// Replace with your actual Paystack Public Key
const PAYSTACK_PUBLIC_KEY = 'pk_live_xxxxxxxxxxxxxxxxxxxxxxxx';

function pay(plan) {
    let amount = 0;
    if (plan === 'weekly') amount = 50 * 100; // Paystack takes amount in pesewas
    if (plan === 'monthly') amount = 150 * 100;
    if (plan === 'yearly') amount = 1200 * 100;

    let handler = PaystackPop.setup({
        key: PAYSTACK_PUBLIC_KEY,
        email: 'customer@email.com', // You'll get this from Firebase Auth
        amount: amount,
        currency: 'GHS',
        callback: function(response) {
            alert('Payment successful! Reference: ' + response.reference);
            // Here, call your backend (Firebase) to update user's "isPremium" status
            unlockVIP();
        },
        onClose: function() {
            alert('Transaction cancelled.');
        }
    });
    handler.openIframe();
}

function unlockVIP() {
    // Logic to remove the blur and show real tips
    console.log("Unlocking VIP Content...");
}