
function Pricing() {
  return (
    <>
      <h1 className="w-full pl-5 sm:pl-5 border-b font-Foldit border-[#00f0ff] border-opacity-50 text-[26px] pb-5 text-[#00f0ff] text-opacity-80">SUBJECTS STUDIED</h1>
      <main className='sm:pl-8 w-full space-y-6 sm:space-y-0 py-4 flex flex-col sm:flex-row space-x'>
        <ul className='w-full sm:max-w-[270px] pb-4 sm:pb-0 border-b border-[#8b8b8b] border-opacity-50 sm:border-none text-center sm:text-start text-white text-opacity-80 '>
          <ul className='text-[12px] space-y-4 font-light text-white text-opacity-50 tracking-6%'>
            <li> Operating System</li>
            <li> Database Management System </li>
            <li> Object Oriented Programing </li>
            <li> Human-computer interaction </li>
            <li> Artificial Intelligence </li>
            <li> Machine Learning </li>
            <li> Discrete Mathematics </li>
            <li> Graphics </li>
            <li> Computer organization and assembly language. </li>
            <li> Theory of automata and formal language. </li>
             <li> Analysis 0f Algorithm</li>
          </ul>
        </ul>
        <ul className='w-full text-center sm:text-start text-white text-opacity-80 sm:pl-10 sm:border-l border-white border-opacity-30'>
          <ol className='text-[12px] space-y-4 font-light text-white text-opacity-50 tracking-6%'>
            <li> Software Engineering </li>
            <li> Visual Programming </li>
            <li> Web Engineering </li>
            <li>  Compiler Construction </li>
            <li> Digital Logic and Design </li>
            <li> Networking</li>
            <li> Numerical Computing </li>
            <li> Computer Architecture </li>
            <li> Text Mining </li>
            <li> Advance Research Methods </li>
            <li> Parallel and Distributed Computing</li>
          </ol>
        </ul>
      </main>
      <ul className="w-full flex pb-5 justify-center items-center">
        <li className="w-full mx-10 sm:w-[450px] border-t border-[#8B8B8B] border-opacity-50"></li>
      </ul>
    </>
  )
}

export default Pricing