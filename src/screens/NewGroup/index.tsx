import { useState } from 'react'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Header } from '@components/Header'
import { Button } from '@components/Button'
import Input from '@components/Input'
import { Highlight } from '@components/Highlight'

import { groupCreate } from '@storage/group/groupCreate'

import { AppError } from '@utils/AppError'

import * as S from './styles'

export function NewGroup() {
  const [group, setGroup] = useState('')

  const navigation = useNavigation()

  const handlerNewGroup = async () => {
    try {
      if (group.trim().length === 0) {
        return Alert.alert('Novo grupo', 'informe o nome da turma')
      }

      await groupCreate(group)
      navigation.navigate('players', { group })
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo grupo', error.message)
      } else {
        Alert.alert('Novo grupo', 'Não foi possivel criar um novo grupo')
      }
    }
  }

  return (
    <S.Container>
      <Header showBackButton />

      <S.Content>
        <S.Icon />

        <Highlight
          title='Nova turma'
          subtitle='crie a turma para adicionar as pessoas'
        />
        <Input
          placeholder='Nome da turma'
          onChangeText={setGroup}
        />
        <Button
          title='Criar'
          style={{
            marginTop: 20
          }}
          onPress={handlerNewGroup}
        />
      </S.Content>
    </S.Container>
  )
}
