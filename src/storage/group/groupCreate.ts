import AsyncStorage from '@react-native-async-storage/async-storage'
import { GROUP_COLLECTION } from '@storage/storageconfig'
import { groupGetAll } from './groupGetAll'
import { AppError } from '@utils/AppError'

export async function groupCreate(group: string) {
  // eslint-disable-next-line no-useless-catch
  try {
    const storageGroups = await groupGetAll()

    const groupAlreadyExists = storageGroups.includes(group)
    if (groupAlreadyExists) {
      throw new AppError('Grupo já existe')
    }

    const storage = JSON.stringify([...storageGroups, group])

    await AsyncStorage.setItem(GROUP_COLLECTION, storage)
  } catch (error) {
    throw error
  }
}
