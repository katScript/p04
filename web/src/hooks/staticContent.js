import {useEffect} from 'react';

class staticContent {
    static getPublicUrl = (url) => {
        return process.env.PUBLIC_URL + url;
    }

    static useStaticStyle = (url) => {
        let publicUrl = this.getPublicUrl(url);
        useEffect(() => {
            let head = document.head;
            let link = document.createElement("link");

            link.setAttribute("type", "text/css");
            link.setAttribute("type", "stylesheet");
            link.setAttribute("type", publicUrl);

            head.appendChild(link);

            return () => {
                head.removeChild(link);
            }

        }, [publicUrl]);
    }

    static useHeadStaticScript = (url) => {
        let publicUrl = this.getPublicUrl(url);
        useEffect(() => {
            let head = document.head;
            let script = document.createElement("script");

            script.setAttribute("src", publicUrl);

            head.appendChild(script);

            return () => {
                head.removeChild(script);
            }

        }, [publicUrl]);
    }

    static useBodyStaticScript = (url) => {
        let publicUrl = this.getPublicUrl(url);
        useEffect(() => {
            let staticScript = document.getElementById("static-script");
            let script = document.createElement("script");

            script.setAttribute("src", publicUrl);
            staticScript.appendChild(script);

            return () => {
                staticScript.removeChild(script);
            }

        }, [publicUrl]);
    }
}

export default staticContent;