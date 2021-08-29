import Cookies from 'js-cookie'
import { getProfileContract } from 'utils/contractHelpers'
import { Nft } from 'config/constants/types'
import { getNftByTokenId } from 'utils/collectibles'
import { Profile } from 'state/types'
import { getTeam } from 'state/teams/helpers'
import { transformProfileResponse } from './helpers'

const profileContract = getProfileContract()
const profileApi = process.env.REACT_APP_API_PROFILE

export interface GetProfileResponse {
  hasRegistered: boolean
  profile?: Profile
}

const getUsername = async (address: string): Promise<string> => {
  try {
    const response = await fetch(`${profileApi}/api/users/${address}`)

    if (!response.ok) {
      return ''
    }

    const { username = '' } = await response.json()

    return username
  } catch (error) {
    return ''
  }
}

const getProfile = async (address: string): Promise<GetProfileResponse> => {
  try {
    const hasRegistered = (await profileContract.hasRegistered(address)) as boolean

    if (!hasRegistered) {
      return { hasRegistered, profile: null }
    }

    const profileResponse = await profileContract.getUserProfile(address)
    const { userId, isActive } = transformProfileResponse(profileResponse)
    const username = await getUsername(address)

    // If the profile is not active the tokenId returns 0, which is still a valid token id
    // so only fetch the nft data if active
    const profile = {
      userId,
      username,
      isActive,
    } as Profile

    return { hasRegistered, profile }
  } catch (error) {
    return null
  }
}

export default getProfile
