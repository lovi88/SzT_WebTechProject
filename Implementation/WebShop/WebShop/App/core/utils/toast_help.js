function toastrOptionInit() {
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "positionClass": "toast-top-left",
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "500",
        "timeOut": "3000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    };
}

function toast_success(title, message) {
    toastr.success(message, title);
}

function toast_success_click(title, message, fnc) {
    toastr.options.onclick = fnc;
    toastr.success(message, title);
    toastr.options.onclick = null;
}