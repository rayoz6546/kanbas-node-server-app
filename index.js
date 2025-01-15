import express from 'express';
import cors from "cors";
import UserRoutes from "./Kanbas/Users/routes.js";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import EnrollmentRoutes from './Kanbas/Enrollments/routes.js';
import session from "express-session";
import "dotenv/config";
import AssignmentsRoutes from './Kanbas/Assignments/routes.js';
import PeopleRoutes from './Kanbas/People/routes.js';
import QuizzesRoutes from './Kanbas/Quizzes/routes.js';
import QuestionsRoutes from './Kanbas/Questions/routes.js';
import ResultsRoutes from './Kanbas/Results/routes.js';
import mongoose from "mongoose";
import LessonsRoutes from './Kanbas/Lessons/routes.js';
import FileRoutes from './Kanbas/Files/routes.js';
import AssignmentsResultsRoutes from "./Kanbas/AssignmentsResults/routes.js";
import AnnouncementsRoutes from "./Kanbas/Announcements/routes.js";
import fileUpload from 'express-fileupload';

import StudentFileRoutes from './Kanbas/StudentFiles/routes.js';


const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas-project"
mongoose.connect(CONNECTION_STRING);
const app = express()
app.use(cors({   credentials: true,
    origin: process.env.NETLIFY_URL || "http://localhost:3000",
})); 

const sessionOptions = {
secret: process.env.SESSION_SECRET || "kanbas",
resave: false,
saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
sessionOptions.proxy = true;
sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
    domain: process.env.NODE_SERVER_DOMAIN,
};
}
app.use(session(sessionOptions));

      
app.use(express.json());

import { findUserById, updateUser } from "./Kanbas/Users/dao.js";

function convertToSeconds(hms) {
    const [hours, minutes, seconds] = hms.split(":").map(Number);
    return hours * 3600 + minutes * 60 + seconds;
}

function convertToHMS(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;


    return [
        hours.toString().padStart(2, "0"),
        minutes.toString().padStart(2, "0"),
        seconds.toString().padStart(2, "0")
    ].join(":");
}


app.use(async (req, res, next) => {
    if (req.session.currentUser) {
        const currentUser = req.session.currentUser;
        const now = new Date();

        try {
            const user = await findUserById(currentUser._id);

            // Convert the current `hh:mm:ss` totalActivity to seconds
            const totalActivityTimeInSeconds = user.totalActivity
                ? convertToSeconds(user.totalActivity)
                : 0;

            // Add the new activity duration (e.g., 60 seconds)
            const updatedTotalTimeInSeconds = totalActivityTimeInSeconds + 60;

            // Convert back to `hh:mm:ss`
            const updatedTotalActivity = convertToHMS(updatedTotalTimeInSeconds);

            // Update the user in the database
            await updateUser(currentUser._id, {
                lastActivity: now,
                totalActivity: updatedTotalActivity,
            });

            req.session.currentUser.lastActivity = now;
        } catch (error) {
            console.error("Error updating user activity:", error);
        }
    }
    next();
});



app.use(fileUpload());


UserRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
EnrollmentRoutes(app);
AssignmentsRoutes(app);
PeopleRoutes(app);
QuizzesRoutes(app);
QuestionsRoutes(app);
ResultsRoutes(app);
LessonsRoutes(app);
FileRoutes(app);
AssignmentsResultsRoutes(app);
StudentFileRoutes(app);
AnnouncementsRoutes(app);

app.listen(process.env.PORT || 4000)