import { TouchableOpacityProps } from 'react-native'
import * as S from './styles'

// o ...rest é para receber as propriedades do TouchableOpacityProps
type Props = TouchableOpacityProps & {
  title: string
}

export function GroupCard({ title, ...rest }: Props) {
  return (
    <S.Container {...rest}>
      <S.Icon />
      <S.Title>{title}</S.Title>
    </S.Container>
  )
}
