import { Typography } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"

const PupilView = ({selectedStudent})=>{
    return(
        <>
            <Grid2 container spacing={2} className="padding2rem">
            <Grid2 xs={3}>
                <Typography>{selectedStudent.firstName}</Typography>
            </Grid2>
            <Grid2 xs={9}>
                
            </Grid2>
            </Grid2>
        </>
    )
}
export default PupilView