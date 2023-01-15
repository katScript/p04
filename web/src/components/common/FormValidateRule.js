import $ from "jquery";
import "jquery-validation";

const rules = {
    "username": {required: !0, minlength: 3},
    "email": {required: !0, email: !0},
    "password": {required: !0, minlength: 5},
    "confirm-password": {required: !0, equalTo: "#password"},
    "select2": {required: !0},
    "select2-multiple": {required: !0, minlength: 2},
    "suggestions": {required: !0, minlength: 5},
    "skill": {required: !0},
    "currency": {required: !0, currency: ["$", !0]},
    "website": {required: !0, url: !0},
    "phone": {required: !0, phone: !0},
    "digits": {required: !0, digits: !0},
    "number": {required: !0, number: !0},
    "range": {required: !0, range: [1, 5]},
    "terms": {required: !0},
    "target": {required: !0},
    "qty": {required: !0, number: !0, min:1},
    "income": {required: !0, digits: !0, min:1000},

}

const message = {
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
    "terms": "You must agree to the service terms!",
    "target": "Links của bài đăng không được để trống!",
    "qty": {
        required: "Số lượng không được để trống!",
        number: "Số lượng phải là số nguyên!",
        min: "Số lượng gói dịch vụ không được nhỏ hơn 0!"
    },
    "income": {
        required: "Số tiền không được để trống!",
        digits: "Số tiền phải là số nguyên!",
        min: "Số tiền không được nhỏ hơn 1,000 VND!"
    }
}

function FormValidateRule (props) {
    const form = props.form ? props.form : ".form-valide";

    $(document).ready(() => {
        $(form).validate({
            ignore: [],
            errorClass: "invalid-feedback animated fadeInDown",
            errorElement: "div",
            errorPlacement: function (e, a) {
                $(a).parents(".form-group > div").append(e)
            },
            highlight: function (e) {
                $(e).closest(".form-group").removeClass("is-invalid").addClass("is-invalid")
            },
            success: function (e) {
                $(e).closest(".form-group").removeClass("is-invalid");
                $(e).remove();
            },
            rules: rules,
            messages: message
        });
    });

}

export default FormValidateRule;