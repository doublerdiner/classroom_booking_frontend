import { TableCell, TableRow } from "@mui/material"
import VisibilityIcon from '@mui/icons-material/Visibility';

const LessonRow = ({lesson})=>{

    const classSize = lesson.students.length
    
    return(
        <>
            <TableRow>
                <TableCell>{lesson.dayType}</TableCell>
                <TableCell>{lesson.period}</TableCell>
                <TableCell>{lesson.name}</TableCell>
                <TableCell>{lesson.yearGroup}</TableCell>
                <TableCell>{classSize}</TableCell>
                <TableCell><VisibilityIcon/></TableCell>
            </TableRow>
        </>
    )
}
export default LessonRow