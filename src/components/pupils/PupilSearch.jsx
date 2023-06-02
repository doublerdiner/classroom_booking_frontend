import { Autocomplete, Card, CardContent, TextField, Typography } from "@mui/material"

const PupilSearch = ({allStudents, selectedStudent, setSelectedStudent, findStudent})=>{
    const pupils = allStudents.map((pupil)=>{
        return `${pupil.firstName} ${pupil.lastName} - Year: ${pupil.studentYear}`
    })

    const onSelect = (e, value)=>{
        if(value){
            const array = value.split(" ")
            const student = getStudentFromNameAndYear(array[0], array[1], array[4])
            findStudent(student)
        }
        else{
            setSelectedStudent(null)
        }
    }
    
    const getStudentFromNameAndYear = (firstName, lastName, studentYear)=>{
        const answer = allStudents.find(student=>{
            return(
                student.firstName === firstName && student.lastName === lastName && student.studentYear == studentYear
            )
        })
        return answer
    }

    return(
        <>
        <Card>
            <CardContent>
                <Typography variant="h5">Pupil Search</Typography>
                <form>
                    <Autocomplete id="selectPupil" onChange={onSelect} options={pupils} renderInput={(params)=> <TextField {...params} label="Pupil"/>}/>
                </form>
                {selectedStudent ? 
                <Typography>View</Typography>
                : <></>}
            </CardContent>
        </Card>
        </>
    )
}
export default PupilSearch