import React from 'react';
import useAddedClass from '../../Hooks/useAddedClass';

const SelectedClasses = () => {
    const [addedClass] = useAddedClass();
    return (
        <div>
            <p>{addedClass?.length}</p>
        </div>
    );
};

export default SelectedClasses;