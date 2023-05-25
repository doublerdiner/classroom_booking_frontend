import { Button, FormControl, MenuItem, Select, Typography } from "@mui/material"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box } from "@mui/system";

const DateAndPeriod = ({date, currentPeriod, setCurrentPeriod, updateDate, setStudentDemeritAbsence, setSelectedStudent})=>{
    
    const currentDate = `${date.dayName} ${date.day}/${date.month}/${date.year}`;
    const day = new Date(`${date.year}/${date.month}/${date.day}`); 

    const backOneDay = ()=>{
        const previousDay = day.setDate(day.getDate() -1)
        updateDate(new Date(previousDay))
        setStudentDemeritAbsence(null)
        setSelectedStudent(null)
        
    }
    const forwardOneDay = ()=>{
        const nextDay = day.setDate(day.getDate() +1)
        updateDate(new Date(nextDay))
        setStudentDemeritAbsence(null)
        setSelectedStudent(null)
    }
    const today = ()=>{
        updateDate(new Date)
    }

    const handleChange = (e)=>{
        setCurrentPeriod(e.target.value)
        setStudentDemeritAbsence(null)
        setSelectedStudent(null)
    }


    return(
        <>
        <section className="center">
            <Button>
                <ArrowBackIcon onClick={backOneDay}/>
            </Button>
            <div>
                <Button onClick={today}>
                    <Typography>Today</Typography>
                </Button>
            </div>
            <Button onClick={forwardOneDay}>
                <ArrowForwardIcon/>
            </Button>
        </section>
        <div className="center">
            <Typography>{currentDate}</Typography>
        </div>
        <div className="center verticalCenter">
            <Typography>Period:</Typography>
            <Box>
                <FormControl size="small">
                    <Select
                        labelId="periodSelect-label"
                        id="periodSelect"
                        value={currentPeriod}
                        inputProps={{ 'aria-label': 'Without label' }}
                        onChange={handleChange}
                    >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </div>
        </>

    )
}
export default DateAndPeriod