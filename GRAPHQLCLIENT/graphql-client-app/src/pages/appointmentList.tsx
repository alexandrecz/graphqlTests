import React from "react";
import { useAppointments } from '../hooks/useAppointments';


interface AppointmentsProps {
  title: string;
  customer: { name: string }
}


export default function AppointmentList() {

  const { error, data, loading} = useAppointments();
  if (loading) return <div>Spinner....</div>

  if (error) return <div>Something wrong</div>
  return <div>
    <ul>
      {data.appointments.map((appoi: AppointmentsProps) => {
        return <li>
          <h2>{appoi.title}</h2>
          <p>{appoi.customer.name}</p>
        </li>
      })}
    </ul>
  </div>
}
