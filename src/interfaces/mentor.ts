import type { User } from './user'

export interface Mentor extends Omit<User, 'professional'> {
  email?: string
  category: string
  phone: String
  company?: {
    name: string
    logo: string
  }
}
