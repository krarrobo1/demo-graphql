import mongoose from 'mongoose';



export async function connect() {
    try {
        await mongoose.connect('mongodb://localhost/mongographql', { useNewUrlParser: true });
        console.log('DB connected!');
    } catch (err) {
        console.log(`${err}`);
    }
}