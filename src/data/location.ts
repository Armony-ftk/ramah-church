export type ChurchLocation = {
  churchName: string;
  address: string;
  googleMapsUrl: string;
};

const churchAddress =
  "and, Corner Walnut Road, Cypress Rd, Ruimsig AH, Roodepoort, 2169";

export const churchLocation: ChurchLocation = {
  churchName: "The RAMAH Church",
  address: churchAddress,
  googleMapsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    churchAddress,
  )}`,
};
