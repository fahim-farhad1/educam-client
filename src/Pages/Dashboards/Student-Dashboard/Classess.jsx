import React, { useEffect, useState } from 'react';

const Classess = ({payment}) => {
    const [classes, setClasses] = useState([])
    useEffect(() => {
    fetch(`https://educam-server.vercel.app/allclasses/${payment._id}`)
      .then((res) => res.json())
      .then((data) => setClasses(data));
    }, []);
    console.log(classes);
    return (
        <div>
            
        </div>
    );
};

export default Classess;