CREATE TABLE users(
    emial varchar(20),
    password varchar(20),
    role ENUM('admin','student')
);

CREATE TABLE Course(
    Course_id int PRIMARY KEY,
    course_name varchar(20),
    description varchar(50),
    fees int,
    start_date Date,
    end_date Date,
    video_expire_days int
);

CREATE TABLE student(
    reg_no int PRIMARY KEY AUTO_INCREMENT,
    name varchar(20),
    emial varchar(20),
    course_id int,
    mobile_no VARCHAR(20),
    profile_pic BLOB,
    FOREIGN KEY (course_id) REFERENCES course(course_id)
);

CREATE TABLE videos(
    video_id int PRIMARY KEY AUTO_INCREMENT,
    course_id int,
    title varchar(20),
    description varchar(50),
    youtube_url varchar(50),
    added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (course_id) REFERENCES course(course_id)
);

---Q.1
SELECT * FROM Course
WHERE start_date > CURDATE();

---Q.2
SELECT s.reg_no,s.name,s.emial,s.mobile_no,s.course_id,c.course_name FROM student s
JOIN course c ON s.course_id = c.course_id;

---Q.3
SELECT s.*,c.course_name,c.description,c.fees,c.start_date,c.end_date,c.video_expire_days
FROM student s
LEFT JOIN Course c ON s.course_id=c.course_id;

---Q.4
SELECT c.course_id,c.course_name,c.start_date,c.end_date,c.video_expire_days,v.video_id,v.title,v.added_at
FROM student s 
JOIN Course c ON s.course_id=c.course_id
JOIN videos v ON c.course_id=v.course_id
WHERE s.emial = 'bob@example.com' 
AND CURDATE() <= DATE_ADD(v.added_at , INTERVAL c.video_expire_days DAY);

