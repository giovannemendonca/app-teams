import * as S from './styles'
import { TouchableOpacityProps } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

type Props = TouchableOpacityProps & {
  type?: S.ButtonIconsTypeStylesProps
  icon: keyof typeof MaterialIcons.glyphMap
}

export default function ButtonIcons({
  icon,
  type = 'PRIMARY',
  ...rest
}: Props) {
  return (
    <S.Container {...rest}>
      <S.Icon
        name={icon}
        type={type}
      />
    </S.Container>
  )
}
