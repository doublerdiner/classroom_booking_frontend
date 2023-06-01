import { Typography } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import PupilDetails from "./PupilDetails"
import AbsenceInfo from "./AbsenceInfo"
import DemeritInfo from "./DemeritInfo"
import EditPupil from "./EditPupil"
import { useState } from "react"

const PupilView = ({selectedStudent, updateStudent, deleteAbsence})=>{
    const [pupilEditForm, setPupilEditForm] = useState(false);
    console.log(selectedStudent)
    return(
        <>
        {selectedStudent ? 
            <Grid2 container spacing={2} className="padding2rem">
            <Grid2 xs={3}>
                <PupilDetails student={selectedStudent} pupilEditForm={pupilEditForm} setPupilEditForm={setPupilEditForm}/>
                { pupilEditForm ?
                <EditPupil student={selectedStudent} setPupilEditForm={setPupilEditForm} updateStudent={updateStudent}/>
                :
                <></>
                }
            </Grid2>
            <Grid2 xs={9}>
                <AbsenceInfo absences={selectedStudent.absences} deleteAbsence={deleteAbsence}/>
                <DemeritInfo demerits={selectedStudent.demerits}/>                
            </Grid2>
            </Grid2>
            :
            <></>
            }
        </>
    )
}
export default PupilView