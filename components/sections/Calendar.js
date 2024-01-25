import { DataContext } from "@/context/DataContext";
import { useContext } from "react";

const Calendar = () => {
  const { events } = useContext(DataContext);

  useEffect(() => {
    console.log("Events:" + events);
  }, []) 

  return (
    <div></div>
  )
}

export default Calendar;