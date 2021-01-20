import { useState } from "react";

import styles from "./Search.module.css";

interface SearchProps {
    setSearchQuery: (input: string) => void
}

const Search: React.FC<SearchProps> = ({ setSearchQuery }) => {

    const [ error, setError ] = useState('');

    const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
        const inputRegex = "[a-zA-Z0-9]";
        const input = event.currentTarget.value;

        if(input === '') {
            setError('Please enter Cryptocurrency code or name');
            setSearchQuery(input);
        } else if(!input.match(inputRegex)) {
            setError('Please enter valid cryptocurrency name or code');
        } else {
            setError('');
            setSearchQuery(input);
        }
    };

    let  errorMessage = null;
    if(error) {
        errorMessage = <div className={styles.ErrorMessage}>{error}!</div>
    }

    return (
        <div className={styles.Search}>
            <input id="search-query" area-label="search-query" type="text" placeholder="Enter cryptocurrency name or code" onChange={handleInputChange}></input>
            {errorMessage}
        </div>
    )
    
};

export default Search;