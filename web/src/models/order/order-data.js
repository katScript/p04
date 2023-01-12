class OrderData {
    constructor() {
        this.id = null;
        this.customerId = null;
        this.item = {};
        this.target = null;
        this.status = null;
        this.qty = null;
        this.subtotal = null;
        this.couponCode = null;
        this.discountPrice = null;
        this.note = null;
        this.packageName = null;
        this.createdAt = null;
        this.updatedAt = null;
    }


    getTableKeyList = () => {
        return ["id", "packageName", "status", "subtotal"];
    }

    getLabelList = () => {
        return ["#", "Gói dịch vụ", "Trạng thái", "Tổng giá trị"];
    }

    setObjectData = (data) => {
        this.id = data.id;
        this.customerId = data.customerId;
        this.item = data.item;
        this.target = data.target;
        this.status = data.status;
        this.qty = data.qty;
        this.subtotal = data.subtotal;
        this.couponCode = data.couponCode;
        this.discountPrice = data.discountPrice;
        this.note = data.note;
        this.packageName = data.item.packageName;
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
    }

    getObjectData = () => {
        return {
            id : this.id,
            customerId : this.customerId,
            item : this.item,
            target : this.target,
            status : this.status,
            qty : this.qty,
            subtotal : this.subtotal,
            couponCode : this.couponCode,
            discountPrice : this.discountPrice,
            note : this.note,
            packageName : this.item.packageName,
            createdAt : this.createdAt,
            updatedAt : this.updatedAt
        }
    }
}

export default OrderData;