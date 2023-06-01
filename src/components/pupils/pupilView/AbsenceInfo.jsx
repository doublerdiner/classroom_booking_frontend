import { TableCell, TableContainer, TableRow, Table, TableHead, Typography, TableBody, Button } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';

const AbsenceInfo = ({absences, deleteAbsence})=>{
    const absenceList = absences.map(absence =>{
        return (
            <TableRow key={absence.id} >
                <TableCell>{absence.absence}</TableCell>
                <TableCell>{absence.date}</TableCell>
                <TableCell>{absence.notes}</TableCell>
                <TableCell><DeleteIcon onClick={()=>{deleteAbsence(absence)}} /></TableCell>
            </TableRow>
        )
    })
    return(
        <>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Absence Type</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Notes</TableCell>
                            <TableCell>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {absenceList}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
export default AbsenceInfo