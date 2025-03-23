import { StrictMode } from 'react';
import  ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { CourseContextProvider } from './context/CourseContext.jsx';

import App from './App.jsx';
import { UserContextProvider } from './context/userContext.jsx';

export const server = 'https://vidyarthi-tewf.onrender.com';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <UserContextProvider>
    <CourseContextProvider>
      <App />
    </CourseContextProvider>
   
   </UserContextProvider>
    
  </StrictMode>,
)
