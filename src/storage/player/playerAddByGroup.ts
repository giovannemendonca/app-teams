import AsyncStorage from '@react-native-async-storage/async-storage'
import { PlayerStorageDTO } from './PlayerStorageDTO'
import { PLAYER_COLLECTION } from '@storage/storageconfig'
import { playerGetByGroup } from './playerGetByGroup'
import { AppError } from '@utils/AppError'

export async function playerAddByGroup(
  newPlayer: PlayerStorageDTO,
  group: string
) {
  const storagePlayers = await playerGetByGroup(group)

  const playerAlreadyExists = storagePlayers.filter(
    (player) => player.name === newPlayer.name
  )
  if (playerAlreadyExists.length > 0) {
    throw new AppError('Jogador já existe')
  }

  const storage = JSON.stringify([...storagePlayers, newPlayer])

  await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage)
  //eslint-disable-next-line
  try {
  } catch (error) {
    throw error
  }
}
