import {common} from "utils/common";

class AdminData {
    constructor() {
        this.id = null;
        this.fullName = null;
        this.password = null;
        this.phone = null;
        this.address = null;
        this.currentAddress = null;
        this.username = null;
        this.email = null;
        this.createdAt = null;
        this.updatedAt = null;
    }

    getTableKeyList = () => {
        return ["id", "fullName", "phone", "email", "createdAt"];
    }

    getLabelList = () => {
        return ["#", "Họ và tên", "Số điện thoại", "Email", "Ngày tạo"];
    }

    setObjectData = (data) => {
        this.id = data.id;
        this.fullName = data.fullName;
        this.phone = data.phone;
        this.password = data.password;
        this.email = data.email;
        this.address = data.address;
        this.currentAddress = data.currentAddress;
        this.username = data.username;
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
    }

    getObjectData = () => {
        return {
            id : this.id,
            fullName : this.fullName,
            phone : this.phone,
            password : this.password,
            address : this.address,
            email: this.email,
            currentAddress : this.currentAddress,
            username : this.username,
            createdAt : this.createdAt,
            updatedAt : this.updatedAt
        }
    }

    saveLocalStorageData = () => {
        localStorage.setItem(common.userHashId.admin, JSON.stringify(this.getObjectData()));
    }
}

export default AdminData;