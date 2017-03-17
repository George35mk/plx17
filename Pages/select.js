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


// ama dialeksei seira dixnei tin ekatoste seira pou dialekse
function controler_select_anoigomena_seira(_id){
    // alert(_id);
}

// ama dialeksi portes kanei show tis ports kai outo katheksis
function controler_select_anoigomena_type(_id) {

    let val = $(`#${_id}`).val();
    // alert(s);


    switch (val) {

        case "portes":
            $(".anoigomenes_kataskeves").hide();
            $("#portes").fadeIn();
            break;

        case "parathira":
            $(".anoigomenes_kataskeves").hide();
            $("#parathira").fadeIn();
            break;

        case "mpalkonoportes":
            $(".anoigomenes_kataskeves").hide();
            $("#mpalkonoportes").fadeIn();
            break;

        case "stathera":
            $(".anoigomenes_kataskeves").hide();
            $("#stathera").fadeIn();
            break;

        default:
            alert('Wtf you select');
            break;
    }



}

function controler_select_seiromena_type(_id) {

    let val = $(`#${_id}`).val();
    // alert(s);


    switch (val) {

        case "epalila":
            $(".seiromenes_kataskeves").hide();
            $("#epalila").fadeIn();
            break;

        case "xonefta":
            $(".seiromenes_kataskeves").hide();
            $("#xonefta").fadeIn();
            break;


        default:
            alert('Wtf you select');
            break;
    }



}