'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { ShowMoreProps, FilterProps } from '@/types'
import { CustomButton } from '.'
import { updateSearchParams } from '@/utils'

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
    const router = useRouter()

    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 10;
        const newPathName = updateSearchParams("limit", `${newLimit}`);

        router.push(newPathName);
    }
  return (
    <div className='w-full flex-center gap-5 mt-10'>
        {!isNext && (
            <CustomButton 
                title='Show More'
                btnType='button'
                containerStyles='bg-primary-blue rounded-full text-white'
                handleClick={handleNavigation}
            />
        )}
    </div>
  )
}

export default ShowMore