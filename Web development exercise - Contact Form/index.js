// Web development exercise - Contact Form:
// Create a simple web page containing a contact form with fields for name, email, subject and
// message. When submitting the form, the data must be validated (for example, checking that
// the email field has a valid format) and displayed in an area below the form.

function validateEmail(email) {
	const re = /\S+@\S+\.\S+/;
	return re.test(email);
}

window.onload = function () {
	const form = document.getElementById('test-form');
	const response = document.getElementById('response');

	form.addEventListener('submit', function (event) {
		event.preventDefault();

		const name = event.target.elements.name.value.trim();
		const email = event.target.elements.email.value.trim();
		const subject = event.target.elements.subject.value.trim();
		const message = event.target.elements.message.value.trim();

		if (name.length < 3) {
			alert('Name must have at least 3 characters');
			return
		}

		if (!validateEmail(email)) {
			alert('Email must be a valid email address');
			return
		}

		if (subject.length < 3) {
			alert('Subject must have at least 3 characters');
			return
		}

		if (message.length < 5) {
			alert('Message must have at least 5 characters');
			return
		}

		response.innerHTML = `
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Subject: ${subject}</p>
            <p>Message: ${message}</p>
        `;
	});
};

console.log('ao');
