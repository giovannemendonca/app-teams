import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import * as S from './styles'
import ButtonIcons from '@components/ButtonIcons'
import Input from '@components/Input'

export function Players() {
  return (
    <S.Container>
      <Header showBackButton />
      <Highlight
        title='Nome da turma'
        subtitle='adicione a galera e separe os times'
      />

      <S.Form>
        <Input
          placeholder='Nome da pessoa'
          autoCorrect={false}
        />
        <ButtonIcons icon='add' />
      </S.Form>
    </S.Container>
  )
}
