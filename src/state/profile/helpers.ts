import { Profile } from 'state/types'

export type ProfileResponse = {
  0: string
  1: boolean
}

export const transformProfileResponse = (profileResponse: ProfileResponse): Partial<Profile> => {
  const { 0: userId, 1: isActive } = profileResponse

  return {
    userId: Number(userId),
    isActive,
  }
}
