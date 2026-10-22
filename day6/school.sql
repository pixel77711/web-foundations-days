
-- Day 6 Assignment: School Database
-- SQLite

-- 1. CREATE TABLE STATEMENTS

CREATE TABLE students (
    student_id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE
);

CREATE TABLE courses (
    course_id INTEGER PRIMARY KEY,
    course_name TEXT NOT NULL UNIQUE,
    teacher TEXT NOT NULL
);

CREATE TABLE enrolments (
    enrolment_id INTEGER PRIMARY KEY,
    student_id INTEGER NOT NULL,
    course_id INTEGER NOT NULL,
    grade TEXT NOT NULL,

    FOREIGN KEY (student_id)
        REFERENCES students(student_id),

    FOREIGN KEY (course_id)
        REFERENCES courses(course_id),

    UNIQUE (student_id, course_id)
);


-- 2. INSERT SAMPLE DATA

INSERT INTO students (student_id, name, email)
VALUES
    (1, 'Amina Otieno', 'amina@example.com'),
    (2, 'Brian Kamau', 'brian@example.com'),
    (3, 'Cynthia Wanjiku', 'cynthia@example.com');

INSERT INTO courses (course_id, course_name, teacher)
VALUES
    (1, 'Biology', 'Mr. Maina'),
    (2, 'Mathematics', 'Mrs. Njeri'),
    (3, 'Chemistry', 'Mr. Otieno');

INSERT INTO enrolments
    (enrolment_id, student_id, course_id, grade)
VALUES
    (1, 1, 1, 'A'),
    (2, 1, 2, 'B'),
    (3, 2, 1, 'B'),
    (4, 2, 3, 'A'),
    (5, 3, 2, 'A');


-- 3. QUERY 1: All courses taken by one student
-- Find the courses taken by Amina Otieno.

SELECT
    students.name,
    courses.course_name,
    enrolments.grade
FROM students
JOIN enrolments
    ON students.student_id = enrolments.student_id
JOIN courses
    ON enrolments.course_id = courses.course_id
WHERE students.name = 'Amina Otieno';


-- QUERY 2: All students enrolled in one course
-- Find all students taking Biology.

SELECT
    students.name,
    students.email,
    courses.course_name,
    enrolments.grade
FROM students
JOIN enrolments
    ON students.student_id = enrolments.student_id
JOIN courses
    ON enrolments.course_id = courses.course_id
WHERE courses.course_name = 'Biology';


-- QUERY 3: Number of students per course
-- LEFT JOIN includes courses with zero students.

SELECT
    courses.course_name,
    COUNT(enrolments.student_id) AS number_of_students
FROM courses
LEFT JOIN enrolments
    ON courses.course_id = enrolments.course_id
GROUP BY courses.course_id, courses.course_name;


-- QUERY 4: Students who have no enrolments

SELECT
    students.student_id,
    students.name,
    students.email
FROM students
LEFT JOIN enrolments
    ON students.student_id = enrolments.student_id
WHERE enrolments.enrolment_id IS NULL;


-- QUERY 5: Update one enrolment's grade
-- Change Amina's Mathematics grade from B to A.

UPDATE enrolments
SET grade = 'A'
WHERE student_id = 1
  AND course_id = 2;

-- Verify that the grade was updated.

SELECT
    students.name,
    courses.course_name,
    enrolments.grade
FROM enrolments
JOIN students
    ON enrolments.student_id = students.student_id
JOIN courses
    ON enrolments.course_id = courses.course_id
WHERE students.student_id = 1
  AND courses.course_id = 2;
