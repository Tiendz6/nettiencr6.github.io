$(document).ready(function(){
  $('#eye').click(function(){
      $(this).toggleClass('open');
      $(this).children('i').toggleClass('fa-eye-slash fa-eye');
      if($(this).hasClass('open')){
          $(this).prev().attr('type', 'text');
      }
      else{
          $(this).prev().attr('type', 'password');
      }
  });
});

function signup(){
  event.preventDefault();
  var username=document.getElementById("username").value;
  var email=document.getElementById("email").value;
  var password=document.getElementById("password").value;
  var user={
    username:username,
    email:email,
    password:password,
  }
  var json= JSON.stringify(user);
  localStorage.setItem(username,json);
  alert("ĐĂNG KÝ THÀNH CÔNG");
  window.location.href="signin.html";
}
function signin(){
  event.preventDefault();
  var username=document.getElementById("username").value;
  var email=document.getElementById("email").value;
  var password=document.getElementById("password").value;
  var user=localStorage.getItem(username);
  var data= JSON.parse(user);
  if( username == "admin"  && password == "123"){
    window.location.href="asset";
  }
  else if( username == data.username && password == data.password && email == data.email){
    window.location.href="homeCustomer.html";
  }
  else{
    alert("Tài khoản mật khẩu không chính xác!")
  }
}