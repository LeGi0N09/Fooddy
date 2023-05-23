# Restaurant Order Taking System

This repository contains a Restaurant Order Taking System, developed using PHP, PHPMyAdmin, HTML, CSS, and JavaScript. The system aims to streamline the process of taking orders in a restaurant and provide an efficient way to manage customer orders.

## Features

- User-friendly interface for both customers and staff members
- Secure user authentication and authorization system
- Customer registration and login functionality
- Menu management to add, edit, and delete menu items
- Order management for customers and staff members
- Real-time order status updates
- Bill generation for completed orders
- Admin dashboard for managing system settings and user roles

## Technologies Used

- PHP: The server-side scripting language used for the backend development of the system.
- PHPMyAdmin: The web-based database management tool used to manage the system's database.
- HTML: The markup language used for structuring the web pages and content.
- CSS: The styling language used for enhancing the visual appearance of the web pages.
- JavaScript: The programming language used to add interactivity and dynamic functionality to the system.

## System Requirements

To run the Restaurant Order Taking System on your local machine, ensure that you have the following prerequisites installed:

- PHP (version 7.0 or higher)
- MySQL (or any other supported database management system)
- Web server (such as Apache or Nginx)

## Installation

1. Clone the repository using the following command:

   ```
   git clone https://github.com/LeGi0N09/Resturant-Order-Taking-System.git
   ```

2. Set up a local web server with PHP and configure it to serve the cloned repository directory as the document root.

3. Create a new MySQL database and import the provided SQL file (`restaurant_order_system.sql`) to set up the necessary tables and sample data.

4. Update the database connection settings in the `config.php` file located in the `includes` directory. Modify the following lines with your database credentials:

   ```php
   define('DB_HOST', 'localhost');
   define('DB_USERNAME', 'your_username');
   define('DB_PASSWORD', 'your_password');
   define('DB_NAME', 'your_database_name');
   ```

5. Access the system through your web browser using the configured web server's URL.

## Usage

- Visit the system URL in your web browser.
- Customers can register and log in to place orders and view order status.
- Staff members with appropriate roles can log in to manage orders, menus, and system settings through the admin dashboard.

## Contributing

Contributions to the Restaurant Order Taking System are welcome! If you find any bugs or have suggestions for improvement, please open an issue or submit a pull request.

## License

The Restaurant Order Taking System is released under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as per the terms of the license.

## Acknowledgements

The Restaurant Order Taking System was developed by [LeGi0N09](https://github.com/LeGi0N09). Special thanks to all the contributors and open source projects that made this system possible.

For any additional information or inquiries, please contact the project maintainer at [priyanshmodi9@gmail.com](mailto:priyanshmodi9@gmail.com).
