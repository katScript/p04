class RegisterData {
    constructor() {
        this.username = null;
        this.password = null;
        this.email = null;
        this.customerData = {
            fullName: null,
            phone: null,
            email: null
        };
    }

    getObjectData() {
        return {
            username: this.username,
            password: this.password,
            email: this.email,
            customerData: this.customerData
        }
    }

    bindObjectData(data) {
        this.username = data.username;
        this.email = data.email;
        this.password = data.password;
        this.customerData.phone = data.phone;
        this.customerData.fullName = data.fullname;
        this.customerData.email = data.email;
    }

    setObjectData(data) {
        this.username = data.username;
        this.password = data.password;
        this.email = data.email;
        this.customerData = data.customerData;
    }
}

export default RegisterData;