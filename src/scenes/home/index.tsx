import useMediaQuery from '@/hooks/useMediaQuery'
import ActionButton from '@/shared/ActionButton'
import { SelectedPage } from '@/shared/types'
import SansCustom from '@/assets for cars/SansCustom.png'
import HomePageGraphic from '@/assets for cars/HomePageGraphic.png'
import AudiLogo from '@/assets for cars/AudiLogo.webp'
import BMWLogo from '@/assets for cars/BMWLogo.webp'
import BenzLogo from '@/assets for cars/BenzLogo.webp'
import FordLogo from '@/assets for cars/FordLogo.webp'
import Toyotalogo from '@/assets for cars/Toyotalogo.webp'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from 'framer-motion'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Home = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
    return (
    <section
        id = "home"
        className="gap-16 bg-gray-50 py-19 md:h-full md:pd-0"        
    >
        {/* Image and main header */}
        <motion.div 
            className= "md:flex mx-auto w-5/6 items-center justify-center md:h-5/6 "
            onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
            >
            
            {/* Main head */}
            <div className="z-10 mt-32 basis-3/5">
                {/* Headings */}
                <motion.div className="md:-mt-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 
                            before:z-[-1] md:before:content-evolvetext ">
                            <img src={SansCustom} alt="home-page-text" />
                        </div>
                    </div>
                    <p className=" mt-8 text-sm">
                    Your go to garage where we help transform 
                    your ride completely form the bonnet to the trunk. 
                    Turn your car into a completely differ from its stock version. 
                    </p>
                </motion.div>
                {/* Acton Button */}
                <motion.div 
                    className="mt-8 flex items-center gap-8 "
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                     }}
                    >
                    <ActionButton setSelectedPage={setSelectedPage}>
                        Book Now
                    </ActionButton>
                    <AnchorLink
                        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                        onClick={() => setSelectedPage(SelectedPage.Benefits)}
                        href={`#${SelectedPage.Benefits}`}
                    >
                        <p className="text-lg">Learn More</p>
                    </AnchorLink>
                </motion.div>
            </div>

            {/* Image */}
            <div 
                className= "flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end pt-12"
            >
                <img src={HomePageGraphic} alt="home-pageGraphic" />
            </div>
        </motion.div>
        {/* Sponsors */}
        {isAboveMediumScreens && (
            <div className="h-[150px] w-full bg-primary-100 py-5">
                <div className="mx-auto w-5/6">
                    <div className=" flex w-auto items-center justify-between gap-5 ">
                        <img src={AudiLogo} alt="audi-logo" width="100" height="75"/>
                        <img src={BenzLogo} alt="benz-logo" width="150" height="75"/>
                        <img src={BMWLogo} alt="bMW-logo" width="100" height="75" />
                        <img src={FordLogo} alt="ford-logo" width="150" height="75"/>
                        <img src={Toyotalogo} alt="toyota-logo" width="100" height="75"/>
                    </div>
                </div>
            </div>
        )}
    </section>

);
}

export default Home