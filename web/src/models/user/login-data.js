class LoginData {
    constructor() {
        this.token = null;
        this.type = null;
        this.id = null;
        this.username = null;
        this.email = null;
        this.roles = null;
    }

    getObjectData() {
        return {
            token: this.token,
            type: this.type,
            id: this.id,
            username: this.username,
            email: this.email,
            roles: this.roles
        }
    }

    setObjectData(data) {
        this.token = data.token;
        this.type = data.type;
        this.id = data.id;
        this.username = data.username;
        this.email = data.email;
        this.roles = data.roles[0];
    }
}

export default LoginData;