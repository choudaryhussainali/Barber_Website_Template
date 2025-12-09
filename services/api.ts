import { Booking } from '../types';

// Simulated latency
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const api = {
  // Simulate booking creation
  createBooking: async (bookingData: Omit<Booking, 'id' | 'status'>): Promise<{ success: boolean; id: string }> => {
    await delay(1500); // Simulate network request
    const newBooking = {
      ...bookingData,
      id: Math.random().toString(36).substr(2, 9),
      status: 'confirmed' as const
    };
    
    // In a real app, we would save to database here
    console.log('Booking created:', newBooking);
    return { success: true, id: newBooking.id };
  },

  // Simulate checking availability
  checkAvailability: async (date: string, barberId: string): Promise<string[]> => {
    await delay(800);
    // Return mock available slots
    return [
      '10:00 AM', '11:00 AM', '1:00 PM', '2:30 PM', '4:00 PM', '5:30 PM'
    ];
  }
};