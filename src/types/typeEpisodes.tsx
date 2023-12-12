export interface typeEpisodes {
  data: DataEpisodes[]
  pagination: Pagination
}

export interface DataEpisodes {
  mal_id: number
  url: string
  title: string
  title_japanese: string
  title_romanji: string
  duration: number
  aired: string
  filler: boolean
  recap: boolean
  forum_url: string
  score: number
}

export interface Pagination {
  last_visible_page: number
  has_next_page: boolean
}