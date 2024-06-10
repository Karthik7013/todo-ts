import { Box, Divider, List, Stack, Typography } from "@mui/material";
import Task from "./Task";
import { useSelector } from "react-redux";
const TaskContainer = () => {
    const tasks = useSelector((e: any) => e.tasks)
    return (
        <Box>
            <Typography variant="h5" color="GrayText">
                Tasks
            </Typography>
            <List component={Stack} divider={<Divider variant="middle" />} >
                {tasks.map((task: taskProps) => {
                    return (
                        <Task {...task} key={task.id} />
                    );
                })}
            </List>
        </Box>
    )
}

export default TaskContainer