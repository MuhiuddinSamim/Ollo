import React from "react";
import { useLottie } from "lottie-react";
import groovyWalkAnimation from "../../assets/img/139742-error-404.json";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  const options = {
    animationData: groovyWalkAnimation,
    loop: true,
  };

  const { View } = useLottie(options);

  return (
    <div className="my-20 flex flex-col items-center">
       
      <div className=" sm:w-4/5  md:w-1/3">
        {View}
        </div>
 
           <Link to="/" className="mt-4 w-1/3 mx-auto btn btn-warning">Back </Link>
          
        
         
    
    </div>
  );
};

export default ErrorPage;

// import second from '../../assets/logo/1534860-middle.png';

// const ErrorPage = () => {
//   const { error, status } = useRouteError();
//   return (
//     <section
//       style={{ backgroundImage: `url(${second})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }} className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
//       <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
//         <div className='max-w-md text-center'>
//           {/* <h2 className='mb-8 font-extrabold text-9xl text-black'>
//             <span className='sr-only'>Error</span>
//             {status || 404}
//           </h2> */}
//           {/* <p className='text-3xl font-bold md:text-3xl text-red-700  mb-8'>
//             {error?.message}
//           </p> */}
//           <Link to='/' className='btn btn-primary'>
//             Back to homepage
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ErrorPage;