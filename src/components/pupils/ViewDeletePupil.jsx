import { Button, Typography } from "@mui/material"

const ViewDeletePupil = ({selectedStudent, deleteStudent})=>{

    return(
        <>
        <Typography>View {selectedStudent.firstName} {selectedStudent.lastName}'s profile</Typography>
        <Button variant="contained">View</Button>
        {/* <Typography>Delete {selectedStudent.firstName} {selectedStudent.lastName} from the system</Typography>
        <Button type="submit" variant="contained" onClick={()=>{deleteStudent(selectedStudent)}}>Delete</Button> */}
        </>
    )
}
export default ViewDeletePupil