import { AppBar, Box, Typography, Toolbar, Stack, Container, List, Divider, TextField, Button } from "@mui/material";
import TaskContainer from "./components/TaskContainer";
import TaskField from "./components/TaskField";
import Header from "./components/Header";

export const taskArray = [
  {
    id: 1,
    desc: "title",
    isCompleted: false,
    created_date: "may 20 2020"
  },
  {
    id: 2,
    desc: "title 2",
    isCompleted: true,
    created_date: "may 20 2020"
  }
]

export default function App() {






  return (
    <Box>
      <Header />
      <Container sx={{ height: '100dvh', overflowY: "scroll" }}>
        <Toolbar />
        <TaskField />
        <TaskContainer />
      </Container>
    </Box >
  )
}
