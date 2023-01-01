import Cookies from 'universal-cookie';

const cookies = new Cookies();

const userCookies = {
    token: "gEZkA7zyDqT7ZcMVLVhA2dYdiNHmLQD4",
    expireTime: 86400000,
    username: "jgT7Un46hLk4jBzyTGEq6j634H34jmU8",
    id: "4qYbrSdRZSb2uYS4f58iBKmjRHFFaWmy",
    roles: "4DFkgFzNb6eHkWw7SLzGCGvTwNN49pk3"
}

export default {
    DOMAIN: "http://localhost:8091",
    userHashId: userCookies,
    cookiesManager: cookies
}