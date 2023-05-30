$(document).ready(function () {
    $("#signup-form").submit(function () {
      var nm1 = $("#name1").val();
      var ps1 = $("#pass1").val();
      localStorage.setItem("n1", nm1);
      localStorage.setItem("p1", ps1);

    });
  });