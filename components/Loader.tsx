import React from 'react';
import Image from 'next/image'

const Loader = () => {
    return (
        <div className="fle-center h-screen w-full">
            <Image 
                src="/icons/loading-circle.svg"
                alt='Loading'
                height={50}
                width={50}
            />
        </div>
    );
};

export default Loader;
