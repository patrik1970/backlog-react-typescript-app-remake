import { 
  Paper, 
  styled, 
  Table, 
  TableBody, 
  TableCell, 
  tableCellClasses, 
  TableContainer, 
  TableHead, 
  TableRow 
} from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

interface Issue {
  id: number;
  title: string;
  description: string;
  priority: string;
  issueType: string;
  created: string;
  completed: string;
}

const IssueTable = () => {
  const [data, setData] = useState<Issue[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://localhost:7121/api/Issue");
      const data: Issue[] = await response.json();
      setData(data);
    }
    fetchData();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell>Title</StyledTableCell>
            <StyledTableCell>Description</StyledTableCell>
            <StyledTableCell>Priority</StyledTableCell>
            <StyledTableCell>IssueType</StyledTableCell>
            <StyledTableCell>Created</StyledTableCell>
            <StyledTableCell>Completed</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((issue) => (
            <StyledTableRow key={issue.id}>
              <StyledTableCell>{issue.id}</StyledTableCell>
              <StyledTableCell>{issue.title}</StyledTableCell>
              <StyledTableCell>{issue.description}</StyledTableCell>
              <StyledTableCell>{issue.priority}</StyledTableCell>
              <StyledTableCell>{issue.issueType}</StyledTableCell>
              <StyledTableCell>{issue.created}</StyledTableCell>
              <StyledTableCell>{issue.completed}</StyledTableCell>  
              <StyledTableCell>
                <ArrowForwardIcon onClick={() => { navigate("issue-card/?id=" + issue["id"]) }} />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default IssueTable;