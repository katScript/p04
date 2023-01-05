import { getCustomerByUserId } from "api/customer/customer";
import Cookies from 'universal-cookie';
import {common} from 'utils/common';
import {getUserById} from "api/user/user";

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

    fetchCustomerDataByUser = async (id) => {
        const {data} = await getCustomerByUserId(id);
        return data;
    }

    getUserData = (id) => {
        this.fetchUserData(id).then((data) => {
            localStorage.setItem("user", JSON.stringify(data));
        });

        return {
            customer: () => {
                this.fetchCustomerDataByUser(id).then((data) => {
                    localStorage.setItem("customer", JSON.stringify(data));
                });

                return "/";
            }
        }
    }

    fetchUserData = async (id) => {
        const {data} = await getUserById(id);
        return data;
    }

    removeUserData = (role) => {
        localStorage.removeItem("user");
        localStorage.removeItem(role);
        this.cookies.remove(common.userHashId.token, { path: '/' });
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