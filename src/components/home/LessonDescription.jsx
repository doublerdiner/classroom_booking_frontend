import { Card, CardContent, Typography } from "@mui/material"

const LessonDescription = ({currentLesson})=>{
    return(
        <>
        <Card>
            <CardContent>
                <Typography className="center" variant="h5" sx={{textDecoration:"underline"}}>Lesson Details</Typography>
                {currentLesson !== undefined ? 
                <>
                <div className="center">
                    <Typography>Lesson Name:&nbsp;</Typography>
                    <Typography fontWeight="bold"> {currentLesson.name}</Typography>
                </div>
                <div className="center">
                    <Typography>Day:&nbsp;</Typography>
                    <Typography fontWeight="bold"> {currentLesson.dayType}</Typography>
                </div>
                <div className="center">
                    <Typography>Period:&nbsp;</Typography>
                    <Typography fontWeight="bold"> {currentLesson.period}</Typography>
                </div>
                <div className="center">
                    <Typography>Year Group:&nbsp;</Typography>
                    <Typography fontWeight="bold"> {currentLesson.yearGroup}</Typography>
                </div>
                </>
                :
                <>
                <div className="center">
                    <Typography>You do not have a lesson scheduled for this time.</Typography>
                </div>
                </>}
            </CardContent>
        </Card>
        </>
    )
}
export default LessonDescription