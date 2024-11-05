import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const ParticipantsList = () => {
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/participants')
      .then((response) => setParticipants(response.data))
      .catch((err) => Swal.fire('Error!', err.message, 'error'));
  }, []);

  const deleteParticipant = (id) => {
    axios.delete(`http://localhost:3001/delete/${id}`)
      .then(() => {
        setParticipants(participants.filter((p) => p.id !== id));
        Swal.fire('Deleted!', 'Participant has been deleted.', 'success');
      })
      .catch((err) => Swal.fire('Error!', err.message, 'error'));
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(12);
    doc.text('Participants List', 14, 22);

    const tableColumn = ['ID', 'First Name', 'Last Name', 'Email', 'Mobile'];
    const tableRows = [];

    participants.forEach((participant) => {
      const participantData = [
        participant.id,
        participant.firstName,
        participant.lastName,
        participant.email,
        participant.mobile,
      ];
      tableRows.push(participantData);
    });

    doc.autoTable(tableColumn, tableRows, { startY: 30 });
    doc.save('participants_list.pdf');
  };

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Participants List</h2>
      <button
        onClick={downloadPDF}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Download Data
      </button>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            {['ID', 'First Name', 'Last Name', 'Email', 'Mobile', 'Actions'].map((heading, idx) => (
              <th key={idx} className="py-2 px-4 border">{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {participants.map((p) => (
            <tr key={p.id} className="border-t">
              <td className="py-2 px-4 border">{p.id}</td>
              <td className="py-2 px-4 border">{p.firstName}</td>
              <td className="py-2 px-4 border">{p.lastName}</td>
              <td className="py-2 px-4 border">{p.email}</td>
              <td className="py-2 px-4 border">{p.mobile}</td>
              <td className="py-2 px-4 border">
                <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => deleteParticipant(p.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ParticipantsList;
