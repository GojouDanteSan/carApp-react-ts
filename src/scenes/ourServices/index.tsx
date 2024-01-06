import { SelectedPage, ClassType } from '@/shared/types'
import image1 from '@/assets for cars/image1.jpg'
import image2 from '@/assets for cars/image2.jpg'
import image3 from '@/assets for cars/image3.jpg'
// import image4 from '@/assets for cars/image4.jpg'
import image5 from '@/assets for cars/image5.jpg'
import image6 from '@/assets for cars/image6.jpg'
import { motion } from 'framer-motion'
import HText from '@/shared/HText'
import Class from './Class'

const classes: Array<ClassType> = [
  {
    name: "Genuine Spare Parts",
    description:
      "All best in class 100% genuine spare parts.",
    image: image1,
  },
  {
    name: "World Class Setup",
    description:
      "World Class Setup With Import Equipments.",
    image: image2,
  },
  {
    name: "Custom Paint Job",
    description:
      "Custom Painting Done with High Skill Artist.",
    image: image3,
  },
  // {
  //   name: "Cleaning with Care",
  //   description:
  //     "Cleans Are performed With The Treated Water For the Longlife Of the Parts.",
  //   image: image4,
  // },
  {
    name: "Elegant Body Work",
    description:
      "Turn Your Boring Stock into Some More Stylish.",
    image: image5,
  },
  {
    name: "All Clear Inspection",
    description:
      "All Modification Will Be Completely Inspected According To The Road Safety And Regulation Standards.",
    image: image6,
  },
];

type Props = {
    setSelectedPage: (value:SelectedPage) => void
}

const ourServices = ({setSelectedPage}: Props) => {
  return (
        <section id="ourservices" className="w-full bg-primary-100 py-40">
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurServices)}
            >
                <motion.div 
                className="mx-auto w-5/6 "
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.9 }}
                transition={{ duration: 0.9 }}
                variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
                }}
                >
                    <div className="md:w-3/5 py-5 rounded-3xl">
                        <HText>OUR SERVICES</HText>
                        <p className="py-5">
                          Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                        tellus quam porttitor. Mauris velit euismod elementum arcu neque
                        facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                        enim mattis odio in risus nunc.
                        </p>
                    </div>
                </motion.div>
                <div className="mt-10 h-[319px] w-full overflow-x-auto overflow-y-hidden">
                    <ul className="w-[1800px] whitespace-nowrap">
                        {classes.map((item: ClassType, index) => (
                        <Class
                            key={`${item.name}-${index}`}
                            name={item.name}
                            description={item.description}
                            image={item.image}
                        />
                        ))}
                    </ul>
                </div>
            </motion.div> 

        </section>
    )
}

export default ourServices;