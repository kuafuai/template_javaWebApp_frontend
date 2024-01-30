# Replace the following code with the actual data models

class Member:
    def __init__(self, name, courses=None, projects=None):
        self.name = name
        self.courses = courses or []
        self.projects = projects or []

    def add_course(self, course):
        self.courses.append(course)

    def add_project(self, project):
        self.projects.append(project)


class Teacher:
    def __init__(self, name, teaching_plan=None, feedback=None):
        self.name = name
        self.teaching_plan = teaching_plan or []
        self.feedback = feedback or []

    def add_teaching_plan(self, plan):
        self.teaching_plan.append(plan)

    def add_feedback(self, feedback):
        self.feedback.append(feedback)


class Studio:
    def __init__(self, website_introduction=None, course_schedule=None, mentor_team=None):
        self.website_introduction = website_introduction
        self.course_schedule = course_schedule or []
        self.mentor_team = mentor_team or []

    def add_course_schedule(self, schedule):
        self.course_schedule.append(schedule)

    def add_mentor(self, mentor):
        self.mentor_team.append(mentor)


class Project:
    def __init__(self, ongoing_projects=None, completed_projects=None, project_evaluation=None):
        self.ongoing_projects = ongoing_projects or []
        self.completed_projects = completed_projects or []
        self.project_evaluation = project_evaluation or []

    def add_ongoing_project(self, project):
        self.ongoing_projects.append(project)

    def add_completed_project(self, project):
        self.completed_projects.append(project)

    def add_project_evaluation(self, evaluation):
        self.project_evaluation.append(evaluation)


class Attendance:
    def __init__(self, attendance_records=None):
        self.attendance_records = attendance_records or []

    def add_attendance_record(self, record):
        self.attendance_records.append(record)


class Work:
    def __init__(self, member_works=None):
        self.member_works = member_works or []

    def add_member_work(self, work):
        self.member_works.append(work)


class Review:
    def __init__(self, technical_suggestions=None, creative_suggestions=None):
        self.technical_suggestions = technical_suggestions or []
        self.creative_suggestions = creative_suggestions or []

    def add_technical_suggestion(self, suggestion):
        self.technical_suggestions.append(suggestion)

    def add_creative_suggestion(self, suggestion):
        self.creative_suggestions.append(suggestion)
