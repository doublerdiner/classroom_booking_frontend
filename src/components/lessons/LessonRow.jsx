import { TableCell, TableRow } from "@mui/material"
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";

const LessonRow = ({lesson, deleteLesson, setSelectedLesson})=>{

    const classSize = lesson.students.length
    
    return(
        <>
            <TableRow>
                <TableCell>{lesson.dayType}</TableCell>
                <TableCell>{lesson.period}</TableCell>
                <TableCell>{lesson.name}</TableCell>
                <TableCell>{lesson.yearGroup}</TableCell>
                <TableCell>{classSize}</TableCell>
                <TableCell><Link onClick={()=>{setSelectedLesson(lesson)}} to={`/home/lessons/${lesson.id}`}><VisibilityIcon/></Link></TableCell>
                <TableCell><DeleteIcon onClick={()=>{deleteLesson(lesson)}}/></TableCell>
            </TableRow>
        </>
    )
}
export default LessonRow