import Categories from '@/components/ui/categories'
import SearchInput from '@/components/ui/search-input'
import prismadb from '@/lib/prismadb'
import React from 'react'

const RootPage = async () => {
  const categories = await prismadb.category.findMany()
  return (
    <div className='h-full p-4 space-y-2'>
      <SearchInput />
      <Categories data={categories}/>
    </div>  
  )
}

export default RootPage