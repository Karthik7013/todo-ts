import { Button, Stack, TextField } from "@mui/material"
import { ChangeEvent, FormEvent, useState } from "react"

const TaskField = () => {
    const [input, setInput] = useState('')
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(input);
    }
    return (
        <form onSubmit={handleSubmit}>
            <Stack direction="row" my={3}>
                <TextField value={input} onChange={handleChange} size="medium" fullWidth placeholder="Add your tasks..."
                ></TextField>
                <Button type="submit"
                    color="success" variant="contained">Add</Button>
            </Stack>
        </form>

    )
}

export default TaskField