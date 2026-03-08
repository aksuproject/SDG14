// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyABow5shTLZtHZ1E1507Hgzz4V3C6gJ9bQ",
    authDomain: "sdg14-21b88.firebaseapp.com",
    databaseURL: "https://sdg14-21b88-default-rtdb.firebaseio.com",
    projectId: "sdg14-21b88",
    storageBucket: "sdg14-21b88.firebasestorage.app",
    messagingSenderId: "970634855819",
    appId: "1:970634855819:web:b97260c3ea20e6aa0b1b8e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database().ref('pledgeCount');

// Update UI on data change
db.on('value', (snap) => {
    document.getElementById('count').innerText = snap.val() || 0;
});

// Pledge Button Logic
document.getElementById('pledgeBtn').onclick = function() {
    // Trigger Confetti
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#023e8a', '#00b4d8', '#ffb703', '#ffffff']
    });

    // Hide button and show celebration message
    this.style.display = 'none';
    document.getElementById('celebration').style.display = 'block';

    // Increment count in Firebase
    db.transaction(c => (c || 0) + 1);
};
