$(document).ready(function () {
    setInterval(() => {
        let reloj = moment().format('h:mm:ss a');
        $("#reloj").html(reloj)
    }, 500);
});