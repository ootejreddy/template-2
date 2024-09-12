'use client';

import { useState, useEffect } from 'react';
import { getDocuments } from '../lib/firebase/firebaseUtils';
import { format } from 'date-fns';

interface Note {
  id: string;
  text: string;
  timestamp: string;
}

export default function NotesList() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const fetchedNotes = await getDocuments('notes') as Note[];
        setNotes(fetchedNotes.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()));
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Your Notes</h2>
      {notes.length === 0 ? (
        <p className="text-gray-500">No notes yet. Start recording to create your first note!</p>
      ) : (
        <ul className="space-y-4">
          {notes.map((note) => (
            <li key={note.id} className="bg-white p-4 rounded-lg shadow">
              <p className="text-gray-800">{note.text}</p>
              <p className="text-sm text-gray-500 mt-2">
                {format(new Date(note.timestamp), 'MMMM d, yyyy h:mm a')}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}