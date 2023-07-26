import { Carousel } from 'antd';

const contentStyle = {
  padding: '12px',

  textAlign: 'center',
  background: 'transparent',
};
const Slider = () => {

  return (
    <div className={`bg-no-repeat bg-cover bg-[url('https://images.unsplash.com/photo-1468779036391-52341f60b55d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1068&q=80')] bg-center`}>
        <Carousel  className='bg-gradient-to-r from-[#fc8db0] '>
      <div >
        <div className=' w-1/2  min-h-[500px] flex justify-center items-center'>
        <p style={contentStyle} className='text-4xl font-semibold italic'>MoBlog is a personal blog where I share my thoughts, experiences, and interests. I write about a variety of topics, including but not limited to:</p>
        </div>
      </div>
      <div >
        <div className=' w-1/2  min-h-[500px] flex justify-center items-center'>
        <p style={contentStyle} className='text-4xl font-semibold italic'>Technology is the application of scientific knowledge for achieving practical goals in a reproducible way. It has a profound impact on our lives, making them easier, more efficient, and more connected. It is constantly evolving, and it is up to us to use it responsibly.</p>
        </div>
      </div>
      <div>
        <div className=' w-1/2  min-h-[500px] flex justify-center items-center'>
        <p style={contentStyle} className='text-4xl font-semibold italic'>Personal development is the process of improving oneself in order to achieve ones full potential. It can involve developing new skills, improving ones self-awareness, or working on ones personal growth. </p>
        </div>
      </div>
      <div >
        <div className=' w-1/2  min-h-[500px] flex justify-center items-center'>
        <p style={contentStyle} className='text-4xl font-semibold italic'>MoBlog is a personal blog where I share my thoughts, experiences, and interests. I write about a variety of topics, including but not limited to:</p>
        </div>
      </div>
    </Carousel>
    </div>
  );
};
export default Slider;