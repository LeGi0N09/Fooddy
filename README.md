# Restaurant Order Taking System

A simple web-based application for managing restaurant orders. This system is built using PHP, PHPMyAdmin, HTML, CSS, and JavaScript.

## 📋 Features

- User-friendly interface for taking and managing restaurant orders.
- Create and manage customer information.
- Create and manage menu items and prices.
- Place and process orders.
- Calculate and display order totals.
- Generate order receipts.
- Admin panel for managing system settings and user accounts.

## 🚀 Installation

To run this application locally, follow these steps:

1. Clone the repository:

   ```shell
   git clone https://github.com/LeGi0N09/Resturant-Order-Taking-System.git
   ```

2. Import the database:

   - Open PHPMyAdmin or any other MySQL database management tool.
   - Create a new database named `restaurant_order_system`.
   - Import the SQL file located at `database/restaurant_order_system.sql`.

3. Configure the database connection:

   - Open the `includes/config.php` file.
   - Update the following lines with your MySQL database credentials:

     ```php
     define('DB_HOST', 'your_database_host');
     define('DB_USER', 'your_database_username');
     define('DB_PASS', 'your_database_password');
     ```

4. Start a local PHP server:

   - You can use the built-in PHP development server by running the following command in the project directory:

     ```shell
     php -S localhost:8000
     ```

5. Open the application in your browser:

   - Go to `http://localhost:8000` in your preferred web browser.

## 🎯 Usage

1. Homepage:

   - The homepage displays the menu items available for ordering.
   - Click on the "Add to Cart" button next to a menu item to add it to the cart.
   - Use the "Cart" link in the navigation bar to view and manage the items in the cart.

2. Cart:

   - The cart page displays the items added for ordering.
   - You can update the quantity of each item or remove items from the cart.
   - Click on the "Place Order" button to proceed to the order confirmation page.

3. Order Confirmation:

   - On the order confirmation page, you can enter the customer details and review the order summary.
   - Fill in the required fields, such as name, contact number, and address.
   - Click on the "Confirm Order" button to finalize the order.

4. Admin Panel:

   - The admin panel is accessible at `http://localhost:8000/admin`.
   - Use the default admin credentials:
     - Username: admin
     - Password: password123
   - In the admin panel, you can manage menu items, view orders, and customize system settings.

## 🛠️ Technologies Used

- PHP
- PHPMyAdmin
- HTML
- CSS
- JavaScript

## 📝 License

This project is licensed under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check out the [contribution guidelines](CONTRIBUTING.md).

## 👤 Author

Created by [Priyansh Modi](https://github.com/LeGi0N09).

## 📄 Additional Documentation

For more details and information, refer to the [documentation](docs/README.md).

---

Thank you for using the Restaurant Order Taking System! We hope it helps streamline your restaurant's order management process. If you have any questions or need assistance, please don't hesitate to reach out.

Happy ordering! 🍽️🍕🥗🍔🍣
