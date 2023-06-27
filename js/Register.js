
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
		alert("Vui lòng nhập tên đăng nhập");
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
		alert("Vui lòng nhập mật khẩu");
		isValid = false;
	} else {
		// Kiểm tra độ dài password
		if (password.length < 6) {
			alert("Mật khẩu phải chứa ít nhất 6 ký tự");
			isValid = false;
		}
	}

	if (confirmPassword === "") {
		alert("Vui lòng nhập xác nhận mật khẩu");
		isValid = false;
	} else {
		// Kiểm tra confirm password có giống với password không
		if (confirmPassword !== password) {
			alert("Mật khẩu không khớp");
			isValid = false;
		}
	}

	if (isValid) {
		alert("Đăng ký thành công!");
		window.location.href = "https://haibara123.github.io/tkweb.github.io/";
	}

	event.preventDefault();
}
