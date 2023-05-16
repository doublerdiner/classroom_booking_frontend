import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import LessonRow from "./LessonRow"

const AllLessons = ({lessons})=>{

    const lessonList = lessons.map((lesson)=>{
        return(
                <LessonRow key={lesson.id}
                lesson={lesson}/>
        )
    })

    return(
        <>
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Day</TableCell>
                        <TableCell>Period</TableCell>
                        <TableCell>Lesson Name</TableCell>
                        <TableCell>Year Group</TableCell>
                        <TableCell>Class Size</TableCell>
                        <TableCell>View</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {lessonList}                    
                </TableBody>
            </Table>
        </TableContainer>
        </>
    )
}
export default AllLessons