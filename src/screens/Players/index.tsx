import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import ButtonIcons from '@components/ButtonIcons'
import Input from '@components/Input'
import Filter from '@components/Filter'
import * as S from './styles'
import { FlatList } from 'react-native'
import { useState } from 'react'

export function Players() {
  const [team, setTeam] = useState('Time a')
  const [players, setPlayers] = useState([])

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

      <S.HeaderList>
        <FlatList
          horizontal
          data={['time a', 'time b']}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
        />

        <S.NumberOfPlayers>{players.length}</S.NumberOfPlayers>
      </S.HeaderList>
    </S.Container>
  )
}
