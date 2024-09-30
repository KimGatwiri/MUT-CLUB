import React from "react";
import "./Events.css"; // Import the CSS for styling

function Events() {
  const schedule = [
    {
      course: "Cyber Security",
      day: "Monday",
      time: "4pm - 7pm",
      location: "Computer Lab F04",
      instructor: "Webster Ifedha",
    },
    {
      course: "UI/UX",
      day: "Tuesday",
      time: "5pm - 8pm",
      location: "Computer Lab F04",
      instructor: "Manase Gunga",
    },
    {
      course: "Web Development",
      day: "Wednesday",
      time: "6pm - 9pm",
      location: "Computer Lab F04",
      instructor: "Carolyne Githenduka",
    },
    {
      course: "Mobile Apps Development",
      day: "Thursday",
      time: "4pm - 7pm",
      location: "Computer Lab F04",
      instructor: "Stanley Amunze",
    },
    {
      course: "Cloud Engineering",
      day: "Friday",
      time: "3pm - 6pm",
      location: "Computer Lab F04",
      instructor: "Paul Karanja",
    },
    {
      course: "Power Platform",
      day: "Saturday",
      time: "1pm - 4pm",
      location: "Computer Lab F04",
      instructor: "Evyonn Mbithe",
    },
  ];

  return (
    <div className="events-page-wrapper">
      <h1 className="events-title">Weekly Events Schedule</h1>
      <p className="events-description">
        The Events Page serves as a comprehensive guide to the weekly schedule
        of MUTC. From Monday through Saturday, members can expect a diverse
        range of learning opportunities and activities.
      </p>
      <div className="schedule-container">
        {schedule.map((event, index) => (
          <div className="event-card" key={index}>
            <h2 className="event-course">{event.course}</h2>
            <p>
              <strong>Day:</strong> {event.day}
            </p>
            <p>
              <strong>Time:</strong> {event.time}
            </p>
            <p>
              <strong>Location:</strong> {event.location}
            </p>
            <p>
              <strong>Instructor:</strong> {event.instructor}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
