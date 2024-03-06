import React from 'react'

interface FooterColumnProps {
    heading: string;
    columns: string[];
    Logo?: React.ComponentType<any>;
}

const FooterColumn = ({ heading, columns, Logo }: FooterColumnProps) => {
    return (
        <div className='flex flex-col w-full justify-start start text-left space-y-3'>
            <p className='text-[16px] text-left font-bold'>{heading}</p>
            {columns.map(columm => (
                <>
                    <p className='text-[15px] text-left font-normal'>{columm}</p>
                </>
            ))}
            {Logo && <Logo />}
        </div>
    )
}

export default FooterColumn