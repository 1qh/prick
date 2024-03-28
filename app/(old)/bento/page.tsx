'use client'

import { useEffect, useState } from 'react'
import { useFormState } from 'react-dom'
import { toast } from 'sonner'
import { Company } from 'types'

import { Search } from '@/app/(main)/search'
import { getCompanies } from '@/app/actions'

import { CompanyView } from './company'

export default function Page() {
  const [data, setData] = useState<Company[]>([])
  const [newData, formAction] = useFormState(getCompanies, [])
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const _data = localStorage.getItem('company')
      if (_data) {
        setData(JSON.parse(_data))
      }
    }
    const newTotal = newData.length
    if (newTotal > 0) {
      localStorage.setItem('company', JSON.stringify(newData))
      toast.dismiss()
      setData(newData)
    }
  }, [newData])

  if (!data.length) return <Search action={formAction} />
  return (
    <div className='flex flex-col'>
      <Search action={formAction} className='mx-auto my-2 w-fit' />
      {CompanyView(data)}
    </div>
  )
}
