// Test script JSO
alert('JSO Berhasil!');
console.log('Script loaded from GitHub');

// Contoh manipulasi DOM
const style = document.createElement('style');
style.textContent = `
    .jso-notification {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        font-family: monospace;
        z-index: 9999;
        animation: slideIn 0.5s ease;
    }
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
`;
document.head.appendChild(style);

const notification = document.createElement('div');
notification.className = 'jso-notification';
notification.innerHTML = '✅ JSO Script Loaded from GitHub!';
document.body.appendChild(notification);

setTimeout(() => notification.remove(), 5000);

// JSO File loaded from: https://raw.githubusercontent.com/WatashiSenseiGalirus/jso/main/yEr7rUo3.js
console.log('JSO File loaded successfully!');