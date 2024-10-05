import { IoCodeSlash } from 'react-icons/io5'

export const ProyectsSection = () => {

    return (
        <section className="flex flex-col gap-4 max-w-xl mt-8 md:mt-32">
            <div className=' flex gap-4'>
                <IoCodeSlash size={35}/>
                <h1 className="text-2xl font-semibold">Proyectos</h1>
            </div>
        </section>
    )
}