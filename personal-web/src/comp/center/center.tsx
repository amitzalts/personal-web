import React from 'react'
import * as S from "./center.style"

const TopCenter = () => {
  // some funtion and use state
  return (
    <>
      <S.Container>
        <S.PersonalDetailsWrapper>
          <S.Profession>Full-Stack Developer</S.Profession>
          <S.Name>Tomer Cohen</S.Name>
        </S.PersonalDetailsWrapper>
        <S.PersonalImage />
      </S.Container>
    </>
  )
}

export default TopCenter
