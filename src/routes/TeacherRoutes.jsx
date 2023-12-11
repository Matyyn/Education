/* eslint-disable react/jsx-key */
import React from "react";
import { Route, Routes } from "react-router-dom";
import StudentManagement from "../pages/teacher/StudentManagement";
import TeacherLayout from "../layout/TeacherLayout";
import Dashboard from "../pages/teacher/Dashboard";
import Profile from "../pages/teacher/Profile";
import Details from "../pages/teacher/CoursesDetails";
import EditProfile from "../pages/teacher/EditProfile";
import MessagingScreen from "../pages/teacher/Messaging";
import Courses from "../pages/teacher/Courses";
import Transactions from "../pages/teacher/Transactions";

// Teacher
export default [
  <Route path="/teacher" element={<TeacherLayout />}>
    <Route path="dashboard" element={<Dashboard />} />
    <Route path="profile" element={<Profile />} />
    <Route path="edit" element={<EditProfile />} />
    <Route path="courses" element={<Courses />} />
    <Route path="details" element={<Details />} />
    <Route path="student-management" element={<StudentManagement />} />
    <Route path="transactions" element={<Transactions />} />
    <Route path="messaging" element={<MessagingScreen />} />
  </Route>,
];
