import { getCustomerByUserId } from "api/customer/customer";
import Cookies from 'universal-cookie';
import {common} from 'utils/common';
import {getUserById} from "api/user/user";
import {getAdminByUserId} from "api/admin/admin";
import CustomerData from "models/customer/customer-data";
import AdminData from "models/admin/admin-data";

class UserData {
    constructor() {
        this.id = null;
        this.fullname = null;
        this.phone = null;
        this.email = null;
        this.currentMoney = null;
        this.totalMoney = null;

        this.cookies = new Cookies();
        this.customerData = new CustomerData();
        this.adminData = new AdminData();
    }

    setUserCookies = (token) => {
        let expires = new Date();
        expires.setTime(expires.getTime() + (common.userHashId.expireTime));
        this.cookies.set(common.userHashId.token, token, { path: '/',  expires});
    }

    fetchCustomerDataByUser = async (id) => {
        const {data} = await getCustomerByUserId(id);
        return data;
    }

    fetchAdminDataByUser = async (id) => {
        const {data} = await getAdminByUserId(id);
        return data;
    }

    getUserData = (id) => {
        this.fetchUserData(id).then((data) => {
            localStorage.setItem(common.userHashId.user, JSON.stringify(data));
        });

        return {
            customer: () => {
                this.fetchCustomerDataByUser(id).then((data) => {
                    this.customerData.setObjectData(data);
                    this.customerData.saveLocalStorageData();
                });

                return "/";
            },
            admin: () => {
                this.fetchAdminDataByUser(id).then((data) => {
                    this.adminData.setObjectData(data);
                    this.adminData.saveLocalStorageData();
                });

                return "/admin";
            }
        }
    }

    fetchUserData = async (id) => {
        const {data} = await getUserById(id);
        return data;
    }

    removeUserData = (role = null) => {
        localStorage.removeItem(common.userHashId.user);
        if (!role) {
            localStorage.removeItem(common.userHashId.admin);
            localStorage.removeItem(common.userHashId.customer);
        } else {
            localStorage.removeItem(role);
        }

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