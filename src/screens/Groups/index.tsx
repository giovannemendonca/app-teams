import { Header } from '@components/Header'
import * as S from './styles'
import { Highlight } from '@components/Highlight'
import { GroupCard } from '@components/GroupCard'
import { useState } from 'react'
import { FlatList} from 'react-native'
import { ListEmply } from '@components/ListEmply'
import { Button } from '@components/Button'

export default function Groups() {
  const [groups, setGroups] = useState<string[]>([
    'Galera do Divina',
    'Galera da CEC',
    'Galera da ETEC',
  ])

  return (
    <S.container>
      <Header />
      <Highlight
        title='Turmas'
        subtitle='jogue com sua turma'
      />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmply message='Que tal cadastrar a primeira turma?' />
        )}
        showsVerticalScrollIndicator={false}
      />

      <Button title='Criar nova turma' />
    </S.container>
  )
}
