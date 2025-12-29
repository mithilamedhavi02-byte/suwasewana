import { createContext, useState } from "react";


const DoctorContext = createContext();


export const DoctorContextProvider = ({ children }) => {
  const [doctorData, setDoctorData] = useState(null);
  
  const value = {
    doctorData,
    setDoctorData,
 
  };

  return (
    <DoctorContext.Provider value={value}>
      {children}
    </DoctorContext.Provider>
  );
};


export default DoctorContext;