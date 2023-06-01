import { Label } from "@mui/icons-material"
import { Button, Card, CardContent, Input, InputLabel, TextField, Typography } from "@mui/material"
import { useState } from "react"

const EditPupil = ({student, setPupilEditForm, updateStudent})=>{
    const [editedStudent, setEditedStudent] = useState(student);

    const formChange = (e)=>{
        const temp = {...editedStudent}
        temp[e.target.name] = e.target.value
        setEditedStudent(temp)
    }

    const submitForm = (e)=>{
        e.preventDefault()
        updateStudent(editedStudent)
        setPupilEditForm(false)

    }

    console.log(student)

    return(
        <>
        <Card>
            <CardContent>
                <Typography className="center" variant="h5" sx={{textDecoration:"underline"}}>Edit Pupil</Typography>
                <form onSubmit={submitForm} className="center column gap1rem topPadding1rem bottomPadding3rem">
                    <div className="width100 center verticalCenter gap1rem">
                        <InputLabel htmlFor="firstName" >First Name:</InputLabel>
                        <Input onChange={formChange} id="firstName" type="text" name="firstName" value={editedStudent.firstName}></Input>
                    </div>
                    <div className="width100 center verticalCenter gap1rem">
                        <InputLabel htmlFor="lastName" >Last Name:</InputLabel>
                        <Input onChange={formChange} id="lastName" type="text" name="lastName" value={editedStudent.lastName} ></Input>
                    </div>
                    <div className="width100 center verticalCenter gap1rem">
                        <InputLabel htmlFor="year" >Year Group:</InputLabel>
                        <Input onChange={formChange} id="year" type="number" name="studentYear" value={editedStudent.studentYear} ></Input>
                    </div>
                    <div className="width100 center verticalCenter gap1rem">
                        <InputLabel htmlFor="notes" >Notes:</InputLabel>
                        <TextField onChange={formChange} id="notes" type="text" name="notes" value={editedStudent.notes}></TextField>
                    </div>
                    <div className="width100 center verticalCenter gap1rem">
                        <Button type="submit" variant="contained">Submit</Button>
                        <Button onClick={()=>setPupilEditForm(false)} variant="contained">Cancel</Button>
                    </div>
                </form>
            </CardContent>
        </Card>
        </>
    )
}
export default EditPupil