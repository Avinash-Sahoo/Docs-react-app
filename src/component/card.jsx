import React from 'react'
import { PiFiles } from "react-icons/pi";
import { MdDownloadForOffline } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { motion } from "framer-motion";

function Card({ data , reference }) {
    return (
            <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} whileHover={{scale:1.1}} dragElastic={0.5} transition={{ type: "spring", stiffness: 400, damping: 10 }} className='relative flex justify-between flex-col w-40 h-56 bg-zinc-900 rounded-xl  overflow-hidden'>
                <div className='px-5 pt-6'>
                    <PiFiles size="1.1em" />
                    <p className='text-sm mt-2'>{data.desc}</p>
                </div>

                <footer>
                    <div className='flex justify-between items-center bottom-0 px-5 py-3'>
                        <h3 className='text-xs'>{data.size}</h3>
                        {data.close ? <MdCancel size="1.2em" cursor="pointer" /> : <MdDownloadForOffline size="1.2em" cursor="pointer"/>}

                    </div>
                    {data.tag.isOpen ? (

                        <div className={`${data.tag.color === "blue" ? "bg-blue-600" : "bg-green-600"} py-2.5 text-center`}>
                            <h3 className='text-xs'>Download Now</h3>

                        </div>

                    ) : null}

                </footer>
            </motion.div>
    )
}

export default Card
