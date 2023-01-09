import {common} from "utils/common";

class OrderHistoryData {
    constructor() {
        this.id = null;
        this.orderId = null;
        this.balance = null;
        this.newBalance = null;
        this.transactionValue = null;
        this.description = null;
        this.createdAt = null;
        this.updatedAt = null;
    }

    getTableKeyList = () => {
        return ["id", "createdAt", "newBalance", "transactionValue", "description"];
    }

    getLabelList = () => {
        return ["#", "Thời gian", "Số dư mới (VND)", "Giá trị đơn hàng (VND)", "Nội dung"];
    }

    setObjectData = (data) => {
        this.id = data.id;
        this.orderId = data.orderId;
        this.balance = data.balance;
        this.transactionValue = data.transactionValue;
        this.newBalance = data.newBalance;
        this.description = data.description;
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
    }

    getObjectData = () => {
        return {
            id : this.id,
            orderId : this.orderId,
            balance : common.thousandFormat(this.balance),
            transactionValue : common.thousandFormat(this.transactionValue),
            newBalance : common.thousandFormat(this.newBalance),
            description : this.description,
            createdAt : this.createdAt,
            updatedAt : this.updatedAt
        }
    }
}

export default OrderHistoryData;