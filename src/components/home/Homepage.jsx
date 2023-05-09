import { Typography } from "@mui/material"
import LessonDescription from "./LessonDescription"
import StudentTable from "./StudentTable"
import { useState } from "react"
import { getDate } from "../service/Helpers"
import DateAndPeriod from "./DateAndPeriod"

const Homepage = ({user})=>{
    const [date, setDate] = useState(getDate(new Date))
    const [currentPeriod, setCurrentPeriod] = useState(1)

    console.log(date)

    const updateDate = (date)=>{
        const newDate = getDate(date)
        setDate(newDate)
    }

    



    return(
        <>
        <Typography variant="h2" align="center">Home</Typography>
        <LessonDescription/>
        <DateAndPeriod date={date} currentPeriod={currentPeriod} setCurrentPeriod={setCurrentPeriod} updateDate={updateDate}/>
        <StudentTable/>
        </>
    )
}
export default Homepage