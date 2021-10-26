import University from '../infra/mongoose/schemas/ListUniversities';

interface Request {
  alpha_two_code: string;
  web_pages: string;
  name: string;
  country: string;
  domains: string;
  state_province: string;
}


class CreateUniversityService {
  async execute({
    alpha_two_code,
    web_pages,
    name,
    country,
    domains,
    state_province
  }: Request): Promise<void> {

    const existentUniversities = await University.find({
      name
    })
  }
}