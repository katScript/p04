import Cookies from 'universal-cookie';
import {getAllCategoryOption} from "api/order/service";
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

export const common = {
    DOMAIN: "http://localhost:8091",
    userHashId: userCookies,
    cookiesManager: cookies,
    categoryOption: () => {
        return JSON.parse(localStorage.getItem("category_option"));
    },
    storeCategoryOption: async () => {
        const {data} = await getAllCategoryOption();
        localStorage.setItem("category_option", JSON.stringify(data));
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
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}