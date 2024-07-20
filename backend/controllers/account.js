const { default: mongoose } = require("mongoose");
const Account = require("../models/account");

exports.getBalance = async (req, res) => {
  try {
    // get the userId from auth middleware
    const userId = req.userId;

    // Check the balance
    const account = await Account.findOne({ userId: userId });

    // return res
    res.status(200).json({
      balance: account.balance,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.transferBalance = async (req, res) => {
  try {
    // Create a session and start a transaction
    const session = await mongoose.startSession();
    session.startTransaction();

    // Get the userId of the account you wish to transfer the amount and the amount
    const { amount, to } = req.body;

    // Check if amount is negative
    if (amount <= 0) {
      await session.abortTransaction();
      return res
        .status(400)
        .json({ message: "Amount cannot be negative/Zero" });
    }

    // Check if the user sending has sufficient balance
    const account = await Account.findOne({ userId: req.userId }).session(
      session
    );
    if (!account || account.balance < amount) {
      await session.abortTransaction();
      return res.status(400).json({ message: "Insufficient balance" });
    }

    // Check if user to which youre sending is valid or not
    const toAccount = await Account.findOne({ userId: to }).session(session);
    if (!toAccount) {
      await session.abortTransaction();
      return res.status(400).json({ message: "Invalid account" });
    }

    // Perform the transfer if everyhing is okay
    await Account.updateOne(
      { userId: req.userId },
      { $inc: { balance: -amount } }
    ).session(session);
    await Account.updateOne(
      { userId: to },
      { $inc: { balance: amount } }
    ).session(session);

    // Commit the transaction
    session.commitTransaction();

    // return res
    res.status(200).json({
      message: "Transfer successful",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
