import type { NextApiRequest, NextApiResponse } from 'next'
import mongoose from 'mongoose';
import { db } from '../../../database';
import { Entry } from '../../../models';
import { IEntry } from '../../../models/Entry';

type Data = 
    | { message: string }
    | IEntry

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { id } = req.query;
    
    if (!mongoose.isValidObjectId(id)) {
        return res.status(400).json({ message: 'El id no es válido: ' })
    }

    switch (req.method) {
        case 'GET':
            return getEntry(req, res);
        case 'PUT':
            return updateEntry(req, res);
        default:
            res.status(400).json({ message: 'Método no permitido' })
    }
}
    
const getEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const { id } = req.query;

    await db.connect();
    const entry = await Entry.findById({ id });
    
    if (!entry) {
        await db.disconnect();
        return res.status(404).json({ message: 'Entrada no encontrada' })
    }
    return res.status(200).json(entry);    
}

const updateEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const { id } = req.query;
    
    await db.connect();
    const entryToUpdate = await Entry.findById(id);
    
    if(!entryToUpdate) {
        await db.disconnect();
        return res.status(404).json({ message: 'No hay entrada con ese id' + id })
    }

    const {
        description = entryToUpdate.description,
        status = entryToUpdate.status
    } = req.body;

    try {
        const updatedEntry = await Entry.findByIdAndUpdate<IEntry>(id, { 
            description, status
        }, { runValidators: true, new: true });
        await db.disconnect();
        
        // Otra forma de actualizar el registro
        // entryToUpdate.description = description;
        // entryToUpdate.status = status;
        // entryToUpdate.save();

        return res.status(200).json(updatedEntry!);
    } catch (error: any) {
        console.log(error)
        return res.status(400).json({ message: error.erros.status })!;
    }
}