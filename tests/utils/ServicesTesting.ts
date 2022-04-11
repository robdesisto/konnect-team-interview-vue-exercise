import { Service } from '@/store'

const services = require('./fixtures/services.json')

export class ServicesTesting {
  services (max?: number): Service[] {
    return services.slice(0, max).map(s => new Service(s))
  }
}
