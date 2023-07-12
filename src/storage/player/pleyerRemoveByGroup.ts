import AsyncStorage from '@react-native-async-storage/async-storage'
import { PLAYER_COLLECTION } from '@storage/storageconfig'
import { playerGetByGroup } from './playerGetByGroup'

export async function playerRemoveByGroup(playerName: string, group: string) {
  //eslint-disable-next-line
  try {
    const storage = await playerGetByGroup(group)

    const filteredPlayers = storage.filter((p) => p.name !== playerName)
    const players = JSON.stringify(filteredPlayers)

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, players)
  } catch (error) {
    throw error
  }
}
