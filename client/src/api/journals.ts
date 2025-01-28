import api from './api';

// Description: Get all journal entries
// Endpoint: GET /api/journals
// Request: {}
// Response: { journals: Array<{ _id: string, title: string, content: string, mood: string, images: string[], createdAt: string }> }
export const getJournals = () => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        journals: [
          {
            _id: '1',
            title: 'A Beautiful Day',
            content: 'Today was amazing. I went hiking and saw the most beautiful sunset.',
            mood: 'happy',
            images: ['https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07'],
            createdAt: '2024-03-10T12:00:00Z',
          },
          {
            _id: '2',
            title: 'Reflecting on Goals',
            content: 'Spent some time thinking about my yearly goals and progress.',
            mood: 'thoughtful',
            images: ['https://images.unsplash.com/photo-1484820540004-14229fe36ca4'],
            createdAt: '2024-03-09T15:30:00Z',
          },
        ],
      });
    }, 500);
  });
};

// Description: Create a new journal entry
// Endpoint: POST /api/journals
// Request: { title: string, content: string, mood: string, images: string[] }
// Response: { journal: { _id: string, title: string, content: string, mood: string, images: string[], createdAt: string } }
export const createJournal = (data: { title: string; content: string; mood: string; images: string[] }) => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        journal: {
          _id: Math.random().toString(),
          ...data,
          createdAt: new Date().toISOString(),
        },
      });
    }, 500);
  });
};

// Description: Delete a journal entry
// Endpoint: DELETE /api/journals/:id
// Request: {}
// Response: { success: boolean }
export const deleteJournal = (id: string) => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 500);
  });
};