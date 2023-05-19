import { Typography } from "@mui/material"

const LessonView = ({selectedLesson})=>{
    return(
        <>
            <Typography>{selectedLesson.name}</Typography>
        </>
    )
}
export default LessonView;