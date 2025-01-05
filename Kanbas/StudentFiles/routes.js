import FileModel from "./model.js";
import mongoose from 'mongoose';
export default function FileRoutes(app) {

    app.post('/api/studentFiles', async (req, res) => {
        try {
            // console.log("Request Body:", req.body);
            // console.log("Uploaded Files:", req.files);
            const { itemId, userId } = req.body;
            const file = req.files?.file;
    
            if (!file) throw new Error("File not provided");
    
            const newFile = new FileModel({
                itemId,
                userId,
                originalName: file.name,
                mimeType: file.mimetype,
                size: file.size,
                data: file.data,
            });
    
            await newFile.save();
            res.status(200).send(newFile);
        } catch (err) {
            console.error(err);
            res.status(500).send({ error: 'File upload failed!', details: err.message });
        }
    });
    
      
  

      app.get('/api/studentFiles/:fileId', async (req, res) => {
        try {
          const file = await FileModel.findById(req.params.fileId);
          if (!file) return res.status(404).send({ error: 'File not found!' });
      
          res.set('Content-Type', file.mimeType);
          res.set('Content-Disposition', `attachment; filename="${file.originalName}"`);
          res.send(file.data);
        } catch (err) {
          res.status(500).send({ error: 'Failed to fetch file!', details: err.message });
        }
      });
      
      
      app.get('/api/studentFiles', async (req, res) => {
        try {
          const files = await FileModel.find();
          res.json(files); 
        } catch (err) {
          res.status(500).send({ error: 'Failed to fetch files!', details: err.message });
        }
      });


      app.delete('/api/studentFiles/:fileId', async (req, res) => {
        try {
          const { fileId } = req.params;
      
          if (!mongoose.Types.ObjectId.isValid(fileId)) {
            return res.status(400).send({ error: "Invalid file ID" });
          }
      
          const file = await FileModel.findByIdAndDelete(fileId);
          if (!file) {
            return res.status(404).send({ error: "File not found!" });
          }
      
          res.status(200).send({ message: "File deleted successfully!" });
        } catch (err) {
          console.error("Error deleting file:", err);
          res.status(500).send({ error: "Failed to delete file!", details: err.message });
        }
      });
      
      
  


}