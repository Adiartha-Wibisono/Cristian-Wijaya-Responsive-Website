document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('model-registration-form');

    if (!registrationForm) return;

    // Form validation
    registrationForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Reset error messages
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(message => {
            message.style.display = 'none';
        });

        let isValid = true;

        // Validation 1: Full Name (required, at least 2 words)
        const fullName = document.getElementById('fullName');
        const fullNameError = document.getElementById('fullName-error');

        if (!fullName.value.trim()) {
            fullNameError.textContent = 'Full name is required';
            fullNameError.style.display = 'block';
            isValid = false;
        } else if (fullName.value.trim().split(' ').filter(word => word.length > 0).length < 2) {
            fullNameError.textContent = 'Please enter your full name (first and last name)';
            fullNameError.style.display = 'block';
            isValid = false;
        }

        // Validation 2: Email (required, valid format)
        const email = document.getElementById('email');
        const emailError = document.getElementById('email-error');

        if (!email.value.trim()) {
            emailError.textContent = 'Email address is required';
            emailError.style.display = 'block';
            isValid = false;
        } else {
            const emailValue = email.value.trim();
            const hasAtSymbol = emailValue.includes('@');
            const hasDotAfterAt = hasAtSymbol && emailValue.substring(emailValue.indexOf('@')).includes('.');
            const hasTextBeforeAt = hasAtSymbol && emailValue.indexOf('@') > 0;
            const hasTextAfterDot = hasDotAfterAt && emailValue.substring(emailValue.lastIndexOf('.')).length > 1;

            if (!hasAtSymbol || !hasDotAfterAt || !hasTextBeforeAt || !hasTextAfterDot) {
                emailError.textContent = 'Please enter a valid email address';
                emailError.style.display = 'block';
                isValid = false;
            }
        }

        // Validation 3: Date of Birth (required, 18-30 years old)
        const birthdate = document.getElementById('birthdate');
        const birthdateError = document.getElementById('birthdate-error');

        if (!birthdate.value) {
            birthdateError.textContent = 'Date of birth is required';
            birthdateError.style.display = 'block';
            isValid = false;
        } else {
            const today = new Date();
            const birthDate = new Date(birthdate.value);
            let age = today.getFullYear() - birthDate.getFullYear();
            const monthDiff = today.getMonth() - birthDate.getMonth();

            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }

            if (age < 18) {
                birthdateError.textContent = 'You must be at least 18 years old to apply';
                birthdateError.style.display = 'block';
                isValid = false;
            } else if (age > 30) {
                birthdateError.textContent = 'You must be 30 years old or younger to apply';
                birthdateError.style.display = 'block';
                isValid = false;
            }
        }

        // Validation 4: Gender (required)
        const genderInputs = document.querySelectorAll('input[name="gender"]');
        const genderError = document.getElementById('gender-error');
        let genderSelected = false;

        genderInputs.forEach(input => {
            if (input.checked) {
                genderSelected = true;
            }
        });

        if (!genderSelected) {
            genderError.textContent = 'Please select your gender';
            genderError.style.display = 'block';
            isValid = false;
        }

        // Validation 5: Height (required, within range)
        const height = document.getElementById('height');
        const heightError = document.getElementById('height-error');

        if (!height.value) {
            heightError.textContent = 'Height is required';
            heightError.style.display = 'block';
            isValid = false;
        } else {
            const heightValue = parseInt(height.value);
            if (document.querySelector('input[name="gender"][value="female"]').checked && heightValue < 175) {
                heightError.textContent = 'Female models must be at least 175cm tall';
                heightError.style.display = 'block';
                isValid = false;
            } else if (document.querySelector('input[name="gender"][value="male"]').checked && heightValue < 183) {
                heightError.textContent = 'Male models must be at least 183cm tall';
                heightError.style.display = 'block';
                isValid = false;
            }
        }

        // Validation 6: Terms and Conditions (required)
        const terms = document.getElementById('terms');
        const termsError = document.getElementById('terms-error');

        if (!terms.checked) {
            termsError.textContent = 'You must agree to the terms and conditions';
            termsError.style.display = 'block';
            isValid = false;
        }

        // If all validations pass, simulate form submission
        if (isValid) {
            const formContainer = document.querySelector('.registration-form-container');
            formContainer.innerHTML = `
                <div class="submission-success">
                    <h2>Thank You for Your Application!</h2>
                    <p>We have received your modeling application and will review it carefully.</p>
                    <p>If your profile matches our requirements, our talent team will contact you within 2 weeks.</p>
                </div>
            `;
            formContainer.scrollIntoView({ behavior: 'smooth' });
        }
    });

    // Real-time validation for email field
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');

    if (emailInput && emailError) {
        emailInput.addEventListener('blur', function() {
            if (emailInput.value.trim()) {
                const emailValue = emailInput.value.trim();
                const hasAtSymbol = emailValue.includes('@');
                const hasDotAfterAt = hasAtSymbol && emailValue.substring(emailValue.indexOf('@')).includes('.');
                const hasTextBeforeAt = hasAtSymbol && emailValue.indexOf('@') > 0;
                const hasTextAfterDot = hasDotAfterAt && emailValue.substring(emailValue.lastIndexOf('.')).length > 1;

                if (!hasAtSymbol || !hasDotAfterAt || !hasTextBeforeAt || !hasTextAfterDot) {
                    emailError.textContent = 'Please enter a valid email address';
                    emailError.style.display = 'block';
                } else {
                    emailError.style.display = 'none';
                }
            }
        });
    }
});
