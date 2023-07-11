import { useState } from 'react'
import { Alert, FlatList } from 'react-native'
import { useRoute } from '@react-navigation/native'

import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import ButtonIcons from '@components/ButtonIcons'
import { Button } from '@components/Button'
import Input from '@components/Input'
import Filter from '@components/Filter'
import PlayerCard from '@components/PlayerCard'
import { ListEmply } from '@components/ListEmply'
import * as S from './styles'
import { PlayerStorageDTO } from '@storage/player/PlayerStorageDTO'
import { AppError } from '@utils/AppError'
import { playerAddByGroup } from '@storage/player/playerAddByGroup'
import { playerGetByGroup } from '@storage/player/playerGetByGroup'

type RouteParams = {
  group: string
}

export function Players() {
  const [newPlayerName, setNewPlayerName] = useState('')

  const [team, setTeam] = useState('Time a')
  const [players, setPlayers] = useState([])

  const route = useRoute()
  const { group } = route.params as RouteParams

  const handlerAddPlayer = async () => {
    if (newPlayerName.trim().length == 0) {
      return Alert.alert(
        'Nova pessoa',
        'informe o nome da pessoa para adicionar'
      )
    }
    const newPlayer: PlayerStorageDTO = {
      name: newPlayerName,
      team: group
    }
    try {
      await playerAddByGroup(newPlayer, group)
      const data = await playerGetByGroup(group)
      console.log(data)
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Nova pessoa', error.message)
      } else {
        console.log(error)
        Alert.alert('Nova Pessoa', 'Não foi possível adicionar')
      }
    }
  }

  return (
    <S.Container>
      <Header showBackButton />
      <Highlight
        title={group}
        subtitle='adicione a galera e separe os times'
      />

      <S.Form>
        <Input
          placeholder='Nome da pessoa'
          autoCorrect={false}
          onChangeText={setNewPlayerName}
        />
        <ButtonIcons
          icon='add'
          onPress={handlerAddPlayer}
        />
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
