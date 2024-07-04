import Image from 'next/image'
import Block from './Block'

const Header1 = () => {
  return (
    <div className="flex justify-between border-2 items-center h-24 px-10">
      <Image src={'/logo.png'} alt='logo' width={200} height={200} className='w-30 h-16'/>
      <div className='border-r-2 border-gray-300 h-full flex'>
      <Block title={'Become a member'} para={'Additional 10% off'}/>
      <Block title={'For business'} para={'Trusted by 5000 corporates'}/>
      <Block title={'List your property'} para={'Start earning in 30 min'}/>
      <Block title={'123456789'} para={'Call us to book now'}/>
      <div className='flex items-center px-3'>
      <Image src={'/bom.png'} width={200} height={200} className='w-10 h-10 rounded-full '/>
      <h3 className='font-bold'>Login/SignUp</h3>
      </div>
      </div>

    </div>
  )
}

export default Header1
