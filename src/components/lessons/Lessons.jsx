import { Typography } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import AddLesson from "./AddLesson"
import AllLessons from "./AllLessons"

const Lessons = ({lessons})=>{
    console.log(lessons)
    return(
        <>
        <Grid2 container spacing={2}>
            <Grid2 xs={3}>
                <AddLesson/>
            </Grid2>
            <Grid2 xs={9}>
                <AllLessons lessons={lessons}/>
            </Grid2>
        </Grid2>
        </>
    )
}
export default Lessons