## System Analysis & Design

This project was developed with a strong foundation in **System Analysis and Design** to ensure system reliability, scalability, and maintainability. The development followed standard SDLC practices and included detailed modeling to support system implementation and testing.

As part of a 4-member team, I was involved in **multiple roles** including:
- **System Analyst (SA)**
- **System Designer**
- **Developer**
- **Quality Assurance (QA)**

### 🔍 Analysis Phase

- **Use Case Diagram**  
  Identified all actors (e.g., User, Staff, Admin) and their interactions with system functionalities such as ticket submission, status tracking, knowledge base browsing, and user management.

- **Use Case Descriptions**  
  Provided detailed step-by-step descriptions of system behavior for each use case.

- **Screen Prototypes**  
  Created wireframes based on use cases to visualize the UI flow and ensure alignment with user needs.

- **Object Identification & Relationships**  
  Extracted real-world entities and their relationships to support domain modeling and data design.

### 🧠 Design Phase

- **Domain Class Diagram**  
  Illustrated the conceptual model of entities like `Ticket`, `User`, `Article`, and `Queue`, including their relationships.

- **Statechart Diagram (Ticket)**  
  Mapped out the lifecycle of a ticket:
  - NEW → ASSIGNED → IN_PROGRESS → RESOLVED → CLOSED

- **Class Diagram with Attributes**  
  Enhanced the domain model by adding attributes and defining class responsibilities and associations.

- **Sequence Diagrams**  
  Described the interaction between **Boundary**, **Control**, and **Entity** objects for main use cases:
  - Ticket Creation
  - Ticket Assignment
  - Communication with User

- **ER Diagram**  
  Transformed the class model into a relational schema used in the actual database (Sequelize ORM).

- **Activity Diagram**  
  Modeled the end-to-end ticket workflow — from submission to closure.

---

### ✅ Example Use Case: Ticket Submission

**Actor**: User  
**Precondition**: User is logged in  

**Main Flow**:
1. User submits ticket through web form
2. System creates a Ticket with status = `NEW`
3. Ticket is added to a processing queue
4. User can monitor status via dashboard

**Postcondition**: Ticket is successfully logged and ready for assignment

---

### 🛠 Tools Used

- **Draw.io / Lucidchart** – Diagramming (UML)
- **Figma / Balsamiq** – Screen prototyping
- **Sequelize ORM** – Mapping models to relational DB
- **Markdown & Docs** – Use case documentation

---

### 👥 Team Collaboration

| Role | Responsibility |
|------|----------------|
| **System Analyst / Designer** | Led requirements analysis and UML modeling |
| **Developer** | Built backend features like ticketing, queue, and user system |
| **QA** | Designed and executed test cases to ensure quality |

> All diagrams and documentation are available in the `/docs/system-analysis/` folder.
