export type Service = {
  title: string;
  day: string;
  time: string;
  description: string;
  label?: string;
};

export const services: Service[] = [
  {
    title: "Sunday Celebration Service",
    day: "Sunday",
    time: "9:00 AM - 11:00 AM",
    description: "Intense praise and worship. Edifying teachings.",
    label: "Main Gathering",
  },
  {
    title: "Word & Power Service",
    day: "Friday",
    time: "5:30 PM - 7:30 PM",
    description: "Intense prayer moment. Deep teachings.",
    label: "Prayer & Teaching",
  },
];
