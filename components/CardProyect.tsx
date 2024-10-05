import Image from "next/image"
import { Button } from "./Button";
import { IoLinkOutline } from "react-icons/io5";
export const CardProyect = () => {

    const  description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti facere enim itaque dolores laudantium voluptates libero velit, provident id cumque necessitatibus assumenda magni nesciunt, optio non cupiditate fuga maxime perspiciatis.'
    const shortDescription = () => {
        if (description.length > 100) {
            return description.slice(0, 100) + '...'
        }
        return description
    }

    return (
        <div className="flex gap-6 shadow-xl bg-background-tertiary bg-opacity-45 p-3 rounded-lg w-full my-4 max-w-2xl">
            <Image 
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Shoes" 
                width={200} 
                height={75} 
                loading="lazy"
                className="rounded-lg object-cover hover:scale-105 transition duration-300"
            />
            <div className="flex flex-col justify-between">
                <div>
                    <h2 className="">Shoes!</h2>
                    <p>{ shortDescription() }</p>
                </div>
                <div className="">
                    <Button icon={<IoLinkOutline size={20}/>} className="mt-4">Ver proyecto</Button>
                </div>
            </div> 
        </div>
    )
}