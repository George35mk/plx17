// fades the login form and show the signIn form
$("#btn_create_ucount").click(function () {
    $("#login_form").hide();
    $("#singUp_form").show();
    $("#undo_singUp").show();
});

// fades the signIn form and show the login form
$("#undo_singUp").click(function () {
    $("#login_form").show();
    $("#singUp_form").hide();
    $("#undo_singUp").hide();
});
