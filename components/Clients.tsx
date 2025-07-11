import React from 'react'
import { InfiniteMovingCards } from './ui/infiniteMovingCards'
import { companies, testimonials } from '@/data'

const Clients = () => {
  return (
    <div className='-pt-50 pb-20' id='testimonials'>
    <h1 className='heading'>
        Kind words from {' '}
        <span className='text-purple'>
            my colleagues and mentors
        </span>
    </h1>
        <div className='flex flex-col items-center mt-8 max-lg:mt-10'>           
                <InfiniteMovingCards 
                items={testimonials}
                direction='right'
                speed='slow'
                />
            <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 mt-4 md:mt-8'>
                {companies.map(({id,img,name,nameImg}) => (
                    <div key={id} className='flex md:max-w-60 max-w-32 gap-2'>
                        <img 
                        src={img} 
                        alt={name} 
                        className='md:w-10 w-5'/>
                        <img 
                        src={nameImg} 
                        alt={name} 
                        className={`${name === 'Mechanoids' ? 'md:w-32 w-28' : 'md:w-24 w-20'}`}/>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Clients