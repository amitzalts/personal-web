import ContactModel from "./contactsModel";
import jwt from "jwt-simple";
import { Error } from "mongoose";
const secret = process.env.JWT_SECRET;


export const getContacts = async (req: any, res: any) => {
    try {
      const contacts = await ContactModel.find({});
      res.send({ contacts });
    } catch (error) {
      console.error(error);
      res.status(500).send({ Error: 'Internal Server Error' });
    }
  };
  

  export const addContact = async (req: any, res: any) => {
    try {
      const { name, message, email } = req.body;
  
      const contactDB = await ContactModel.create({ name, message, email });
  
      console.log(contactDB);
  
      res.status(201).send({ ok: true });
    } catch (error) {
      console.error(error);
      res.status(500).send({ Error: 'Internal Server Error' });
    }
  };
  
  