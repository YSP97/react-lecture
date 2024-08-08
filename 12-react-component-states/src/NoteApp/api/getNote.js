import notesData from '@/data/notes';
import usersData from '@/data/users';

export function getNoteList() {
  return notesData.map((note) => {
    // 만약 usersData랑 notesData(노트가 있는 유저 데이터)가 일치하면
    const user = usersData.find((user) => user.id === note.userId);
    if (user) {
      note.expand = { user };
    }
    return note;
  });
}

export function getNoteItem(noteId) {
  const notes = getNoteList();
  const note = notes.find((note) => note.id === noteId);
  return note ? note : null;
}
