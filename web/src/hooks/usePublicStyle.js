import {useEffect} from 'react';

const usePublicStyle = (url) => {
    let publicUrl = process.env.PUBLIC_URL + url;
    useEffect(() => {
        let head = document.head;
        let link = document.createElement("link");

        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = publicUrl;

        head.appendChild(link);

        return () => {
            head.removeChild(link);
        }

    }, [publicUrl]);
}

export default usePublicStyle;