import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

const Header = () => {
  return (
    <>
      <div style={{ width: "50%"}}>
        <div style={{ display: "flex", flexDirection:"row", justifyContent: "space-between" }}>
          <div>
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              <Typography variant="h3" gutterBottom>Issue Tracker</Typography>
            </Link>
          </div>
          <div style={{ textAlign: "center" }}>
            <Link style={{ textDecoration: "none", color: "black" }} to="/add-issue-card">
              <AddIcon style={{ fontSize: 40 }} />
              <Typography variant="h5" gutterBottom>Add Issue</Typography>
            </Link>
          </div>
        </div>  
      </div>
      <hr/>  
    </>
  );
}

export default Header;