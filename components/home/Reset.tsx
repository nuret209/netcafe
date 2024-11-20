import React from 'react'
import { SearchFilterContext } from './context'

const Reset = () => {
    const { setFilter } = React.useContext(SearchFilterContext)
    const reset = () => {
        setFilter(prevFilter => ({ ...prevFilter, type: ['all'], popular: false }))
    }
    return (
        <div>
            <button onClick={reset}
                className='m-4 border border-black rounded-lg w-[calc(100%-32px)] py-2'>Reset Tabs</button>

        </div>
    )
}

export default Reset