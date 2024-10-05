import { IoBriefcaseOutline } from 'react-icons/io5'
import { CardProyect } from './CardProyect';
import styles from './cards_section.module.css';
export const ExperienceSection = () => {

    return (
        <section className="flex flex-col relative gap-4 mt-8 md:mt-32">
            <div className=' flex gap-4'>
                <IoBriefcaseOutline size={35}/>
                <h1 className="text-2xl font-semibold">Experiencias</h1>
            </div>

            <div>
                <div className='flex flex-col justify-center items-center'>
                    <div className={ `${styles.cards_section}`}>
                        <CardProyect />
                    </div>
                    <div className={styles.cards_section}>
                        <CardProyect />
                    </div>
                </div>
            </div>
        </section>
    )
}