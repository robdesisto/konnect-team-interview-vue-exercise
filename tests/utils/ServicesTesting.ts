import { Service } from '@/store'

const services = require('./fixtures/services.json')

/* not terribly exciting but a helper for testing */
export class ServicesTesting {
  services (max?: number): Service[] {
    // Always have fresh instances so that different tests can't touch the same data
    return services.slice(0, max).map(s => new Service(s))
  }
}
