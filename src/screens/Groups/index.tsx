import { Header } from '@components/Header'
import * as S from './styles'
import { Highlight } from '@components/Highlight'

export default function Groups() {
  return (
    <S.container>
      <Header />
      <Highlight
        title='Turmas'
        subtitle='jogue com sua turma'
      />
    </S.container>
  )
}
