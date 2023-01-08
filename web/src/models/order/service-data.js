class ServiceData {
    constructor() {
        this.id = null;
        this.category = null;
        this.serviceName = null;
        this.items = null;
        this.createdAt = null;
        this.updatedAt = null;
    }

    getTableKeyList = () => {
        return ["id", "serviceName", "category"];
    }

    getLabelList = () => {
        return ["#", "Service name", "Category"];
    }

    getObjectData = () => {
        return {
            id: this.id,
            category: this.category,
            serviceName: this.serviceName,
            items: this.items,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        }
    }

    setObjectData = (data) => {
        this.id = data.id;
        this.category = data.category;
        this.serviceName = data.serviceName;
        this.items = data.items;
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
    }
}

export default ServiceData;