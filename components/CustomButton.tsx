'use client'
import React from 'react'
import { CustomeButtonProps } from '@/types'

const CustomButton = ({ title, containerStyles, handleClick, btnType }: CustomeButtonProps) => {
  return (
	<button
		disabled={false}
		type={btnType || "button"}
		className={`custom-btn ${containerStyles}`}
		onClick={handleClick}
	>
		<span className={`flex-1`}>
			{title}
		</span>
	</button>
  )
}

export default CustomButton