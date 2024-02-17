// "use client"
// import React, { useEffect } from 'react'
// import { Loader } from '@googlemaps/js-api-loader';
// const Map = () => {
//     const mapRef = React.useRef(null)
//     useEffect(() => {
//       const initMap = async () => {
//         const loader = new Loader({
//             apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
//             version: 'weekly'
//         })
       
//         const position = {
//             lat: 43.642683,
//             long: -79.3871189
//         }
//         const mapOptions: google.maps.MapOptions ={
//             center: position,
//             zoom:17,
//             mapid:'MY_NEXTJS_MAPID'
//         };
//       }
//       initMap()
//     })
//   return (
//     <div>Map</div>
//   )
// }

// export default Map
