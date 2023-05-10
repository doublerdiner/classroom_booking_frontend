import { Button, FormControl, FormLabel, Input, MenuItem, Select, Typography } from "@mui/material"
import { formatDate } from "../service/Helpers"
import { useState } from "react"

const StudentDemeritAbsence = ({studentDemeritAbsence, setStudentDemeritAbsence, date})=>{
    const [currentForm, setCurrentForm] = useState()


    const demeritSubmit = (e)=>{
        e.preventDefault()
        console.log(e)
        const temp = {}
        temp.date = e.target[0].value
        temp.demerit = 
        cancelForm()
    }

    const absenceSubmit = (e)=>{
        e.preventDefault()
        console.log("absence")
    }

    const datePlaceholder = ()=>{
        return formatDate(date)
    }

    const cancelForm = ()=>{
        setStudentDemeritAbsence(null)
        setCurrentForm()
    }

    return(
        <>
            <Typography className="center" variant="h5" sx={{textDecoration:"underline"}}> Add {studentDemeritAbsence.type}</Typography>
            <Typography className="center" variant="h6">{studentDemeritAbsence.student.firstName} {studentDemeritAbsence.student.lastName}</Typography>
            {studentDemeritAbsence.type == "Demerit" ? 
            <form onSubmit={demeritSubmit} className="center column">
                    <Input type="date" defaultValue={datePlaceholder()}></Input>
                    <Select
                        labelId="periodSelect-label"
                        id="periodSelect"
                        defaultValue={"First Warning"}
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem value={"First Warning"}>First Warning</MenuItem>
                        <MenuItem value={"Second Warning"}>Second Warning</MenuItem>
                        <MenuItem value={"Group Call"}>Group Call</MenuItem>
                    </Select>
                    <Input></Input>
                    <Button type="submit" variant="contained">Submit</Button>
                    <Button onClick={cancelForm} variant="contained">Cancel</Button>
            </form>
            :
            <FormControl onSubmit={absenceSubmit}>
                <FormLabel>Absence</FormLabel>
            </FormControl>
            }
        </>
    )
}
export default StudentDemeritAbsence