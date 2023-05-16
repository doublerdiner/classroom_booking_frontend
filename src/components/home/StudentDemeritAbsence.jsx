import { Button, FormControl, FormLabel, Input, MenuItem, Paper, Select, TextField, Typography } from "@mui/material"
import { formatDate } from "../service/Helpers"
import { useState } from "react"

const StudentDemeritAbsence = ({studentDemeritAbsence, setStudentDemeritAbsence, date, selectedStudent, setSelectedStudent, addDemerit, addAbsence})=>{
    const [formToSubmit, setFormToSubmit] = useState(null)


    const demeritSubmit = (e)=>{
        e.preventDefault()
        const temp = {}
        temp.notes = formToSubmit
        temp.date = e.target[0].value
        temp.demerit = e.target[1].value
        temp.student = selectedStudent
        addDemerit(temp)
        e.target.reset()
        setFormToSubmit(null)
        cancelForm()
    }

    const absenceSubmit = (e)=>{
        e.preventDefault()
        const temp = {}
        temp.notes = formToSubmit
        temp.date = e.target[0].value
        temp.absence = e.target[1].value
        temp.student = selectedStudent
        addAbsence(temp)
        e.target.reset()
        setFormToSubmit(null)
        cancelForm()
    }

    const datePlaceholder = ()=>{
        return formatDate(date)
    }

    const cancelForm = ()=>{
        setStudentDemeritAbsence(null)
        setSelectedStudent(null)
        setFormToSubmit(null)
    }

    const formChange = (e)=>{
        setFormToSubmit(e.target.value)
    }

    return(
        <>
            <Paper>
                <Typography className="center" variant="h5" sx={{textDecoration:"underline"}}> Add {studentDemeritAbsence.type}</Typography>
                <Typography className="center" variant="h6">{studentDemeritAbsence.student.firstName} {studentDemeritAbsence.student.lastName}</Typography>
                {studentDemeritAbsence.type == "Demerit" ? 
                <div className="center">
                    <form id="demeritForm" onSubmit={demeritSubmit} className="center column width25rem gap1rem topPadding1rem bottomPadding3rem" id="demeritForm">
                            <Input id="date" type="date" defaultValue={datePlaceholder()}></Input>
                            <Select
                                labelId="demeritSelect-label"
                                id="demeritSelect"
                                defaultValue={"First Warning"}
                                inputProps={{ 'aria-label': 'Without label' }}>
                                <MenuItem value={"First Warning"}>First Warning</MenuItem>
                                <MenuItem value={"Second Warning"}>Second Warning</MenuItem>
                                <MenuItem value={"Group Call"}>Group Call</MenuItem>
                            </Select>
                            <TextField onChange={formChange} id="notes" label="Notes (Optional)"></TextField>
                            <Button type="submit" variant="contained">Submit</Button>
                            <Button onClick={cancelForm} variant="contained">Cancel</Button>
                    </form>
                </div>
                :
                <>
                <div className="center">
                    <form onSubmit={absenceSubmit} className="center column width25rem gap1rem topPadding1rem bottomPadding3rem" id="absenceForm">
                        <Input id="date" type="date" variant="contained" defaultValue={datePlaceholder()}></Input>
                        <Select
                            labelId="absenceSelect-label"
                            id="absenceSelect"
                            defaultValue={"Late"}
                            inputProps={{ 'aria-label': 'Without label' }}>
                            <MenuItem value={"Late"}>Late</MenuItem>
                            <MenuItem value={"No Show"}>No Show</MenuItem>
                            <MenuItem value={"Medical"}>Medical</MenuItem>
                        </Select>
                        <TextField onChange={formChange} id="notes" label="Notes (Optional)"></TextField>
                        <Button type="submit" variant="contained">Submit</Button>
                        <Button onClick={cancelForm} variant="contained">Cancel</Button>
                    </form>
                </div>
                </>
                }
            </Paper>
        </>
    )
}
export default StudentDemeritAbsence