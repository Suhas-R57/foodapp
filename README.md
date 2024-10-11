Food Express - Online Food Ordering with Nutrition Value Calculator
Project Overview
Food Express is a modern restaurant website designed to provide a seamless online food ordering experience while promoting healthy eating habits. The platform allows users to explore a diverse menu, place orders, and access detailed nutritional information for each item. Integrated with the CalorieNinja API, the platform calculates calorie and nutrition values in real-time, helping users make informed dietary choices.

Key Features
 User-Friendly Interface: A responsive front-end built with React.js, offering a smooth user experience across devices.
 Dynamic Menu: Users can browse through the menu, view food descriptions, prices, and customize their orders.
 Order Management: Add items to a cart, customize orders, and check out with ease.
 Calorie Tracker: Integrated with the CalorieNinja API to calculate nutritional information, including calorie content, fat, proteins, and more.
 Admin Dashboard: Restaurant owners can manage the menu with ease—adding, updating, or deleting food items.
 Health-Conscious Choices: Tailored for fitness enthusiasts, vegans, and health-conscious users with nutritional transparency.
Motivation
Food Express was developed to address the increasing demand for transparency in food ingredients and nutritional content in online food ordering. As health awareness rises, customers want more detailed nutritional information. This project combines the convenience of online food ordering with comprehensive nutrition tracking, supporting users in maintaining a balanced and healthy diet.

Problem Statement
While there are existing food ordering systems, most lack calorie tracking and nutritional transparency. This creates challenges for health-conscious customers who want to monitor their dietary intake. Furthermore, restaurant administrators often struggle with outdated or inefficient menu management. Food Express solves these issues by integrating calorie tracking, offering detailed nutrition information, and providing a streamlined menu management system for administrators.

Tech Stack
Frontend: React.js, Redux, HTML5, CSS3, Bootstrap
Backend: Node.js, Express.js
Database: MongoDB with Mongoose for schema modeling
API: CalorieNinja API for nutritional information
Authentication: JWT (JSON Web Token) for secure user sessions
Installation and Setup
Prerequisites
Ensure you have the following installed:

Node.js
MongoDB
npm or yarn
Steps to Setup
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/food-express.git
Navigate to the project folder:

bash
Copy code
cd food-express
Install Dependencies:

For Backend:

bash
Copy code
cd backend
npm install
For Frontend:

bash
Copy code
cd ../frontend
npm install
Environment Variables:

Create a .env file in the backend directory and add the following:

bash
Copy code
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CALORIE_NINJA_API_KEY=your_calorie_ninja_api_key
Run MongoDB:

Start MongoDB locally or use MongoDB Atlas (Cloud).

Start the Backend Server:

bash
Copy code
npm run server
Start the Frontend Server:

bash
Copy code
cd ../frontend
npm start
Open http://localhost:3000 in your browser to view the application.

Usage
User Authentication: Users can sign up, log in, and browse the menu.
Ordering: Add food items to your cart, customize your order, and proceed to checkout.
Nutritional Information: See detailed nutritional content for each item through the CalorieNinja API.
Admin Dashboard: Manage menu items (add, update, delete) via a dedicated admin interface.
API Usage (CalorieNinja)
The app uses the CalorieNinja API to retrieve nutritional data based on food item descriptions.

Example API Call:
javascript
Copy code
axios.get(`https://api.calorieninjas.com/v1/nutrition?query=apple`, {
  headers: {
    'X-Api-Key': process.env.CALORIE_NINJA_API_KEY,
  },
});
