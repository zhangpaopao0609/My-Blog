import mongoose from 'mongoose';

const momentsSchema = new mongoose.Schema({
    title : String,
    content : String,
    picture : Buffer,
    datePost : String
});

const MomentsModel = mongoose.model('mometns', momentsSchema);

export default MomentsModel;