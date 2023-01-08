import {common} from "utils/common";

class CustomerData {
    constructor() {
        this.id = null;
        this.fullName = null;
        this.phone = null;
        this.email = null;
        this.subscription = null;
        this.currentMoney = null;
        this.totalMoney = null;
        this.orders = null;
        this.billingAddress = null;
        this.balanceHistory = null;
        this.customerLog = null;
        this.username = null;
        this.createdAt = null;
        this.updatedAt = null;
    }

    getTableKeyList = () => {
        return ["id", "fullName", "currentMoney", "email", "phone"];
    }

    getLabelList = () => {
        return ["#", "Customer name", "Current Money", "Email", "Phone number"];
    }

    setObjectData = (data) => {
        this.id = data.id;
        this.fullName = data.fullName;
        this.phone = data.phone;
        this.email = data.email;
        this.subscription = data.subscription;
        this.currentMoney = data.currentMoney;
        this.totalMoney = data.totalMoney;
        this.orders = data.orders;
        this.billingAddress = data.billingAddress;
        this.balanceHistory = data.balanceHistory;
        this.customerLog = data.customerLog;
        this.username = data.username;
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
    }

    getObjectData = () => {
        return {
            id : this.id,
            fullName : this.fullName,
            phone : this.phone,
            email : this.email,
            subscription : this.subscription,
            currentMoney : common.thousandFormat(this.currentMoney),
            totalMoney : common.thousandFormat(this.totalMoney),
            orders : this.orders,
            billingAddress : this.billingAddress,
            balanceHistory : this.balanceHistory,
            customerLog : this.customerLog,
            username: this.username,
            createdAt : this.createdAt,
            updatedAt : this.updatedAt
        }
    }

    saveLocalStorageData = () => {
        localStorage.setItem(common.userHashId.customer, JSON.stringify(this.getObjectData()));
    }
}

export default CustomerData;