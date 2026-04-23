import React, { useState, useEffect } from 'react';
import './DigitalClock.css';

const DigitalClock = () => {
  const [times, setTimes] = useState({});

  const timeZones = [
    { name: 'New York', zone: 'America/New_York', offset: 'UTC-5' },
    { name: 'London', zone: 'Europe/London', offset: 'UTC+0' },
    { name: 'Tokyo', zone: 'Asia/Tokyo', offset: 'UTC+9' },
    { name: 'Sydney', zone: 'Australia/Sydney', offset: 'UTC+10' },
    { name: 'Dubai', zone: 'Asia/Dubai', offset: 'UTC+4' },
    { name: 'Singapore', zone: 'Asia/Singapore', offset: 'UTC+8' },
  ];

  useEffect(() => {
    const updateTime = () => {
      const newTimes = {};
      timeZones.forEach(({ name, zone }) => {
        const formatter = new Intl.DateTimeFormat('en-US', {
          timeZone: zone,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        });

        const parts = formatter.formatToParts(new Date());
        const hour = parts.find(p => p.type === 'hour').value;
        const minute = parts.find(p => p.type === 'minute').value;
        const second = parts.find(p => p.type === 'second').value;

        newTimes[name] = `${hour}:${minute}:${second}`;
      });

      setTimes(newTimes);
    };

    // Update time immediately
    updateTime();

    // Update time every second
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="digital-clock-container">
      <h2 className="clock-title">🌍 Global Time Zones</h2>
      <div className="clocks-grid">
        {timeZones.map(({ name, offset }) => (
          <div key={name} className="clock-card">
            <div className="clock-animation"></div>
            <div className="timezone-name">{name}</div>
            <div className="timezone-offset">{offset}</div>
            <div className="digital-display">
              {times[name] || '--:--:--'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DigitalClock;
