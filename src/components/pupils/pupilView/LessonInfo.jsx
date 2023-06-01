import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from "react-router-dom";

const LessonInfo = ({student, findLesson, removeLessonFromStudent})=>{

    const lessonList = student.lessons.map(lesson=>{
        return(
            <TableRow key={lesson.id} >
                 <TableCell>{lesson.name}</TableCell>
                 <TableCell>{lesson.dayType}</TableCell>
                 <TableCell>{lesson.period}</TableCell>
                 <TableCell><Link onClick={()=>{findLesson(lesson)}} to={`/home/lessons/${lesson.id}`}><VisibilityIcon/></Link></TableCell>
                 <TableCell><PersonRemoveIcon onClick={()=>{removeLessonFromStudent(student, lesson)}}/></TableCell>
             </TableRow>
        )
    })
    
    return(
        <>
        <Typography variant="h5">Lessons</Typography>
            <TableContainer className="bottomMargin3rem">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Lesson Name</TableCell>
                            <TableCell>Day</TableCell>
                            <TableCell>Period</TableCell>
                            <TableCell>View</TableCell>
                            <TableCell>Remove {student.firstName} from Lesson</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {lessonList}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
export default LessonInfo