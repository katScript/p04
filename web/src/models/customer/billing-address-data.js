class BillingAddressData {
    constructor() {
        this.id = null;
        this.customerId = null;
        this.type = null;
        this.billingName = null;
        this.holder = null;
        this.accountNumber = null;
        this.address = null;
        this.createdAt = null;
        this.updatedAt = null;
    }

    getTableKeyList = () => {
        return ["id", "billingName", "holder", "accountNumber", "address"];
    }

    getLabelList = () => {
        return ["#", "Name", "Holder", "Account number", "Address"];
    }

    setObjectData = (data) => {
        this.id = data.id;
        this.customerId = data.customerId;
        this.type = data.type;
        this.billingName = data.billingName;
        this.holder = data.holder;
        this.accountNumber = data.accountNumber;
        this.address = data.address;
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
    }

    getObjectData = () => {
        return {
            id : this.id,
            customerId : this.customerId,
            type : this.type,
            billingName : this.billingName,
            holder : this.holder,
            accountNumber : this.accountNumber,
            address : this.address,
            createdAt : this.createdAt,
            updatedAt : this.updatedAt
        }
    }
}

export default BillingAddressData;