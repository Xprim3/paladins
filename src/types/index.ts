// TypeScript type definitions for the project

export interface Alliance {
  name: string
  tag: string
  description: string
  type: 'main' | 'academy' | 'farm'
}

export interface ContactLink {
  name: string
  url: string
  icon?: string
}

export interface KingdomInfo {
  number?: number
  name: string
  status: string
  benefits: string[]
}

