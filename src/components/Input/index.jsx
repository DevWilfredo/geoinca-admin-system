import { Info } from 'lucide-react'

const InputComponent = ({ label, helperText, id, type }) => {
    return (
        <>
            <div className="relative">
                <input type={type} id={id} className="cursor-pointer block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label htmlFor={id} className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                    {label}
                </label>
            </div>
            <p className="flex items-center mt-2 text-xs gap-3 text-slate-500">
                <Info />
                {helperText}
            </p>
        </>
    )
}

export default InputComponent