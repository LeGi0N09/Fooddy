# Fooddy - Streamlining Restaurant Order Management 🍽️🍕🥗🍔🍣

Fooddy is a simple and efficient web-based application designed to revolutionize restaurant order management. Developed using PHP, PHPMyAdmin, HTML, CSS, and JavaScript, this system offers a user-friendly interface for seamless handling of restaurant orders and customer information.

## 📋 Features That Empower You

- **User-Friendly Order Management**: Fooddy's intuitive interface makes taking and managing restaurant orders a breeze. Say goodbye to complexities and welcome simplicity.

- **Customer Information Management**: Effortlessly create and manage customer information, ensuring a personalized experience for each visitor.

- **Menu Item and Price Management**: Fooddy allows you to easily create and manage menu items and their corresponding prices, adapting to your restaurant's dynamic offerings.

- **Order Placement and Processing**: Seamlessly place and process orders, streamlining the entire order-to-payment process for your convenience.

- **Accurate Order Totals**: No more manual calculations! Fooddy accurately calculates and displays order totals, eliminating errors and saving time.

- **Order Receipt Generation**: Generate professional order receipts for a polished and customer-oriented experience.

- **Admin Panel for Optimal Control**: Fooddy includes a powerful admin panel for efficient system settings and user account management, giving you the ultimate control.

## 🚀 Easy Installation and Setup

Getting Fooddy up and running locally is straightforward. Follow these steps:

1. **Clone the repository**:

```bash
git clone https://github.com/LeGi0N09/Fooddy.git
```

2. **Import the database**:

   - Open PHPMyAdmin or any MySQL database management tool.
   - Create a new database named `restaurant_order_system`.
   - Import the SQL file located at `database/restaurant_order_system.sql`.

3. **Configure the database connection**:

   - Open the `includes/config.php` file.
   - Update the following lines with your MySQL database credentials:

     ```php
     define('DB_HOST', 'your_database_host');
     define('DB_USER', 'your_database_username');
     define('DB_PASS', 'your_database_password');
     ```

4. **Start a local PHP server**:

   - Utilize the built-in PHP development server by running this command in the project directory:

     ```bash
     php -S localhost:8000
     ```

5. **Access the application in your browser**:

   - Head to `http://localhost:8000` in your preferred web browser.

## 🎯 Intuitive Usage

Experience Fooddy's effortless usage:

1. **Homepage**:

   - View available menu items for ordering.
   - Click the "Add to Cart" button to add items to the cart.
   - Use the "Cart" link in the navigation bar to manage the cart's contents.

2. **Cart**:

   - The cart page displays the items added for ordering.
   - Update item quantities or remove items from the cart.
   - Click the "Place Order" button for the order confirmation page.

3. **Order Confirmation**:

   - Enter customer details and review the order summary on this page.
   - Fill in required fields, such as name, contact number, and address.
   - Click the "Confirm Order" button to finalize the order.

4. **Admin Panel**:

   - Access the admin panel at `http://localhost:8000/admin`.
   - Default admin credentials:
     - Username: admin
     - Password: password123
   - Manage menu items, view orders, and customize system settings through the admin panel.

## 🛠️ Technologies That Power Fooddy

Fooddy utilizes the following technologies to ensure an efficient and reliable experience:

- PHP
- PHPMyAdmin
- HTML
- CSS
- JavaScript

## 📝 License

Fooddy operates under the [MIT License](LICENSE).

## 🤝 Contributing

We welcome contributions, issues, and feature requests! Check out our [contribution guidelines](CONTRIBUTING.md) to get involved.

## 👤 Author

Created by [Priyansh Modi](https://github.com/LeGi0N09).

## 📄 Additional Documentation

For more details and information, refer to the [documentation](docs/README.md).

---

Thank you for choosing Fooddy, the Restaurant Order Management System! Experience a streamlined order process and optimize your restaurant's efficiency. Should you have any inquiries or require assistance, don't hesitate to reach out.

Happy ordering! 🍽️🍕🥗🍔🍣
