import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <section className='text-center h-96 flex flex-col justify-center items-center'>
        <h1 className='font-bold uppercase text-4xl'>Error! <br/> 404 page not found</h1>
        <button className='mt-10 bg-primary text-white px-10 py-2 rounded-full'><Link  to={'/'}>Go back home</Link></button>
    </section>
  )
}

export default Error