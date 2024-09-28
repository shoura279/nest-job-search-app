import {
  Document,
  FilterQuery,
  Model,
  ProjectionType,
  QueryOptions,
} from 'mongoose';

export abstract class AbstractRepository<ay7aga> {
  constructor(private nMode: Model<ay7aga & Document>) {}

  public create(item: ay7aga) {
    const createdDocument = new this.nMode(item);
    return createdDocument.save();
    // return this.nMode.insertMany(item);
  }

  public getOne(
    query?: FilterQuery<ay7aga>,
    projection?: ProjectionType<ay7aga>,
    options?: QueryOptions<ay7aga>,
  ) {
    return this.nMode.findOne(query, projection, options);
  }

  public update(
    query: FilterQuery<ay7aga>,
    item?: any,
    options?: QueryOptions<ay7aga>,
  ) {
    return this.nMode.findOneAndUpdate(query, item, options).lean();
  }

  public delete(query: FilterQuery<ay7aga>) {
    return this.nMode.deleteOne(query).lean();
  }

  public exist(
    query?: FilterQuery<ay7aga>,
    projection?: ProjectionType<ay7aga>,
    options?: QueryOptions<ay7aga>,
  ) {
    return this.nMode.findOne(query, projection, options); //{},null
  }
}
