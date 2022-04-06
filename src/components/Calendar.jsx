import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { CalendarWrapper, CalendarMonth, CalendarDay } from "../styles/Styled"

const Calendar = () => {
  const [date, setDate] = useState({})

  useEffect(() => { 
    let currentDate = new Date();

    let day = currentDate.getDate();
    let month = currentDate.toLocaleString('default', { month: 'short' });

    setDate({day, month});
  }, [])

  return ( 
    <CalendarWrapper>
      <CalendarMonth>
        {
          date.month
        }
      </CalendarMonth>
      <CalendarDay> 
        {
          date.day
        }
      </CalendarDay>
    </CalendarWrapper>
  );
}
 
export default Calendar;