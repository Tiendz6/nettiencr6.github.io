function signin(){
  event.preventDefault();
  var username=document.getElementById("username").value;
  var password=document.getElementById("password").value;
  var user=localStorage.getItem(username);
  var data= JSON.parse(user);
  if( username == "admin" && password == "123"){
    window.location.href="admin.html";
    alert("Đăng nhập thành công")
  }
  else if( username == data.username && password == data.password){
    window.location.href="index.html";
  }
  else{
    alert("Tài khoản hoặc mật khẩu không chính xác!")
  }
}