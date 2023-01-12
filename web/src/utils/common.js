import Cookies from 'universal-cookie';
import {getAllCategoryOption} from "api/order/service";
import {getAllBillingOption, getAllHostOption} from "api/customer/customer";
import $ from 'jquery';

const cookies = new Cookies();

const userCookies = {
    token: "gEZkA7zyDqT7ZcMVLVhA2dYdiNHmLQD4",
    expireTime: 86400000,
    username: "jgT7Un46hLk4jBzyTGEq6j634H34jmU8",
    id: "4qYbrSdRZSb2uYS4f58iBKmjRHFFaWmy",
    roles: "4DFkgFzNb6eHkWw7SLzGCGvTwNN49pk3",
    customer: "customer",
    admin: "admin",
    user: "user"
}

const storageKey = {
    categoryOption: "category_option",
    billingOption: "billing_option",
    hostOption: "host_option"
}

const storeCategoryOption = async () => {
    const {data} = await getAllCategoryOption();
    return data;
}

const storeBillingOption = async () => {
    const {data} = await getAllBillingOption();
    return data;
}

const storeHostOption = async () => {
    const {data} = await getAllHostOption();
    return data;
}

export const common = {
    DOMAIN: "http://localhost:8091",
    // DOMAIN: "https://api.dcodetest.com",
    userHashId: userCookies,
    storageKey: storageKey,
    cookiesManager: cookies,
    categoryOption: () => {
        return JSON.parse(localStorage.getItem(storageKey.categoryOption));
    },
    billingOption: () => {
        return JSON.parse(localStorage.getItem(storageKey.billingOption));
    },
    hostOption: () => {
        return JSON.parse(localStorage.getItem(storageKey.hostOption));
    },
    storeStaticData: () => {
        storeCategoryOption().then((r) => {
            localStorage.setItem(storageKey.categoryOption, JSON.stringify(r));
        });

        storeBillingOption().then((r) => {
            localStorage.setItem(storageKey.billingOption, JSON.stringify(r));
        });

        storeHostOption().then((r) => {
            localStorage.setItem(storageKey.hostOption, JSON.stringify(r));
        })
    },
    loadScreen: (loader, main) => {
        let loaderElement = $(loader),
            mainElement = $(main);

        loaderElement.fadeIn(200);
        mainElement.fadeOut();
        loaderElement.fadeOut(800);
        mainElement.fadeIn(500);
    },
    refreshPage: () => {
        window.location.reload();
    },
    redirect: (path) => {
        window.location.href = path;
    },
    thousandFormat: (value) => {
        if (value)
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return "0";
    }
}