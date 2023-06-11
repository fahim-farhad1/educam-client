import React from 'react';

const DashboardContainer = ({children}) => {
    return (
        <div className='py-10 px-10'>
            {children}
        </div>
    );
};

export default DashboardContainer;