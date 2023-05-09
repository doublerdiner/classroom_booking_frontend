import { Card, CardContent, Typography } from "@mui/material"

const LessonDescription = ({currentLesson})=>{
    return(
        <>
        <Card>
            <CardContent>
                <Typography className="center" variant="h5" sx={{textDecoration:"underline"}}>Lesson Description</Typography>
            </CardContent>
        </Card>
        </>
    )
}
export default LessonDescription