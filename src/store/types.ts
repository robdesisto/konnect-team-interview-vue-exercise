export interface Version {
  id: string;
  name: string;
  description: string;
}

interface ServiceLike {
  id: string;
  name: string;
  description: string;
  versions: Version[];
}

/**
 * Little funky because Vue uses instanceof for prop validation on Objects, so we can't just use
 * a type or interface.
 *
 * All properties are immutable. Updates would always involve creating a new instance so that
 * there's no risk of breaking change detection.
 */
export class Service {
  readonly id: string;

  readonly name: string;

  readonly description: string;

  readonly versions: Version[];

  constructor (data: ServiceLike) {
    this.id = data.id
    this.name = data.name
    this.description = data.description
    this.versions = data.versions
  }
}

export interface State {
  error: boolean;
  loading: boolean;
  page: number;
  query: string;
  services: Service[];
}

export enum Mutations {
  ERROR = 'error',
  LOADING = 'loading',
  PAGE = 'page',
  QUERY = 'query',
  SERVICES = 'services'
}

export enum Actions {
  FETCH_SERVICES = 'fetchServices'
}
