export interface BaseProjectItem {
  title: string
  description: string
  url: string
  image: string
  visible: boolean
  tech: string[]
  position: number
}

export interface JobProject extends BaseProjectItem {}

export interface SaasProject extends BaseProjectItem {
  mmr: string
  device: string
  showmmr: boolean
}

export interface ExtraProject extends BaseProjectItem {
  size: string
  fullimage: string
  type: string
  github: string
}
