import { Header } from '@components/Header'
import * as S from './styles'
import { Highlight } from '@components/Highlight'
import { useState, useCallback } from 'react'
import { FlatList } from 'react-native'
import { useNavigation, useFocusEffect } from '@react-navigation/native'

import { GroupCard } from '@components/GroupCard'
import { ListEmply } from '@components/ListEmply'
import { Button } from '@components/Button'
import { groupGetAll } from '@storage/group/groupGetAll'
import { Loading } from '@components/Loading'

export default function Groups() {
  const [groups, setGroups] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const navigation = useNavigation()

  useFocusEffect(
    useCallback(() => {
      fetchGroups()
    }, [])
  )

  const handlerNewGroup = () => {
    navigation.navigate('new')
  }

  const fetchGroups = async () => {
    try {
      setIsLoading(true)
      const data = await groupGetAll()
      setGroups(data)
    } catch (error) {
      console.log(error)
    }finally{
      setIsLoading(false)
    }
  }

  const handlerOpenGroup = (group: string) => {
    navigation.navigate('players', { group })
  }

  return (
    <S.container>
      <Header />
      <Highlight
        title='Turmas'
        subtitle='jogue com sua turma'
      />
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={groups}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <GroupCard
              title={item}
              onPress={() => handlerOpenGroup(item)}
            />
          )}
          contentContainerStyle={groups.length === 0 && { flex: 1 }}
          ListEmptyComponent={() => (
            <ListEmply message='Que tal cadastrar a primeira turma?' />
          )}
          showsVerticalScrollIndicator={false}
        />
      )}

      <Button
        title='Criar nova turma'
        onPress={handlerNewGroup}
      />
    </S.container>
  )
}
