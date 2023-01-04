class PackageData {
    constructor() {
        this.id = null;
        this.serviceId = null;
        this.packageName = null;
        this.price = null;
        this.status = null;
        this.note = null;
        this.createdAt = null;
        this.updatedAt = null;
    }

    getTableKeyList = () => {
        return ["id", "packageName", "price", "status"];
    }

    getLabelList = () => {
        return ["#", "Package name", "Price", "Status"];
    }

    setObjectData = (data) => {
        this.id = data.id;
        this.serviceId = data.serviceId;
        this.packageName = data.packageName;
        this.price = data.price;
        this.status = data.status;
        this.note = data.note;
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
    }

    getObjectData = () => {
        return {
            id: this.id,
            serviceId: this.serviceId,
            packageName: this.packageName,
            price: this.price,
            status: this.status,
            note: this.note,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        }
    }
}

export default PackageData;