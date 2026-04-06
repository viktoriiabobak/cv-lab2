document.addEventListener("DOMContentLoaded", () => {
    
    //1
    const userOS = navigator.platform;
    const userBrowser = navigator.userAgent;

    localStorage.setItem('os', userOS);
    localStorage.setItem('browser', userBrowser);

    const savedOS = localStorage.getItem('os');
    const savedBrowser = localStorage.getItem('browser');

    const infoContainer = document.querySelector('.system-info');
    if (infoContainer) {
        infoContainer.textContent = `OS: ${savedOS} | Browser: ${savedBrowser}`;
    }

    //2
    const reviewsList = document.querySelector('.reviews-list');

    async function fetchReviews() {
        if (!reviewsList) return;
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/2/comments');
            const comments = await response.json();

            reviewsList.innerHTML = ''; 

            comments.forEach(comment => {
                const li = document.createElement('li');
                li.innerHTML = `<strong style="color: #5e8b52;">${comment.email}</strong> <br> ${comment.body}`;
                reviewsList.appendChild(li);
            });
        } catch (error) {
            console.error('Помилка завантаження відгуків:', error);
            reviewsList.innerHTML = '<li>Не вдалося завантажити відгуки.</li>';
        }
    }
    fetchReviews();
    
    //3
    const modalOverlay = document.querySelector('.modal-overlay');
    const closeModalBtn = document.querySelector('.close-modal');
    const openModalBtn = document.querySelector('.contact-btn'); 

    if (modalOverlay && closeModalBtn) {
        setTimeout(() => {
            modalOverlay.classList.remove('hidden');
        }, 60000); 

        if (openModalBtn) {
            openModalBtn.addEventListener('click', () => {
                modalOverlay.classList.remove('hidden');
            });
        }

        closeModalBtn.addEventListener('click', () => modalOverlay.classList.add('hidden'));
        modalOverlay.addEventListener('click', (event) => {
            if (event.target === modalOverlay) modalOverlay.classList.add('hidden');
        });
    }
    //4
    const themeToggleBtn = document.querySelector('.theme-toggle');
    const body = document.body;

    if (themeToggleBtn) {
        const hours = new Date().getHours();
        
        if (hours < 7 || hours >= 21) {
            body.classList.add('dark-mode');
            themeToggleBtn.textContent = 'Light Mode';
        } else {
            body.classList.remove('dark-mode');
            themeToggleBtn.textContent = 'Dark Mode';
        }

        themeToggleBtn.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            
            if (body.classList.contains('dark-mode')) {
                themeToggleBtn.textContent = 'Light Mode';
            } else {
                themeToggleBtn.textContent = 'Dark Mode';
            }
        });
    }

}); 