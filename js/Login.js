document.getElementById("login-form").onsubmit = function(event) {
  validateForm();
  event.preventDefault();
};
function validateForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var email = document.getElementById("email").value;
  var isValid = true;

  if (username === "") {
    alert("Vui lòng nhập tên đăng nhập");
    isValid = false;
  }

  if (password === "") {
    alert("Vui lòng nhập mật khẩu");
    isValid = false;
  }

  if (email === "") {
    alert("Vui lòng nhập email");
    isValid = false;
  }
  else {
    // Kiểm tra định dạng email
    var emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
    if (!emailPattern.test(email)) {
      alert("Định dạng email không hợp lệ");
      isValid = false;
    }
  }

  if (isValid) {
    alert("Đăng nhập thành công!");
	  window.location.href = "https://haibara123.github.io/tkweb.github.io/";
  }

  event.preventDefault();
}
