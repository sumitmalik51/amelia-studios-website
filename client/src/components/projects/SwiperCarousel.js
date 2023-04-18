// // import { useState, useEffect } from 'react'
// // import axios from 'axios'
// // import SwiperCore, { Navigation } from 'swiper'
// // import { Swiper, SwiperSlide } from 'swiper/react'

// // SwiperCore.use([Navigation]);



// // const SwiperCarousel = () => {

// //   const [projects, setProjects] = useState([])
// //   const [errors, setErrors] = useState(false)
// //   const [loading, setLoading] = useState(true)


// //   // accessing Express API to get all collaborations
// //   useEffect(() => {
// //     const getProjects = async () => {
// //       try {
// //         const { data } = await axios.get('/api/projects/')
// //         setProjects(data)
// //       } catch (err) {
// //         console.log(err)
// //         setErrors(true)
// //       }
// //       setLoading(false)
// //     }
// //     getProjects()
// //   }, [])

// //   return (
// //     <>
// //       <div className='swiper-wrapper'>
// //         {loading ?
// //           <span>Loading...</span>
// //           :
// //           errors ?
// //             <span>Projects could not load. Please try again later.</span>
// //             :
// //             <Swiper
// //               className='swiper-wrapper'
// //               navigation={{
// //                 nextEl: '.swiper-button-next',
// //                 prevEl: '.swiper-button-prev'
// //               }}
// //               spaceBetween={0}
// //               slidesPerView={1}
// //               direction='vertical'
// //             >
// //               {projects.map(project => {
// //                 const { id, assets } = project
// //                 console.log(project)
// //                 return (
// //                   <SwiperSlide key={id}>
// //                     {assets.map(asset => (
// //                       <div key={asset.url}>
// //                         <img src={asset.url} alt={asset.description} />
// //                       </div>
// //                     ))}
// //                   </SwiperSlide>
// //                 )
// //               })}
// //             </Swiper>
// //           }
// //       </div>
// //     </>
// //   )
// // }
// // export default SwiperCarousel

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import SwiperCore, { Navigation } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Keyboard, Pagination } from "swiper";

// SwiperCore.use([Navigation]);

// const SwiperCarousel = () => {
//   const [projects, setProjects] = useState([]);
//   const [errors, setErrors] = useState(false);
//   const [loading, setLoading] = useState(true);

//   // accessing Express API to get all collaborations
//   useEffect(() => {
//     const getProjects = async () => {
//       try {
//         const { data } = await axios.get('/api/projects/');
//         setProjects(data);
//       } catch (err) {
//         console.log(err);
//         setErrors(true);
//       }
//       setLoading(false);
//     };
//     getProjects();
//   }, []);

//   return (
//     <>
//       <div className="swiper-wrapper">
//         {loading ? (
//           <span>Loading...</span>
//         ) : errors ? (
//           <span>Projects could not load. Please try again later.</span>
//         ) : (
//           <>
//             {projects.map(project => {
//               const { id, assets } = project;
//               console.log(project);
//               return (
//                 <Swiper
//                   key={id}
//                   slidesPerView={1}
//                   spaceBetween={30}
//                   keyboard={{
//                     enabled: true
//                   }}
//                   pagination={{
//                     clickable: true
//                   }}
//                   navigation={{
//                     nextEl: ".swiper-button-next",
//                     prevEl: ".swiper-button-prev"
//                   }}
//                   modules={[Keyboard, Pagination, Navigation]}
//                   className="mySwiper"
//                 >
//                   {assets.map(asset => (
//                     <SwiperSlide key={asset.url}>
//                       <div>
//                         <img src={asset.url} alt={asset.description} />
//                       </div>
//                     </SwiperSlide>
//                   ))}
//                 </Swiper>
//               );
//             })}
//           </>
//         )}
//       </div>
//     </>
//   );
// };


// export default SwiperCarousel;
