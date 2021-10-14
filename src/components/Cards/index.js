import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: "100vh",
        marginTop: "30px"
    }, 
    paper: {
        backgroundColor: "#2b50a7",
    },
       
}))

export const Cards = ({ description, login, avatar_url }) => {

const classe = useStyles()

  return (
    <span className={classe.root}>
      <Grid container spacing={1} justify="center">
        <Grid item xs={8}>
          <Paper className={classe.paper}>
            <img className="image" src={avatar_url} alt={login} width="100px" height="100px"/>
            <p>{login}</p>
            <p>{description}</p>
          </Paper>
        </Grid>
      </Grid>
    </span>
  );
};
