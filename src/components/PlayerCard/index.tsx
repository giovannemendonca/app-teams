import ButtonIcons from '@components/ButtonIcons'
import * as S from './styles'

type PlayerCardProps = {
  name: string
  onRemove: () => void
}

export default function PlayerCard({ name, onRemove }: PlayerCardProps) {
  return (
    <S.Container>
      <S.Icon name='person' />
      <S.Name>{name}</S.Name>
      <ButtonIcons
        icon='close'
        type='SECONDARY'
        onPress={onRemove}
      />
    </S.Container>
  )
}
