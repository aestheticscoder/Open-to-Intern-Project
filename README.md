# Internship Management System

This repository contains the code for an Internship Management System, which allows users to create and manage colleges and interns for internship programs. The system provides various API endpoints to perform CRUD operations on colleges and interns, as well as retrieve college details and associated interns.

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js
- MongoDB
- Postman (for testing the APIs)

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:


   git clone https://github.com/your-username/internship-management-system.git


2. Install the dependencies:


   cd internship-management-system
   npm install


3. Set up the environment variables:

   Create a `.env` file in the root directory and provide the following configuration:


   PORT=3000
   MONGODB_URI=<your-mongodb-connection-string>
 

4. Start the server:


   npm start


   The server should now be running on `http://localhost:3000`.

## API Endpoints

The following API endpoints are available in the system:

### Create a College

- Endpoint: `POST /functionup/colleges`
- Description: Create a college document with the provided information.
- Request Body:


  {
    "name": "iith",
    "fullName": "Indian Institute of Technology, Hyderabad",
    "logoLink": "https://functionup.s3.ap-south-1.amazonaws.com/colleges/iith.png"
  }


- Response:
  - Status: `201 Created` on success
  - Body:

 
    {
      "status": true,
      "data": {
        "name": "iith",
        "fullName": "Indian Institute of Technology, Hyderabad",
        "logoLink": "https://functionup.s3.ap-south-1.amazonaws.com/colleges/iith.png",
        "isDeleted": false
      }
    }
  

### Create an Intern

- Endpoint: `POST /functionup/interns`
- Description: Create an intern document with the provided information.
- Request Body:


  {
    "name": "Jane Doe",
    "email": "jane.doe@iith.in",
    "mobile": "90000900000",
    "collegeName": "iith"
  }


- Response:
  - Status: `201 Created` on success
  - Body:

 
    {
      "status": true,
      "data": {
        "isDeleted": false,
        "name": "Jane Doe",
        "email": "jane.doe@iith.in",
        "mobile": "90000900000",
        "collegeId": "5f7f4d46f951d3d799a1e81b"
      }
    }
  

### Get College Details

- Endpoint: `GET /functionup/collegeDetails?collegeName=:collegeName`
- Description: Get the details of a college and the list of interns who have applied for an internship at that college.
- Query Parameters:
  - `collegeName`: Abbreviated name of the college (e.g., `iith`)
- Response:
  - Status: `200 OK` on success
  - Body:

    
    {
      "status": true,
      "data": {
        "name": "iith",
        "fullName": "Indian Institute of Technology, Hyderabad",
        "logoLink": "https://functionup.s3

.ap-south-1.amazonaws.com/colleges/iith.png",
        "interns": [
          {
            "_id": "5f7f4d46f951d3d799a1e81b",
            "name": "Jane Doe",
            "email": "jane.doe@iith.in",
            "mobile": "90000900000"
          },
          {
            "_id": "5f7f4d46f951d3d799a1e81c",
            "name": "John Smith",
            "email": "john.smith@iith.in",
            "mobile": "90000900001"
          }
        ]
      }
    }
   

## Testing

To test the APIs, you can use Postman. Follow these steps:

1. Import the provided Postman collection (`Project 2 Internship.postman_collection.json`) into your Postman app.
2. Run the collection and verify the results of each request.

## License

This project is licensed under the MIT License. You can find the license information in the [LICENSE](LICENSE) file.

## Acknowledgements

The project was developed as part of an internship program and is based on the requirements provided. Special thanks to the mentors for their guidance and support.

If you have any questions or need further assistance, please feel free to contact me at believe0256@gmail.com.
