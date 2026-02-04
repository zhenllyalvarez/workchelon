import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MONGODB CONNECTED SUCCESSFULLY');
    } catch (error) {
        console.log('MONGODB FAILED TO CONNECT', error);
        process.exit(1);
    }
}

