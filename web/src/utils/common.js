import Cookies from 'universal-cookie';

const cookies = new Cookies();

const userCookies = {
    token: "gEZkA7zyDqT7ZcMVLVhA2dYdiNHmLQD4",
    username: "jgT7Un46hLk4jBzyTGEq6j634H34jmU8",
    id: "4qYbrSdRZSb2uYS4f58iBKmjRHFFaWmy",
    roles: "4DFkgFzNb6eHkWw7SLzGCGvTwNN49pk3"
}

export default {
    TOKEN: () => cookies.get(userCookies.token),
    DOMAIN: "localhost:8091"
}