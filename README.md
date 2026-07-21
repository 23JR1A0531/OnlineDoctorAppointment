# CareConnect - Online Doctor Appointment System

CareConnect is a responsive web application I built to help patients easily search for doctors, view consultation fees upfront, and book appointments online.

## Problem Statement
I noticed that patients often face difficulty finding local specialists, seeing transparent appointment fees before booking, and securing available time slots without having to call or physically visit a hospital.

## Main Purpose
I created CareConnect to provide a unified web platform where patients can search verified Indian doctors across various specialties, check consultation fees in Rupees (₹), pick available time slots, and manage their bookings through dedicated patient and doctor dashboards.

## Technologies Used
* HTML5 - Page structure and semantic layout
* CSS3 - Custom styling, flexbox, and 3-column grid layout
* JavaScript - Dynamic card rendering, specialty filtering, and slot booking logic
* FontAwesome - Navigation and UI icons
* AWS S3 - Static website hosting and deployment
* Git & GitHub - Version control and code repository

## Project Structure
careconnect/
  index.html
  doctors.html
  patient-dashboard.html
  doctor-dashboard.html
  css/
    styles.css
  js/
    app.js

## How I Deployed This Project to AWS S3

1. Created S3 Bucket
I created a new bucket in the AWS S3 console, gave it a unique name, and unchecked "Block all public access" to allow web traffic.

2. Enabled Static Website Hosting
Inside the bucket properties, I enabled "Static website hosting" and set the index document to "index.html".

3. Configured Bucket Policy
I added a public read policy under the bucket permissions so visitors can view the site (replace <your-bucket-name> with your actual bucket name):

{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::<your-bucket-name>/*"
    }
  ]
}

4. Uploaded Files
Finally, I uploaded index.html, doctors.html, patient-dashboard.html, doctor-dashboard.html, along with the css and js folders directly into the bucket root.

## Live Demo
* AWS S3 Endpoint: https://onlinedoctorappointmet.s3.ap-south-1.amazonaws.com/DoctorAppointment/index.html
* GitHub Repository: https://github.com/your-username/careconnect-health
