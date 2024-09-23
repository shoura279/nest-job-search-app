import { Document, Model } from 'mongoose';
import { AbstractRepository } from '../abstract.repository';
import { JobSearcher } from './job-searcher.schema';
import { InjectModel } from '@nestjs/mongoose';

export class JobSearcherRepository extends AbstractRepository<JobSearcher> {
  constructor(
    @InjectModel(JobSearcher.name)
    private jobSearcherModel: Model<JobSearcher & Document>,
  ) {
    super(jobSearcherModel);
  }
}
