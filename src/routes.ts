import {Request, Response} from 'express';
import CreateUniversityService from './CreateUniversityService';

export function createUniversityService(request: Request, response: Response) {
  CreateUniversityService.execute({
    name: "Name",
    country: "Brasil",
    state: "SP"
  });

  return response.send();
}