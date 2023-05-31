function signup(){
  event.preventDefault();
  let username=document.getElementById("username").value;
  let password=document.getElementById("password").value;
  let coin=document.getElementById("coin").value;
  let list = localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
  list.push({
    username: username,
    password: password,
    coin: coin,
  });
  localStorage.setItem("list", JSON.stringify(list));
  renderAccount();
}

/*Hiển thị tài khoản*/
function renderAccount() {
  let list = localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
  let Account = "";
  list.map((value, index) => {
    Account +=
    '<div class="account-container"><div class="STT">' + (index + 1) +
    '</div><div class="Thao_tac"><button style="color:red;" onclick="xoa(' +
    index +
    ')">Xóa</button></div><div class="Tai_khoan">' +
    value.username +
    '</div><div class="Mat_khau">' +
    value.password +
    '</div><div class="So_tien">' +
    value.coin;
    '</div></div>'
  });
  document.querySelector(".account-container").innerHTML = Account;
  sum();
  // document.querySelector("#so").innerHTML = list.length;
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