import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import ButtonIcons from '@components/ButtonIcons'
import Input from '@components/Input'
import Filter from '@components/Filter'
import * as S from './styles'
import { FlatList } from 'react-native'
import { useState } from 'react'
import PlayerCard from '@components/PlayerCard'
import { ListEmply } from '@components/ListEmply'
import { Button } from '@components/Button'

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

      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard
            name={item}
            onRemove={() => {
              console.log('remove')
            }}
          />
        )}
        ListEmptyComponent={() => (
          <ListEmply message='Não há pessoas nesse time' />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 }
        ]}
      />
      <Button
        title='Remover Turma'
        type='SECONDARY'
      />
    </S.Container>
  )
}
