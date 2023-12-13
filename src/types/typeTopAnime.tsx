export type typeTopAnime = {
  pagination: Pagination;
  data:       Datum[];
}

export interface Datum {
  element:         'anime' | 'manga'
  mal_id:          number;
  url:             string;
  images:          { [key: string]: Image };
  trailer:         Trailer;
  approved:        boolean;
  titles:          Title[];
  title:           string;
  title_english:   string;
  title_japanese:  string;
  title_synonyms:  string[];
  type:            string;
  source:          string;
  episodes:        number;
  status:          string;
  airing:          boolean;
  aired:           Aired;
  duration:        string;
  rating:          string;
  score:           number;
  scored_by:       number;
  rank:            number;
  popularity:      number;
  members:         number;
  favorites:       number;
  synopsis:        string;
  background:      string;
  season:          string;
  year:            number;
  broadcast:       Broadcast;
  producers:       Demographic[];
  licensors:       Licensor[];
  studios:         Demographic[];
  genres:          Demographic[];
  explicit_genres: Explicit_genre[];
  themes:          Theme1[];
  theme:           Song
  demographics:    Demographic[];
  published:       Publish;
  streaming:       Streaming[];
  external:        Externals[];
  relations:       Relation[]
}

export interface Relation {
  entry: Theme1[]
  relation: string
}

export interface Externals {
  name: string
  url: string
}

export interface Song {
  openings: string[]
  endings: string[]
}

export interface Streaming {
  name: string
  url:  string
}

export interface Publish {
  from:   string
  to:     string
  string: string
  prop:{
    from: {day: number, month: number, year: number} 
    to:   {day: number, month: number, year: number} 
  }
}

export interface Theme1 {
  mal_id: number
  name: string
  type: string
  url: string
}

export interface Explicit_genre {

}

export interface Licensor {
  mal_id: number 
  name: string
  type: string
  url: string
}

export interface Aired {
  from:   Date;
  to:     null;
  prop:   Prop;
  string: string;
}

export interface Prop {
  from: From;
  to:   From;
}

export interface From {
  day:   number | null;
  month: number | null;
  year:  number | null;
}

export interface Broadcast {
  day:      string;
  time:     string;
  timezone: string;
  string:   string;
}

export interface Demographic {
  mal_id: number;
  type:   Type;
  name:   string;
  url:    string;
}

export enum Type {
  Anime = "anime",
}

export interface Image {
  image_url:       string;
  small_image_url: string;
  large_image_url: string;
}

export interface Title {
  type:  string;
  title: string;
}

export interface Trailer {
  youtube_id: string;
  url:        string;
  embed_url:  string;
  images:     Images;
}

export interface Images {
  image_url:         string;
  small_image_url:   string;
  medium_image_url:  string;
  large_image_url:   string;
  maximum_image_url: string;
}

export interface Pagination {
  last_visible_page: number;
  has_next_page:     boolean;
  current_page:      number;
  items:             Items;
}

export interface Items {
  count:    number;
  total:    number;
  per_page: number;
}
