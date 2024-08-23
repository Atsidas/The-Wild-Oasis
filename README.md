# The Wild Oasis

## Description

The Wild Oasis is a sophisticated web application designed for hotel staff to manage bookings, cabins, and various administrative tasks. It provides a user-friendly dashboard that gives quick insights into hotel operations, including booking stats, sales, and occupancy rates. The application allows staff to handle bookings, manage cabins, create new user accounts, and adjust hotel settings. Built using React, React Query, and React Router, this project leverages modern web technologies to provide a seamless and responsive user experience. For styling, Styled Components are used, and the backend is powered by Supabase.

## Live Demo

Check out the live demo: [The Wild Oasis](https://wild-oasis-by-antonis.netlify.app)

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Supabase Setup](#supabase-setup)
- [Usage](#usage)
- [Technologies Used](#technologies-used)

## Features

- **Dashboard Overview**: A dashboard provides insights into:
  - Current bookings
  - Sales data
  - Check-ins and occupancy rates
  - Today's activity
  - Stay duration summary with circle charts
  - Sales trends with line charts
  - Date range filters (Last 7 days, Last 30 days, Last 90 days)

- **Booking Management**: 
  - View all bookings, filter by status (all, checked out, checked in, unconfirmed)
  - Sort bookings by date or amount
  - View booking details, check-in, check-out, or delete bookings

- **Cabin Management**:
  - View and filter cabins (all, no discount, with discount)
  - Sort cabins by name, price, or capacity
  - Add new cabins, edit, delete, or duplicate existing cabins

- **User Management**:
  - Create new user accounts for hotel staff

- **Hotel Settings**:
  - Update minimum and maximum nights per booking
  - Update maximum guests per booking and breakfast price
  - Toggle between dark and light theme

- **Authentication**:
  - Only registered users can sign in to access the application

## Installation

To get a local copy up and running, follow these simple steps:

1. Clone the repository:
   ```bash
   https://github.com/Atsidas/The-Wild-Oasis.git
2. Navigate to the project directory
   ```bash
   cd the-wild-oasis-app
3. Install dependencies
   ```bash
   npm install
   #or
   yarn install
4. Run the development server
   ```bash
   npm run dev
   #or
   yarn dev

Open http://localhost:5173 with your browser to see the result.

## Supabase Setup

### Tables

- **Bookings Table**: Stores booking information.
  - `id`: `bigint` (Primary Key)
  - `created_at`: `timestamp with time zone`
  - `startDate`: `timestamp without time zone`
  - `endDate`: `timestamp without time zone`
  - `numNights`: `smallint`
  - `numGuests`: `smallint`
  - `cabinPrice`: `real`
  - `extrasPrice`: `real`
  - `totalPrice`: `real`
  - `status`: `text`
  - `hasBreakfast`: `boolean`
  - `isPaid`: `boolean`
  - `observations`: `text`
  - `cabinId`: `bigint` (Foreign Key to Cabins)
  - `guestId`: `bigint` (Foreign Key to Guests)

- **Cabins Table**: Stores information about the available cabins.
  - `id`: `bigint` (Primary Key)
  - `created_at`: `timestamp with time zone`
  - `name`: `text`
  - `maxCapacity`: `smallint`
  - `regularPrice`: `smallint`
  - `discount`: `smallint`
  - `description`: `text`
  - `image`: `text` (URL or path to the image)

- **Guests Table**: Stores information about guests.
  - `id`: `bigint` (Primary Key)
  - `created_at`: `timestamp with time zone`
  - `fullName`: `text`
  - `email`: `text`
  - `nationalID`: `text`
  - `nationality`: `text`
  - `countryFlag`: `text` (URL or path to the flag image)

- **Settings Table**: Stores application settings related to bookings.
  - `id`: `bigint` (Primary Key)
  - `created_at`: `timestamp with time zone`
  - `minBookingLength`: `smallint`
  - `maxBookingLength`: `smallint`
  - `maxGuestsPerBooking`: `smallint`
  - `breakfastPrice`: `real`

### Storage Buckets

- **avatars**: For storing user profile pictures.
- **cabin-images**: For storing images of the cabins.

### Authentication

- Configure Supabase authentication to handle user sign-in.

### Environment Variables

Create a `.env.local` file in the root of your project with the following variables:
  
    VITE_SUPABASE_KEY=your-supabase-key
    VITE_SUPABASE_ANON_KEY=your-supabase-anon-key


## Usage

- **Dashboard**: 
  - View hotel stats, sales data, and occupancy rates.
  - Use filters to adjust the date range for insights (Last 7 days, Last 30 days, Last 90 days).

- **Manage Bookings**: 
  - Navigate to the Bookings page to manage reservations.
  - Use filters to view bookings by status (all, checked out, checked in, unconfirmed).
  - Sort bookings by date or amount.
  - View booking details, check-in, check-out, or delete bookings.

- **Manage Cabins**: 
  - Go to the Cabins page to view, edit, or add new cabins.
  - Use filters to view cabins (all, no discount, with discount).
  - Sort cabins by name, price, or capacity.
  - Add new cabins, edit existing ones, delete, or duplicate cabins.

- **User Management**: 
  - Accessible only to authorized users.
  - Create new user accounts for hotel staff.

- **Hotel Settings**: 
  - Update booking rules and pricing.
  - Adjust minimum and maximum nights per booking.
  - Update maximum guests per booking and breakfast price.
  - Choose between dark and light themes for the application interface.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool for development.
- **React Query**: For data fetching, caching, and synchronization.
- **React Router**: For client-side routing.
- **Styled Components**: For styling React components using CSS-in-JS.
- **React Hot Toast**: For notifications and alerts.
- **React Query Devtools**: For debugging and inspecting React Query.
- **Recharts**: For building charts and visualizations.
- **date-fns**: For date manipulation and formatting.
- **React Error Boundary**: For error handling in React components.
- **Supabase**: Provides backend services such as database and authentication.
