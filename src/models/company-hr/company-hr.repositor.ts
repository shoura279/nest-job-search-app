import { Document, Model } from 'mongoose';
import { AbstractRepository } from '../abstract.repository';
import { CompanyHr } from './company-hr.schema';
import { InjectModel } from '@nestjs/mongoose';

export class CompanyHrRepository extends AbstractRepository<CompanyHr> {
  constructor(
    @InjectModel(CompanyHr.name)
    private companyHrModel: Model<CompanyHr & Document>,
  ) {
    super(companyHrModel);
  }
}
