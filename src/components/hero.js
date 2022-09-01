import hero_p from './hero1.jpg';
const hero=(props)=>{
    return (
        <div class="flex justify-center items-center">
           <img src={hero_p} alt='hero_pic' class="translate"/>
           <div class="absolute -translate-y-16">
                <h1 class="flex sm:font-bold sm:text-4xl md:font-extrabold text-white md:text-6xl">
                    {props.data ? props.data.title : 'Loading'}
                </h1>
                <span></span>
                <p><q class="flex sm:font-semi-bold sm:text-xl sm:px-0 font-bold text-white md:text-lg md:px-40">{props.data ? props.data.paragraph : 'Loading'}</q></p>
               
           
           </div>
            
        </div>
    );

}
export default hero;