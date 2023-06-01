import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from "react-router-dom";

const LessonInfo = ({student})=>{

    const lessonList = student.lessons.map(lesson=>{
        return(
            <TableRow key={lesson.id} >
                 <TableCell>{lesson.name}</TableCell>
                 <TableCell>{lesson.dayType}</TableCell>
                 <TableCell>{lesson.period}</TableCell>
                 <TableCell><Link onClick={()=>{}}><VisibilityIcon/></Link></TableCell>
                 <TableCell><DeleteIcon/></TableCell>
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