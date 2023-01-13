import { TextField } from "@mui/material";

const SearchBar = ({ keyword, onChange }) => {
    return (
        <TextField className='search-bar'
            key="search-bar"
            value={keyword}
            placeholder={"search news"}
            onChange={(e) => onChange(e.target.value)}
            id="outlined-basic"
            variant="outlined"
            fullWidth
            label="ETH"
        />
    );
}

export default SearchBar;