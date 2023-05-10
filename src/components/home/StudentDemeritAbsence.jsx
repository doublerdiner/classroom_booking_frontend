import { Button, FormControl, FormLabel, Typography } from "@mui/material"

const StudentDemeritAbsence = ({studentDemeritAbsence})=>{


    const demeritSubmit = (e)=>{
        e.preventDefault()
        console.log(e)
    }

    const absenceSubmit = (e)=>{
        e.preventDefault()
        console.log("absence")
    }

    return(
        <>
            <Typography className="center" variant="h5" sx={{textDecoration:"underline"}}> Add {studentDemeritAbsence.type}</Typography>
            <Typography className="center" variant="h6">{studentDemeritAbsence.student.firstName} {studentDemeritAbsence.student.lastName}</Typography>
            {studentDemeritAbsence.type == "Demerit" ? 
            <form onSubmit={demeritSubmit}>
                    <FormLabel>Demerit</FormLabel>
                    <Button type="submit" variant="contained">Submit</Button>
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