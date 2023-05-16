import { Button, TableCell, TableRow } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from '@mui/icons-material/Visibility';

const StudentRow = ({student, setStudentDemeritAbsence, setSelectedStudent={setSelectedStudent}})=>{

    const absenceClick = ()=>{
        setStudentDemeritAbsence({
            type: "Absence",
            student: student})
        setSelectedStudent(student)
    }

    const demeritClick = ()=>{
        // document.getElementById("demeritForm").reset()
        setStudentDemeritAbsence({
            type: "Demerit",
            student: student})
        setSelectedStudent(student)
    }

    return(
        <>
            <TableRow>
                <TableCell>{student.firstName} {student.lastName}</TableCell>
                <TableCell>{student.studentYear}</TableCell>
                <TableCell>{student.demeritFlag ? "true" : "false"}</TableCell>
                <TableCell onClick={demeritClick}><Button><AddIcon></AddIcon></Button></TableCell>
                <TableCell>{student.absenceFlag ? "true" : "false"}</TableCell>
                <TableCell onClick={absenceClick}><Button><AddIcon></AddIcon></Button></TableCell>
                <TableCell><VisibilityIcon></VisibilityIcon></TableCell>
            </TableRow>
        </>
    )
}
export default StudentRow