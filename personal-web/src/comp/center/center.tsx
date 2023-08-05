import React from 'react'
import * as S from "./center.style"
import { motion } from 'framer-motion'

const TopCenter = () => {
  // some funtion and use state
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <S.Container>
          <S.PersonalDetailsWrapper>
            <S.Profession>Full-Stack Developer</S.Profession>
            <S.Name>Tomer Cohen</S.Name>
          </S.PersonalDetailsWrapper>
          <S.PersonalImage />
        </S.Container>
      </motion.div>
    </>
  )
}

export default TopCenter
