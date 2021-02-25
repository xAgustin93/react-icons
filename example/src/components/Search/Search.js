import React from 'react'
import SearchInput, { createFilter } from 'react-search-input'
import './Search.scss'

export default function Search(props) {
  const { allIcons, setIcons } = props

  const onSearch = (e) => {
    const result = allIcons.filter(createFilter(e))
    setIcons(result)
  }

  return <SearchInput className='search-icons' onChange={onSearch} />
}
