import React from 'react';
import Helmet from 'react-helmet';

const DynamicTitle = ({ title }) => {
    var defaultTitle = 'Garden Store';
    return (
        <Helmet>
            <title>{title ? `${defaultTitle} | ${title}` : defaultTitle}</title>
        </Helmet>
    );
};

export { DynamicTitle };
