import { BrowserRouter, Route, Routes } from "react-router-dom";
import IssueTable from "./pages/Issue-table";
import IssueCard from "./pages/Issue-card";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IssueTable />} />
        <Route path="/issue-card">
          <Route index element={<IssueCard />} />
          <Route path="issue-card/:id" element={<IssueCard />} />
        </Route> 
      </Routes>
    </BrowserRouter>
  );
}
export default App;
// This is a simple React application that displays a header and a paragraph.