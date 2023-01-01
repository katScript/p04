import { getCustomerByUserId } from "api/customer/customer";
import Cookies from 'universal-cookie';
import common from 'utils/common';

class UserData {
    constructor() {
        this.id = null;
        this.fullname = null;
        this.phone = null;
        this.email = null;
        this.currentMoney = null;
        this.totalMoney = null;

        this.cookies = new Cookies();
    }

    setUserCookies = (token) => {
        let expires = new Date();
        expires.setTime(expires.getTime() + (common.userHashId.expireTime))
        this.cookies.set(common.userHashId.token, token, { path: '/',  expires})
    }

    fetchCustomerData = async (id) => {
        const {data} = await getCustomerByUserId(id);
        return data;
    }

    getUserData = () => {
        return {
            customer: (id) => {
                this.fetchCustomerData(id).then((data) => {
                    localStorage.setItem("customer", JSON.stringify(data));
                });

                return "/";
            }
        }
    }

    getObjectData = () => {
        return {
            id: this.id,
            fullname: this.fullname,
            phone: this.phone,
            email: this.email,
            currentMoney: this.currentMoney,
            totalMoney: this.totalMoney
        }
    }

    setObjectData = (data) => {
        this.id = data.id;
        this.fullname = data.fullname;
        this.phone = data.phone;
        this.email = data.email;
        this.currentMoney = data.currentMoney;
        this.totalMoney = data.totalMoney;
    }
}

export default UserData;