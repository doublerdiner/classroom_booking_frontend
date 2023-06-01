import { Typography } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import AddPupil from "./AddPupil"
import PupilSearch from "./PupilSearch"

const Pupils = ({allStudents})=>{
    
    return (
        <>
        <Grid2 container spacing={5}>
            <Grid2 xs={3}>
                <AddPupil/>
            </Grid2>
            <Grid2 xs={3}>
                <PupilSearch/>
            </Grid2>
        </Grid2>
        </>
    )
}
export default Pupils