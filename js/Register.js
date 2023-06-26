
document.getElementById("register-form").onsubmit = function(event) {
	validateForm();
	event.preventDefault();
};

function validateForm() {
	var username = document.getElementById("username").value;
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	var confirmPassword = document.getElementById("confirm-password").value;
	var isValid = true;

	if (username === "") {
		alert("Vui lòng nhập username");
		isValid = false;
	}

	if (email === "") {
		alert("Vui lòng nhập email");
		isValid = false;
	} else {
		// Kiểm tra định dạng email
		var emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
		if (!emailPattern.test(email)) {
			alert("Định dạng email không hợp lệ");
			isValid = false;
		}
	}

	if (password === "") {
		alert("Vui lòng nhập password");
		isValid = false;
	} else {
		// Kiểm tra độ dài password
		if (password.length < 8) {
			alert("Password phải chứa ít nhất 8 ký tự");
			isValid = false;
		}
	}

	if (confirmPassword === "") {
		alert("Vui lòng nhập confirm password");
		isValid = false;
	} else {
		// Kiểm tra confirm password có giống với password không
		if (confirmPassword !== password) {
			alert("Password không khớp");
			isValid = false;
		}
	}

	if (isValid) {
		alert("Đăng ký thành công!");
		window.location.href = "index.html";
	}

	event.preventDefault();
}
