import { uploadModel } from "../Schema/UploadSchema.js";

export const searchSuggestion = (req, res) => {
  const body = req.query;
 
  const detail = uploadModel.find({placeName:body.placeName},(err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send({ status: 200, data });
    }
  });
};