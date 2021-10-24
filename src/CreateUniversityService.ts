interface University {
  name: string;
  country: string;
  state: string;
}

class CreateUniversityService {
  public execute({name, country, state}: University) {
    console.log(name, country, state);
  }
}

export default new CreateUniversityService();