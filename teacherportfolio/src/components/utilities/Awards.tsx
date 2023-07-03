import React from 'react'

function Awards() {
    return (
        <div className=' w-full flex justify-center items-center pb-5'>
            <div className='w-full px-2 sm:px-5 md:px-10'>
                <table className='border w-full text-white text-opacity-50'>
                    <th className='border pl-2 text-center text-white text-opacity-100'>Position</th>
                    <th className='border px-2 md:w-[200px] text-center text-white text-opacity-100'>Institutes.</th>
                    <tbody className='border text-center w-full'>
                        <tr>
                            <td className='border px-1'>Certification of Participation international Poverty Reduction In China</td>
                            <td className='border px-1'>Ministry of Commerce Peoples Republic of China2021</td>
                        </tr>
                        <tr>
                            <td className='border px-1'>1st Position in BSCS (Gold-Medalist)</td>
                            <td className='border px-1'>GCUF 2016</td>
                        </tr>
                        <tr>
                            <td className='border px-1'>1st Position In “ Project ”</td>
                            <td className='border px-1'>Creative Con 2013, GCUF</td>
                        </tr>
                        <tr>
                            <td className='border px-1'>2nd Position In “ Project ”, District Level</td>
                            <td className='border px-1'>Punjab Youth Festival 2014</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Awards
