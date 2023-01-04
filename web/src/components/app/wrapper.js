import React from 'react';
import { useParams } from 'react-router-dom';
import StaticContent from "hooks/StaticContent";

const wrapper = WrappedComponent => props => {
    const params = useParams();
    const staticContent = new StaticContent();

    return (
        <WrappedComponent
            {...props}
            params={params}
            staticContent={staticContent}
        />
    );
};

export default wrapper;