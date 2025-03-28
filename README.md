# Metropolitan Museum of Art Collection Browser

## Overview
This Next.js application allows users to browse and search through the Metropolitan Museum of Art's extensive collection using their public API. Users can perform simple or advanced searches, view artwork details, and navigate through paginated results.

## Features
- **Home Page**: Overview of the Metropolitan Museum of Art with images and information
- **Artwork Browsing**: View artwork in a responsive grid layout with pagination
- **Artwork Details**: Examine detailed information about specific artwork pieces
- **Search Functionality**:
  - Quick search through the navbar
  - Advanced search with filters for medium, location, and more
- **Responsive Design**: Works across desktop and mobile devices

## Technologies Used
- **Next.js**: React framework for server-side rendering and routing
- **React Bootstrap**: UI component library for responsive design
- **SWR**: React Hooks for data fetching with built-in caching
- **React Hook Form**: Library for form validation and submission

## API
This application uses the Metropolitan Museum of Art Collection API:
- Base URL: https://collectionapi.metmuseum.org/public/collection/v1/
- Documentation: https://metmuseum.github.io/