export interface Root {
  data: Daum[]
}

export interface Daum {
  mal_id: number
  name: string
  url: string
  count: number
  path: 'anime' | 'manga'
}
