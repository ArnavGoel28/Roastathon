document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const formTitle = document.getElementById('formTitle');
    const signupCategory = document.getElementById('signupCategory');
    const additionalFields = document.getElementById('additionalFields');

    loginBtn.addEventListener('click', () => {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
        loginBtn.classList.add('active');
        signupBtn.classList.remove('active');
        formTitle.textContent = 'Login';
    });

    signupBtn.addEventListener('click', () => {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
        loginBtn.classList.remove('active');
        signupBtn.classList.add('active');
        formTitle.textContent = 'Sign Up';
    });

    signupCategory.addEventListener('change', () => {
        const category = signupCategory.value;
        additionalFields.innerHTML = ''; // Clear previous fields

        switch(category) {
            case 'customer':
                additionalFields.innerHTML = `
                    <div class="form-group">
                        <label for="customerPreference">Pet Preference</label>
                        <input type="text" id="customerPreference" required>
                    </div>
                `;
                break;
            case 'petowner':
                additionalFields.innerHTML = `
                    <div class="form-group">
                        <label for="petType">Pet Type</label>
                        <input type="text" id="petType" required>
                    </div>
                    <div class="form-group">
                        <label for="petAge">Pet Age</label>
                        <input type="number" id="petAge" required>
                    </div>
                `;
                break;
            case 'veteran':
                additionalFields.innerHTML = `
                    <div class="form-group">
                        <label for="serviceDetails">Service Details</label>
                        <textarea id="serviceDetails" required></textarea>
                    </div>
                `;
                break;
            case 'ngo':
                additionalFields.innerHTML = `
                    <div class="form-group">
                        <label for="ngoName">NGO Name</label>
                        <input type="text" id="ngoName" required>
                    </div>
                    <div class="form-group">
                        <label for="ngoDescription">NGO Description</label>
                        <textarea id="ngoDescription" required></textarea>
                    </div>
                `;
                break;
        }
    });

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send the form data to your server
        console.log('Form submitted');
        // You can access all form fields here, including the additional fields
    });
});