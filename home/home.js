$(document).ready(function () {
    $("#submit").click(function () {
        var str = $("#txtName").val(); 
        alert(str + ", thanks for subscribing to our newsletter");
    });
});