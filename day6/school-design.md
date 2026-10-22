
# School Database Design

## 1. Students Table

The students table stores information about students. It contains student_id, name and email. The student_id is the primary key that uniquely identifies each student. The email is UNIQUE so that two students cannot use the same email address. The name and email are NOT NULL because they are required.

## 2. Courses Table

The courses table stores information about the courses offered by the school. It contains course_id, course_name and teacher. The course_id is the primary key. The course_name is UNIQUE and NOT NULL, and the teacher is also NOT NULL.

## 3. Enrolments Table

The enrolments table records which students are enrolled in which courses. It contains enrolment_id, student_id, course_id and grade. The enrolment_id is the primary key. The student_id and course_id are foreign keys linking to the students and courses tables. The grade records the student's result in a course. The UNIQUE constraint on student_id and course_id prevents the same student from enrolling in the same course more than once.

## 4. Relationships

### One-to-Many Relationships

The relationship between students and enrolments is one-to-many because one student can have several enrolments, but each enrolment belongs to one student.

The relationship between courses and enrolments is also one-to-many because one course can have several enrolments, but each enrolment refers to one course.

### Many-to-Many Relationship

Students and courses have a many-to-many relationship. One student can take several courses, and one course can have several students.

The enrolments table acts as a join table between students and courses. It is needed to connect the two tables and store additional information about the relationship, such as the student's grade.

## 5. Index

I would add an index on the course_id column in the enrolments table. This would help the database find enrolments for a particular course more efficiently, especially when the school has many students and courses.

Example:

```sql
CREATE INDEX idx_enrolments_course_id
ON enrolments(course_id);
```

## 6. SQL or NoSQL?

I would choose SQL for this school database because the information is structured and has clear relationships between students, courses and enrolments. SQL supports primary keys, foreign keys, UNIQUE constraints and joins, which help maintain accurate and consistent records. It also makes it easy to count students per course and retrieve grades. A relational database such as SQLite is suitable for this small school system.
