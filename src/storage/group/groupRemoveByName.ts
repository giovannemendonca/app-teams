import AsyncStorage from '@react-native-async-storage/async-storage'
import { GROUP_COLLECTION, PLAYER_COLLECTION } from '@storage/storageconfig'
import { groupGetAll } from './groupGetAll'

export async function groupRemoveByName(groupDeleted: string) {
  //eslint-disable-next-line
  try {
    const storageGroups = await groupGetAll()
    const groups = storageGroups.filter((group) => group !== groupDeleted)

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groups))
    await AsyncStorage.removeItem(`${GROUP_COLLECTION}-${PLAYER_COLLECTION}`)
  } catch (error) {
    throw error
  }
}
