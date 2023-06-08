
import React from 'react';
import img1 from '../assets/home img/slider/8 tennis.jpg'
import img2 from '../assets/home img/slider/4 gymnast.jpg'
import img3 from '../assets/home img/slider/2 swiming.jpg'
import img4 from '../assets/home img/slider/3 biliards.jpg'
import img5 from '../assets/home img/slider/5 table tennis.jpg'

const Slider = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
             <div  className="carousel w-full  style={{ height: '500px' }} ">
  <div id="slide1"  className="carousel-item relative w-full">
    <img src={img1} className="w-full "  />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide5" className="btn btn-circle">❮</a> 
      <div>
        <h1 className='sm:text-3xl md:text-8xl font-extrabold text-white  text-center'>OLLO</h1>
      <h2 className='sm:text-xl md:text-3xl font-bold font-mono text-red-200 pt-4'>Best Sports Academy</h2>
      </div>
      
      <a href="#slide2" className="btn btn-circle">❯</a>
      
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={img2} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
       <div>
        <h1 className='sm:text-3xl md:text-8xl font-extrabold text-slate-900  text-center'>OLLO</h1>
      <h2 className='sm:text-xl md:text-3xl font-bold font-mono text-red-200 pt-4'>Let's play together</h2>
      </div>
      <a href="#slide3" className="btn btn-circle">❯</a>
      
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={img3} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
       <div>
        <h1 className='sm:text-3xl md:text-8xl font-extrabold text-yellow-400   text-center'>OLLO</h1>
      <h2 className='sm:text-xl md:text-3xl font-bold font-mono text-zinc-900 pt-4'>Be a challenger for future</h2>
      </div>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={img4} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
       <div>
        <h1 className='sm:text-3xl md:text-8xl font-extrabold text-white  text-center'>OLLO</h1>
      <h2 className='sm:text-xl md:text-3xl font-bold font-mono text-red-200 pt-4'>Make a better human</h2>
      </div>
       <a href="#slide5" className="btn btn-circle">❯</a>
    </div>
  </div>
    <div id="slide5" className="carousel-item relative w-full">
    <img src={img5} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
       <div>
        <h1 className='sm:text-3xl md:text-8xl font-extrabold text-zinc-900 text-white  text-center'>OLLO</h1>
      <h2 className='sm:text-xl md:text-3xl font-bold font-mono text-yellow-200 pt-4'>Best Sports Academy</h2>
      </div>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
       
    );
};

export default Slider;