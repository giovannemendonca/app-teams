import React from 'react'
import * as S from './styles'

type HighlightProps = {
  title: string
  subtitle: string
}

export function Highlight({ title, subtitle }: HighlightProps) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subtitle}</S.SubTitle>
    </S.Container>
  )
}
