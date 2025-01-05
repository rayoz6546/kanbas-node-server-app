import Database from "../Database/index.js";


export function createLesson(lesson) {
    const { lessons } = Database;
    const newLesson = { ...lesson, _id: (lessons.length + 1).toString() };
    Database.lessons = [...Database.lessons, newLesson];
    return newLesson;
  }
