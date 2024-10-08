import * as React from 'react';


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function Todo() {
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };
    return (
        <>
            <div className="flex w-full h-screen justify-center items-center">
                <div className="flex flex-col w-[600px] h-[500px] bg-[#E2F1E7] shadow-xl">

                    <h1 className="text-center text-2xl">Todo List ✅</h1>

                    <div className="flex w-full h-[80px] gap-3 p-5">
                        <input type="text" placeholder="Search note..." className='flex w-full pl-5' />

                        <FormControl className='w-[250px]' size="small">
                            <InputLabel id="demo-simple-select-label">ALL</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                                // className='border border-[red] h-[80px]'
                            >
                                <MenuItem value={10}>All</MenuItem>
                                <MenuItem value={20}>Complete</MenuItem>
                                <MenuItem value={30}>Incomplete</MenuItem>
                            </Select>
                        </FormControl>
                        {/* <Button variant="contained">Add</Button> */}

                    </div>
                </div>
            </div>
        </>
    )
}
