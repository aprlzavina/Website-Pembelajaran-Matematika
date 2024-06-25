document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('quiz-form');
    const result = document.getElementById('quiz-result');
    const solution = document.getElementById('quiz-solution');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const answers = {
                q1: 'B. 84.8',
                q2: 'A. 85',
                q3: 'D. 85',
                q4: 'B. 7',
                q5: 'D. 3'
            };

            let score = 0;
            const formData = new FormData(form);

            for (let [question, answer] of formData.entries()) {
                if (answers[question] === answer) {
                    score++;
                    document.getElementById(`solution-${question}`).style.display = 'block';
                }
            }

            result.textContent = `Skor Anda: ${score*20} dari 100`;
            form.style.display = 'none';
            solution.style.display = 'block';
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scroll ke bawah
            header.classList.add('hide');
            footer.classList.add('hide');
        } else {
            // Scroll ke atas
            header.classList.remove('hide');
            footer.classList.remove('hide');
        }

        lastScrollTop = scrollTop;
    });

    const title = document.querySelector('.animated-title');
    const spans = title.querySelectorAll('span');

    title.addEventListener('mouseover', function() {
        spans.forEach(span => {
            span.style.color = '#ffdd57';
            span.style.transition = 'color 0.3s';
        });
    });

    title.addEventListener('mouseout', function() {
        spans.forEach(span => {
            span.style.color = 'white';
            span.style.transition = 'color 0.3s';
        });
    });

    const solutionButtons = document.querySelectorAll('.solution-btn');

    solutionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = button.getAttribute('data-target');
            const solution = document.getElementById(targetId);

            if (solution.style.display === 'none') {
                solution.style.display = 'block';
            } else {
                solution.style.display = 'none';
            }
        });
    });

    // Login functionality
    const loginForm = document.getElementById('login-form');
    const loginMessage = document.getElementById('login-message');
    const loginLink = document.getElementById('login-link');
    const logoutLink = document.getElementById('logout-link');

    function updateLoginStatus() {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (isLoggedIn) {
            loginLink.style.display = 'none';
            logoutLink.style.display = 'block';
        } else {
            loginLink.style.display = 'block';
            logoutLink.style.display = 'none';
        }
    }

    updateLoginStatus();

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Simple check for username and password
            if (username === 'user' && password === 'password') {
                localStorage.setItem('isLoggedIn', 'true');
                window.location.href = 'index.html';
            } else {
                loginMessage.textContent = 'Username atau password salah.';
            }
        });
    }

    if (logoutLink) {
        logoutLink.addEventListener('click', function(event) {
            event.preventDefault();
            localStorage.removeItem('isLoggedIn');
            window.location.href = 'index.html';
        });
    }

    // Feedback functionality
    const feedbackForm = document.getElementById('feedback-form');
    const feedbackList = document.getElementById('feedback-list');

    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const feedback = document.getElementById('feedback').value;

            const feedbackItem = document.createElement('li');
            feedbackItem.textContent = `${name}: ${feedback}`;

            feedbackList.appendChild(feedbackItem);

            feedbackForm.reset();
        });
    }
});
