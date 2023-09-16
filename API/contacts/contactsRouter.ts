import express from 'express';
const router = express.Router(); // Use 'router' instead of 'routes'

import {
    addContact,
    getContacts
} from './contactsControle';

router
    .get("/getContacts", getContacts) // Add a forward slash before the route path
    .post("/addContact", addContact); // Add a forward slash before the route path

export default router;
