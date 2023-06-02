import { Typography } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import AddPupil from "./AddPupil"
import PupilSearch from "./PupilSearch"
import DeletePupil from "./ViewDeletePupil"
import ViewDeletePupil from "./ViewDeletePupil"

const Pupils = ({allStudents, selectedStudent, setSelectedStudent, findStudent, deleteStudent})=>{
    
    return (
        <>
        <Grid2 container spacing={4}>
            <Grid2 xs={4}>
                <AddPupil/>
            </Grid2>
            <Grid2 xs={4}>
                <PupilSearch 
                allStudents={allStudents}
                selectedStudent={selectedStudent}
                setSelectedStudent={setSelectedStudent}
                findStudent={findStudent}
                />
            </Grid2>
        </Grid2>
        </>
    )
}
export default Pupils