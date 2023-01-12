class BillingCardData {
    constructor() {
        this.id = null;
        this.customerId = null;
        this.code = null;
        this.seri = null;
        this.value = null;
        this.host = null;
        this.active = null;
        this.createdAt = null;
        this.updatedAt = null;
    }

    getTableKeyList = () => {
        return ["id", "host", "value", "createdAt"];
    }

    getLabelList = () => {
        return ["#", "Nhà mạng", "Giá trị", "Ngày nạp tiền"];
    }

    setObjectData = (data) => {
        this.id = data.id;
        this.customerId = data.customerId;
        this.code = data.code;
        this.seri = data.seri;
        this.value = data.value;
        this.host = data.host;
        this.active = data.active;
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
    }

    getObjectData = () => {
        return {
            id : this.id,
            customerId : this.customerId,
            code : this.code,
            seri : this.seri,
            value : this.value,
            host : this.host,
            active : this.active,
            createdAt : this.createdAt,
            updatedAt : this.updatedAt
        }
    }
}

export default BillingCardData;