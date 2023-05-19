import { Typography } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import AddLesson from "./AddLesson"
import AllLessons from "./AllLessons"

const Lessons = ({lessons, date, addLesson, deleteLesson, setSelectedLesson})=>{

    return(
        <>
        <Grid2 container spacing={2}>
            <Grid2 xs={3}>
                <AddLesson date={date} addLesson={addLesson}/>
            </Grid2>
            <Grid2 xs={9}>
                <AllLessons 
                lessons={lessons}
                deleteLesson={deleteLesson}
                setSelectedLesson={setSelectedLesson}/>
            </Grid2>
        </Grid2>
        </>
    )
}
export default Lessons