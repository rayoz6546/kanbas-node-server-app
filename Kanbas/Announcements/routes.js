import * as announcementsDao from "./dao.js";


export default function AnnouncementsRoutes(app) {

 app.delete("/api/announcements/:announcementId", async (req, res) => {
   const { announcementId } = req.params;
   const status = await announcementsDao.deleteAnnouncement(announcementId);
   res.send(status);
 });


 app.put("/api/announcements/:announcementId", async (req, res) => {
  const { announcementId } = req.params;
  const announcementUpdates = req.body;
  const status = await announcementsDao.updateAnnouncement(announcementId, announcementUpdates);
  res.send(status);
});


}
