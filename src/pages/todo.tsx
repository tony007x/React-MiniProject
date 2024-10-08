import * as React from 'react';




export default function Todo() {

    return (
        <>
            <div className="flex w-full h-screen justify-center items-center">
                <div className="flex flex-col w-[600px] h-[500px] bg-[#E2F1E7] shadow-xl">

                    <h1 className="text-center text-2xl">Todo List ✅</h1>

                    <div className="flex w-full h-[80px] gap-3 p-5">
                        <input type="text" placeholder="Search note..." className='flex w-full pl-5' />


                    </div>
                </div>
            </div>
        </>
    )
}
