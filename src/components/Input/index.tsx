import { TextInputProps } from 'react-native'
import { useTheme } from 'styled-components/native'
import * as S from './styles'

export default function Input({ ...rest }: TextInputProps) {
  const theme = useTheme()
  return (
    <S.Container
      placeholderTextColor={theme.COLORS.GRAY_300}
      {...rest}
    />
  )
}
