import { useAuth0 } from "@auth0/auth0-react"
import { Paper, Typography } from "@mui/material"
import { Routes, Route } from "react-router-dom"
import Menu from "../menu/Menu"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import Homepage from "./Homepage"
import { useEffect, useState } from "react"
import { getIndex } from "../service/Service"
import { findThisUser} from "../service/Helpers"
import { getDate } from "../service/Helpers"
import { postRoute } from "../service/Service"

const Home = ()=>{
    const {isAuthenticated, user} = useAuth0()
    const [currentUser, setCurrentUser] = useState(null)
    const [date, setDate] = useState(getDate(new Date))
    const [currentPeriod, setCurrentPeriod] = useState(1)
    const [currentLesson, setCurrentLesson] = useState([])
    const [currentStudents, setCurrentStudents] = useState([])
    const [selectedStudent, setSelectedStudent] = useState(null)

    useEffect(()=>{
            getIndex('users').then(data =>{
                return findThisUser(data, user)
        })
        .then((res)=>{
            setCurrentUser(res)
        })
    },[user, selectedStudent])

    useEffect(()=>{
        if(currentUser && date && currentPeriod) {
            const getLesson = currentUser.lessons.filter(lesson=>{
                return lesson.period === currentPeriod && lesson.dayType === date.dayName
            })
            setCurrentLesson(getLesson[0])
        }
    },[currentUser, date, currentPeriod])

    useEffect(()=>{
        if(currentLesson !== undefined){
            setCurrentStudents(currentLesson.students)
        }
        else{
            setCurrentStudents([])
        }
    },[currentLesson])

    const updateDate = (date)=>{
        const newDate = getDate(date)
        setDate(newDate)
    }

    const addDemerit = (data)=>{
        const tempStudent = data.student
        postRoute("demerits", data).then(demerit=>{
            tempStudent.demerits.push(demerit)
            setSelectedStudent(tempStudent)
        })
    }

    const addAbsence = (data)=>{
        const tempStudent = data.student
        postRoute("absences", data).then(absence=>{
            tempStudent.absences.push(absence)
            setSelectedStudent(tempStudent)
        })
    }

    console.log(currentUser)

    return(
        
        <>
        {isAuthenticated && currentUser? 
        <>
            <div className="bg"></div>
            <div className="bg"></div>
            <Grid2 container>
                <Grid2 xs={12}>
                    <Menu user={currentUser}/>
                </Grid2>
                <Grid2 xs={.5}></Grid2>
                <Grid2 xs={11}>
                    <Paper sx={{marginTop:"3vh"}}>
                    <Routes>
                        <Route path="/" element={
                            <Homepage 
                            user={currentUser}
                            date={date}
                            currentPeriod={currentPeriod}
                            currentLesson={currentLesson}
                            currentStudents={currentStudents}
                            setCurrentPeriod={setCurrentPeriod}
                            updateDate={updateDate}
                            selectedStudent={selectedStudent}
                            setSelectedStudent={setSelectedStudent}
                            addDemerit={addDemerit}
                            addAbsence={addAbsence}
                            />}></Route>
                    </Routes>
                    </Paper>
                </Grid2>
                <Grid2 xs={.5}></Grid2>
            </Grid2>
        </>






        :
        <Typography variant="h1">Loading</Typography>
        }
        </>
    )
}
export default Home