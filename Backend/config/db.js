import mongoose from 'mongoose';
import colors from 'colors';
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URL);
    console.log(`Database connected successfully`.bgMagenta.white);
  } catch (error) {
    console.log(`Error in mongoDB ${error}`.bgRed.white);
  }
};

export default connectDB;
