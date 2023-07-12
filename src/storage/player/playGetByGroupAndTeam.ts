import { playerGetByGroup } from './playerGetByGroup'

export async function PlayersGetByGroupAndTeam(group: string, team: string) {
  //eslint-disable-next-line
  try {
    const storage = await playerGetByGroup(group)
    const players = storage.filter((p) => p.team === team)

    return players

  } catch (error) {
    throw error
  }
}
