import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from "react-router-dom";

const LessonStudentTable = ({pupils, findStudent, selectedLesson, removeStudent})=>{


    const pupilRow = pupils.map(pupil=>{
        return(
            <TableRow key={pupil.id}>
                <TableCell>{pupil.firstName} {pupil.lastName}</TableCell>
                <TableCell>{pupil.studentYear}</TableCell>
                <TableCell><Link onClick={()=>{findStudent(pupil)}} to={`/home/pupils/${pupil.id}`}><VisibilityIcon/></Link></TableCell>
                <TableCell><PersonRemoveIcon onClick={()=>{removeStudent(pupil, selectedLesson)}}/></TableCell>

            </TableRow>
        )
    })

    return(
        <>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Student Name</TableCell>
                            <TableCell>Student Year</TableCell>
                            <TableCell>View Student</TableCell>
                            <TableCell>Remove Student From Lesson</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {pupilRow}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
export default LessonStudentTable