import React from 'react';

const Search = ({inpStyle}) => {
    return (
            <form>
                <div>
                    <input type="search" className="searching_div" style={inpStyle} placeholder="поиск" name="search"/>
                </div>
            </form>
    );
};

export default Search;