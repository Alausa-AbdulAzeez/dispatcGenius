const HeroBtn = ({ text }) => {
  return (
    <button className='bg-main-blue  px-[20px] max-md:px-[14px] max-md:py-[7px] py-[14px] border border-transparent text-white rounded-md  cursor-pointer hover:bg-dark-blue hover:text-white hover:border-white transition-all duration-[3000] ease-in-out'>
      {text}
    </button>
  )
}

export default HeroBtn
