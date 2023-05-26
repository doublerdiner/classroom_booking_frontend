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
                <form onSubmit={submitForm}>
                    <div>
                        <InputLabel htmlFor="firstName" >First Name:</InputLabel>
                        <Input onChange={formChange} id="firstName" type="text" name="firstName" value={editedStudent.firstName}></Input>
                    </div>
                    <div>
                        <InputLabel htmlFor="lastName" >Last Name:</InputLabel>
                        <Input onChange={formChange} id="lastName" type="text" name="lastName" value={editedStudent.lastName} ></Input>
                    </div>
                    <div>
                        <InputLabel htmlFor="year" >Year Group:</InputLabel>
                        <Input onChange={formChange} id="year" type="number" name="studentYear" value={editedStudent.studentYear} ></Input>
                    </div>
                    <div>
                        <InputLabel htmlFor="notes" >Notes:</InputLabel>
                        <TextField onChange={formChange} id="notes" type="text" name="notes" value={editedStudent.notes}></TextField>
                    </div>
                    <div>
                        <Button type="submit" variant="contained">Submit</Button>
                    </div>
                    <div>
                        <Button onClick={()=>setPupilEditForm(false)} variant="contained">Cancel</Button>
                    </div>
                </form>
            </CardContent>
        </Card>
        </>
    )
}
export default EditPupil