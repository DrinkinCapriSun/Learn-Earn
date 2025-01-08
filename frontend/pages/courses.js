import { useEffect, useState } from 'react';

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/learning-hub/courses`, {
          headers: {
            Authorization: `Bearer <your-admin-jwt-token>`, // Replace with your token
          },
        });
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div>
      <h1>Courses</h1>
      <ul>
        {courses.length > 0 ? (
          courses.map((course) => (
            <li key={course.id}>
              <h2>{course.title}</h2>
              <p>{course.description}</p>
              <a href={course.scormUrl}>View Course</a>
            </li>
          ))
        ) : (
          <p>No courses available</p>
        )}
      </ul>
    </div>
  );
};

export default CoursesPage;
