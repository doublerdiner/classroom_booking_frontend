import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';

const DemeritInfo = ({demerits})=>{
    const demeritList = demerits.map(demerit =>{
        return (
            <TableRow key={demerit.id} >
                <TableCell>{demerit.demerit}</TableCell>
                <TableCell>{demerit.date}</TableCell>
                <TableCell>{demerit.notes}</TableCell>
                <TableCell><DeleteIcon/></TableCell>
            </TableRow>
        )
    })
    return(
        <>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Demerit Type</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Notes</TableCell>
                            <TableCell>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {demeritList}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
export default DemeritInfo