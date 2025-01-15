import model from "./model.js";

export function findAnnouncementsForCourse(courseId) {
    return model.find({ courseId: courseId });
  }
  
  export function createAnnouncement(announcement) {
    delete announcement._id
    return model.create(announcement);
  }
  
  export function deleteAnnouncement(announcementId) {
    return model.deleteOne({ _id: announcementId });
   }
   
   export function updateAnnouncement(announcementId, announcementUpdates) {
    return model.updateOne({ _id: announcementId }, announcementUpdates);
  }