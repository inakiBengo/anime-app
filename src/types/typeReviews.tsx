export interface Root {
  pagination: Pagination
  data: Daum[]
}

export interface Pagination {
  last_visible_page: number
  has_next_page: boolean
}

export interface Daum {
  mal_id: number
  url: string
  type: string
  reactions: Reactions
  date: string
  review: string
  score: number
  tags: string[]
  is_spoiler: boolean
  is_preliminary: boolean
  episodes_watched: any
  entry: Entry
  user: User
}

export interface Reactions {
  overall: number
  nice: number
  love_it: number
  funny: number
  confusing: number
  informative: number
  well_written: number
  creative: number
}

export interface Entry {
  mal_id: number
  url: string
  images: Images
  title: string
}

export interface Images {
  jpg: Jpg
  webp: Webp
}

export interface Jpg {
  image_url: string
  small_image_url: string
  large_image_url: string
}

export interface Webp {
  image_url: string
  small_image_url: string
  large_image_url: string
}

export interface User {
  url: string
  username: string
  images: Images2
}

export interface Images2 {
  jpg: Jpg2
  webp: Webp2
}

export interface Jpg2 {
  image_url: string
}

export interface Webp2 {
  image_url: string
}
