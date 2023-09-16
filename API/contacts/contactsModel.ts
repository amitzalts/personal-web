import mongoose, { Schema } from "mongoose";

interface Contacts{
    name: string;
    email: string;
    message: string;
}
export const ContactSchema = new Schema({
    name: {require: true, type: String},
    email: {require: true, type: String},
    message: {require: true, type: String}
});

const ContactModel = mongoose.model("Contacts", ContactSchema);

export default ContactModel;