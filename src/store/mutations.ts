import { Service, State } from '@/store/types'

export function error (state: State, error: boolean) {
  state.error = error
}

export function loading (state: State, loading: boolean) {
  state.loading = loading
}

export function page (state: State, page: number) {
  state.page = page
}

export function query (state: State, query: string) {
  state.query = query
}

export function services (state: State, services: Service[]) {
  state.services = services
}
