import { Typography } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import PupilDetails from "./PupilDetails"

const PupilView = ({selectedStudent})=>{
    return(
        <>
            <Grid2 container spacing={2} className="padding2rem">
            <Grid2 xs={3}>
                <PupilDetails student={selectedStudent}/>
            </Grid2>
            <Grid2 xs={9}>
                
            </Grid2>
            </Grid2>
        </>
    )
}
export default PupilView