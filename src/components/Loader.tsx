// Loader.js
import { Loader2 } from 'lucide-react';
import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const AppLoader = () => (
  <Loader2
    type="Puff"
    color="#00BFFF"
    height={100}
    width={100}
   className=' animate-spin'
  />
);

export default AppLoader;
