function signup(){
  event.preventDefault();
  var username=document.getElementById("username").value;
  var password=document.getElementById("password").value;
  var coin=document.getElementById("coin").value;
  var user={
    username:username,
    password:password,
    coin:coin,
  }
  var json= JSON.stringify(user);
  localStorage.setItem(username,json);
  alert("ĐĂNG KÝ THÀNH CÔNG");
}

/*Bấm nút add account*/
const toggleaddbutton = document.querySelector('.add-button')
const wrapper = document.querySelector('.wrapper')
toggleaddbutton.onclick = function(){
    wrapper.classList.toggle('open')
}
/*Tắt add account*/
const togglex=document.querySelector('.x')
togglex.onclick = function(){
  wrapper.classList.toggle('open')
}