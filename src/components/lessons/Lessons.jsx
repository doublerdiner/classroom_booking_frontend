import { Typography } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import AddLesson from "./AddLesson"
import AllLessons from "./AllLessons"

const Lessons = ()=>{
    return(
        <>
        <Grid2 container spacing={2}>
            <Grid2 sx={3}>
                <AddLesson/>
            </Grid2>
            <Grid2 sx={9}>
                <AllLessons/>
            </Grid2>
        </Grid2>
        </>
    )
}
export default Lessons