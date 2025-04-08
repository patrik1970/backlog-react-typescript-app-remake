import { Box, Button, Card, CardContent, FormControl, InputLabel, MenuItem, Select, Stack, TextField, TextFieldProps, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { useNavigate, useSearchParams } from "react-router-dom";

const IssueCard = () => {
 
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');
  const [issueType, setIssueType] = useState('');
  const [createdDate, setCreatedDate] = useState<Dayjs | null>(null);
  const [completedDate, setCompletedDate] = useState<Dayjs | null>(null);

  useEffect(() => {
    setId(issueById.id);
    setTitle(issueById.title);
    setIssueType(issueById.issueType);
    setPriority(issueById.priority);
    setDescription(issueById.description);
    setCreatedDate(dayjs(issueById.created));
    setCompletedDate(dayjs(issueById.completed));
  }, [data]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://localhost:7121/api/Issue/" + searchParams.get("id"));
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  const issueById = JSON.parse(JSON.stringify(data));
  

  const saveChanges = () => {
    const updatedIssue = {
      id: id,
      title: title,
      description: description,
      priority: priority,
      issueType: issueType,
      created: createdDate,
      completed: completedDate
    };
   
    const updateIssue = async () => {
      const response = await fetch("https://localhost:7121/api/Issue/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedIssue)
      });
      if (response.ok) {
        console.log('Issue updated successfully');
      } else {
        console.error('Error updating issue');
      }
    }
    updateIssue();
    navigate(-1);
  }

  const deleteHandle = () => {
    const issueToDelete = {
      id: id,
    }
    const deleteIssue = async () => {
      const response = await fetch("https://localhost:7121/api/Issue/" + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(issueToDelete)
      });
      if (response.ok) {
        console.log('Issue deleted successfully');
      } else {
        console.error('Error deleting issue');
      }
    }
    deleteIssue();
    navigate(-1);
  }

  return (
     <Card sx={{ minWidth: 575 }}>
      <CardContent>
        <Stack direction="row" justifyContent={"space-between"} alignItems={"flex-end"} spacing={2}>
          <TextField 
            label="Title"
            style={{ width: "100%" }}
            value={title || ""}
            onChange={(e) => setTitle(e.target.value)}
            variant="outlined"
          />
          <FormControl fullWidth>
            <InputLabel>IssueType</InputLabel>
            <Select
              label="IssueType"
              style={{ width: "100%" }}
              value={issueType || ""}
              onChange={(e) => setIssueType(e.target.value)} 
            >
              <MenuItem value={0}>Feature</MenuItem>
              <MenuItem value={1}>Bug</MenuItem>
              <MenuItem value={2}>Documentation</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Priority</InputLabel>
            <Select
              label="Priority"
              style={{ width: "100%" }}
              value={priority || ""}
              onChange={(e) => setPriority(e.target.value)}
            >
              <MenuItem value={0}>Low</MenuItem>
              <MenuItem value={1}>Medium</MenuItem>
              <MenuItem value={2}>High</MenuItem>
            </Select>
          </FormControl>
        </Stack>
        <br />
        <Box>
          <TextField
            style={{ width: "100%" }} 
            label="Description" 
            multiline
            value={description || ""}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Box>
        <br />
        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"flex-end"} spacing={2}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Created"
              format="YYYY-MM-DD"
              value={createdDate || null}
              onChange={(newValue) => { setCreatedDate(newValue);}}
              slotProps={{ textField: { style: { width: "100%" } } }}
            />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Completed"
              format="YYYY-MM-DD"
              value={completedDate || null}
              onChange={(newValue) => { setCreatedDate(newValue);}}
              slotProps={{ textField: { style: { width: "100%" } } }}
            />
          </LocalizationProvider>
          <Button 
            variant="contained"
            style={{ width: "100%" }}
            onClick={() => navigate(-1)}
          > Abort
          </Button>
          <Button 
            variant="outlined"
            style={{ width: "100%" }}
            onClick={saveChanges}
          > Save
          </Button>
          <Button 
            variant="outlined"
            style={{ width: "100%" }}
            onClick={deleteHandle}
          > Delete
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default IssueCard;