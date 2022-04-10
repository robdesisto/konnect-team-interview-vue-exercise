import { Service, State } from '@/store/types'

export function filtered ({ query, services }: State): Service[] {
  const search = query.toLowerCase()

  return query ? services.filter(s => s.name.toLowerCase().includes(search)) : services
}
