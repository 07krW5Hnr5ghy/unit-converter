# Unit Converter Web App

A simple web application to convert between various units of measurement, including length, weight, and temperature. Built with **Node.js** and the **Pug template engine**.

---

## Features

- Convert between different units of measurement:
  - **Length**: meter, kilometer, inch, centimeter
  - **Weight**: kilogram, gram, pound
  - **Temperature**: Celsius, Fahrenheit, Kelvin
- Dynamic dropdowns to select units based on the chosen category.
- User-friendly interface with real-time updates for unit selections.
- Server-side processing of conversions.

---

## Technologies Used

- **Backend**: Node.js with Express.js
- **Templating Engine**: Pug
- **Frontend**: HTML, CSS, and JavaScript
- **Runtime**: JavaScript (ES6+)

---

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/07krW5Hnr5ghy/unit-converter
   cd unit-converter
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the server**

   ```bash
   npm start
   ```

4. **Access the app**

   Open your browser and go to http://localhost:3000

## Usage

    Homepage:
        Navigate to http://localhost:3000.
        Enter a value in the input box.
        Select a category (Length, Weight, Temperature).
        Choose units for "Convert from" and "Convert to."
        Click the Convert button to view the result.

    Dynamic Dropdowns:
        The "Convert from" and "Convert to" dropdowns update based on the selected category.

## Example Conversion

    Input

        Value: 100
        Category: Length
        Convert from: meter
        Convert to: kilometer

    Output

        Result: 0.1 kilometers

## File Structure

```
unit-converter/
├── public/
│ ├── styles.css # CSS for the app
├── views/
│ ├── index.pug # Main page template
│ ├── result.pug # Result page template
├── index.js # Main app logic
├── package.json # Project metadata
├── README.md # Project documentation
```

## project url

https://roadmap.sh/projects/unit-converter
