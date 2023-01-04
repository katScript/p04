import {useEffect} from 'react';

class StaticContent {
    getPublicUrl = (url) => {
        return process.env.PUBLIC_URL + url;
    }

    useStaticStyle = (url) => {
        let publicUrl = this.getPublicUrl(url);
        useEffect(() => {
            let head = document.head;
            let link = document.createElement("link");

            link.setAttribute("type", "text/css");
            link.setAttribute("rel", "stylesheet");
            link.setAttribute("href", publicUrl);

            head.appendChild(link);

            return () => {
                head.removeChild(link);
            }

        }, [publicUrl]);
    }

    useHeadStaticScript = (url) => {
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

     useBodyStaticScript = (url) => {
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

export default StaticContent;