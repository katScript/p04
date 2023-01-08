import React from 'react';
import { useParams, useHref } from 'react-router-dom';
import StaticContent from "hooks/StaticContent";

const wrapper = WrappedComponent => props => {
    const params = useParams();
    const staticContent = new StaticContent();
    const useRedirect = (url) => {
        useHref(url);
    };

    return (
        <WrappedComponent
            {...props}
            params={params}
            staticContent={staticContent}
            redirect={useRedirect}
        />
    );
};

export default wrapper;