import * as S from './styles'
import { TextInputProps } from 'react-native'

export default function Input({ ...rest }: TextInputProps) {
  return <S.Container {...rest} />
}
