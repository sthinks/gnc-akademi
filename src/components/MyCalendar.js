import React, { useMemo } from 'react'

import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'moment/locale/tr';


// Setup the localizer by providing the moment (or globalize, or Luxon) Object
// to the correct localizer.
const localizer = momentLocalizer(moment) // or globalizeLocalizer

const MyCalendar = () => {
    const { defaultDate } = useMemo(() => ({
        defaultDate: new Date()
    }), [])

    const now = new Date();

    const events = [
        {
            id: 0,
            title: 'All Day Event very long title',
            allDay: true,
            start: new Date(2015, 3, 0),
            end: new Date(2015, 3, 1),
        },
        {
            id: 1,
            title: 'Long Event',
            start: new Date(2015, 3, 7),
            end: new Date(2015, 3, 10),
        },

        {
            id: 2,
            title: 'DTS STARTS',
            start: new Date(2016, 2, 13, 0, 0, 0),
            end: new Date(2016, 2, 20, 0, 0, 0),
        },

        {
            id: 3,
            title: 'DTS ENDS',
            start: new Date(2016, 10, 6, 0, 0, 0),
            end: new Date(2016, 10, 13, 0, 0, 0),
        },

        {
            id: 4,
            title: 'Some Event',
            start: new Date(2015, 3, 9, 0, 0, 0),
            end: new Date(2015, 3, 10, 0, 0, 0),
        },
        {
            id: 5,
            title: 'Conference',
            start: new Date(2015, 3, 11),
            end: new Date(2015, 3, 13),
            desc: 'Big conference for important people',
        },
        {
            id: 6,
            title: 'Meeting',
            start: new Date(2015, 3, 12, 10, 30, 0, 0),
            end: new Date(2015, 3, 12, 12, 30, 0, 0),
            desc: 'Pre-meeting meeting, to prepare for the meeting',
        },
        {
            id: 7,
            title: 'Lunch',
            start: new Date(2015, 3, 12, 12, 0, 0, 0),
            end: new Date(2015, 3, 12, 13, 0, 0, 0),
            desc: 'Power lunch',
        },
        {
            id: 8,
            title: 'Meeting',
            start: new Date(2015, 3, 12, 14, 0, 0, 0),
            end: new Date(2015, 3, 12, 15, 0, 0, 0),
        },
        {
            id: 9,
            title: 'Happy Hour',
            start: new Date(2015, 3, 12, 17, 0, 0, 0),
            end: new Date(2015, 3, 12, 17, 30, 0, 0),
            desc: 'Most important meal of the day',
        },
        {
            id: 10,
            title: 'Dinner',
            start: new Date(2015, 3, 12, 20, 0, 0, 0),
            end: new Date(2015, 3, 12, 21, 0, 0, 0),
        },
        {
            id: 11,
            title: 'Birthday Party',
            start: new Date(2015, 3, 13, 7, 0, 0),
            end: new Date(2015, 3, 13, 10, 30, 0),
        },
        {
            id: 12,
            title: 'Late Night Event',
            start: new Date(2015, 3, 17, 19, 30, 0),
            end: new Date(2015, 3, 18, 2, 0, 0),
        },
        {
            id: 12.5,
            title: 'Late Same Night Event',
            start: new Date(2015, 3, 17, 19, 30, 0),
            end: new Date(2015, 3, 17, 23, 30, 0),
        },
        {
            id: 13,
            title: 'Multi-day Event',
            start: new Date(2023, 3, 6, 19, 30, 0),
            end: new Date(2023, 3, 6, 2, 0, 0),
        },
        {
            id: 14,
            title: 'Today',
            start: new Date(new Date().setHours(new Date().getHours() - 3)),
            end: new Date(new Date().setHours(new Date().getHours() + 3)),
        },
    ]

    return (
        <div className="myCustomHeight">
            <Calendar
                localizer={localizer}
                culture="tr"
                startAccessor="start"
                endAccessor="end"
                defaultDate={defaultDate}
                events={events}
            />
        </div>
    )
}

export default MyCalendar