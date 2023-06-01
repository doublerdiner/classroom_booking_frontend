import { Typography } from "@mui/material"
import LessonDescription from "./LessonDescription"
import StudentTable from "./StudentTable"
import { useEffect, useState } from "react"
import { getDate } from "../service/Helpers"
import DateAndPeriod from "./DateAndPeriod"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import StudentDemeritAbsence from "./StudentDemeritAbsence"

const Homepage = ({user, date, currentPeriod, currentLesson, currentStudents, setCurrentPeriod, updateDate, selectedStudent, setSelectedStudent, addDemerit, addAbsence, findStudent})=>{
    const [studentDemeritAbsence, setStudentDemeritAbsence] = useState(null)

    return(
        <>
        <Grid2 container spacing={4} className="padding2rem">
            <Grid2 xs={3}>
                <LessonDescription currentLesson={currentLesson}/>
            </Grid2>
            <Grid2 xs={9}>
                <DateAndPeriod 
                date={date} 
                currentPeriod={currentPeriod} 
                setCurrentPeriod={setCurrentPeriod} 
                updateDate={updateDate}
                setStudentDemeritAbsence={setStudentDemeritAbsence}
                setSelectedStudent={setSelectedStudent}/>
            </Grid2>
            <Grid2 xs={3}>
                {studentDemeritAbsence !== null ? 
                <StudentDemeritAbsence 
                studentDemeritAbsence={studentDemeritAbsence} 
                setStudentDemeritAbsence={setStudentDemeritAbsence}
                date={date}
                selectedStudent={selectedStudent} 
                setSelectedStudent={setSelectedStudent}
                addDemerit={addDemerit}
                addAbsence={addAbsence}
                />
                :<></>}
            </Grid2>
            <Grid2 xs={9}>
                {currentStudents !== undefined ? 
                <StudentTable 
                currentStudents={currentStudents} 
                setStudentDemeritAbsence={setStudentDemeritAbsence} 
                findStudent={findStudent}/>
                :
                <></>}
            </Grid2>
        </Grid2>
        </>
    )
}
export default Homepage