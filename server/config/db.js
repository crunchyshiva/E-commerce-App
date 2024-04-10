import mongoose from 'mongoose';
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URL);
    console.log(`Database connected successfully`);
  } catch (error) {
    console.log(`Error in mongoDB ${error}`);
  }
};

export default connectDB;
