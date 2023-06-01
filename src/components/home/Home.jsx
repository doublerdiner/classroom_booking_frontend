import { useAuth0 } from "@auth0/auth0-react"
import { Paper, Typography } from "@mui/material"
import { Routes, Route } from "react-router-dom"
import Menu from "../menu/Menu"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import Homepage from "./Homepage"
import { useEffect, useState } from "react"
import { deleteRoute, getIndex, getOne, putRoute } from "../service/Service"
import { findById, findThisUser} from "../service/Helpers"
import { getDate } from "../service/Helpers"
import { postRoute } from "../service/Service"
import Pupils from "../pupils/Pupils"
import Lessons from "../lessons/allLessons/Lessons"
import Settings from "../settings/Settings"
import LessonView from "../lessons/lessonView/LessonView"
import PupilView from "../pupils/pupilview/PupilView"

const Home = ()=>{
    const {isAuthenticated, user} = useAuth0()
    const [currentUser, setCurrentUser] = useState(null)
    const [date, setDate] = useState(getDate(new Date))
    const [currentPeriod, setCurrentPeriod] = useState(1)
    const [currentLesson, setCurrentLesson] = useState([])
    const [currentStudents, setCurrentStudents] = useState([])
    const [selectedStudent, setSelectedStudent] = useState(null)
    const [allStudents, setAllStudents] = useState([])
    const [lessons, setLessons] = useState([])
    const [selectedLesson, setSelectedLesson] = useState(null);

    useEffect(()=>{
        getIndex('users').then(data=>{
            return findThisUser(data, user)
        })
        .then((res)=>{
            setCurrentUser(res)
        })

        getIndex('students').then(data =>{
            setAllStudents(data)
        })
    },[user, selectedStudent, lessons])

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

    const findStudent = (student) =>{
        getOne('students/', student.id)
        .then((res)=>{
            setSelectedStudent(res)
        })
    }

    const addDemerit = (data)=>{
        const tempStudent = data.student
        postRoute("demerits", data).then(demerit=>{
            tempStudent.demerits.push(demerit)
            findStudent(tempStudent)
        })
    }

    const addAbsence = (data)=>{
        const tempStudent = data.student
        postRoute("absences", data).then(absence=>{
            tempStudent.absences.push(absence)
            findStudent(tempStudent)
        })
    }

    const addLesson = (data)=>{
        const newLessons = currentUser.lessons
        data.user = currentUser
        postRoute("lessons", data).then(lesson=>{
            newLessons.push(lesson)
            setLessons(newLessons)
        })
    }

    const deleteItem = (item, collection)=>{
        const id = collection.indexOf(item)
        collection.splice(id, 1)
        return collection
      }

    const deleteLesson = (data)=>{
        const temp = currentUser.lessons
        const collection = deleteItem(data, temp)
        deleteRoute('lessons/', data.id)
        .then(setLessons(collection))
    }

    const deleteAbsence = (absence)=>{
        const temp = {...selectedStudent}
        temp.absences = deleteItem(absence, temp.absences)
        deleteRoute('absences/', absence.id)
        .then(findStudent(temp))

    }

    const removeStudent = (student, lesson)=>{
        const id = lesson.students.indexOf(student)
        lesson.students.splice(id, 1)
        updateLesson(lesson)
    }

    const updateLesson = (lesson)=>{
        const temp = currentUser.lessons
        const updatedLessons = [...temp]
        const tempLesson = findById(updatedLessons, lesson.id)
        const index = updatedLessons.indexOf(tempLesson)
        lesson.user = {id: currentUser.id}
        updatedLessons[index] = lesson
        putRoute('lessons/', lesson.id, lesson)
        .then((res)=>setLessons(res))
    }

    const updateStudent = (student)=>{
        const uneditedStudent = findById(allStudents, student.id)
        student.lessons = uneditedStudent.lessons
        putRoute('students/', student.id, student)
        .then(()=>findStudent(student))
    }

    return(
        
        <>
        {isAuthenticated && currentUser? 
        <>
            <div className="bg"></div>
            <div className="bg"></div>
            <Grid2 container>
                <Grid2 xs={12}>
                    <Menu user={currentUser} setSelectedStudent={setSelectedStudent}/>
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
                            findStudent={findStudent}
                            />}>
                        </Route>
                        <Route path="/pupils">
                            <Route index element={<Pupils/>}></Route>
                            <Route path=":id" element={
                                <PupilView selectedStudent={selectedStudent} updateStudent={updateStudent} deleteAbsence={deleteAbsence}/>
                            }/>
                        </Route>
                        <Route path="/lessons">
                            <Route index element={
                                <Lessons 
                                lessons={currentUser.lessons} 
                                date={date}
                                addLesson={addLesson}
                                deleteLesson={deleteLesson}
                                setSelectedLesson={setSelectedLesson}/>}>
                            </Route>
                            <Route path=":id" element={
                                <LessonView 
                                selectedLesson={selectedLesson}
                                findStudent={findStudent}
                                removeStudent={removeStudent}
                                />
                            }/>
                        </Route>
                        <Route path="/settings" element={<Settings/>}/>
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