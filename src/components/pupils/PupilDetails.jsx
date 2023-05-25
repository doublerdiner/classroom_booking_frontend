import { Button, Card, CardContent, Typography } from "@mui/material"
import { useState } from "react"

const PupilDetails = ({student})=>{
    const [editWindow, setEditWindow] = useState(false)
    console.log(editWindow)

    return(
        <>
        <Card>
            <CardContent>
                <Typography className="center" variant="h5" sx={{textDecoration:"underline"}}>{student.firstName} {student.lastName}</Typography>
                <div className="center">
                    <Typography>Year:&nbsp;</Typography>
                    <Typography fontWeight="bold">{student.studentYear}</Typography>
                </div>
                <div className="center">
                    <Typography>Notes:&nbsp;</Typography>
                    {student.notes ? 
                    <Typography fontWeight="bold">{student.notes}</Typography>
                    :
                    <Typography fontWeight="bold">No notes at this time</Typography>
                    }
                </div>
                <div className="center">
                    <Button onClick={()=>{setEditWindow(true)}} variant="contained">Edit</Button>
                </div>
            </CardContent>
        </Card>
        </>
    )
}
export default PupilDetails