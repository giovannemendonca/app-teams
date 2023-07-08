import { Header } from '@components/Header'
import * as S from './styles'
import { Highlight } from '@components/Highlight'
import { GroupCard } from '@components/GroupCard'

export default function Groups() {
  return (
    <S.container>
      <Header />
      <Highlight
        title='Turmas'
        subtitle='jogue com sua turma'
      />
      <GroupCard title='Galera do ignite'/>

    </S.container>
  )
}
