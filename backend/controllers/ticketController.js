const asyncHandler = require("express-async-handler");

const User = require("../models/userModel");
const Ticket = require("../models/ticketsModel");

// @desc Get user Tickets
// @route GET /api/tickets
// @access Private
const getTickets = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get tickets" });
});

// @desc Create New Tickets
// @route POST/api/tickets
// @access Private
const createTicket = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "create ticket" });
});

module.exports = {
  getTickets,
  createTicket,
};
