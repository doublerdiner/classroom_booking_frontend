import { Typography } from "@mui/material"
import LessonDescription from "./LessonDescription"
import StudentTable from "./StudentTable"
import { useState } from "react"
import { getDate } from "../service/Helpers"
import DateAndPeriod from "./DateAndPeriod"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"

const Homepage = ({user})=>{
    const [date, setDate] = useState(getDate(new Date))
    const [currentPeriod, setCurrentPeriod] = useState(1)
    const [lesson, setLesson] = useState({})

    console.log(date)

    const updateDate = (date)=>{
        const newDate = getDate(date)
        setDate(newDate)
    }

    



    return(
        <>
        <Grid2 container spacing={2}>
            <Grid2 xs={3}>
                <LessonDescription/>
            </Grid2>
            <Grid2 xs={9}>
                <DateAndPeriod 
                date={date} 
                currentPeriod={currentPeriod} 
                setCurrentPeriod={setCurrentPeriod} 
                updateDate={updateDate}/>
            </Grid2>
            <Grid2 xs={3}></Grid2>
            <Grid2 xs={9}>
                <StudentTable/>
            </Grid2>
        </Grid2>
        </>
    )
}
export default Homepage