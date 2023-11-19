import React from 'react'
import { useState } from "react";
import './Home.css';
import { MdClose } from 'react-icons/md';
import { AnimatePresence } from 'framer-motion';


const Home = () => {

  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false)
  }
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.1 }}
            transition={{ duration: 0.8 }} class="wrapper">

            <span className="icon-close">
              <MdClose onClick={handleClose} />
            </span>
            <div className="form-box login">
              <motion.h2
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}>Login</motion.h2>
              <form action="">Hi
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Home