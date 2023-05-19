import { Button, TableCell, TableRow } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from "react-router-dom";

const StudentRow = ({student, setStudentDemeritAbsence, setSelectedStudent={setSelectedStudent}})=>{

    const absenceClick = ()=>{
        setStudentDemeritAbsence({
            type: "Absence",
            student: student})
        setSelectedStudent(student)
    }

    const demeritClick = ()=>{
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
                <TableCell><Link onClick={()=>{setSelectedStudent(student)}} to={`/home/pupils/${student.id}`}><VisibilityIcon/></Link></TableCell>
            </TableRow>
        </>
    )
}
export default StudentRow