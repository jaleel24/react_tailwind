import logo from './logo2.jpg';
import { NavLink,Link} from 'react-router-dom';
const header = () => {
    // const toggle =()=>{
    //     const targetElement= document.getElementById('targetElement');
    //     const onToggle= 
    // }
  return (
    
    <div class="bg-white">
    <div class="h-16 bg-white flex justify-between items-center md:px-1 cursor-pointer ">
        <div class="logo w-24 mx-8 pt-4 cursor-pointer">
            <Link to="/home"><img src={logo} alt="logo"/></Link>
        </div>
      
      <div  class="hamburger px-3 inline-block md:hidden ">
            <div class="line h-0.5 w-6 my-1 bg-black"></div>
            <div class="line h-0.5 w-6 my-1 bg-black"></div>
            <div class="line h-0.5 w-6 my-1 bg-black"></div>
      </div>
      
      </div>
      <div class="sm:flex-wrap md:flex justify-end space-x-8 px-16 md:-translate-y-10 cursor-pointer">
            <span></span>
            <div class="items hover:underline underline-offset-4 font-bold decoration-[#6599cc]"><NavLink to="/about">About us</NavLink></div>
            <div class="items hover:underline underline-offset-4  font-bold decoration-[#6599cc]">Gallery</div>
            <div class="items hover:underline underline-offset-4 font-bold decoration-[#6599cc]">Services</div>
            <div class="items hover:underline underline-offset-4 font-bold  decoration-[#6599cc]">Contact Us</div>
            <div class="items hover:underline underline-offset-4 font-bold decoration-[#6599cc]">Testimonials</div>
            <div class="items hover:underline underline-offset-4 font-bold decoration-[#6599cc]">Team</div>
      </div>
</div>
  );
};
export default header;
