import { Checkbox, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
type taskProps = {
    id: number
    desc: string,
    isCompleted: boolean,
    created_date: string
}

const Task = ({ desc, isCompleted, created_date, id }: taskProps) => {



    const handleEditTask = (id: number) => {
        console.log("task edited" + id)
    }
    const handleDeleteTask = (id: number) => {
        console.log('task deleted' + id)
    }
    const handleCompletedTask = (id: number) => {
        console.log('toggle' + id)
    }


    return (
        <ListItem
            secondaryAction={
                <Toolbar sx={{ gap: 3 }}>
                    <IconButton onClick={() => { handleEditTask(id) }} edge="end" aria-label="comments">
                        <EditRoundedIcon fontSize="medium" color="warning" />
                    </IconButton>

                    <IconButton onClick={() => { handleDeleteTask(id) }} edge="end" aria-label="comments">
                        <DeleteIcon color="error" />
                    </IconButton>
                </Toolbar>
            }
            disablePadding
        >
            <ListItemButton
                disableRipple
            >
                <ListItemIcon>
                    <Checkbox
                        onChange={() => { handleCompletedTask(id) }}
                        checked={isCompleted}
                        edge="start"
                        icon={<RadioButtonUncheckedIcon />}
                        checkedIcon={<TaskAltIcon />}
                    />
                </ListItemIcon>
                <ListItemText primary={desc}
                    secondary={created_date}
                />
            </ListItemButton>
        </ListItem>
    )
}

export default Task