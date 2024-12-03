$(document).ready(function () {
    $("#form").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
            },
            team: {
                required: true
            },
            level: {
                required: true
            },
            date: {
                required: true,
                date: true
            },
            feedback: {
                required: true,
                minlength: 10
            }
        },
        messages: {
            name: {
                required: "Kérlek add meg a teljes neved!",
                minlength: "A név legalább 2 karakter hosszú legyen!"
            },
            email: {
                required: "Kérlek add meg az e-mail címed!",
                email: "Kérlek valós e-mail címet adj meg!"
            },
            phone: {
                required: "Kérlek add meg a telefonszámod!",
            },
            team: "Kérlek válaszd ki a kedvenc csapatod!",
            level: "Kérlek válaszd ki a focizási szinted!",
            date: {
                required: "Kérlek válassz egy dátumot!",
                date: "Helyes dátumformátum szükséges!"
            },
            feedback: {
                required: "Kérlek írd meg a véleményed!",
                minlength: "A véleménynek legalább 10 karakter hosszúnak kell lennie!"
            }
        },

    });
});
