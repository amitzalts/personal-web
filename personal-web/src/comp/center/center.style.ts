// import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Profession = styled('div')({
    color: 'white',
    padding: '2rem',
    fontWeight: '700',
    fontSize:'3rem',
})

export const Name = styled('div')({
    color: 'white',
    padding: '2rem',
    fontWeight: '700',
    fontSize:'3rem',
})

export const PersonalDetailsWrapper = styled('div')({
    width:'500px',
    display:'flex',
    flexDirection:'column',
    backgroundColor: 'transparent',
})

export const PersonalImage = styled('div')({
    width:'400px',
    display:'flex',
    flexDirection:'column',
    backgroundImage:'url("https://www.freeiconspng.com/thumbs/penguin-png/madagascar-penguin-png-1.png")',
    backgroundSize:'contain',
    backgroundRepeat:'no-repeat',
})

export const Container = styled('div')({
    width:'1515px',
    height:'500px',
    backgroundColor: 'darkslateblue',
    display:'flex',
    justifyContent:'space-around'
})