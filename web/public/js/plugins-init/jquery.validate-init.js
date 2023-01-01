jQuery(".form-valide").validate({
    rules: {
        "username": {
            required: !0,
            minlength: 3
        },
        "email": {
            required: !0,
            email: !0
        },
        "password": {
            required: !0,
            minlength: 5
        },
        "confirm-password": {
            required: !0,
            equalTo: "#password"
        },
        "select2": {
            required: !0
        },
        "select2-multiple": {
            required: !0,
            minlength: 2
        },
        "suggestions": {
            required: !0,
            minlength: 5
        },
        "skill": {
            required: !0
        },
        "currency": {
            required: !0,
            currency: ["$", !0]
        },
        "website": {
            required: !0,
            url: !0
        },
        "phone": {
            required: !0,
            phone: !0
        },
        "digits": {
            required: !0,
            digits: !0
        },
        "number": {
            required: !0,
            number: !0
        },
        "range": {
            required: !0,
            range: [1, 5]
        },
        "terms": {
            required: !0
        }
    },
    messages: {
        "username": {
            required: "Please enter a username",
            minlength: "Your username must consist of at least 3 characters"
        },
        "email": "Please enter a valid email address",
        "password": {
            required: "Please provide a password",
            minlength: "Your password must be at least 5 characters long"
        },
        "confirm-password": {
            required: "Please provide a password",
            minlength: "Your password must be at least 5 characters long",
            equalTo: "Please enter the same password as above"
        },
        "select2": "Please select a value!",
        "select2-multiple": "Please select at least 2 values!",
        "suggestions": "What can we do to become better?",
        "skill": "Please select a skill!",
        "currency": "Please enter a price!",
        "website": "Please enter your website!",
        "phone": "Please enter a phone number!",
        "digits": "Please enter only digits!",
        "number": "Please enter a number!",
        "range": "Please enter a number between 1 and 5!",
        "terms": "You must agree to the service terms!"
    },

    ignore: [],
    errorClass: "invalid-feedback animated fadeInUp",
    errorElement: "div",
    errorPlacement: function(e, a) {
        jQuery(a).parents(".form-group > div").append(e)
    },
    highlight: function(e) {
        jQuery(e).closest(".form-group").removeClass("is-invalid").addClass("is-invalid")
    },
    success: function(e) {
        jQuery(e).closest(".form-group").removeClass("is-invalid"), jQuery(e).remove()
    },
});


jQuery(".form-valide-with-icon").validate({
    rules: {
        "username": {
            required: !0,
            minlength: 3
        },
        "password": {
            required: !0,
            minlength: 5
        }
    },
    messages: {
        "username": {
            required: "Please enter a username",
            minlength: "Your username must consist of at least 3 characters"
        },
        "password": {
            required: "Please provide a password",
            minlength: "Your password must be at least 5 characters long"
        }
    },

    ignore: [],
    errorClass: "invalid-feedback animated fadeInUp",
    errorElement: "div",
    errorPlacement: function(e, a) {
        jQuery(a).parents(".form-group > div").append(e)
    },
    highlight: function(e) {
        jQuery(e).closest(".form-group").removeClass("is-invalid").addClass("is-invalid")
    },
    success: function(e) {
        jQuery(e).closest(".form-group").removeClass("is-invalid").addClass("is-valid")
    }




});