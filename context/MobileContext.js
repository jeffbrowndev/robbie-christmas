import { createContext, useState, useEffect } from "react";

export const MobileContext = createContext();

export const MobileContextProvider = ({ children }) => {
  const [mobile, setMobile] = useState(undefined);

  const checkMobile = () => window.innerWidth < 1200 ? setMobile(true) : setMobile(false);

  // set mobile on initial width
  useEffect(() => checkMobile(), []);
  // listen for window resize
  useEffect(() => window.addEventListener("resize", () => checkMobile()));

  return (
    <MobileContext.Provider value={{ mobile }}>
      {children}
    </MobileContext.Provider>
  )
}