const StartSteps = ({ number, text }) => {
  return (
    <div className={`flex items-center justify-center flex-row gap-[100px]`}>
      {' '}
      <div
        className={`flex items-center justify-center w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}
      >
        <p className='font-bold text-[20px] text-white'>0{number}</p>
      </div>
      <p className='flex-1 ml-[30px] font-normal text-[22px] text-[#9b9b9b] leading-[32px] text-left'>
        {text}
      </p>
    </div>
  )
}

export default StartSteps
