import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    title: String,
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
    availability: String,
    available_from: String,
    available_until: String,
    due_date: String,
    points: Number,
    number_questions: String,
    score: String,
    quiz_type: String,
    assignment_group: String,
    shuffle_answers: Boolean,
    time_limit: String,
    multiple_attempts: Boolean,
    number_attempts: String,
    show_correct_answers: Boolean,
    show_correct_answers_when: String,
    access_code: String,
    one_question_at_a_time: Boolean,
    webcam_required: Boolean,
    lock_questions_after_answering: Boolean,
    description: String,
    published: Boolean,
    questions: Object,
    percentage: Number,
  },
  { collection: "quizzes" }
);
export default schema;