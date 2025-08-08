# HelpDesk Node.js Application

## Project Overview

**HelpDesk** is a full-stack web application designed to streamline IT support and service request management within organizations. It enables users to report technical issues, track ticket statuses, and access a self-service knowledge base — all in one centralized platform.

Built using **Node.js**, **Express**, **MySQL**, and **EJS**, the system supports:
- Role-based access control
- Ticket lifecycle and queue management
- Internal messaging between staff and users
- Knowledge base article creation
- Administrative reporting

The project was developed by a team of 4 members. I contributed in multiple key roles throughout the software development lifecycle — including **System Analyst**, **System Designer**, **Full-stack Developer**, and **Quality Assurance**.

---

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [System Analysis & Design](#system-analysis--design)
- [Testing Strategy](#testing-strategy)
- [Technologies Used](#technologies-used)
- [License](#license)
- [Contributing](#contributing)

---

## Features

- Knowledge Base: Search, view, and create articles with solutions to common problems.
- Ticket Management: Submit, update, and track IT support tickets.
- User Authentication: Secure login and role-based access.
- Queue Management: Prioritize tickets and assign to staff.
- Internal Communication: Staff-user messaging and notifications.
- Reporting & Analytics: Performance metrics and usage statistics.
- Responsive Design: Accessible on multiple devices via EJS templates.

---

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/HelpDeskNodeJS.git
    cd HelpDeskNodeJS
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Configure the database in `config/config.json` with your credentials.

4. Run database migrations:
    ```bash
    npx sequelize-cli db:migrate
    ```

5. Start the server:
    ```bash
    npm start
    ```

6. Open your browser at `http://localhost:3000`

---

## Usage

- Browse and search the Knowledge Base.
- Create and manage support tickets.
- Track ticket status and communicate with support staff.
- Admins can manage users and view reports.

---

## Project Structure

- `app.js`: Main server initialization and middleware setup.
- `/config`: Database configuration files.
- `/controllers`: Handles routing logic for tickets, users, articles.
- `/models`: Sequelize models defining database tables.
- `/routes`: HTTP route definitions.
- `/views`: EJS templates for UI rendering.
- `/public`: Static assets like CSS and JavaScript.

---

## System Analysis & Design

This project was developed based on a solid **System Analysis & Design** foundation to ensure clarity, reliability, and long-term maintainability. The team followed standard **SDLC practices**, including comprehensive modeling to guide implementation and testing.

Detailed system design document is available here: [System Design Document](./docs/system-analysis/System_Design.pdf)

### 👨‍💻 My Roles
- **System Analyst**
- **System Designer**
- **Developer**
- **Quality Assurance (QA)**

### 🔍 Analysis Phase

- **Use Case Diagram**: Identified system actors (User, Staff, Admin) and their interactions.
- **Use Case Descriptions**: Defined step-by-step behavior for each use case.
- **Screen Prototypes**: Created wireframes to visualize key interfaces and user flows.
- **Object Identification**: Extracted real-world entities for modeling relationships.

### 🧠 Design Phase

- **Domain Class Diagram**: Modeled key entities like `Ticket`, `User`, `Queue`, `Article`.
- **Statechart Diagram (Ticket)**: Defined status transitions:  
  `NEW → ASSIGNED → IN_PROGRESS → RESOLVED → CLOSED`
- **Class Diagram with Attributes**: Specified class responsibilities, attributes, and associations.
- **Sequence Diagrams**: Modeled interactions for:
  - Ticket Creation
  - Ticket Assignment
  - Staff–User Communication
- **ER Diagram**: Translated the domain model into a relational schema using Sequelize ORM.
- **Activity Diagram**: Visualized the end-to-end ticket processing workflow.

### ✅ Example Use Case: Ticket Submission

- **Actor**: User  
- **Precondition**: User is authenticated  
- **Main Flow**:
  1. User submits ticket via web form
  2. System creates a ticket with status `NEW`
  3. Ticket is queued for processing
  4. User monitors status via dashboard  
- **Postcondition**: Ticket is successfully logged and ready for assignment

---

## Testing Strategy

To ensure a reliable and bug-free experience, we adopted a structured **Software Testing** approach — including test planning, execution, and defect reporting. As part of my QA responsibilities, I led the testing process for major system components.

### 🧪 Test Coverage

#### ✅ Functional Testing
- **Authentication**: Login, registration, and role-based access
- **Ticket System**:
  - Ticket submission, status tracking
  - Queue assignment (auto/manual)
- **Knowledge Base**: Search, add, edit, delete articles
- **User Management**: Role-based access, CRUD operations
- **Internal Communication**: Comments and notifications between staff and users

#### 🧷 Non-Functional Testing
- Responsive UI across devices
- Robust error handling and validation
- System stability under concurrent usage

### 📋 Test Artifacts

- **Test Case Documents**: Mapped directly from use cases
- **Manual Testing Reports**: Logged in spreadsheets and GitHub Issues
- **Bug Tracking**: Real-time collaboration on fixing and retesting
- **Regression Testing**: Run after every major update

### 🛠 Tools Used

| Tool             | Purpose                            |
|------------------|------------------------------------|
| **Postman**       | API testing                        |
| **JIRA / Trello** | Test case tracking and bug logging |
| **Excel / Sheets**| Manual test case documentation     |
| **Browser DevTools** | UI/Console/Network testing     |
| **Mochawesome** *(Optional)* | Future test automation readiness |

---

## Technologies Used

- **Node.js & Express** – Backend API
- **MySQL & Sequelize** – Relational database and ORM
- **EJS** – Server-side rendering engine
- **Bootstrap** – Front-end styling
- **Draw.io / Lucidchart** – UML diagrams
- **Figma / Balsamiq** – UI prototyping
- **Postman** – API testing
- **Git & GitHub** – Version control

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository  
2. Create a feature branch (`git checkout -b feature/YourFeature`)  
3. Commit your changes (`git commit -m 'Add feature'`)  
4. Push to the branch (`git push origin feature/YourFeature`)  
5. Open a pull request  

---

