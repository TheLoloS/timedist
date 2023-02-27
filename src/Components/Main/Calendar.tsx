import { FC } from 'react';
import Filed from './Filed';


function daysInMonth(month: number, year: number) {
    return new Date(year, month, 0).getDate();
}
const date = new Date('2023-02-27');
const dayOfWeek = date.getDay();
const daysOfWeek = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];
console.log(daysOfWeek[dayOfWeek]); // zwróci 'Saturday'

const Calendar: FC = () => {
    console.log(daysInMonth(3, 2023))
    console.log(daysOfWeek[dayOfWeek]);
    return (
        <div className='w-11/12 grid grid-cols-7 gap-1 rounded text-sm max-w-5xl'>
            <Filed text='Poniedziałek' />
            <Filed text='Wtorek' />
            <Filed text='Środa' />
            <Filed text='Czwartek' />
            <Filed text='Piątek' />
            <Filed text='Sobota' />
            <Filed text='Niedziela' />
            {[...Array(42)].map((_item, i) => {
                return <Filed num={i - dayOfWeek} maxDate={daysInMonth(2, 2023)} color={i % 2 ? true : false} />
            })}
        </div>
    );
};

export default Calendar;