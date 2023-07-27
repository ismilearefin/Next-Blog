import Card from '@/components/Dashboard/Feedback/Card';
import DashboardLayout from '@/components/Layouts/DashboardLayout';
import React from 'react'

export default function Feedback({feedback}) {
    console.log(feedback)
  return (
    <div>
        <p className='text-4xl text-center mb-8'>
            User <span className='text-[#FC0254]'>reviews</span>
        </p>
        <div className='grid grid-cols-3 gap-4'>
        {
            feedback.map(item => <Card key={item.id} item={item}></Card>)
        }
    </div>
    </div>
  )
}

Feedback.getLayout = function getLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
  };

export const getServerSideProps= async ()=>{
const res = await fetch('http://localhost:5000/feedbacks');
const data = await res.json();

    return{
        props:{
            feedback:data
        }
    }
}

