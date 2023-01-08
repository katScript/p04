class BillingAddressData {
    constructor() {
        this.id = null;
        this.customerId = null;
        this.balance = null;
        this.balanceIncome = null;
        this.newBalance = null;
        this.description = null;
        this.createdAt = null;
        this.updatedAt = null;
    }

    getTableKeyList = () => {
        return ["id", "newBalance", "balanceIncome", "description"];
    }

    getLabelList = () => {
        return ["#", "New Balance", "Balance Income", "Content"];
    }

    setObjectData = (data) => {
        this.id = data.id;
        this.customerId = data.customerId;
        this.balance = data.balance;
        this.balanceIncome = data.balanceIncome;
        this.newBalance = data.newBalance;
        this.description = data.description;
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
    }

    getObjectData = () => {
        return {
            id : this.id,
            customerId : this.customerId,
            balance : this.balance,
            balanceIncome : this.balanceIncome,
            newBalance : this.newBalance,
            description : this.description,
            createdAt : this.createdAt,
            updatedAt : this.updatedAt
        }
    }
}

export default BillingAddressData;