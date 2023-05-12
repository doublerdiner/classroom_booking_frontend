import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import StudentRow from "./StudentRow"

const StudentTable = ({currentStudents, setStudentDemeritAbsence, setSelectedStudent})=>{
    
        const studentList = 
            currentStudents.map(student=>{
                return(
                    <StudentRow key={student.id} 
                    student={student} 
                    setStudentDemeritAbsence={setStudentDemeritAbsence}
                    setSelectedStudent={setSelectedStudent}/>
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
                        <TableCell>Demerit Warning</TableCell>
                        <TableCell>Add Demerit</TableCell>
                        <TableCell>Absence Warning</TableCell>
                        <TableCell>Add Absence</TableCell>
                        <TableCell>View Student</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {studentList}
                </TableBody>
            </Table>
        </TableContainer>
        </>
    )
}
export default StudentTable