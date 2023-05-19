import { Typography } from "@mui/material"

const PupilView = ({selectedStudent})=>{
    return(
        <>
            <Typography>{selectedStudent.firstName} {selectedStudent.lastName}</Typography>
        </>
    )
}
export default PupilView