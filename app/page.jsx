"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import LoadingPage from "./loading";
import Courses from "./components/Courses";
import CourseSearch from "./components/CourseSearch";

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCourses = async () => {
      const response = await fetch("/api/courses");
      const data = await response.json();
      setCourses(data);
      setLoading(false);
    };

    getCourses();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      <h1>Welcome To learning Next js </h1>
      <CourseSearch getSearchResults={(results) => setCourses(results)} />
      <Courses courses={courses} />

      {/* <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/about/team">Team</Link>
        </li>
      </ul>
      HomePage */}
    </>
  );
};

export default HomePage;
