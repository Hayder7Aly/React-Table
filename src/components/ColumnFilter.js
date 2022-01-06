import React from 'react'

const ColumnFilter = ({column}) => {
    const {filterValue , setFilter} = column
    return (
        <span>
            <input type="text" placeholder='Column Searching' value={filterValue || ""} onChange={e => setFilter(e.target.value)} />
        </span>
    )
}

export {ColumnFilter}
