import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';
import User from '../models/userModel.js';
import Product from '../models/productModel.js';
import { isAuth, isAdmin, mailgun, payOrderEmailTemplate } from '../utils.js';
import Contact from '../models/contactModel.js';

const contactRouter = express.Router();

contactRouter.get(
  '/',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const orders = await Order.find().populate('user', 'name');
    res.send(orders);
  })
);

contactRouter.post(
  '/contact',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const newContact = new Contact({
      name: req.body.name,
      email: req.body.email,
      subject: req.body.subject,
      message: req.body.message,
    });

    const contact = await newContact.save();
    res.status(201).send({ message: 'New contact Created', contact });
  })
);


contactRouter.get(
  '/:id',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const contact = await Contact.find();
    res.send(contact);
  })
);


export default contactRouter;
