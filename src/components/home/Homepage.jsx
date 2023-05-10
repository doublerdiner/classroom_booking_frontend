import { Typography } from "@mui/material"
import LessonDescription from "./LessonDescription"
import StudentTable from "./StudentTable"
import { useEffect, useState } from "react"
import { getDate } from "../service/Helpers"
import DateAndPeriod from "./DateAndPeriod"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import StudentDemeritAbsence from "./StudentDemeritAbsence"

const Homepage = ({user, date, currentPeriod, currentLesson, currentStudents, setCurrentPeriod, updateDate})=>{
    const [studentDemeritAbsence, setStudentDemeritAbsence] = useState(null)



    return(
        <>
        <Grid2 container spacing={2}>
            <Grid2 xs={3}>
                <LessonDescription currentLesson={currentLesson}/>
            </Grid2>
            <Grid2 xs={9}>
                <DateAndPeriod 
                date={date} 
                currentPeriod={currentPeriod} 
                setCurrentPeriod={setCurrentPeriod} 
                updateDate={updateDate}/>
            </Grid2>
            <Grid2 xs={3}>
                {studentDemeritAbsence !== null ? 
                <StudentDemeritAbsence studentDemeritAbsence={studentDemeritAbsence}/>
                :<></>}
            </Grid2>
            <Grid2 xs={9}>
                {currentStudents !== undefined ? 
                <StudentTable currentStudents={currentStudents} setStudentDemeritAbsence={setStudentDemeritAbsence}/>
                :
                <></>}
            </Grid2>
        </Grid2>
        </>
    )
}
export default Homepage