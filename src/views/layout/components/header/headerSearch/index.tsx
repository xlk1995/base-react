import { useState } from 'react'

import { Search } from '@/libs'

export const HeaderSearch = () => {
  const [searchVal, setSearchVal] = useState('')
  const handleSearchChange = (val: string) => {
    setSearchVal(val)
  }
  return (
    <div>
      <Search
        inputVal={searchVal}
        onChange={handleSearchChange}
      />
    </div>
  )
}
