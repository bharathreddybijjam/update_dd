import React from 'react';

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = '', id }) => {
    return (
        <section id={id} className={`w-full py-12 md:py-24 px-4 sm:px-6 lg:px-8 max-w-full md:max-w-7xl mx-auto ${className}`}>
            {children}
        </section>
    );
};

export default Container;
