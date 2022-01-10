import { Request, Response } from 'express';
import { Model } from 'mongoose';

/**
 * Describe the default controller for the application
 * All others controllers will ihnerit from this one, in order to avoid code redundancy
 */
class SuperController {
   private _model: Model<any>;

   constructor(model: Model<any>) {
      this._model = model;
   }

   /**
      * Create one or many document for specified model
      * @param {Request} req - Express Request Object
      * @param {Response} res - Express Response Object
      */
   async create(req: Request, res: Response) {
      try {
         const insertedObject = await this._model.create(req.body);

         res.status(200).json(insertedObject);
      } catch (error) {
         res.status(500).json({ message: error });
      }
   }

   /**
      * Find by ID in the specified database collection
      * @param {Request} req - Express Request Object
      * @param {Response} res - Express Response Object
      */
   async findById(req: Request, res: Response) {
      const { id } = req.params;

      try {
         const foundObject = await this._model.findById(id);

         res.status(200).json(foundObject);
      } catch (error) {
         res.status(500).json({ message: error });
      }
   }

   /**
      * Get all Documents in the specified database collection
      * @param {Request} req - Express Request Object
      * @param {Response} res - Express Response Object
      */
   async all(req: Request, res: Response) {
      try {
         const allDocuments = await this._model.find();

         res.status(200).json(allDocuments);
      } catch (error) {
         res.status(500).json({ message: error });
      }
   }

   /**
      * Update one document from specified model based on his database id
      * @param {Request} req - Express Request Object
      * @param {Response} res - Express Response Object
      */
   async update(req: Request, res: Response) {
      const { id } = req.params;
      const options = {
         upsert: false,
         strict: false,
         new: true,
      };

      try {
         const updatedDocument = await this._model.findByIdAndUpdate(id, req.body, options);
         res.status(200).json(updatedDocument);
      } catch (error) {
         res.status(500).json({ message: error });
      }
   }

   /**
      * Delete one document from specified model based on his database id
      * @param {Request} req - Express Request Object
      * @param {Response} res - Express Response Object
      */
   async delete(req: Request, res: Response) {
      const { id } = req.params;

      try {
         const deletedDocument = await this._model.findByIdAndRemove(id);
         res.status(200).json(deletedDocument);
      } catch (error) {
         res.status(500).json({ message: error });
      }
   }
}

export default SuperController;
