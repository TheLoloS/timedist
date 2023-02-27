import React from 'react'

type Props = {
    num?: number,
    color?: boolean,
    text?: string,
    maxDate?: number
}

const Filed = (props: Props) => {
    const gray: string = "bg-white text-left  border-black h-28 rounded drop-shadow max-w-[10rem]"
    const blue: string = "bg-cyan-50 text-left  border-black h-28 rounded drop-shadow max-w-[10rem]"
    return (

        <div className={props.color ? blue : gray}>
            {props.text ?
                <p className='pt-10 text-lg w-full bg-green-500 h-full text-center text-white rounded drop-shadow max-w-[10rem]'>
                    {props.text}
                </p>
                :
                <p className='p-2'>
                    {props.num !== undefined && props.num > 0 && props.maxDate !== undefined && props.num <= props.maxDate && props.num}
                </p>}
        </div>
    )
}

export default Filed