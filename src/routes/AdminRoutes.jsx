/* eslint-disable react/jsx-key */
import React from "react";
import { Route, Outlet } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";
import Dashboard from "../pages/admin/Dashboard";
import Teachers from "../pages/admin/Teachers";
import Student from "../pages/admin/Students";
import Courses from "../pages/admin/Courses";
import Messaging from "../pages/admin/Messaging";
import Privilege from "../pages/admin/Privilege";
import Transactions from "../pages/admin/Transactions";
import AdminAccess from "../pages/admin/AdminAccess";
import TeacherDetail from "../pages/admin/TeacherDetail";
import SystemManagement from "../pages/admin/settings/SystemManagement";
import DataManagement from "../pages/admin/settings/DataManagement";
import Coupon from "../pages/admin/settings/Coupon";
import Profile from "../pages/admin/Profile";
import AdminRole from "../pages/admin/AdminRole";
import EditProfile from "../pages/admin/EditProfile";
import StudentDetail from "../pages/admin/StudentDetails";
import CoursesDetails from "../pages/admin/CourseDetails";

export default [
  <Route path="/admin" element={<AdminLayout />}>
    <Route path="dashboard" element={<Dashboard />} />
    <Route path="teachers" element={<Teachers />}></Route>
    <Route path="teacher-details" element={<TeacherDetail />} />
    <Route path="students" element={<Student />}></Route>
    <Route path="student-details" element={<StudentDetail />} />
    <Route path="courses" element={<Courses />}></Route>
    <Route path="course-details" element={<CoursesDetails />} />
    <Route path="privilege" element={<Privilege />} />
    <Route path="access" element={<AdminAccess />} />
    <Route path="create-roles" element={<AdminRole />} />
    <Route path="settings" element={<SystemManagement />} />
    <Route path="settings/data-manangement" element={<DataManagement />} />
    <Route path="settings/coupons" element={<Coupon />} />
    <Route path="transactions" element={<Transactions />} />
    <Route path="messaging" element={<Messaging />} />
    <Route path="profile" element={<Profile />}></Route>
    <Route path="edit" element={<EditProfile />} />
    <Route path="*" element={<Outlet />} />
  </Route>,
];
