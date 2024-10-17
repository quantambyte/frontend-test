import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
// import top100Films from './top100Films  ';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment } from '@mui/material';
export default function Search() {
  return (
    <Autocomplete
      disablePortal
      size='small'
      options={['One', 'Two', 'Three']}
      sx={{ display: { xs: 'none', md: 'block' }, width: 300 }}
      renderInput={(params) => (
        <TextField
          {...params}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          placeholder='Search'
        />
      )}
    />
  );
}
