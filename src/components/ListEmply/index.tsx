import * as S from './styles'

type ListEmplyProps = {
  message: string
}

export function ListEmply({ message }: ListEmplyProps) {
  return (
    <S.Container>
      <S.Message>{message}</S.Message>
    </S.Container>
  )
}