// +++++++++++++ System types +++++++++++++
$("#anoigomena").click(function () {
    $(".system_type").hide();
    $("#anoigomena_content").fadeIn();

    $(".sys_types").removeClass("active");
    $("#anoigomena").addClass("active");
});

$("#ptysomena").click(function () {
    $(".system_type").hide();
    $("#ptysomena_content").fadeIn();
    // $("#ptysomena").css("overflow", "auto");
    $(".sys_types").removeClass("active");
    $("#ptysomena").addClass("active");
});

$("#syromena").click(function () {
    $(".system_type").hide();
    $("#syromena_content").fadeIn();
    $(".sys_types").removeClass("active");
    $("#syromena").addClass("active");
});

$("#anasyromena").click(function () {
    $(".system_type").hide();
    $("#anasyromena_content").fadeIn();
    $(".sys_types").removeClass("active");
    $("#anasyromena").addClass("active");
});

$("#systimata_rolou").click(function () {
    $(".system_type").hide();
    $("#systimata_rolou_content").fadeIn();
    $(".sys_types").removeClass("active");
    $("#systimata_rolou").addClass("active");
});

$("#systimata_sitas").click(function () {
    $(".system_type").hide();
    $("#systimata_sitas_content").fadeIn();
    $(".sys_types").removeClass("active");
    $("#systimata_sitas").addClass("active");
});

$("#eidikes_kataskeves").click(function () {
    $(".system_type").hide();
    $("#eidikes_kataskeves_content").fadeIn();
    $(".sys_types").removeClass("active");
    $("#eidikes_kataskeves").addClass("active");
});
