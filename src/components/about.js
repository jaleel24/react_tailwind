import about_pic from './hero_pic.jpg';
const about = (props)=>{
    return(
        <div class="md:px-20 md:space-x-14 flex md:flex-nowrap sm:px-20 sm:flex-wrap  ">
            <div class=" pt-9 sm:flex-wrap">
                <img src={about_pic} alt="pic"/>
            </div>
            <div class="pt-7">
                <h1 class="hover:underline underline-offset-8 decoration-[#6599cc] cursor-pointer text-3xl font-bold ">About US</h1>
                <p class="md:flex  text-gray-400 font-normal pt-4 container">{props.data ? props.data.paragraph :'Loading'}</p>
            </div>
        </div>
    );
}
export default about;