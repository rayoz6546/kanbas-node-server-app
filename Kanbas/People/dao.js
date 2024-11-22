import Database from "../Database/index.js";

export function findCoursePeople(courseId) {
    const { users, enrollments } = Database;

    const enrollments_ = enrollments.filter((enr) => enr.course === courseId);

    const enrolledPeople = enrollments_.map((enr)=>{
        const user = users.find((u) => u._id === enr.user);
        return user
    })

    return enrolledPeople
  }

  export function addEnrollment(courseId, userId) {
    const { enrollments } = Database;
    
    // Check if the user is already enrolled
    const existingEnrollment = enrollments.find(
      (enrollment) => enrollment.course === courseId && enrollment.user === userId
    );
    
    if (existingEnrollment) {
      return null;  // User is already enrolled
    }
  
    const newEnrollment = {
      _id: `${enrollments.length + 1}`,
      user: userId,
      course: courseId,
    };
    
    enrollments.push(newEnrollment);
    return newEnrollment;
  }
  
  export function removeEnrollment(courseId, userId) {
    const { enrollments } = Database;
  
    const index = enrollments.findIndex(
      (enrollment) => enrollment.course === courseId && enrollment.user === userId
    );
  
    if (index === -1) {
      return false;  // Enrollment not found
    }
  
    enrollments.splice(index, 1);
    return true;
  }
  
  // To check if a user is already enrolled in a course
  export function isUserEnrolled(courseId, userId) {
    const { enrollments } = Database;
    return enrollments.some(
      (enrollment) => enrollment.course === courseId && enrollment.user === userId
    );
  }

  export async function updateUserSection(userId, newSection) {
    const { users } = Database;
  
    const user = users.find(user => user._id === userId);
  
    if (!user) {
      throw new Error("User not found");
    }
  
    user.section = newSection;
  
    return user;
  }
  


